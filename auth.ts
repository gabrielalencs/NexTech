import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import CredentialsProvider from "next-auth/providers/credentials"; // Nome correto do provider

const prisma = new PrismaClient();

const config = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        google,
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                name: { label: "Nome", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Senha", type: "password" }
            },
            authorize: async (credentials) => {
                if (!credentials.email || !credentials.password) {
                    throw new Error("Email e senha são obrigatórios.");
                }

                // Verifica se o usuário já existe
                let user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                });

                // Se o usuário não existir, cria um novo
                if (!user) {
                    user = await prisma.user.create({
                        data: {
                            name: credentials.name as string,
                            email: credentials.email as string,
                            password: credentials.password as string,
                        },
                    });
                }

                // Se o usuário existe, verifica a senha
                if (user.password !== credentials.password) {
                    window.alert("Senha incorreta.");
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
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name;
                session.user.email = token.email ?? '';
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
});