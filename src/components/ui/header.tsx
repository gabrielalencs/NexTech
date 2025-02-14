import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./button";

import { House, ListOrdered, LogIn, Menu, Percent } from "lucide-react";

const Header = () => {
    const buttonTexts = [
        { text: "Fazer Login", icon: LogIn },
        { text: "Início", icon: House },
        { text: "Ofertas", icon: Percent },
        { text: "Catálogo", icon: ListOrdered }
    ];

    return (
        <header className="p-10 flex items-center justify-between">
            <div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="text-white border-zinc-900 bg-foreground hover:bg-secondary-foreground hover:text-white"
                        >
                            <Menu />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        className="bg-[#0A0A0A] text-zinc-300 border-[1px] border-zinc-900 border-t-0 border-l-0 border-b-0"
                        side="left"
                    >
                        <SheetHeader>
                            <SheetTitle className="text-white">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="mt-7 flex flex-col gap-4">
                            {buttonTexts.map((buttonText, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className="w-full text-white justify-start py-5 border-zinc-900 bg-transparent hover:bg-secondary-foreground hover:text-white"
                                >
                                    <buttonText.icon />
                                    {buttonText.text}
                                </Button>

                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div>
                <h1>NextTech Store</h1>
            </div>

            <div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="text-white border-zinc-900 bg-foreground hover:bg-secondary-foreground hover:text-white"
                        >
                            <Menu />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        className="bg-[#0A0A0A] text-zinc-300 border-[1px] border-zinc-900 border-t-0 border-l-0 border-b-0"
                        side="right"
                    >
                        <SheetHeader>
                            <SheetTitle className="text-white">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="mt-7 flex flex-col gap-4">
                            {buttonTexts.map((buttonText, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className="w-full text-white justify-start py-5 border-zinc-900 bg-transparent hover:bg-secondary-foreground hover:text-white"
                                >
                                    <buttonText.icon />
                                    {buttonText.text}
                                </Button>

                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header