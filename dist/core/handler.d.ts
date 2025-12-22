import type { StudioConfig, UniversalRequest, UniversalResponse } from '../types/handler.js';
/**
 * Main handler - processes all studio requests (framework-agnostic)
 *
 * Route mapping:
 * - CLI studio: basePath = ''
 *   - /api/users → API route /api/users
 *   - /dashboard → SPA route
 * - Self-hosted: basePath = '/api/studio'
 *   - /api/studio/users → API route /api/users (adds /api prefix internally)
 *   - /api/studio/dashboard → SPA route
 */
export declare function handleStudioRequest(request: UniversalRequest, config: StudioConfig): Promise<UniversalResponse>;
//# sourceMappingURL=handler.d.ts.map