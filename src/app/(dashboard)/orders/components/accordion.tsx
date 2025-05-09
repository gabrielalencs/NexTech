"use client"

import {
    Accordion, AccordionContent,
    AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";

import { useOrdersStore } from "@/store/ordersStore";


const AccordionItems = () => {
    const { orders } = useOrdersStore();

    if (orders.length === 0) return <h1 className="text-white text-2xl font-semibold absolute mt-10">Nenhum pedido</h1>

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const horaAtual = dataAtual.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });


    return (
        <Accordion type="single" collapsible className="w-full shadow-sm mt-10 flex flex-col gap-5">
            {orders.map((order, index) => (
                <AccordionItem
                    key={`order-${index}`}
                    value={`item-${index}`}
                    className="text-white px-6 border-[1px] border-b-2 border-zinc-900"
                >
                    <AccordionTrigger className="lg:gap-24">
                        <div>
                            <h3 className="uppercase text-md font-bold md:text-lg">Pedido com {order.length} produto(s)</h3>
                            <p className="text-sm text-zinc-400">
                                Criado em {dataFormatada} às {horaAtual}
                            </p>
                        </div>

                        <div className="max-lg:hidden flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180">
                            <div>
                                <h3 className="font-bold">Status</h3>
                                <p className="text-sm text-primary">Pendente</p>
                            </div>

                            <div>
                                <h3 className="font-bold">Data</h3>
                                <p className="text-sm text-primary">{dataFormatada}</p>
                            </div>

                            <div>
                                <h3 className="font-bold">Pagamento</h3>
                                <p className="text-sm text-primary">Cartão</p>
                            </div>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent>
                        <div className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180 lg:hidden">
                            <div>
                                <h3 className="font-bold">Status</h3>
                                <p className="text-xs text-primary md:text-sm">Concluído</p>
                            </div>

                            <div>
                                <h3 className="font-bold">Data</h3>
                                <p className="text-xs text-primary md:text-sm">{dataFormatada}</p>
                            </div>

                            <div>
                                <h3 className="font-bold">Pagamento</h3>
                                <p className="text-xs text-primary md:text-sm">Cartão</p>
                            </div>
                        </div>

                        {order.map((product, index) => (
                            <div className="flex justify-between items-center mb-5" key={index}>
                                <div className="flex items-center gap-3 md:gap-5">
                                    <div className="bg-[#171717] p-2 w-[80px] h-[80px] flex items-center justify-center relative rounded-md duration-300 cursor-pointer hover:bg-[#121212] lg:w-[120px] lg:h-[120px]">
                                        <img
                                            src={product.imageUrls[0]}
                                            alt={`Imagem do: ${product.name}`}
                                            className="duration-300 hover:scale-105 w-full"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <div>
                                            <div className="w-fit rounded-md px-3 py-1 bg-[#171717] text-xs hidden md:flex">
                                                Vendido e entregue por <span className="font-semibold ml-1 inline-block">NexTech Store</span>
                                            </div>

                                            <h3 className="text-xs font-medium mt-2 md:text-xl">{product.name}</h3>
                                            <p className="text-sm opacity-60 max-lg:hidden">Quantidade: {product.quantity}</p>
                                        </div>

                                        <div className="max-lg:flex max-lg:items-center max-lg:gap-2 max-lg:mt-2">
                                            <span className="truncate font-semibold text-md block md:text-xl">
                                                R$ {(product.basePrice - (product.basePrice * product.discountPercentage / 100)).toFixed(2)}
                                            </span>

                                            <span className="truncate text-right block text-xs line-through opacity-75 lg:text-sm">
                                                R$ {(product.basePrice).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <span className="truncate font-semibold text-md block max-lg:hidden md:text-xl">
                                        R$ {(product.basePrice - (product.basePrice * product.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                    <span className="truncate text-right block text-xs line-through opacity-75 lg:text-sm max-lg:hidden">
                                        R$ {(product.basePrice).toFixed(2)}
                                    </span>

                                    <p className="text-sm opacity-60 max-lg:block">Qtd: {product.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default AccordionItems