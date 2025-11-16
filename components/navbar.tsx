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

    useEffect(() => {
        if (menuOpen) {
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.disable();
            }
            if (navRef.current) {
                gsap.set(navRef.current, { 
                    width: "auto", 
                    marginLeft: "1.5rem", 
                    opacity: 1 
                });
            }
        } else {
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.enable();
            }
        }
    }, [menuOpen]);

    useGSAP(() => {
        const nav = navRef.current;
        if (!nav) return;
        
        if (scrollTriggerRef.current) {
            scrollTriggerRef.current.kill();
            scrollTriggerRef.current = null;
        }
        
        if (width >= 1024 && !menuOpen) {
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
    }, [width, menuOpen]);    

    return (
        <nav className={`fixed z-50 w-[93%] items-center lg:w-fit overflow-hidden shadow-[0_0_200px_50px_rgba(0,0,0,0.15)] bg-white uppercase text-sm font-medium p-[0.25rem] rounded-[2rem] flex flex-row gap-1 ${width < 1024 ? 'justify-between' : ''} transition-colors duration-300`}>
            <div ref={navRef} className="flex h-full justify-center items-center ml-6 opacity-100">
                <Image 
                    src="/nav-logo.svg" 
                    width={16} 
                    height={16} 
                    alt="Logo" 
                    className={`size-10 transition-all duration-300`}
                />
            </div>
            
            {width >= 1024 ? (
                <>
                    <div className={`${menuOpen ? 'hover:bg-white/10 text-white' : 'hover:bg-[#F0EDE6] text-black'} cursor-pointer py-3.5 px-5 rounded-3xl transition-colors`}>services</div>
                    <div className={`${menuOpen ? 'hover:bg-white/10 text-white' : 'hover:bg-[#F0EDE6] text-black'} cursor-pointer py-3.5 px-5 rounded-3xl transition-colors`}>about</div>
                    <div className={`${menuOpen ? 'hover:bg-white/10 text-white' : 'hover:bg-[#F0EDE6] text-black'} cursor-pointer py-3.5 px-5 rounded-3xl transition-colors`}>work</div>
                    <div className={`${menuOpen ? 'hover:bg-white/10 text-white' : 'hover:bg-[#F0EDE6] text-black'} cursor-pointer py-3.5 px-5 rounded-3xl transition-colors`}>insights</div>
                    <WorkWithUs 
                        backgroundColor={menuOpen ? "bg-white" : "bg-black"} 
                        textColor={menuOpen ? "text-black" : "text-white"} 
                        hover_bg={menuOpen ? "bg-black" : "bg-white"} 
                        hover_text={menuOpen ? "text-white" : "text-black"} 
                        width="w-[9.2rem]" 
                        textSize="text-[14px]" 
                        padding="py-5 px-[50px]" 
                    />
                </>
            ) : (
                <div onClick={setMenuOpen} className="flex items-center gap-2 cursor-pointer">
                    <div className={`flex items-center uppercase text-[14px] transition-colors duration-300 text-black`}>
                        {menuOpen ? "Close": "Menu"}
                    </div>
                    <div className={`flex justify-center items-center rounded-full text-[2.5rem] w-10 h-10 transition-colors duration-300 bg-black text-white`}>
                        {menuOpen ? <Cross />: "✺"}
                    </div>
                </div>
            )}
        </nav>
    );
}