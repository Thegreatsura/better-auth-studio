import { auth } from '@/lib/auth';

export default {
  auth,
  basePath: '/api/studio',
  metadata: {
    title: 'Admin Dashboard',
    theme: 'dark' as const,
  },
};
