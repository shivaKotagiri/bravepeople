"use client";

import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Preloader({ isLoading, onComplete }: { isLoading: boolean, onComplete: () => void }) {
    const lists = ["Hello", "नमस्ते", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは"];
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if(index < lists.length - 1) {
            const timeout = setTimeout(() => {
                setIndex(index + 1);
            }, 1000);

            return () => clearTimeout(timeout);
        } else {
            const finalTimeout = setTimeout(() => {
                onComplete()
            }, 1000);

            return () => clearTimeout(finalTimeout);
        }
    }, [index, lists.length, onComplete])
    return (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0}} transition={{ duration: 0.5 }} className="fixed z-50 inset-0 items-center bg-black flex justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    className="text-6xl text-white"
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{opacity: 1, scale: 1 }}
                    exit={{opacity: 0, scale: 1.2}}
                    transition={{ duration: 0.5 }}>
                    { lists[index] }
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}