import { create } from "zustand";
import { Products } from "@/types/Products";


type CartStore = {
    products: Products[];
    addProduct: (product: Products, quantityValue: number) => void
}


export const useCartStore = create<CartStore>((set) => ({
    products: [],
    addProduct: (product: Products, quantityValue: number) => set((state) => {
        const existingProductIndex = state.products.findIndex((p) => p.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedProducts = [...state.products];
            updatedProducts[existingProductIndex] = {
                ...updatedProducts[existingProductIndex],
                quantity: (updatedProducts[existingProductIndex].quantity || 1) + quantityValue,
            };

            return { products: updatedProducts };
        }

        return {
            products: [...state.products, { ...product, quantity: quantityValue }],
        };
    }),
}));