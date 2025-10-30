"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

interface SplitTextInstance {
    lines: HTMLElement[];
    revert: () => void;
}

gsap.registerPlugin(SplitText);

export default function Hero({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const textContainerRef = useRef<HTMLDivElement | null>(null);
    const imageRef1 = useRef<HTMLImageElement | null>(null);
    const imageRef2 = useRef<HTMLImageElement | null>(null);
    const imageRef3 = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const section = containerRef.current;
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
    }, [containerRef])

    useEffect(() => {
        if (!textContainerRef.current) return;
        const textElements = textContainerRef.current.querySelectorAll('.animate-text');
        
        textElements.forEach((element) => {
            const split = new SplitText(element, {
                type: "lines",
                linesClass: "split-line",
                mask: "lines"
            }) as unknown as SplitTextInstance;

            const lines = split.lines;

            lines.forEach(line => {
                const wrapper = document.createElement('div');
                wrapper.style.overflow = 'hidden';
                wrapper.style.lineHeight = '0.85';
                line.parentNode?.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });

            gsap.set(lines, {
                yPercent: 500,
                opacity: 1
            });

            gsap.to(lines, {
                yPercent: 0,
                duration: 1.3,
                ease: "power4.out",
                stagger: 0.25,
            });
        });

        return () => {
            textElements.forEach((element) => {
                const split = new SplitText(element, {
                    type: "lines"
                }) as unknown as SplitTextInstance;
                split.revert();
            });
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"])
    const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    
    return (
        <div ref={parentRef} className="relative w-full flex flex-col items-center">
            <div className="h-fit sticky top-0 font-family-pp-mori w-full">
                <div className="mt-3 hidden lg:block uppercase text-[0.9rem] md:text-[1.1rem] font-matrice font-bold">
                    bravepeople®
                </div>
                <div 
                    ref={textContainerRef}
                    className="mt-12 md:mt-20 lg:mt-30 relative -translate-x-3 tracking-tighter font-pp-mori uppercase font-normal text-[clamp(2.5rem,8vw,8.625rem)] w-full h-fit leading-[0.85%]"
                >
                    <div className="flex flex-col sm:flex-row relative">
                        <motion.div
                            style={{x: x1}} 
                            className="animate-text leading-[85%] z-10 relative will-change-transform">
                            launch
                        </motion.div>
                        <div style={{ perspective: '1000px' }} className="w-[80px] h-[45px] xs:w-[90px] xs:h-[51px] sm:w-[100px] sm:h-[56px] md:w-[115px] md:h-[65px] lg:w-[130px] lg:h-[73px] xl:w-[150px] xl:h-[84px] 2xl:w-[171px] 2xl:h-[96px] absolute 2xl:left-[39%] left-[35%]">
                            <div ref={imageRef1} className="relative w-full h-full">
                                <Image 
                                    alt="logo" 
                                    className="z-0 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[70px] xl:rounded-[85px] 2xl:rounded-[100px] object-cover brightness-80"
                                    fill
                                    src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68bc614a66517b375079c7d1_d469d7a20ddc11d8df488b498873aa0c_bravepeople-teaser-reel.gif"} 
                                />
                                <span className="text-[0.5rem] xs:text-[0.55rem] sm:text-xs md:text-sm lg:text-base text-white tracking-wide absolute inset-0 flex items-center justify-center">play</span>
                            </div>
                        </div>
                        <motion.div
                            style={{x: x2}} 
                            className="animate-text leading-[85%] z-10 will-change-transform ml-[13%]">
                            digital
                        </motion.div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2 relative">
                        <motion.div
                            style={{x: x1}} 
                            className="animate-text leading-[85%] z-10 will-change-transform">
                            experien­ces
                        </motion.div>
                        <div className="flex items-center relative w-full sm:w-auto">
                            <div style={{ perspective: '1000px' }} className="w-[90px] h-[86px] xs:w-[100px] xs:h-[96px] sm:w-[120px] sm:h-[115px] md:w-[145px] md:h-[139px] lg:w-[170px] lg:h-[163px] xl:w-[195px] xl:h-[187px] 2xl:w-[220px] 2xl:h-[211px] relative sm:absolute sm:left-0 2xl:left-[-15%]">
                                <Image alt="logo"
                                    ref={imageRef2} 
                                    className="z-0 h-auto hover:opacity-80 transition-opacity duration-400 object-cover"
                                    fill
                                    src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68bcc2070b51d06488307d3a_683cf5a69ff407866c3051b9e5aded55_iPhone_15_Pro_Max_10-1-copy-main2-1465x980-p-1080.jpg"} 
                                />
                            </div>
                            <motion.div 
                                style={{x: x2}} 
                                className="animate-text leading-[85%] z-10 will-change-transform ml-[35%]">
                                that
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center relative">
                        <motion.div
                            style={{x: x1}} 
                            className="animate-text leading-[85%] z-10 will-change-transform">
                            shape
                        </motion.div>
                        <div style={{ perspective: '1000px' }} className="w-[75px] h-[57px] xs:w-[85px] xs:h-[65px] sm:w-[100px] sm:h-[76px] md:w-[125px] md:h-[95px] lg:w-[150px] lg:h-[114px] xl:w-[177px] xl:h-[135px] 2xl:w-[204px] 2xl:h-[155px] relative sm:absolute sm:left-[20%] md:left-[22%] lg:left-[27%] sm:top-1/2 sm:-translate-y-1/2">
                            <Image 
                                ref={imageRef3}
                                alt="logo" 
                                className="z-0 hover:opacity-85 transition-opacity duration-400 object-cover"
                                fill
                                src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68840d2477f6c7d14380dd64_rccl-watch2-p-800.jpg"} 
                            />
                        </div>
                        <motion.div
                            style={{x: x2}} 
                            className="animate-text leading-[85%] z-10 tracking-tighter will-change-transform ml-[6%]">
                            the future.
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}