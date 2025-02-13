import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./button";

import { House, ListOrdered, LogIn, Menu, Percent } from "lucide-react";

const SHEET_SIDES = ["left"] as const

const Header = () => {

    const buttonTexts = [];

    return (
        <header className="p-10">
            <div >
                {SHEET_SIDES.map((side) => (
                    <Sheet key={side}>
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
                            side={side}
                        >
                            <SheetHeader>
                                <SheetTitle className="text-white">Menu</SheetTitle>
                            </SheetHeader>
                            <div className="mt-7 flex flex-col gap-4">
                                <Button
                                    variant="outline"
                                    className="w-full text-white justify-start py-5 border-zinc-900 bg-fore hover:bg-secondary-foreground hover:text-white"
                                >
                                    <LogIn />
                                    Fazer Login
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full text-white justify-start py-5 border-zinc-900 bg-fore hover:bg-secondary-foreground hover:text-white"
                                >
                                    <House />
                                    Início
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full text-white justify-start py-5 border-zinc-900 bg-fore hover:bg-secondary-foreground hover:text-white"
                                >
                                    <Percent />
                                    Ofertas
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full text-white justify-start py-5 border-zinc-900 bg-fore hover:bg-secondary-foreground hover:text-white"
                                >
                                    <ListOrdered />
                                    Ofertas
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                ))}
            </div>
        </header>
    )
}

export default Header