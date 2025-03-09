"use client";
import { useEffect, useState } from "react";
import { getProviders } from "next-auth/react";
import { Button } from "./button";
import { signInAction } from "@/actions/authActions";

const icons = [
    { name: "Google", icon: "https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF" },
];


export default function ProviderButtons() {
    const [providers, setProviders] = useState<any>(null);

    useEffect(() => {
        getProviders().then((res) => setProviders(res));
    }, []);

    if (!providers) return null;

    const findIcon = (name: string) => {
        const icon = icons.find((item) => item.name === name);
        return icon?.icon ?? "";
    };

    return (
        <>
            {Object.values(providers).map((provider: any) => {
                if (provider.id === 'credentials') return null;
                return (
                    <form
                        key={provider.id}
                        action={signInAction}
                        className="flex flex-col justify-center mt-5"
                    >
                        <input type="hidden" name="providerId" value={provider.id} />

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
                );
            })}

        </>
    );
}
