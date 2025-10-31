"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Headline() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(
        el,
        { backgroundColor: "black", color: "white" },
        {
            backgroundColor: "#F0EDE6",
            color: "black",
            scrollTrigger: {
                trigger: el,
                start: "20% top",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
                markers: true
            },
            duration: 0.35,
        }
        );
    }, []);
    return (
        <div ref={sectionRef} className="w-full pt-[15%] will-change-transform">
            <div style={{ WebkitTextStroke: "5px" }} className="flex flex-col text-[25vw] font-[400] uppercase leading-[75%]">
                <div>Expect</div>
                <div>brave</div>
                <div>results</div>
            </div>
            <div className="h-screen"></div>
        </div>
    )
}