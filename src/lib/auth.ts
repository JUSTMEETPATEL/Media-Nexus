import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { magicLink } from "better-auth/plugins/magic-link";
import { sendMagicLink } from "./magic-mail";
import prisma from "./prisma";
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {  
        enabled: true
    },
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, token, url }) => {
                await sendMagicLink(email, `${url}?token=${token}`);
            },
            expiresIn: 1800,

        })
    ]

});