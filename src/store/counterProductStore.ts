import { create } from "zustand";

interface CounterState {
    counter: number;
    increment: () => void;
    decrement: () => void;
    resetCounter: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
    counter: 1,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: Math.max(1, state.counter - 1) })),
    resetCounter: () => set(() => ({ counter: 1 }))
}));