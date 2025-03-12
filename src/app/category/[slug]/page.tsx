import ProductItem from "@/components/ui/product-item";
import { auth, prisma } from "auth";

import {
    Headphones, Keyboard, Monitor,
    Mouse, Speaker, Touchpad
} from "lucide-react";
import { redirect } from "next/navigation";


const categoryIcons: { [key: string]: React.ComponentType<any> } = {
    mouses: Mouse,
    keyboards: Keyboard,
    monitors: Monitor,
    headphones: Headphones,
    speakers: Speaker,
    touchpads: Touchpad,
};

const CategoryProducts = async ({ params }: any) => {
    // const session = await auth();

    // if (!session) return redirect("/signin");

    const { slug } = await params;

    const category = await prisma.category.findFirst({
        where: {
            slug: slug,
        },
        include: {
            products: true,
        },
    });

    const Icon = category && categoryIcons[category.slug as keyof typeof categoryIcons];

    return (
        <section className="text-white max-w-[1296px] min-h-[70vh] mx-auto px-6">
            <h2 className="border-2 border-primary px-5 py-2 rounded-full uppercase text-md flex items-center gap-2 w-max">
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
    )
}

export default CategoryProducts 