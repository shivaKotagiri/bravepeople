"use client";
import { useRef } from "react";
export default function About() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    return (
        <div ref={sectionRef} className="flex mb-10 items-center w-full">
            <div className="mt-25 w-full flex flex-col lg:flex-row justify-between">
                <div style={{ WebkitTextStroke: "0.5px" }} ref={ref1} className="bg-black mb-10 lg:mb-0 w-fit max-w-[320px] md:max-w-[384px] font-[400] h-fit leading-none flex items-center justify-center border text-start uppercase text-sm md:text-[17px] tracking-tight border-black text-white hover:bg-white hover:text-black cursor-pointer transition-colors duration-350 px-9 md:px-10 py-6 md:py-8.5 rounded-[50px]">
                    Learn more about our design & partnership approach →
                </div>
                <div className="min-w-[15%]" />
                <div className="flex flex-col gap-5 border-t border-neutral-400 w-full">
                    <div className="pt-2 text-xs text-neutral-400">
                        Who We Are
                    </div> 
                    <div ref={ref2} className="max-w-2xl text-[2rem] leading-[2.4rem] font-[500]">
                        ✺ Brave People is a strategic design partner to bold digital brands. We join your team, co-build your thing, and help bring it to the world.
                    </div>
                </div>
            </div>
        </div>
    )
}