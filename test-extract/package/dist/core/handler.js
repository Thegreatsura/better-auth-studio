import { existsSync, readdirSync, readFileSync, realpathSync, statSync } from 'fs';
import { dirname, extname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { serveIndexHtml as getIndexHtml } from '../utils/html-injector.js';
import { decryptSession, isSessionValid, STUDIO_COOKIE_NAME } from '../utils/session.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Resolve real path in case of symlinks (important for pnpm on Vercel)
const __realdir = (() => {
    try {
        return realpathSync(__dirname);
    }
    catch {
        return __dirname;
    }
})();
/**
 * Main handler - processes all studio requests (framework-agnostic)
 *
 */
export async function handleStudioRequest(request, config) {
    try {
        const isSelfHosted = !!config.basePath;
        const basePath = config.basePath || '';
        let path = request.url;
        if (isSelfHosted && basePath) {
            path = path.replace(basePath, '') || '/';
        }
        if (path === '' || path === '/') {
            path = '/';
        }
        if (path.startsWith('/assets/') ||
            path === '/vite.svg' ||
            path === '/favicon.svg' ||
            path === '/logo.png') {
            return handleStaticFile(path, config);
        }
        if (path === '/') {
            return handleStaticFile(path, config);
        }
        const spaRoutes = ['/login', '/access-denied'];
        if (spaRoutes.some((r) => path === r || path.startsWith(r + '?'))) {
            return handleStaticFile(path, config);
        }
        if (path.startsWith('/api/')) {
            if (isSelfHosted && isProtectedApiPath(path)) {
                const sessionResult = verifyStudioSession(request, config);
                if (!sessionResult.valid) {
                    return jsonResponse(401, { error: 'Unauthorized', message: sessionResult.error });
                }
            }
            return await handleApiRoute(request, path, config);
        }
        // Self-hosted mode: determine if this is an API route or SPA navigation
        if (isSelfHosted) {
            // Check Accept header to distinguish API calls from browser navigation
            const acceptHeader = request.headers['accept'] || request.headers['Accept'] || '';
            const wantsJson = acceptHeader.includes('application/json') ||
                acceptHeader === '*/*' ||
                !acceptHeader.includes('text/html');
            // If client wants JSON or this looks like an API call, route to API
            // /users → /api/users, /config → /api/config
            if (wantsJson) {
                const apiPath = '/api' + path;
                if (isProtectedApiPath(apiPath)) {
                    const sessionResult = verifyStudioSession(request, config);
                    if (!sessionResult.valid) {
                        return jsonResponse(401, { error: 'Unauthorized', message: sessionResult.error });
                    }
                }
                return await handleApiRoute(request, apiPath, config);
            }
            // Otherwise, it's a browser navigation - serve SPA
            return handleStaticFile(path, config);
        }
        // Fallback: serve index.html for SPA routing
        return handleStaticFile(path, config);
    }
    catch (error) {
        console.error('Studio handler error:', error);
        return jsonResponse(500, {
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}
function getSessionSecret(config) {
    return (config.access?.secret ||
        config.auth?.options?.secret ||
        process.env.BETTER_AUTH_SECRET ||
        'studio-default-secret');
}
function parseCookies(cookieHeader) {
    if (!cookieHeader)
        return {};
    const cookies = {};
    cookieHeader.split(';').forEach((part) => {
        const [name, ...rest] = part.trim().split('=');
        if (name) {
            cookies[name] = rest.join('=');
        }
    });
    return cookies;
}
function verifyStudioSession(request, config) {
    const cookieHeader = request.headers['cookie'] || request.headers['Cookie'];
    const cookies = parseCookies(cookieHeader);
    const sessionCookie = cookies[STUDIO_COOKIE_NAME];
    if (!sessionCookie) {
        return { valid: false, error: 'No session cookie' };
    }
    const session = decryptSession(sessionCookie, getSessionSecret(config));
    if (!isSessionValid(session)) {
        return { valid: false, error: 'Session expired' };
    }
    return { valid: true, session };
}
function isProtectedApiPath(path) {
    const publicPaths = [
        '/api/auth/sign-in',
        '/api/auth/session',
        '/api/auth/logout',
        '/api/auth/verify',
        '/api/auth/oauth',
        '/api/health',
    ];
    return !publicPaths.some((p) => path.startsWith(p));
}
async function handleApiRoute(request, path, config) {
    const { routeApiRequest } = await import('../routes/api-router.js');
    try {
        const result = await routeApiRequest({
            path: path,
            method: request.method,
            headers: request.headers,
            body: request.body,
            auth: config.auth,
            basePath: config.basePath || '/api/studio',
            accessConfig: config.access,
        });
        const headers = { 'Content-Type': 'application/json' };
        if (result.cookies && result.cookies.length > 0) {
            const cookieStrings = result.cookies.map((c) => {
                let cookie = `${c.name}=${c.value}`;
                if (c.options.httpOnly)
                    cookie += '; HttpOnly';
                if (c.options.secure)
                    cookie += '; Secure';
                if (c.options.sameSite)
                    cookie += `; SameSite=${c.options.sameSite}`;
                if (c.options.maxAge !== undefined)
                    cookie += `; Max-Age=${Math.floor(c.options.maxAge / 1000)}`;
                if (c.options.path)
                    cookie += `; Path=${c.options.path}`;
                return cookie;
            });
            headers['Set-Cookie'] = cookieStrings.join(', ');
        }
        return {
            status: result.status,
            headers,
            body: JSON.stringify(result.data),
        };
    }
    catch (error) {
        console.error('API route error:', error);
        return jsonResponse(500, { error: 'Internal server error' });
    }
}
function findPublicDir() {
    // When built and deployed (e.g., on Vercel), the structure is:
    // node_modules/better-auth-studio/dist/core/handler.js
    // node_modules/better-auth-studio/dist/public/
    // So from __dirname (dist/core), we need to go up one level (../public)
    // Use both __dirname and __realdir to handle symlinks (pnpm on Vercel)
    const baseDirs = [__dirname, __realdir];
    const candidates = [];
    for (const baseDir of baseDirs) {
        candidates.push(resolve(baseDir, '../public'), // dist/core -> dist/public (production)
        resolve(baseDir, '../../public'), // dist/core -> root/public (development)
        resolve(baseDir, '../../../public'), // nested node_modules
        resolve(baseDir, '../../dist/public'), // alternative build structure
        resolve(baseDir, '../../../dist/public') // deeply nested
        );
    }
    // For pnpm on Vercel, also check the actual package location in the store
    // Path is like: /vercel/path0/node_modules/.pnpm/better-auth-studio@version_hash/node_modules/better-auth-studio/
    const pnpmMatch = __dirname.match(/(.+\/.pnpm\/[^/]+\/node_modules\/better-auth-studio)\//);
    if (pnpmMatch) {
        const pnpmPackageRoot = pnpmMatch[1];
        console.log(`[Studio Debug] Detected pnpm package root: ${pnpmPackageRoot}`);
        // Check both with and without dist, as pnpm might flatten differently
        candidates.unshift(join(pnpmPackageRoot, 'dist', 'public'), join(pnpmPackageRoot, 'public'), join(pnpmPackageRoot, '..', 'dist', 'public'));
    }
    // Also try to find package.json and work from there
    try {
        let searchDir = __dirname;
        for (let i = 0; i < 5; i++) {
            const pkgPath = join(searchDir, 'package.json');
            if (existsSync(pkgPath)) {
                const pkgContent = readFileSync(pkgPath, 'utf-8');
                if (pkgContent.includes('"name": "better-auth-studio"')) {
                    console.log(`[Studio Debug] Found package.json at: ${searchDir}`);
                    candidates.unshift(join(searchDir, 'dist', 'public'), join(searchDir, 'public'));
                    break;
                }
            }
            searchDir = resolve(searchDir, '..');
        }
    }
    catch (err) {
        console.log(`[Studio Debug] Error searching for package.json:`, err);
    }
    console.log(`[Studio Debug] Searching for public directory, ${candidates.length} candidates`);
    // First, try to find a directory with index.html
    for (const candidate of candidates) {
        try {
            const dirExists = existsSync(candidate);
            console.log(`[Studio Debug] Checking: ${candidate} - exists: ${dirExists}`);
            if (dirExists) {
                // Check if it's actually a directory
                try {
                    const stats = statSync(candidate);
                    console.log(`[Studio Debug] ${candidate} - isDirectory: ${stats.isDirectory()}`);
                    if (!stats.isDirectory()) {
                        continue;
                    }
                }
                catch (statError) {
                    console.error(`[Studio Debug] Error stat-ing ${candidate}:`, statError);
                    continue;
                }
                const indexPath = join(candidate, 'index.html');
                const indexExists = existsSync(indexPath);
                console.log(`[Studio Debug] Index.html at ${indexPath} - exists: ${indexExists}`);
                if (indexExists) {
                    console.log(`[Studio] ✓ Found public directory at: ${candidate}`);
                    return candidate;
                }
            }
        }
        catch (error) {
            console.error(`[Studio Debug] Error checking ${candidate}:`, error);
            continue;
        }
    }
    // Fallback: return the first existing directory
    for (const candidate of candidates) {
        try {
            if (existsSync(candidate) && statSync(candidate).isDirectory()) {
                console.warn(`[Studio] Found public directory without index.html at: ${candidate}`);
                return candidate;
            }
        }
        catch (error) {
            continue;
        }
    }
    console.error('[Studio] Could not find public directory');
    console.error('[Studio] __dirname:', __dirname);
    console.error('[Studio] __realdir:', __realdir);
    console.error('[Studio] Tried candidates:', candidates);
    // Try to list what's actually in the dist directory
    try {
        const distDir = resolve(__dirname, '..');
        console.error('[Studio] Checking dist directory:', distDir);
        if (existsSync(distDir)) {
            const contents = readdirSync(distDir);
            console.error('[Studio] Contents of dist directory:', contents);
        }
        // Also check the package root
        const packageRoot = resolve(__dirname, '../..');
        console.error('[Studio] Checking package root:', packageRoot);
        if (existsSync(packageRoot)) {
            const rootContents = readdirSync(packageRoot);
            console.error('[Studio] Contents of package root:', rootContents);
        }
    }
    catch (err) {
        console.error('[Studio] Could not read directories:', err);
    }
    return null;
}
let cachedPublicDir = null;
function handleStaticFile(path, config) {
    if (!cachedPublicDir) {
        cachedPublicDir = findPublicDir();
    }
    if (!cachedPublicDir) {
        const baseDirs = [__dirname, __realdir];
        const candidates = [];
        for (const baseDir of baseDirs) {
            candidates.push(resolve(baseDir, '../public'), resolve(baseDir, '../../public'), resolve(baseDir, '../../../public'), resolve(baseDir, '../../dist/public'), resolve(baseDir, '../../../dist/public'));
        }
        // Check which paths exist and which have index.html
        const diagnostics = candidates.map(candidate => ({
            path: candidate,
            exists: existsSync(candidate),
            hasIndex: existsSync(candidate) ? existsSync(join(candidate, 'index.html')) : false,
        }));
        return jsonResponse(500, {
            error: 'Public directory not found',
            paths: {
                tried: candidates,
                dirname: __dirname,
                realdir: __realdir,
                diagnostics,
            },
        });
    }
    return handleStaticFileFromDir(path, cachedPublicDir, config);
}
function handleStaticFileFromDir(path, publicDir, config) {
    if (path === '/' || path === '') {
        return serveIndexHtml(publicDir, config);
    }
    const filePath = join(publicDir, path);
    if (existsSync(filePath) && statSync(filePath).isFile()) {
        const content = readFileSync(filePath);
        const contentType = getContentType(extname(filePath));
        return {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': getCacheControl(path),
            },
            body: content,
        };
    }
    return serveIndexHtml(publicDir, config);
}
function serveIndexHtml(publicDir, config) {
    const html = getIndexHtml(publicDir, {
        basePath: config.basePath || '/api/studio', // Default basePath for self-hosted
        metadata: config.metadata,
    });
    return {
        status: 200,
        headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache',
        },
        body: html,
    };
}
function jsonResponse(status, data) {
    return {
        status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };
}
function getContentType(ext) {
    const types = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
    };
    return types[ext] || 'application/octet-stream';
}
function getCacheControl(path) {
    // Cache static assets aggressively
    if (path.match(/\.(js|css|png|jpg|jpeg|svg|woff|woff2|ttf)$/)) {
        return 'public, max-age=31536000, immutable';
    }
    return 'no-cache';
}
//# sourceMappingURL=handler.js.map