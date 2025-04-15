import { create } from "zustand";

interface CheckoutState {
    checkoutClicked: boolean;
    setCheckoutClicked: () => void;
    resetCheckoutClicked: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
    checkoutClicked: false,
    setCheckoutClicked: () => set({ checkoutClicked: true }),
    resetCheckoutClicked: () => set({ checkoutClicked: false }),
}));
