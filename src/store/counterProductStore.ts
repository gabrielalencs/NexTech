import { create } from "zustand";

interface CounterState {
    productCounter: number;
    productIncrement: () => void;
    productDecrement: () => void;
    productResetCounter: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
    productCounter: 1,
    productIncrement: () => set((state) => ({ productCounter: state.productCounter + 1 })),
    productDecrement: () => set((state) => ({ productCounter: Math.max(1, state.productCounter - 1) })),
    productResetCounter: () => set({ productCounter: 1 }),
}));