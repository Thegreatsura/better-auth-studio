import { defineStudioConfig } from 'better-auth-studio';
import { auth } from './lib/auth';

export default defineStudioConfig({
  auth,
  basePath: '/api/studio',
  // Access control temporarily disabled for testing
  // Uncomment and customize after initial setup:
  // allowAccess: async (session) => {
  //   return session?.user?.role === 'admin';
  // },
});
