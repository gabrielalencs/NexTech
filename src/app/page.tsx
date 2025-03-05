import {
    Headphones, Keyboard, Monitor,
    Mouse, Speaker, Touchpad
} from "lucide-react";

import Banner from "../../public/banner-hero.webp"

import { Button } from "@/components/ui/button";


import ProductCarousel from "@/components/layout/product-carousel";

import { getDiscountedProducts, getKeyboardProducts, getMouseProducts } from "@/actions/getProducts";

import Image from "next/image";


export default async function Home() {
    const productCategoriesButtons = [
        { id: 1, name: "Mouses", icon: <Mouse /> },
        { id: 2, name: "Teclados", icon: <Keyboard /> },
        { id: 3, name: "Fones", icon: <Headphones /> },
        { id: 4, name: "Mousepads", icon: <Touchpad /> },
        { id: 5, name: "Monitores", icon: <Monitor /> },
        { id: 6, name: "Alto falantes", icon: <Speaker /> },
    ];

    const discountedProducts = await getDiscountedProducts();
    const keyboardList = await getKeyboardProducts();
    const mousesList = await getMouseProducts();
    

    return (
        <main>
            <div className="px-6 h-max lg:px-0">
                <Image
                    src={Banner}
                    alt="Banner da Loja"
                    className="mx-auto rounded-xl w-full lg:rounded-none"
                    priority // Carrega a imagem antes de outras para melhorar performance
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1296px"
                />
            </div>

            <div className="max-w-[1296px] mx-auto mt-16 px-6 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-6 xl:gap-7">
                {productCategoriesButtons.map(categories => (
                    <Button
                        key={categories.id}
                        className="flex items-center justify-center gap-2 py-5 flex-1 font-semibold"
                        variant="outline"
                    >
                        {categories.icon}
                        {categories.name}
                    </Button>
                ))}
            </div>

            <section className="mt-20 mx-10">
                <h2 className="text-white text-xl font-bold ml-2 uppercase">Ofertas</h2>
                <ProductCarousel productList={discountedProducts} />
            </section>

            <section className="mt-20 mx-10">
                <h2 className="text-white text-xl font-bold ml-2 uppercase">Teclados</h2>
                <ProductCarousel productList={keyboardList} />
            </section>

            <section className="mt-20 mx-10">
                <h2 className="text-white text-xl font-bold ml-2 uppercase">Mouses</h2>
                <ProductCarousel productList={mousesList} />
            </section>
        </main>
    );
}