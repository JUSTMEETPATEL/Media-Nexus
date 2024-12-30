import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { magicLink } from "better-auth/plugins/magic-link";
const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {  
        enabled: true
    },
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, token, url }, request) => {
                // send email to user
            },
            expiresIn: 1800,
            
        })
    ]

});