"use client";

import About from "@/components/about";
import Hero from "@/components/hero";
import { RefObject } from "react";

export default function Landing({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
    return (
        <div className="w-full">
            <Hero containerRef={containerRef} />
            <About />
        </div>
    )
}