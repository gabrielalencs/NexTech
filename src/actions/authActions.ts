"use server";

import { signIn } from "auth";

export async function signInAction(formData: FormData) {
    const providerId = formData.get("providerId") as string;
    await signIn(providerId, { redirectTo: "/" });
}
