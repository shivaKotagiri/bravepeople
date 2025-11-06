"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Menu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [hover, setHover] = useState<boolean>(false);
    const textRef = useRef<HTMLDivElement | null>(null);
    const splitRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(0);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

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

    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    
    useGSAP(() => {
        if (!textRef.current || !splitRef.current || width < 1024) return;

        const splits1 = new SplitText(splitRef.current, { 
            type: "chars, words, lines", 
            linesClass: "line", 
            wordsClass: "word", 
            charsClass: "char"
        });
        const splits2 = new SplitText(textRef.current, { 
            type: "chars, words, lines", 
            linesClass: "line", 
            wordsClass: "word", 
            charsClass: "char"
        });

        gsap.set(splits1.chars, { y: 0 });
        gsap.set(splits2.chars, { y: 0 });
        
        timelineRef.current = gsap.timeline({ paused: true });
        
        timelineRef.current.to(splits1.chars, {
            duration: 0.25,
            y: -100,
            stagger: { amount: 0.05, from: "center" },
            ease: "power3.inOut"
        }).from(splits2.chars, {
            duration: 0.25,
            y: 100,
            stagger: { amount: 0.05, from: "center" },
            ease: "power3.inOut"
        }, "-=0.25");

        return () => {
            timelineRef.current?.kill();
            splits1.revert();
            splits2.revert();
        };
    }, [width]); 

    useGSAP(() => {
        if (!timelineRef.current || width < 1024) return;
        
        if (hover) {
            timelineRef.current.play();
        } else {
            timelineRef.current.reverse();
        }
    }, [hover, width]);

    return (
        <nav className={`fixed z-20 shadow-[0_0_200px_100px_rgba(0,0,0,0.15)] bg-white uppercase text-sm font-medium p-[0.25rem] rounded-[2rem] flex flex-row gap-1 ${width < 1024 ? 'md:w-[95%] w-[90%] justify-between' : 'w-fit'}`}>
            <div ref={navRef} className="flex justify-center items-center ml-6 opacity-100">
                <Image src="/nav-logo.svg" width={16} height={16} alt="Logo" className="size-10" />
            </div>
            
            {width >= 1024 ? (
                <>
                    <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">services</div>
                    <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">about</div>
                    <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">work</div>
                    <div className="hover:bg-[#F0EDE6] cursor-pointer py-3.5 px-5 rounded-3xl">insights</div>
                    <div 
                        onMouseEnter={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                        className="hover:bg-white overflow-hidden relative transition-colors duration-300 hover:text-black border cursor-pointer py-3 px-[50px] rounded-[2rem] bg-black text-[14px] text-white flex justify-center tracking-tighter items-center w-[9.2rem]"
                    >
                        <div ref={splitRef} className="absolute inset-0 flex justify-center items-center z-0">work&nbsp;with&nbsp;us</div>
                        <div ref={textRef} className="absolute inset-0 flex justify-center items-center z-10">work&nbsp;with&nbsp;us</div>
                    </div>
                </>
            ) : (
                <div className="flex items-center gap-2">
                    <div className="cursor-pointer flex items-center uppercase text-[15px]">
                        Menu
                    </div>
                    <div className="flex justify-center items-center bg-black rounded-full text-[2.5rem] w-10 h-10 text-white">
                        ✺
                    </div>
                </div>
            )}
        </nav>
    );
}