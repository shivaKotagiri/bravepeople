"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { lists } from "@/utils/data/lists";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < lists.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const cardWidth = 432 + 50; 
    const xOffset = -currentIndex * cardWidth;

    return (
        <div className="mt-30 mb-45 md:mb-85 w-full flex justify-center items-center h-full">
            <div className="bg-black border border-neutral-400 lg:pt-[10%] text-white p-10 lg:p-18 xl:p-20 lg:rounded-[50px] md:rounded-[30px] rounded-[25px] w-full h-[665px] selection:bg-white selection:text-black">
                <div className="uppercase mb-[2rem] xl:pr-[5%] text-[3.375rem] md:text-[5rem] lg:text-[6.25rem] font-normal leading-none">
                    Ask yourself — What if you could:
                </div>
                <div
                    className="w-full flex flex-col relative"
                    style={{
                        cursor:
                            'url("https://cdn.prod.website-files.com/658031e408a50a76013e5183/65b134bb5f9e4c283d76c055_Mouse%20Grab-01.svg"), auto',
                    }}
                >
                    <motion.div
                        className="flex gap-20"
                        animate={{ x: xOffset }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    >
                        {lists.map((list, index) => (
                            <motion.div
                                key={index}
                                className="relative max-w-[400px] max-h-[400px] rounded-[40px] lg:max-w-[432px] lg:max-h-[432px] w-full h-full flex justify-center items-center flex-shrink-0"
                            >
                                <Image
                                    className="z-5 rounded-[30px] lg:rounded-[40px] max-w-[400px] max-h-[400px] md:w-[472px] md:h-[472px] lg:max-w-[432px] lg:max-h-[432px] object-cover brightness-90"
                                    src={list.img}
                                    width={432}
                                    height={432}
                                    alt={`carousel-${index}`}
                                />
                                <div className="z-7 inset-0 bottom-0 flex flex-col justify-center px-[3rem] absolute">
                                    <div className="text-2xl tracking-tight mb-[2rem]">{list.number}</div>
                                    <div className="text-2xl font-normal w-full">{list.text}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="flex items-center gap-10 text-white mt-10">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`transition-all duration-300 cursor-pointer ${
                                currentIndex === 0
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:scale-110 opacity-100"
                            }`}
                        >
                            <ArrowLeft className="stroke-[0.8] md:size-15 size-13" />
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={currentIndex === lists.length - 1}
                            className={`transition-all duration-300 cursor-pointer ${
                                currentIndex === lists.length - 1
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:scale-110 opacity-100"
                            }`}
                        >
                            <ArrowRight className="stroke-[0.8] md:size-15 size-13" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
