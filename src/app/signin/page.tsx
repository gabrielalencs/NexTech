import { providerMap, signIn } from "auth";

const icons = [
    { name: "Google", icon: "https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF" },
];


const SignInPage = () => {

    const findIcon = (name: string) => {
        const icon = icons.find((item) => item.name === name);
        return icon?.icon ?? "";
    };

    return (
        <div>
            <h2 className="text-[2rem] leading-10 font-semibold text-center text-white max-w-[600px] mx-auto">
                Acesse ou crie sua conta com uma das opções disponíveis
            </h2>

            {Object.values(providerMap).map((provider) => (
                <form
                    key={provider.id}
                    action={async () => {
                        "use server";
                        await signIn(provider.id, { redirectTo: "/" });
                    }}
                    className="mt-10 flex justify-center"
                >
                    <button
                        type="submit"
                        className="h-10 px-6 py-1 font-medium border border-zinc-600 flex items-center gap-2 rounded text-white"
                    >
                        {
                            findIcon(provider.name) == "https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF"
                                ? (<img
                                    src="https://img.icons8.com/?size=100&id=17904&format=png&color=FFFFFF"
                                    alt="Icon Google"
                                    className="w-6 h-6"
                                />)
                                : findIcon(provider.name)
                        }

                        <span>
                            Entrar com o <strong>{provider.name}</strong>
                        </span>
                    </button>
                </form>
            ))}
        </div>
    )
}

export default SignInPage