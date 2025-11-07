"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { lists } from "@/utils/data/lists";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(432);
    const [cardSize, setCardSize] = useState(432);

    useEffect(() => {
        const updateCardWidth = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setCardWidth(280 + 20);
                setCardSize(280);
            } else if (width < 768) {
                setCardWidth(320 + 30);
                setCardSize(320);
            } else if (width < 1024) {
                setCardWidth(400 + 40);
                setCardSize(400);
            } else {
                setCardWidth(432 + 50);
                setCardSize(432);
            }
        };

        updateCardWidth();
        window.addEventListener("resize", updateCardWidth);
        return () => window.removeEventListener("resize", updateCardWidth);
    }, []);

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

    const xOffset = -currentIndex * cardWidth;

    return (
        <div className="mt-30 mb-45 md:mb-85 w-full flex justify-center items-center h-full px-4 sm:px-6 lg:px-0">
            <div className="bg-black border border-neutral-400 lg:pt-[10%] text-white p-6 sm:p-8 md:p-10 lg:p-18 xl:p-20 rounded-[25px] md:rounded-[30px] lg:rounded-[50px] w-full h-auto lg:h-[665px] selection:bg-white selection:text-black">
                <div className="uppercase mb-8 sm:mb-10 lg:mb-[2rem] xl:pr-[5%] text-3xl sm:text-4xl md:text-[3.375rem] lg:text-[5rem] xl:text-[6.25rem] font-normal leading-none">
                    Ask yourself — What if you could:
                </div>
                <div
                    className="w-full flex flex-col relative overflow-hidden"
                    style={{
                        cursor:
                            'url("https://cdn.prod.website-files.com/658031e408a50a76013e5183/65b134bb5f9e4c283d76c055_Mouse%20Grab-01.svg"), auto',
                    }}
                >
                    <div
                        className="flex gap-5 sm:gap-8 md:gap-10 lg:gap-20 transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(${xOffset}px)` }}
                    >
                        {lists.map((list, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl sm:rounded-3xl lg:rounded-[40px] flex-shrink-0 overflow-hidden"
                                style={{
                                    width: cardSize,
                                    height: cardSize
                                }}
                            >
                                <Image
                                    className="z-5 absolute inset-0 w-full h-full object-cover brightness-90"
                                    src={list.img}
                                    width={432}
                                    height={432}
                                    alt={`carousel-${index}`}
                                />
                                <div className="z-7 inset-0 bottom-0 flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-[3rem] absolute">
                                    <div className="text-lg sm:text-xl md:text-2xl tracking-tight mb-4 sm:mb-6 md:mb-8 lg:mb-[2rem]">{list.number}</div>
                                    <div className="text-lg sm:text-xl md:text-2xl font-normal w-full">{list.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white mt-6 sm:mt-8 lg:mt-10">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`transition-all duration-300 cursor-pointer ${
                                currentIndex === 0
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:scale-110 opacity-100"
                            }`}
                        >
                            <ArrowLeft className="stroke-[0.8] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]" />
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
                            <ArrowRight className="stroke-[0.8] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}