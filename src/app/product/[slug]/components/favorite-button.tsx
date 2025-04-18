"use client"

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { useToast } from "@/hooks/use-toast";

import { useFavoritesStore } from "@/store/favoriteStore";

import { Products } from "@/types/Products";


interface FavoriteButtonProps {
    product: Products
}

const FavoriteButton = ({ product }: FavoriteButtonProps) => {

    const [isFav, setIsFav] = useState(false);
    const { toast } = useToast();
    const { status } = useSession();
    const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

 
    useEffect(() => {
        setIsFav(isFavorite(product.id));
    }, [product.id, isFavorite]);

    const handleFavoriteClick = () => {
        if (status === "unauthenticated") {
            toast({
                title: "Você precisa estar logado",
                description: "Faça login para adicionar aos favoritos",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: `${isFav  ? "Item removido dos Favoritos" : "Item adicionado aos Favoritos"}`,
            variant: "outline"
        });

        if (isFav) {
            removeFavorite(product.id);
        } else {
            addFavorite(product);
        }
    };

    return (
        <label className="heartContainer" onClick={handleFavoriteClick}>
            <input
                type="checkbox"
                checked={isFav}
                onChange={() => setIsFav(!isFav)}
                disabled={status === "unauthenticated"}
            />
            <div className="checkmark">
                <svg viewBox="0 0 256 256">
                    <path
                        d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                        strokeWidth="20px"
                        stroke="#fff"
                        fill="none"></path>
                </svg>
            </div>
        </label>
    )
}

export default FavoriteButton