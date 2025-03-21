import { Button } from "@/components/ui/button";
import FavoriteButton from "@/app/product/[slug]/components/favorite-button";
import { prisma } from "auth";
import { ArrowDown, Truck } from "lucide-react";
import CounterButton from "../../../components/ui/counter-button";
import ProductCarousel from "@/app/(home)/components/product-carousel";
import { Separator } from "@/components/ui/separator";
import ImageGallery from "./components/image-gallery";


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
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col gap-8 lg:flex-[1.3]">
                    <ImageGallery
                        productGallery={product?.imageUrls}
                        productName={product?.name}
                    />
                </div>

                <div className="max-w-[600px] md:mx-auto lg:flex-1 lg:flex lg:flex-col lg:justify-between lg:gap-5">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl font-medium text-white md:text-2xl">{product?.name}</h3>

                            <div className="flex items-start gap-2 mt-2">
                                <div className="flex flex-col gap-1 text-white">
                                    <span className="truncate font-semibold text-xl md:text-2xl">
                                        R$ {(product?.basePrice - (product?.basePrice * product?.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                    <span className="truncate text-xs line-through opacity-75 md:text-base">
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

                    <Separator className="hidden h-0.5 bg-[#171717] lg:block" />

                    <div className="mt-9 text-white lg:mt-0">
                        <h4 className="text-lg font-semibold sm:text-xl">Descrição</h4>
                        <p className="opacity-60 text-sm mt-2 leading-6">{product.description}</p>

                        <div className="flex flex-col gap-4 mt-10">
                            <Button className="uppercase justify-center py-5 font-bold">
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

            <div className="mt-20 max-w-[1296px] mx-auto">
                <h2 className="text-white text-xl font-bold uppercase">Produtos Relacionados</h2>
                <ProductCarousel productList={relatedProducts} />
            </div>
        </section>
    )
}

export default ProductPage