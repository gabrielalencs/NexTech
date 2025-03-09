"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";


import Link from "next/link";
import { useState } from "react";

import { signIn } from "next-auth/react";
import ProviderButtons from "@/components/ui/provider-buttons";




const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            if (result.error === "CredentialsSignin") {
                setError("Usuário ou senha incorretos.");
            } else {
                setError(result.error);
            }
        } else {
            window.location.href = "/";
        }
    };


    return (
        <section className="mx-6 mt-8 mb-32 lg:mt-14">
            <Card className="bg-[#0A0A0A] border-[2px] border-zinc-800 mx-auto rounded-lg p-2 w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold tracking-tighter text-white">
                        Entre com sua conta
                    </CardTitle>

                    <CardDescription className="text-zinc-400">
                        Utilize seu e-mail e senha ou o Google para entrar.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="exemplo@email.com"
                                required
                                className="mt-1 border-zinc-700"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
                                required
                                className="mt-1 border-zinc-700"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                        <Button type="submit" className="mt-8 w-full justify-center font-bold">
                            Entrar
                        </Button>
                    </form>

                    <div className="flex items-center gap-6 mt-5">
                        <Separator className="bg-zinc-700" />
                        <span className="text-xs text-zinc-300 uppercase">Ou</span>
                        <Separator className="bg-zinc-700" />
                    </div>

      

                    <ProviderButtons />
                </CardContent>

                <CardFooter className="mt-5">
                    <p className="text-zinc-300 text-sm">
                        Não tem uma conta?  <Link href="/signup" className="text-primary">Inscreva-se</Link>
                    </p>
                </CardFooter>
            </Card>
        </section>
    )
}

export default SignInPage