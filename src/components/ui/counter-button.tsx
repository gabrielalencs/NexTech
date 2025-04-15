"use client"

import { Button } from "@/components/ui/button";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CounterButtonProps {
    counter: number;
    increment: () => void;
    decrement: () => void;
};

const CounterButton = ({ counter, increment, decrement }: CounterButtonProps) => (
    <div className="flex items-center gap-3 mt-4">
        <Button variant="outline" onClick={decrement} className="px-2">
            <ChevronLeft className="h-4 w-4 sm:!w-5 sm:!h-5" />
        </Button>
        <span className="text-white">{counter}</span>
        <Button variant="outline" onClick={increment} className="px-2">
            <ChevronRight className="h-4 w-4 sm:!w-5 sm:!h-5" />
        </Button>
    </div>
);

export default CounterButton;