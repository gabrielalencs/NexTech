import { Products } from '@/types/Products';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface OrderItem extends Products {
    quantity: number;
    orderDate: string;
    status: string;
}

interface OrdersState {
    orders: OrderItem[][];
    addOrder: (products: OrderItem[]) => void;
}

export const useOrdersStore = create<OrdersState>()(
    persist(
        (set) => ({
            orders: [],
            addOrder: (products) => set((state) => ({
                orders: [...state.orders, products]
            })),
        }),
        {
            name: 'orders-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);