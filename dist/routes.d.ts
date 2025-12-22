import { Router } from 'express';
import type { AuthConfig } from './config.js';
export declare function safeImportAuthConfig(authConfigPath: string, noCache?: boolean): Promise<any>;
export declare function createRoutes(authConfig: AuthConfig, configPath?: string, geoDbPath?: string, preloadedAdapter?: any, // Optional preloaded adapter for self-hosted studio
preloadedAuthOptions?: any): Router;
export declare function handleStudioApiRequest(ctx: {
    path: string;
    method: string;
    headers: Record<string, string>;
    body?: any;
    auth: any;
    basePath?: string;
    configPath?: string;
}): Promise<{
    status: number;
    data: any;
}>;
//# sourceMappingURL=routes.d.ts.map