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


    return (
        <section className="text-white max-w-[1296px] mx-auto px-6 min-h-[70vh]">
            <h2 className="border-2 border-primary px-5 py-2 rounded-full uppercase text-md flex items-center gap-2 w-max">
                <Heart />
                Favoritos
            </h2>

            <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {products.map(productInfo => (
                    <ProductItem productInformation={productInfo} key={productInfo.id} />
                ))}
            </div>
        </section>
    )
}

export default WishlistPage