"use client"

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CounterButton = () => {
    const [counter, setCounter] = useState(1);

    return (
        <div className="flex items-center gap-3 mt-4">
            <Button
                className="px-2"
                variant="outline"
                onClick={() => setCounter(prev => Math.max(1, prev - 1))}
            >
                <ChevronLeft className="!w-5 !h-5" />
            </Button>

            <span className="text-white">{counter}</span>

            <Button
                className="px-2"
                variant="outline"
                onClick={() => setCounter(prev => prev + 1)}
            >
                <ChevronRight className="!w-5 !h-5" />
            </Button>
        </div>

    )
}

export default CounterButton