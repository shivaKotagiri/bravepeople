"use client";

import About from "@/components/about";
import Hero from "@/components/hero";
import { RefObject } from "react";

export default function Landing({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
    return (
        <div className="w-full px-[2.5%] 2xl:px-[8%]">
            <Hero containerRef={containerRef} />
            <About />
        </div>
    )
}