import { Button } from "@/components/ui/button";
import FavoriteButton from "@/app/product/[slug]/components/favorite-button";
import { prisma } from "auth";
import { ArrowDown, Truck } from "lucide-react";
import CounterButton from "../../../components/ui/counter-button";
import ProductCarousel from "@/app/(home)/components/product-carousel";
import { Separator } from "@/components/ui/separator";
import ImageGallery from "./components/image-gallery";
import { useCartStore } from "@/store/cartStore";
import ProductContainer from "./components/product";


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
            <ProductContainer productInfo={product} />

            <div className="mt-20 max-w-[1296px] mx-auto">
                <h2 className="text-white text-xl font-bold uppercase">Produtos Relacionados</h2>
                <ProductCarousel productList={relatedProducts} />
            </div>
        </section>
    )
}

export default ProductPage