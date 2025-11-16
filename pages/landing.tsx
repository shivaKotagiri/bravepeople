"use client";

import About from "@/components/about";
import Hero from "@/components/hero";

export default function Landing() {
    return (
        <div className="w-full flex flex-col justify-center items-center px-[6%] 2xl:px-[8%] bg-[#F9F9F9]">
            <Hero/>
            <About />
        </div>
    )
}