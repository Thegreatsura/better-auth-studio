import type { StudioConfig } from '../types/handler.js';
type NextRequest = {
    method: string;
    headers: Headers;
    nextUrl: {
        pathname: string;
        search: string;
    };
    json: () => Promise<any>;
};
/**
 * Next.js adapter for Better Auth Studio (App Router)
 */
export declare function createStudioHandler(config: StudioConfig): (request: NextRequest) => Promise<Response>;
export {};
//# sourceMappingURL=nextjs.d.ts.map