import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { providerMap, signIn } from "auth";
import Link from "next/link";

const icons = [
    { name: "Google", icon: "https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF" },
];

const SignInPage = () => {
    const findIcon = (name: string) => {
        const icon = icons.find((item) => item.name === name);
        return icon?.icon ?? "";
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
                    <div>
                        <Label htmlFor="email">
                            E-mail
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="exemplo@email.com"
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
                            placeholder="Digite sua senha"
                            className="mt-1 border-zinc-700"
                        />
                    </div>
                    <Button className="mt-8 w-full justify-center font-bold">Entrar</Button>

                    <div className="flex items-center gap-6 mt-5">
                        <Separator className="bg-zinc-700" />
                        <span className="text-xs text-zinc-300 uppercase">Ou</span>
                        <Separator className="bg-zinc-700" />
                    </div>

                    {Object.values(providerMap).map((provider) => (
                        <form
                            key={provider.id}
                            action={async () => {
                                "use server";
                                await signIn(provider.id, { redirectTo: "/" });
                            }}
                            className="flex flex-col justify-center mt-5"
                        >
                            <Button
                                type="submit"
                                variant="outline"
                                className="w-full justify-center font-normal"
                            >
                                {
                                    findIcon(provider.name) == "https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF"
                                        ? (<img
                                            src="https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF"
                                            alt="Icon Google"
                                            className="w-5 h-5"
                                        />)
                                        : findIcon(provider.name)
                                }
                                <span>
                                    Entrar com o <strong>{provider.name}</strong>
                                </span>
                            </Button>
                        </form>
                    ))}
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