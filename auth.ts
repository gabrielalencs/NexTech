import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import CredentialsProvider from "next-auth/providers/credentials";

export const prisma = new PrismaClient();

const config = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: { label: "Nome", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Senha", type: "password" }
            },
            authorize: async (credentials) => {
                if (!credentials.email || !credentials.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: { email: String(credentials.email) },
                });

                if (!user) {
                    return null
                }

                if (user.password !== credentials.password) {
                    return null
                }

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/signIn",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = String(user.id);
                token.name = String(user.name);
                token.email = String(user.email);
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = String(token.id);
                session.user.name = String(token.name);
                session.user.email = String(token.email);
            }

            return session;
        },
    },
    secret: process.env.AUTH_SECRET
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);


interface ProviderWithId {
    id: string;
    name: string;
};

export const providerMap: ProviderWithId[] = config.providers.map(provider => {
    const typedProvider = provider as unknown as ProviderWithId;

    return {
        id: typedProvider.id,
        name: typedProvider.name
    };
}).filter(provider => provider.id !== 'credentials'); 