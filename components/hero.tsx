"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

interface SplitTextInstance {
    lines: HTMLElement[];
    revert: () => void;
}

gsap.registerPlugin(SplitText);

export default function Hero() {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const textContainerRef = useRef<HTMLDivElement | null>(null);
    const imageRef1 = useRef<HTMLImageElement | null>(null);
    const imageRef2 = useRef<HTMLImageElement | null>(null);
    const imageRef3 = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const section = parentRef.current;
        const image1 = imageRef1.current;
        const image2 = imageRef2.current;
        const image3 = imageRef3.current;

        if(!section || !image1 || !image2 || !image3) return;
        
        const handleMouseMove = (e: MouseEvent) => {
            const sectionRect = section.getBoundingClientRect();

            if(e.clientX >= sectionRect.left && e.clientX <= sectionRect.right
                && e.clientY >= sectionRect.top && e.clientY <= sectionRect.bottom
            ) {
                const sectionCenterX = sectionRect.left + sectionRect.width / 2;
                const sectionCenterY = sectionRect.top + sectionRect.height / 2;

                const moveX = (e.clientX - sectionCenterX) / (sectionRect.width / 2);
                const moveY = (e.clientY - sectionCenterY) / (sectionRect.height / 2);

                gsap.to(image1, {
                    x: moveX * 12,
                    y: moveY * 12,
                    duration: 0.8,
                    ease: "power4.out"
                })

                gsap.to(image2, {
                    x: moveX * 12,
                    y: moveY * 12,
                    duration: 0.8,
                    ease: "power4.out"
                })

                gsap.to(image3, {
                    x: moveX * 12,
                    y: moveY * 12,
                    duration: 0.8,
                    ease: "power4.out"
                })
            }
        }

        const handleMouseLeave = () => {
            gsap.to(image1, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power4.out",
                rotationY: 0,
                rotationX: 0
            });

            gsap.to(image2, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power4.out",
                rotationY: 0,
                rotationX: 0
            });

            gsap.to(image3, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power4.out",
                rotationY: 0,
                rotationX: 0
            });
        }

        window.addEventListener("mousemove", handleMouseMove);
        section.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            section.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    useEffect(() => {
        if (!textContainerRef.current) return;

        const split = new SplitText(textContainerRef.current, {
            type: "lines",
            linesClass: "split-line"
        }) as unknown as SplitTextInstance;

        const lines = split.lines;

        // Wrap each line in a mask container
        lines.forEach(line => {
            const wrapper = document.createElement('div');
            wrapper.style.overflow = 'hidden';
            wrapper.style.lineHeight = '0.85';
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.set(lines, {
            yPercent: 100,
            opacity: 1
        });

        gsap.to(lines, {
            yPercent: 0,
            duration: 0.75,
            ease: "power4.out",
            stagger: 0.25
        });

        return () => {
            split.revert();
        };
    }, []);
    
    return (
        <div ref={parentRef} className="h-fit relative">
            <div className="h-fit">
                <div className="mt-5">
                    <Image alt="logo" width={192} height={24} src={"/logo.svg"} />
                </div>
                <div 
                    ref={textContainerRef}
                    className="-translate-x-3 mt-30 relative tracking-tighter font-pp-mori uppercase font-normal text-[138px] w-fit h-fit overflow-visible leading-[0.85]"
                >
                    <div className="flex items-center justify-start inset-0 overflow-hidden">
                        <motion.div className="leading-30 z-2 mr-45 relative inline-block will-change-transform">
                            launch
                        </motion.div>
                        <div style={{ perspective: '1000px' }} className="w-[171px] h-[96px] absolute left-[40%]">
                            <div ref={imageRef1} className="relative w-full h-full">
                                <Image 
                                    alt="logo" 
                                    className="z-0 rounded-[100px] object-cover brightness-80"
                                    fill
                                    src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68bc614a66517b375079c7d1_d469d7a20ddc11d8df488b498873aa0c_bravepeople-teaser-reel.gif"} 
                                />
                                <span className="text-base text-white tracking-wide absolute inset-0 flex items-center justify-center">play</span>
                            </div>
                        </div>
                        <motion.div className="leading-30 z-2 will-change-transform">
                            digital
                        </motion.div>
                    </div>
                    <div className="flex justify-start inset-0">
                        <motion.div className="leading-30 z-2 mr-20 will-change-transform">
                            experien­ces
                        </motion.div>
                        <div style={{ perspective: '1000px' }} className="absolute w-[220px] h-[211px] left-[60%]">
                            <Image alt="logo"
                                ref={imageRef2} 
                                className="z-0 h-auto hover:opacity-80 transition-opacity duration-400 object-cover"
                                fill
                                src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68bcc2070b51d06488307d3a_683cf5a69ff407866c3051b9e5aded55_iPhone_15_Pro_Max_10-1-copy-main2-1465x980-p-1080.jpg"} 
                            />
                        </div>
                        <motion.div className="leading-30 z-2 will-change-transform">
                            that
                        </motion.div>
                    </div>
                    <div className="flex justify-start inset-0 overflow-hidden">
                        <motion.div className="leading-30 z-2 mr-20 will-change-transform">
                            shape
                        </motion.div>
                        <div style={{ perspective: '1000px' }} className="absolute w-[204px] h-[155px] left-[27%]">
                            <Image 
                                ref={imageRef3}
                                alt="logo" 
                                className="z-0 hover:opacity-85 transition-opacity duration-400 object-cover"
                                fill
                                src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68840d2477f6c7d14380dd64_rccl-watch2-p-800.jpg"} 
                            />
                        </div>
                        <motion.div className="leading-30 z-2 tracking-tighter will-change-transform">
                            the future.
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}