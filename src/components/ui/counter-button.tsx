"use client"

import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store/counterProductStore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";


const CounterButton = () => {
    const { counter, increment, decrement, resetCounter  } = useCounterStore();

    useEffect(() => {
        resetCounter()
    }, [])

    return (
        <div className="flex items-center gap-3 mt-4">
            <Button className="px-2" variant="outline" onClick={decrement}>
                <ChevronLeft className="h-4 w-4 sm:!w-5 sm:!h-5" />
            </Button>

            <span className="text-white">{counter}</span>

            <Button className="px-2" variant="outline" onClick={increment}>
                <ChevronRight className="h-4 w-4 sm:!w-5 sm:!h-5" />
            </Button>
        </div>

    )
}

export default CounterButton