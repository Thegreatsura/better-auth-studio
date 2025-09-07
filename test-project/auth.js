const { betterAuth } = require("better-auth");
const { organization } = require("better-auth/plugins");
const { prismaAdapter } = require("better-auth/adapters/prisma");

// Import Prisma client from the generated location
const { PrismaClient } = require("./src/generated/prisma");
const prisma = new PrismaClient();

const auth = betterAuth({
  secret: process.env.AUTH_SECRET || "better-auth-secret-123456789",
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      redirectUri: "http://localhost:3000/api/auth/callback/github"
    }
  },
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
    requireEmailVerification: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
    sendResetPassword: async ({ user, url, token }) => {
      // Send reset password email
      console.log(`Reset password email for ${user.email}: ${url}`);
    },
    resetPasswordTokenExpiresIn: 3600 // 1 hour
  },
  plugins: [
    organization({
      teams: {
        enabled: true
      }
    })
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 // 1 day
  },
  rateLimit: {
    enabled: true,
    window: 10,
    max: 100
  },
  telemetry: {
    enabled: false
  }
});

module.exports = { auth };
