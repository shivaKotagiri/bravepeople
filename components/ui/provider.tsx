"use client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Preloader from "./preloader";

export default function Provider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    return (
        <div>
            {isLoading && <AnimatePresence>
                <Preloader isLoading={isLoading} onComplete={() => setIsLoading(false)} /> 
            </AnimatePresence>}
            { children }
        </div>
    )
}