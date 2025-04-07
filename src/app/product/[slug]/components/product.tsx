"use client"

import React from "react"
import ImageGallery from "./image-gallery"
import CounterButton from "@/components/ui/counter-button"
import FavoriteButton from "./favorite-button"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "@/components/ui/button"
import { ArrowDown, Truck } from "lucide-react"
import { Products } from "@/types/Products"
import { useCartStore } from "@/store/cartStore"
import { useCounterStore } from "@/store/counterProductStore"
import { useToast } from "@/hooks/use-toast"
import { useSession } from "next-auth/react"

interface ProductProps {
    productInfo: Products
}

const ProductContainer = ({ productInfo }: ProductProps) => {

    const { data: session, status } = useSession();
    const { toast } = useToast();
    const { addProduct } = useCartStore();
    const {
        productCounter, productIncrement,
        productDecrement, productResetCounter
    } = useCounterStore();

    const addProductList = () => {
        if (status === "unauthenticated") {
            toast({
                title: "Você precisa estar logado",
                description: "Faça login para adicionar itens ao carrinho",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Item adicionado ao carrinho",
            variant: "outline"
        });

        addProduct(productInfo, productCounter);
        productResetCounter();

    };


    return (
        <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex flex-col gap-8 lg:flex-[1.3]">
                <ImageGallery
                    productGallery={productInfo?.imageUrls}
                    productName={productInfo?.name}
                />
            </div>

            <div className="max-w-[600px] md:mx-auto lg:flex-1 lg:flex lg:flex-col lg:justify-between lg:gap-5">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg sm:text-xl font-medium text-white md:text-2xl">{productInfo?.name}</h3>

                        <div className="flex items-start gap-2 mt-2">
                            <div className="flex flex-col gap-1 text-white">
                                <span className="truncate font-semibold text-xl md:text-2xl">
                                    R$ {(productInfo?.basePrice - (productInfo?.basePrice * productInfo?.discountPercentage / 100)).toFixed(2)}
                                </span>
                                <span className="truncate text-xs line-through opacity-75 md:text-base">
                                    De: R$ {(productInfo?.basePrice).toFixed(2)}
                                </span>
                            </div>

                            {productInfo?.discountPercentage != 0 && (
                                <div className="bg-primary text-black py-1 px-2 w-max flex items-center flex-row-reverse text-xs font-semibold rounded-full">
                                    {productInfo?.discountPercentage}%
                                    <ArrowDown className="!h-4 !w-4" />
                                </div>
                            )}
                        </div>

                        <CounterButton
                            counter={productCounter}
                            increment={productIncrement}
                            decrement={productDecrement}
                        />
                    </div>

                    <div>
                        <FavoriteButton product={productInfo} />

                    </div>
                </div>

                <Separator className="hidden h-0.5 bg-[#171717] lg:block" />

                <div className="mt-9 text-white lg:mt-0">
                    <h4 className="text-lg font-semibold sm:text-xl">Descrição</h4>
                    <p className="opacity-60 text-sm mt-2 leading-6">{productInfo?.description}</p>

                    <div className="flex flex-col gap-4 mt-10">
                        <Button
                            className="uppercase justify-center py-5 font-bold"
                            onClick={addProductList}
                        >
                            Adicionar ao Carrinho
                        </Button>

                        <Button className="text-white flex gap-2 justify-between items-center py-6 bg-[#171717] hover:bg-[#171717]">
                            <div className="flex items-center gap-2">
                                <Truck className="!h-5 !w-5" />
                                <div className="flex flex-col text-left">
                                    <p className="text-xs">Entrega via FSPacket</p>
                                    <p className="text-xs text-primary">Envio para <span className="font-bold">todo Brasil</span></p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs">Frete Grátis</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContainer