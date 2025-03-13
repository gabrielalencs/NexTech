import { Button } from "@/components/ui/button";
import FavoriteButton from "@/app/product/[slug]/components/favorite-button";
import { prisma } from "auth";
import { ArrowDown, ChevronLeft, ChevronRight, HeartIcon, Truck } from "lucide-react";
import CounterButton from "./components/counter-button";


interface ProductDetailsPageProps {
    params: {
        slug: string;
    };
}

const ProductPage = async ({ params }: ProductDetailsPageProps) => {

    const { slug } = await params;

    const product = await prisma.product.findFirst({
        where: { slug },
        include: {
            category: true,
        },
    });

    if (!product) return <h1 className="text-white text-center mt-10 text-2xl">Erro ao mostrar detalhes do produto</h1>

    const relatedProducts = await prisma.product.findMany({
        where: {
            categoryId: product?.categoryId,
            slug: { not: slug },
        },
    });


    return (
        <section className="max-w-[1296px] min-h-[70vh] mx-auto px-6">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-8">
                    <div className="bg-[#171717] flex items-center justify-center py-10 rounded-md">
                        <img
                            src={product?.imageUrls[0]}
                            alt={`Image do produto: ${product?.name}`}
                            className="w-9/12 max-w-[520px]"
                        />
                    </div>

                    <div className="flex items-center gap-4 sm:gap-5">
                        {product?.imageUrls.map((imageUrl, index) => (
                            <div
                                key={index}
                                className="bg-[#171717] flex items-center justify-center p-2 rounded-md flex-1 sm:p-3"
                            >
                                <img
                                    src={imageUrl}
                                    alt={`Image do produto: ${product?.name}`}
                                    className="w-full max-w-[100px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-white">{product?.name}</h3>

                            <div className="flex items-start gap-2 mt-2">
                                <div className="flex flex-col gap-1 text-white">
                                    <span className="truncate font-semibold text-xl">
                                        R$ {(product?.basePrice - (product?.basePrice * product?.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                    <span className="truncate text-xs line-through opacity-75">
                                        De: R$ {(product?.basePrice).toFixed(2)}
                                    </span>
                                </div>

                                {product?.discountPercentage != 0 && (
                                    <div className="bg-primary text-black py-1 px-2 w-max flex items-center flex-row-reverse text-xs font-semibold rounded-full">
                                        {product?.discountPercentage}%
                                        <ArrowDown className="!h-4 !w-4" />
                                    </div>
                                )}
                            </div>

                            <CounterButton />
                        </div>

                        <div>
                            <FavoriteButton />
                        </div>
                    </div>

                    <div className="mt-9 text-white">
                        <h4 className="text-lg font-semibold">Descrição</h4>
                        <p className="opacity-60 text-sm mt-2 leading-5">{product.description}</p>

                        <div className="flex flex-col gap-3 mt-10">
                            <Button className="uppercase justify-center">
                                Adicionar ao Carrinho
                            </Button>

                            <Button className="text-white flex gap-2 justify-between items-center py-4 bg-[#171717] hover:bg-[#171717]">
                                <div className="flex items-center gap-2">
                                    <Truck className="!h-5 !w-5" />
                                    <div className="flex flex-col">
                                        <p className="text-[10px]">Entrega via FSPacket</p>
                                        <p className="text-[10px] text-primary">Entrega via FSPacket</p>
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

            <div>

            </div>
        </section>
    )
}

export default ProductPage