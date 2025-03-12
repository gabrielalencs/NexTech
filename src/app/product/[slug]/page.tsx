import { prisma } from "auth";


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
                    {/* texts */}
                    <h1>teste</h1>
                </div>
            </div>

            <div>

            </div>
        </section>
    )
}

export default ProductPage