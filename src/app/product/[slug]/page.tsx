import { notFound } from "next/navigation";
import { prisma } from "auth"; // verifique se esse caminho está correto
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

export default async function CategoryProductsPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;

    const category = await prisma.category.findFirst({
        where: { slug },
        include: { products: true },
    });

    if (!category) {
        notFound();
    }

    const Icon = categoryIcons[category.slug as keyof typeof categoryIcons];

    return (
        <section className="text-white max-w-[1296px] min-h-[70vh] mx-auto px-6">
            <h2 className="border-2 border-primary px-5 py-2 rounded-full uppercase text-md flex items-center gap-2 w-max">
                {Icon && <Icon />}
                {category.name}
            </h2>
            <div className="mt-14 grid gap-x-6 gap-y-12 sm:mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {category.products.map((product) => (
                    <div key={product.id}>
                        <ProductItem productInformation={product} />
                    </div>
                ))}
            </div>
        </section>
    );
}
