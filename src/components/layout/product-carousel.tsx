"use client"

import { useEffect, useState } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Products } from "@/types/Products";

import { ArrowDown } from "lucide-react";

interface ProductCarouselProps {
    productList: Products[];
}

const ProductCarousel = ({ productList }: ProductCarouselProps) => {
    const [slidesToScroll, setSlidesToScroll] = useState(3);
    const shouldShowNavigation = productList.length > slidesToScroll;

    useEffect(() => {
        const getSlidesToScroll = () => {
            if (window.innerWidth >= 1280) return 6;
            if (window.innerWidth >= 1024) return 5;
            if (window.innerWidth >= 768) return 4;
            if (window.innerWidth >= 640) return 3;
            return 1;
        };

        setSlidesToScroll(getSlidesToScroll());

        const handleResize = () => setSlidesToScroll(getSlidesToScroll());
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <Carousel
                opts={{
                    loop: true,
                    align: "start",
                    slidesToScroll,
                }}
                className="w-full mx-auto max-w-[1245px] mt-5"
            >
                {shouldShowNavigation && (
                    <>
                        <CarouselPrevious className="absolute left-[-18px] top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center bg-primary text-black hover:bg-primary" />

                        <CarouselNext className="absolute right-[-18px] top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center bg-primary text-black hover:bg-primary" />
                    </>
                )}

                <CarouselContent>
                    {productList.map(product => (
                        <CarouselItem key={product.id} className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                            <div className="bg-[#171717] w-full h-[200px] flex items-center justify-center relative rounded-md">
                                {product.discountPercentage != 0 && (
                                    <div className="bg-primary py-1 px-2 w-max flex items-center flex-row-reverse gap-1 text-xs font-semibold rounded-full absolute top-4 left-4">
                                        {product.discountPercentage}%
                                        <ArrowDown className="!h-4 !w-4" />
                                    </div>
                                )}

                                <img
                                    src={product.imageUrls[0]}
                                    alt={`Imagem do ${product.name}`}
                                    className="w-36"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}

export default ProductCarousel