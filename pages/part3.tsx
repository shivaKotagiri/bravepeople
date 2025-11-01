"use client";

import Headline from "@/components/headline";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Testimonial from "@/components/ui/testimonial";
import TrustedBy from "@/components/trustedby";
import ProjectPath from "@/components/project-path";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);
export default function Part3() {
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
                start: "35% top",
                end: "bottom",
                markers: true,
                toggleActions: "play reverse play reverse",
            },
            duration: 0.35,
        }
        );
    }, []);
    return (
        <div className="flex flex-col w-full justify-center" ref={sectionRef}>
            <div className="w-full flex flex-col justify-center px-[3%] 2xl:px-[8%]">
                <Testimonial />
                <Headline />
            </div>
            <TrustedBy />
            <div className="w-full flex flex-col justify-center px-[3%] 2xl:px-[8%]">
                <ProjectPath />
            </div>
        </div>
    )
}