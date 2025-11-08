"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMenuStore } from "@/store/menu";
import WorkWithUs from "./ui/work-with-us";
import Cross from "./ui/svg/cross";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(0);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
    const {menuOpen, setMenuOpen} = useMenuStore();

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = (): void => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useGSAP(() => {
        const nav = navRef.current;
        if (!nav) return;
        
        if (scrollTriggerRef.current) {
            scrollTriggerRef.current.kill();
            scrollTriggerRef.current = null;
        }
        
        if (width >= 1024) {
            const anim = gsap.fromTo(nav, 
                { width: 0, marginLeft: 0, opacity: 0 }, 
                {
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
                }
            );
            scrollTriggerRef.current = anim.scrollTrigger as ScrollTrigger;
        } else {
            gsap.set(nav, { width: "auto", marginLeft: "1.5rem", opacity: 1 });
        }

        return () => {
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
                scrollTriggerRef.current = null;
            }
        };
    }, [width]);    

    return (
        <nav className={`fixed z-20 w-[93%] lg:w-fit overflow-hidden shadow-[0_0_200px_50px_rgba(0,0,0,0.15)] bg-white uppercase text-sm font-medium p-[0.25rem] rounded-[2rem] flex flex-row gap-1 ${width < 1024 ? 'justify-between' : 'w-fit'}`}>
            <div ref={navRef} className="flex justify-center items-center ml-6 opacity-100">
                <Image src="/nav-logo.svg" width={16} height={16} alt="Logo" className="size-10" />
            </div>
            
            {width >= 1024 ? (
                <>
                    <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">services</div>
                    <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">about</div>
                    <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">work</div>
                    <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">insights</div>
                    <WorkWithUs backgroundColor="bg-black" textColor="text-white" hover_bg="bg-white" hover_text="text-black" width="w-[9.2rem]" textSize="text-[14px]" padding="py-3 px-[50px]" />
                </>
            ) : (
                <div onClick={setMenuOpen} className="flex items-center gap-2 cursor-pointer">
                    <div className="flex text-black items-center uppercase text-[14px]">
                        {menuOpen ? "Close": "Menu"}
                    </div>
                    <div className="flex justify-center items-center bg-black rounded-full text-[2.5rem] w-10 h-10 text-white">
                        {menuOpen ? <Cross />: "✺"}
                    </div>
                </div>
            )}
        </nav>
    );
}