"use client"

import ProductItem from "@/components/ui/product-item";
import { useFavoritesStore } from "@/store/favoriteStore";
import { Heart } from "lucide-react"

const WishlistPage = () => {
    const { products } = useFavoritesStore();



    return (
        <section className="text-white max-w-[1296px] mx-auto px-6 min-h-[70vh]">
            <h2 className="border-2 border-primary px-5 py-2 rounded-full uppercase text-md flex items-center gap-2 w-max">
                <Heart />
                Favoritos
            </h2>

            <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {products.length != 0 ? (
                    products.map(productInfo => (
                        <ProductItem productInformation={productInfo} key={productInfo.id} />
                    ))
                ) : (
                    <h1 className="text-white text-xl absolute">
                        Nenhum produto favoritado
                    </h1>
                )}
            </div>
        </section>
    )
}

export default WishlistPage