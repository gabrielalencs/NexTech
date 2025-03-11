import {
    Headphones, Keyboard, Monitor,
    Mouse, Speaker, Touchpad
} from "lucide-react";

import MainBanner from "../../../public/banner-hero.webp"

import { buttonVariants } from "@/components/ui/button";


import { getDiscountedProducts, getKeyboardProducts, getMouseProducts } from "@/actions/getProducts";

import Image from "next/image";
import Link from "next/link";
import ProductCarousel from "./components/product-carousel";


export default async function Home() {
    const productCategoriesButtons = [
        { id: 1, name: "Mouses", slug: "mouses", icon: <Mouse /> },
        { id: 2, name: "Teclados", slug: "teclados", icon: <Keyboard /> },
        { id: 3, name: "Fones", slug: "fones", icon: <Headphones /> },
        { id: 4, name: "Mousepads", slug: "mousepads", icon: <Touchpad /> },
        { id: 5, name: "Monitores", slug: "monitores", icon: <Monitor /> },
        { id: 6, name: "Caixas de som", slug: "caixas-de-som", icon: <Speaker /> },
    ];

    const discountedProducts = await getDiscountedProducts();
    const keyboardList = await getKeyboardProducts();
    const mousesList = await getMouseProducts();


    return (
        <main>
            <div className="px-6 h-max lg:px-0">
                <Image
                    src={MainBanner}
                    alt="Banner da Loja"
                    className="mx-auto rounded-md w-full lg:rounded-none"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1296px"
                />
            </div>

            <div className="max-w-[1296px] mx-auto mt-16 px-6 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-6 xl:gap-7">
                {productCategoriesButtons.map(categories => (
                    <Link
                        href={`/category/${categories.slug}`}
                        key={categories.id}
                        className={`${buttonVariants({ variant: "outline" })} flex items-center justify-center gap-2 py-5 flex-1 font-semibold`}
                    >
                        {categories.icon}
                        {categories.name}
                    </Link>
                ))}
            </div>

            <section className="mt-20 max-w-[1296px] mx-auto px-6">
                <h2 className="text-white text-xl font-bold uppercase">Ofertas</h2>
                <ProductCarousel productList={discountedProducts} />
            </section>


            <section className="mt-20 max-w-[1296px] mx-auto px-6">
                <h2 className="text-white text-xl font-bold uppercase">Teclados</h2>
                <ProductCarousel productList={keyboardList} />
            </section>

            <section className="mt-20 max-w-[1296px] mx-auto px-6  hidden lg:block">
                <div className="bg-banner-free-shipping h-96 rounded-md"></div>
            </section>

            <section className="mt-20 max-w-[1296px] mx-auto px-6">
                <h2 className="text-white text-xl font-bold uppercase">Mouses</h2>
                <ProductCarousel productList={mousesList} />
            </section>
        </main>
    );
}