import { prisma } from "auth";

import ProductCarousel from "@/app/(home)/components/product-carousel";
import ProductContainer from "./components/product";


type SegmentParams<T extends Object = any> = T extends Record<string, any>
    ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
    : T

export interface PageProps {
    params?: SegmentParams;
    searchParams?: any;
}

const ProductPage = async ({ params }: PageProps) => {
    const { slug } = await params;

    const product = await prisma.product.findFirst({
        where: { slug },
        include: {
            category: true,
        },
    });

    const relatedProducts = await prisma.product.findMany({
        where: {
            categoryId: product?.categoryId,
            slug: { not: slug },
        },
    });

    if (!product) return <h1 className="text-white text-center mt-10 text-2xl">Erro ao mostrar detalhes do produto</h1>


    return (
        <section className="max-w-[1296px] min-h-[70vh] mx-auto px-6">
            <ProductContainer productInfo={product} />

            <div className="mt-20 max-w-[1296px] mx-auto">
                <h2 className="text-white text-xl font-bold uppercase">Produtos Relacionados</h2>
                <ProductCarousel productList={relatedProducts} />
            </div>
        </section>
    );
}

export default ProductPage;