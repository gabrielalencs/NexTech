import { Products } from "@/types/Products";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
    productInformation: Products;
}

const ProductItem = ({ productInformation }: ProductItemProps) => {
    return (
        <>
            <div className="bg-[#171717] w-full h-[200px] flex items-center justify-center relative rounded-md duration-300 cursor-pointer hover:bg-[#121212]">
                {productInformation.discountPercentage != 0 && (
                    <div className="bg-primary text-black py-1 px-2 w-max flex items-center flex-row-reverse gap-1 text-xs font-semibold rounded-full absolute top-4 left-4">
                        {productInformation.discountPercentage}%
                        <ArrowDown className="!h-4 !w-4" />
                    </div>
                )}

                <Image
                    src={productInformation.imageUrls[0]}
                    alt={`Imagem do ${productInformation.name}`}
                    className="duration-300 hover:scale-105"
                    width={140}
                    height={140}
                />
            </div>

            <div className="mt-3 text-white">
                <p className="truncate text-sm">{productInformation.name}</p>
                <div className="flex items-center gap-2">
                    <span className="truncate font-semibold lg:text-lg">
                        R$ {(productInformation.basePrice - (productInformation.basePrice * productInformation.discountPercentage / 100)).toFixed(2)}
                    </span>
                    <span className="truncate text-xs line-through opacity-75 lg:text-sm">
                        R$ {(productInformation.basePrice).toFixed(2)}
                    </span>
                </div>
            </div>
        </>
    )
}

export default ProductItem