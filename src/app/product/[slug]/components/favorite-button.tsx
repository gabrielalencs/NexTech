"use client";

import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useState } from "react";

const FavoriteButton = () => {
    const { toast } = useToast();
    const [inputChecked, setInputChecked] = useState(false);
    const { data: session, status } = useSession();

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
            title: `${inputChecked ? "Item removido dos Favoritos" : "Item adicionado aos Favoritos"}`,
        });
    };

    return (
        <label className="heartContainer" onClick={handleFavoriteClick}>
            <input
                type="checkbox"
                checked={inputChecked}
                onChange={() => setInputChecked(!inputChecked)}
                disabled={status === "unauthenticated"}
            />
            <div className="checkmark">
                <svg viewBox="0 0 256 256">
                    <path
                        d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                        strokeWidth="20px"
                        stroke="#fff"
                        fill="none"
                    />
                </svg>
            </div>
        </label>
    );
};

export default FavoriteButton;