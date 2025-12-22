export type ApiContext = {
    path: string;
    method: string;
    headers: Record<string, string>;
    body?: any;
    auth: any;
    basePath?: string;
};
export type ApiResponse = {
    status: number;
    data: any;
};
/**
 * Route API requests to the correct handler
 * This integrates with the existing routes.ts logic
 */
export declare function routeApiRequest(ctx: ApiContext): Promise<ApiResponse>;
//# sourceMappingURL=api-router.d.ts.map