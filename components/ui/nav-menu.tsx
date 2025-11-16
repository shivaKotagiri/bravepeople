"use client";

import { useMenuStore } from "@/store/menu";
import Navbar from "../navbar";
import WorkWithUs from "./work-with-us";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NavMenu({ children }: { children: React.ReactNode }) {
    const { menuOpen } = useMenuStore();
    const navOptions = ["Services", "About", "Work", "Insights", "Careers"];
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const workwithus = useRef<HTMLDivElement | null>(null);
    const navItemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        if (!containerRef.current || !workwithus.current) return;
        
        const tl = gsap.timeline({ paused: true });
        
        gsap.set(containerRef.current, { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });
        gsap.set(navItemsRef.current, { yPercent: 100, opacity: 0 });
        gsap.set(workwithus.current, { scale: 0.9, opacity: 0 });
        
        tl.to(containerRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.65,
            ease: "power2.out"
        });
        
        tl.to(navItemsRef.current, {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.inOut",
        });
        
        tl.to(workwithus.current, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        }, "-=0.25");
        
        timelineRef.current = tl;
    }, { scope: sectionRef });

    useEffect(() => {
        if (!timelineRef.current) return;
        
        if (menuOpen) {
            timelineRef.current.play();
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            timelineRef.current.reverse();
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
        
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <div ref={sectionRef}>
            <div 
                ref={containerRef} 
                className="fixed inset-0 z-40 pt-5 bg-black text-white flex flex-col items-center w-screen h-screen overflow-hidden"
                style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
            >
                <Navbar />
                <div className="w-full h-full flex flex-col justify-start mt-30 items-center px-4">
                    <div 
                        style={{ WebkitTextStrokeWidth: "1px" }} 
                        className="flex flex-col items-center justify-center gap-13 w-full max-w-4xl text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal uppercase"
                    >
                        {navOptions.map((option, index) => (
                            <div 
                                key={option} 
                                className="cursor-pointer overflow-hidden leading-none"
                            >
                                <div 
                                    ref={(el) => { navItemsRef.current[index] = el; }}
                                    className="inline-block"
                                >
                                    {option}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div ref={workwithus} className="w-full mt-16 flex justify-center max-w-4xl uppercase">
                        <WorkWithUs 
                            backgroundColor="bg-white" 
                            textColor="text-black" 
                            width="w-[95%]" 
                            textSize="text-[14px]" 
                            padding="py-8" 
                        />
                    </div>
                </div>
            </div>
            
            <div style={{ 
                opacity: menuOpen ? 0 : 1, 
                pointerEvents: menuOpen ? 'none' : 'auto',
                position: menuOpen ? 'fixed' : 'relative',
                width: '100%'
            }}>
                {children}
            </div>
        </div>
    );
}