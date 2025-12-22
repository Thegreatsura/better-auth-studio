import { handleStudioRequest } from '../core/handler.js';
/**
 * Next.js adapter for Better Auth Studio (App Router)
 */
export function createStudioHandler(config) {
    return async (request) => {
        try {
            const universalRequest = await nextToUniversal(request);
            const universalResponse = await handleStudioRequest(universalRequest, config);
            return universalToNext(universalResponse);
        }
        catch (error) {
            console.error('Studio handler error:', error);
            return new Response(JSON.stringify({ error: 'Internal server error' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    };
}
async function nextToUniversal(req) {
    let body;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        const contentType = req.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
            try {
                body = await req.json();
            }
            catch { }
        }
    }
    const headers = {};
    req.headers.forEach((value, key) => {
        headers[key] = value;
    });
    return {
        url: req.nextUrl.pathname + req.nextUrl.search,
        method: req.method,
        headers,
        body,
    };
}
function universalToNext(res) {
    return new Response(res.body, {
        status: res.status,
        headers: res.headers,
    });
}
//# sourceMappingURL=nextjs.js.map