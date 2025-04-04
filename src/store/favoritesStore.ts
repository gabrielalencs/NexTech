import { Products } from "@/types/Products";
import { create } from "zustand";

interface FavoritesStore {
  products: Products[];
  addFavorite: (product: Products) => void;
  removeFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  products: [],
  addFavorite: (product) => {
    if (!get().products.some(p => p.id === product.id)) {
      set({ products: [...get().products, product] });
    }
  },
  removeFavorite: (productId) =>
    set({ products: get().products.filter(p => p.id !== productId) }),
  isFavorite: (productId) =>
    get().products.some(product => product.id === productId)
}));