import { Products } from '@/types/Products';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartItem extends Products {
    quantity: number;
}

interface CartState {
    products: CartItem[];
    addProduct: (product: Products, quantity: number) => void;
    removeProduct: (productId: string) => void;
    updateQuantity: (productId: string, newQuantity: number) => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            products: [],
            addProduct: (product, quantity) => set((state) => {
                const existing = state.products.find(p => p.id === product.id);
                return {
                    products: existing 
                        ? state.products.map(p => 
                            p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
                          )
                        : [...state.products, { ...product, quantity }]
                };
            }),
            removeProduct: (productId) => set({ 
                products: get().products.filter(p => p.id !== productId) 
            }),
            updateQuantity: (productId, newQuantity) => set({
                products: get().products.map(p => 
                    p.id === productId ? { ...p, quantity: newQuantity } : p
                )
            }),
            getTotalItems: () => get().products.reduce((total, p) => total + p.quantity, 0),
            getTotalPrice: () => {
                const total = get().products.reduce((sum, p) => {
                    const discount = p.discountPercentage ?? 0;
                    const price = p.basePrice - (p.basePrice * discount / 100);
                    return sum + price * p.quantity;
                }, 0);
                return total;
            },
            clearCart: () => set({ products: [] })
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
);