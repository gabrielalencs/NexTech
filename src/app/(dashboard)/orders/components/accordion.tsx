"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
                    <AccordionTrigger>
                        <div>
                            <h3 className="uppercase text-lg font-bold">Pedido com {order.length} produto(s)</h3>
                            <p className="text-sm text-zinc-400">
                                Criado em {dataFormatada} às {horaAtual}
                            </p>
                        </div>

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
                    </AccordionTrigger>

                    <AccordionContent>
                        {order.map((product, index) => (
                            <div className="flex justify-between items-center mb-5" key={index}>
                                <div className="flex items-center gap-5">
                                    <div className="bg-[#171717] p-4 w-[120px] h-[120px] flex items-center justify-center relative rounded-md duration-300 cursor-pointer hover:bg-[#121212]">
                                        <img
                                            src={product.imageUrls[0]}
                                            alt={`Imagem do: ${product.name}`}
                                            className="duration-300 hover:scale-105 w-full"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex w-fit text-xs rounded-md px-3 py-1 bg-[#171717]">
                                            Vendido e entregue por <span className="font-semibold ml-1 inline-block">NexTech Store</span>
                                        </div>
                                        <h3 className="text-xl font-medium mt-2">{product.name}</h3>
                                        <p className="text-sm opacity-60">Quantidade: {product.quantity}</p>
                                    </div>
                                </div>

                                <div>
                                    <span className="truncate font-semibold text-xl block">
                                        R$ {(product.basePrice - (product.basePrice * product.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                    <span className="truncate text-right block text-xs line-through opacity-75 lg:text-sm">
                                        R$ {(product.basePrice).toFixed(2)}
                                    </span>
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