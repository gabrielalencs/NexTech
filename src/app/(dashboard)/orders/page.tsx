import { Package } from "lucide-react";

import AccordionItems from "./components/accordion";

const OrdersPage = () => {
    return (
        <section className="max-w-[1296px] mx-auto px-6 min-h-[70vh]">
            <h2 className="border-2 border-primary px-4 py-2 rounded-full uppercase text-md flex items-center gap-2 w-max text-white">
                <Package />
                Meus Pedidos
            </h2>
            
            <AccordionItems />
        </section>
    )
}

export default OrdersPage