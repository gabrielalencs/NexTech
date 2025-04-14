
import { prisma } from "auth";
import ProductItem from "@/components/ui/product-item";
import { Headphones, Keyboard, Monitor, Mouse, Speaker, Touchpad } from "lucide-react";

const categoryIcons = {
    mouses: Mouse,
    keyboards: Keyboard,
    monitors: Monitor,
    headphones: Headphones,
    speakers: Speaker,
    touchpads: Touchpad,
} as const;

type SegmentParams<T extends Object = any> = T extends Record<string, any>
    ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
    : T

export interface PageProps {
    params?: SegmentParams;
    searchParams?: any;
}


const CategoryProductsPage = async ({ params }: PageProps) => {

    const { slug } = params;




    const category = await prisma.category.findFirst({
        where: { slug },
        include: { products: true },
    });

    const Icon = categoryIcons[category?.slug as keyof typeof categoryIcons];


    return (
        <section className="text-white max-w-[1296px] min-h-[70vh] mx-auto px-6">
            <h2 className="border-2 border-primary px-4 py-2 rounded-full uppercase text-md flex items-center gap-2 w-max">
                {Icon && <Icon />}
                {category?.name}
            </h2>

            <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {category?.products.map((product) => (
                    <div key={product.id}>
                        <ProductItem productInformation={product} />
                    </div>
                ))}
            </div>
        </section>
    );
}


export default CategoryProductsPage;