import { createStudioHandler } from 'better-auth-studio/nextjs';
import { auth } from '@/lib/auth';

const handler = createStudioHandler({
  auth,
  basePath: '/api/studio',
});
// Export for all HTTP methods
export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler as PATCH,
};
