"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const nav = navRef.current;
        if (!nav) return;
        gsap.fromTo(nav, { width: 0, marginLeft: 0, opacity: 0 }, {
            width: "auto",
            opacity: 1,
            marginLeft: "1.5rem",
            transformOrigin: "center center",
            scrollTrigger: {
                trigger: "body", 
                start: "top top", 
                end: "bottom top",
                scrub: true,
            },
        });
    });
    return (
        <nav className="fixed w-fit shadow-lg bg-white uppercase text-sm font-medium p-[0.25rem] rounded-4xl flex flex-row gap-1">
            <div ref={navRef} className="flex justify-center items-center">
                <Image src="/nav-logo.svg" width={16} height={16} alt="Logo" className="size-9" />
            </div>
            <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">services</div>
            <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">about</div>
            <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">work</div>
            <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">insights</div>
            <div className="hover:bg-white transition-colors duration-300 hover:text-black border cursor-pointer py-3 px-[22px] rounded-4xl bg-black text-white flex justify-center items-center">work with us</div>
        </nav>
    )
}