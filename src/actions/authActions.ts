"use server";

import { signIn } from "auth";


import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

const prisma = new PrismaClient();

export async function signInAction(formData: FormData) {
    const providerId = formData.get("providerId") as string;
    await signIn(providerId, { redirectTo: "/" });
}


export async function registerUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;


    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        throw new Error("Usuário já cadastrado.");
    }

    // Crie o novo usuário
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: password,
        },
    });

    return newUser;
}