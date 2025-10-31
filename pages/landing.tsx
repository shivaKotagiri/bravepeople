"use client";

import { containerContext } from "@/utils/context/containerContext"; 
import About from "@/components/about";
import Hero from "@/components/hero";
import { useContext } from "react";

export default function Landing() {
    const containerRef = useContext(containerContext)
    return (
        <div className="w-full px-[2.5%] 2xl:px-[8%]">
            <Hero containerRef={containerRef} />
            <About />
        </div>
    )
}