import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { magicLink } from 'better-auth/plugins/magic-link';
import { sendMagicLink } from './magic-mail';
import prisma from './prisma';
import { sendResetEmail } from './reset-email';
export const auth = betterAuth({
  trustedOrigins: ["http://localhost:3000"],
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await sendResetEmail({
        to: user.email,
        subject: 'Reset your password',
        text: `Click the link to reset your password: ${url}`,
      });
    },
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }) => {
        await sendMagicLink(email, `${url}?token=${token}`);
      },
      expiresIn: 3600,
    }),
  ],
});
