
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import ProviderButtons from "@/components/ui/provider-buttons";


import Link from "next/link";


import { signIn } from "auth";


const SignUpPage = () => {
    return (
        <section className="mx-6 mt-8 mb-32 lg:mt-14">
            <Card className="bg-[#0A0A0A] border-[2px] border-zinc-800 mx-auto rounded-lg p-2 w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold tracking-tighter text-white">
                        Crie Sua Conta
                    </CardTitle>

                    <CardDescription className="text-zinc-400">
                        Registre-se em segundos usando e-mail e senha ou Google.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form
                        action={async (formData) => {
                            "use server"
                            await signIn("credentials", {
                                name: formData.get("name"),
                                email: formData.get("email"),
                                password: formData.get("password"),
                                redirectTo: "/"
                            });
                        }}
                    >
                        <div>
                            <Label htmlFor="name">
                                Nome
                            </Label>
                            <Input
                                type="name"
                                id="name"
                                name="name"
                                placeholder="Seu nome"
                                required
                                className="mt-1 border-zinc-700"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="email">
                                E-mail
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="exemplo@email.com"
                                required
                                className="mt-1 border-zinc-700"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="password">
                                Senha
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
                                required
                                className="mt-1 border-zinc-700"
                            />
                        </div>

                        <Button type="submit" className="mt-10 w-full justify-center font-bold">Registrar-se</Button>
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
                        Já tem uma conta? <Link href="/signin" className="text-primary">Entrar</Link>
                    </p>
                </CardFooter>
            </Card>
        </section>
    )
}

export default SignUpPage