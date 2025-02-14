import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const config = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "database" },
    providers: [google],
    pages: {
        signIn: "/signIn",
    }
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