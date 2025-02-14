// Shadcn/ui

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./button";

// Icons

import { House, ListOrdered, LogIn, Percent, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const navItems = [
        { text: "Início", icon: House },
        { text: "Ofertas", icon: Percent },
        { text: "Catálogo", icon: ListOrdered }
    ];

    return (
        <header className="py-10 px-6 flex items-center justify-between lg:px-14 2xl:px-24">
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild >
                        <Button
                            variant="outline"
                            size="icon"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart !h-6 !w-6"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
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
                            <Button
                                variant="outline"
                                className="w-full text-white justify-start py-5 border-zinc-900 bg-transparent hover:bg-secondary-foreground hover:text-white"
                            >
                                <LogIn />
                                Fazer Login
                            </Button>
                            {navItems.map((buttonText, index) => (
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
                <Link
                    href="/"
                    className="text-white text-lg font-bold md:text-2xl">
                    <span className="text-primary">NextTech</span> Store
                </Link>
            </div>

            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild >
                        <Button
                            variant="outline"
                            size="icon"
                        >
                            <ShoppingCart className="!h-6 !w-6" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        className="bg-[#0A0A0A] text-zinc-300 border-[1px] border-zinc-900 border-t-0 border-r-0 border-b-0 w-10/12"
                        side="right"
                    >
                        <SheetHeader>
                            <SheetTitle className="text-left">
                                <Button
                                    variant="outline"
                                    className="py-5 border-2 border-primary rounded-full text-primary hover:bg-transparent hover:text-primary"
                                >
                                    <ShoppingCart className="!h-5 !w-5" /> <span className="uppercase font-bold text-md">Carrinho</span>
                                </Button>
                            </SheetTitle>
                        </SheetHeader>

                        <div>

                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <nav className="hidden lg:flex lg:items-center gap-20">
                <ul className="flex gap-12 items-center">
                    {navItems.map((buttonText, index) => (
                        <li
                            key={index}
                            className="inline-block text-white duration-300 text-lg cursor-pointer hover:text-primary"
                        >
                            {buttonText.text}
                        </li>
                    ))}
                </ul>

                <div>
                    <Link
                        href="/signin"
                        className="text-black text-md flex items-center gap-2 py-2 px-5 rounded-md bg-primary duration-300 text-md hover:bg-[#fee78a]">
                        <User className="!h-4 !w-4" />
                        Fazer Login
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header