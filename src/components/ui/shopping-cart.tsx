import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

import { ShoppingCartIcon, Trash } from "lucide-react";
import CounterButton from "./counter-button";

interface ShoppingCartProps {
    isButtonMovel: boolean
};


const HeaderShoppingCart = ({ isButtonMovel }: ShoppingCartProps) => {
    const side = isButtonMovel ? "left" : "right";

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild >
                    {isButtonMovel ? (
                        <Button
                            variant="outline"
                            size="icon"
                            className="justify-center"
                        >
                            <ShoppingCartIcon className="!h-6 !w-6" />
                        </Button>
                    ) : (
                        <Button className="rounded-full">
                            <ShoppingCartIcon className="!h-6 !w-6" />
                            <span>Cart(0)</span>
                        </Button>
                    )}
                </SheetTrigger>


                <SheetContent
                    className="bg-[#0A0A0A] text-zinc-300 border-[1px] border-zinc-900 border-t-0 border-l-0 border-b-0 w-11/12 max-w-lg"
                    side={side}
                >
                    <SheetHeader>
                        <SheetTitle className="text-left">
                            <Button
                                variant="outline"
                                className="py-5 border-2 border-primary rounded-full text-primary hover:bg-transparent hover:text-primary"
                            >
                                <ShoppingCartIcon className="!h-5 !w-5" /> <span className="uppercase font-bold text-md">Carrinho</span>
                            </Button>
                        </SheetTitle>
                    </SheetHeader>

                    <div className="mt-10 flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-7 flex-1 overflow-y-scroll pb-7">
                            <div className="flex justify-between gap-5">
                                <div className="flex gap-5">
                                    <div className="bg-[#171717] flex items-center justify-center p-2 rounded-md h-24 w-24">
                                        <img
                                            src="https://fsw-store-beta.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdxzickkey%2Fimage%2Fupload%2Fv1706243484%2Ffsw-store%2F01_logi-mx-keys-s_ryutop.webp&w=1920&q=75"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <div className="text-white">
                                            <p className="truncate text-sm max-w-[120px] max-w">Logitech MX Keyssdsdfssdfsdf</p>
                                            <div className="flex items-center gap-2">
                                                <span className="truncate font-semibold lg:text-lg">
                                                    R$ 500
                                                </span>

                                                <span className="truncate text-xs line-through opacity-75 lg:text-sm">
                                                    R$ 400
                                                </span>
                                            </div>
                                        </div>

                                        <CounterButton />
                                    </div>
                                </div>

                                <Button
                                    className="px-2 mr-3"
                                    variant="outline"
                                >
                                    <Trash />
                                </Button>
                            </div>
                        </div>

                        <div className="pb-20 flex-1 border-[1px] border-zinc-900 border-r-0 border-l-0 border-b-0 text-white text-xs sm:text-sm sm:pb-24">
                            <div className="border-[1px] border-zinc-900 border-r-0 border-l-0 border-b-0 flex justify-between py-3">
                                <span>Subtotal</span>
                                <span>R$ 4701.00</span>
                            </div>

                            <div className="border-[1px] border-zinc-900 border-r-0 border-l-0 border-b-0 flex justify-between py-3">
                                <span>Entrega</span>
                                <span className="uppercase">Grátis</span>
                            </div>

                            <div className="border-[1px] border-zinc-900 border-r-0 border-l-0 border-b-0 flex justify-between py-3">
                                <span>Descontos</span>
                                <span> -R$ 485.10</span>
                            </div>

                            <div className="border-[1px] border-zinc-900 border-r-0 border-l-0 border-b-0 flex justify-between py-3">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">R$ 4215.90</span>
                            </div>

                            <Button className="w-full font-bold justify-center mt-10">
                                Finalizar Compra
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default HeaderShoppingCart