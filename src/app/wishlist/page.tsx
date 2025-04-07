<<<<<<< HEAD:src/app/(dashboard)/wishlist/page.tsx
const WishlistPage = () => {
=======
"use client"

import ProductItem from "@/components/ui/product-item";
import { useFavoritesStore } from "@/store/favoritesStore";
import { Heart } from "lucide-react"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const WishlistPage = () => {
    const { status } = useSession();

    if (status === "unauthenticated") return redirect("/signin");

    const { products } = useFavoritesStore();

<<<<<<< HEAD
>>>>>>> parent of 8a05ab4 (feat: makes logic of adding products in the cart and creates a group of private routes):src/app/wishlist/page.tsx
=======
>>>>>>> parent of 8a05ab4 (feat: makes logic of adding products in the cart and creates a group of private routes)

    return (
        <section className="text-white max-w-[1296px] mx-auto px-6 min-h-[70vh]">
            <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {products.map(productInfo => (
                    <ProductItem productInformation={productInfo} key={productInfo.id} />
                ))}
<<<<<<< HEAD
<<<<<<< HEAD:src/app/(dashboard)/wishlist/page.tsx
                {products.length != 0 ? (
                    products.map(productInfo => (
                        <ProductItem productInformation={productInfo} key={productInfo.id} />
                    ))
                ) : (
                    <h1 className="text-white text-xl absolute">
                        Nenhum produto favoritado
                    </h1>
                )}
=======
>>>>>>> parent of 8a05ab4 (feat: makes logic of adding products in the cart and creates a group of private routes):src/app/wishlist/page.tsx
=======
>>>>>>> parent of 8a05ab4 (feat: makes logic of adding products in the cart and creates a group of private routes)
            </div>
        </section>
    )
}