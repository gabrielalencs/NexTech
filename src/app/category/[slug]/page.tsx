
import ProductItem from "@/components/ui/product-item";

import {
    Headphones, Keyboard, Monitor,
    Mouse, Speaker, Touchpad
} from "lucide-react";

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
    mouses: Mouse,
    keyboards: Keyboard,
    monitors: Monitor,
    headphones: Headphones,
    speakers: Speaker,
    touchpads: Touchpad,
};

const CategoryProducts = async ({ params }: any) => {
    const { slug } = await params;



    return (
        <section className="text-white max-w-[1296px] h-[80vh] mx-auto px-6">
           
        </section>
    )
}

export default CategoryProducts 