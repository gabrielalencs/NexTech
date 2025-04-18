import { Percent } from "lucide-react";

import { getDiscountedProducts } from "@/actions/getProducts";

import ProductItem from "@/components/ui/product-item";


const ProductDealsPage = async () => {
    const discountedProducts = await getDiscountedProducts();

    return (
        <section className="text-white max-w-[1296px] mx-auto px-6 min-h-[70vh]">
            <h2 className="border-2 border-primary px-4 py-2 rounded-full uppercase text-md flex items-center gap-2 w-max">
                <Percent />
                Ofertas
            </h2>

            <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {discountedProducts.map(product => (
                    <ProductItem productInformation={product} key={product.id} />
                ))}
            </div>
        </section>
    )
}

export default ProductDealsPage