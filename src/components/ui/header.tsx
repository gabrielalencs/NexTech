import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


import {
    House, ListOrdered,
    LogOut, Menu, Percent,
    ShoppingCart
} from "lucide-react";

import Link from "next/link";

import { auth } from "auth";

import { userLogout } from "@/actions/authActions";


const Header = async () => {
    const session = await auth();

    const navItems = [
        { text: "Início", icon: House, link: "/" },
        { text: "Ofertas", icon: Percent, link: "/deals" },
        { text: "Catálogo", icon: ListOrdered }
    ];

    return (
        <header className="py-12 px-6 flex items-center justify-between lg:px-14 lg:py-14 2xl:px-24">
            {/* Menu Mobile */}

            <div className="lg:hidden">
                <Sheet >
                    <SheetTrigger asChild >
                        <Button
                            variant="outline"
                            size="icon"
                            className="justify-center"
                        >
                            <Menu className="!h-7 !w-7" />
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
                            <div className="flex flex-col gap-5">
                                <Link
                                    href="/signup"
                                    className="text-black text-md py-2 px-5 rounded-md bg-primary duration-300 text-md hover:bg-[#fee78a]">
                                    Cadastrar
                                </Link>

                                <Link
                                    href="/signin"
                                    className="text-primary border-[1px] border-primary text-md py-2 px-5 rounded-md duration-200 hover:border-[#fee78a] hover:text-[#fee78a]">
                                    Entrar
                                </Link>
                            </div>

                            {(session && session.user) && (
                                navItems.map((buttonText, index) => (
                                    <Button
                                        key={index}
                                        variant="outline"
                                    >
                                        <buttonText.icon />
                                        {buttonText.text}
                                    </Button>
                                ))
                            )}
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
                            className="justify-center"
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

            {/* Menu Desktop */}

            <nav className="hidden lg:flex lg:items-center gap-20">
                {(session && session.user)
                    ? (
                        <>
                            <ul className="flex gap-12 items-center">
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="inline-block text-white duration-300 text-lg cursor-pointer hover:text-primary"
                                    >
                                        <a href={item.link}>
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex items-center gap-4">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem className="bg-none">
                                            <NavigationMenuTrigger className="text-white p-5 border-[1px] border-zinc-700 bg-transparent focus:bg-none">
                                                Olá {session.user.name}
                                            </NavigationMenuTrigger>

                                            <NavigationMenuContent className="bg-[#0A0A0A] text-white p-5 w-[187px] md:w-[187px]">
                                                <ul className="flex flex-col gap-2">
                                                    <li>Meus favoritos</li>
                                                    <li>Meus favoritos</li>
                                                </ul>

                                                <form action={userLogout} className="mt-5">
                                                    <Button
                                                        type="submit"
                                                        variant="destructive"
                                                        className="px-5 text-md font-semibold"
                                                    >
                                                        <LogOut />
                                                        Sair
                                                    </Button>
                                                </form>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>

                                <div>
                                    <Button className="rounded-full">
                                        <ShoppingCart className="!h-6 !w-6" />
                                        <span>Cart(0)</span>
                                    </Button>
                                </div>
                            </div>
                        </>
                    )
                    : (
                        <div className="flex items-center gap-5">
                            <Link
                                href="/signup"
                                className="text-black text-md py-2 px-5 rounded-md bg-primary duration-300 text-md hover:bg-[#fee78a]">
                                Cadastrar
                            </Link>

                            <Link
                                href="/signin"
                                className="text-primary border-[1px] border-primary text-md py-2 px-5 rounded-md duration-200 hover:border-[#fee78a] hover:text-[#fee78a]">
                                Entrar
                            </Link>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}

export default Header