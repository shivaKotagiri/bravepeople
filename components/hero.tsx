"use client";

import { motion, useTransform, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: parentRef,
        offset: ["start start", "end start"]
    });
    
    const x1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const x3 = useTransform(scrollYProgress, [0, 1], [0, -800]);
    const x4 = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const x5 = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const x6 = useTransform(scrollYProgress, [0, 1], [0, 800]);
    
    return (
        <div ref={parentRef} className="h-fit relative">
            <div className="sticky top-0 h-fit">
                <div className="mt-5">
                    <Image alt="logo" width={192} height={24} src={"/logo.svg"} />
                </div>
                <div className="-translate-x-3 mt-30 relative tracking-tighter font-pp-mori uppercase font-normal text-[138px] w-fit h-fit">
                    <div className="flex items-center gap-5 justify-start inset-0">
                        <motion.div
                            style={{
                                x:x1,
                            }}
                            transition={{ ease: "easeIn", damping: 300, mass: 1.5, visualDuration: 1 }}
                            className="leading-25 z-2 mr-45 relative inline-block">
                            launch
                        </motion.div>
                        <div className="w-[171px] h-[96px] absolute left-[40%]">
                            <Image alt="logo" 
                                className="z-0 rounded-[100px] object-cover brightness-80"
                                fill
                                src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68bc614a66517b375079c7d1_d469d7a20ddc11d8df488b498873aa0c_bravepeople-teaser-reel.gif"} 
                            />
                            <span className="text-base text-white tracking-wide absolute inset-0 flex items-center justify-center">play</span>
                        </div>
                        <motion.div
                            style={{
                                x:x4,
                            }}
                            transition={{ ease: "easeIn", damping: 300, mass: 1.5, visualDuration: 1 }}
                            className="leading-0 z-2">digital</motion.div>
                    </div>
                    <div className="flex gap-5 justify-start inset-0">
                        <motion.div 
                            style={{
                                x: x2,
                            }}
                            transition={{ ease: "easeIn", damping: 300, mass: 1.5, visualDuration: 1 }}
                            className="leading-none z-2 mr-20">experien­ces</motion.div>
                        <div className="absolute w-[220px] h-[211px] top-[15%] left-[60%]">
                            <Image alt="logo" 
                                className="z-0 h-auto hover:opacity-80 transition-opacity duration-400 object-cover"
                                fill
                                src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68bcc2070b51d06488307d3a_683cf5a69ff407866c3051b9e5aded55_iPhone_15_Pro_Max_10-1-copy-main2-1465x980-p-1080.jpg"} 
                            />
                        </div>
                        <motion.div 
                            style={{
                                x:x5,
                            }}
                            transition={{ ease: "easeIn", damping: 300, mass: 1.5, visualDuration: 1 }}
                            className="leading-none z-2">that</motion.div>
                    </div>
                    <div className="flex gap-5 justify-start inset-0">
                        <motion.div 
                            style={{
                                x:x3,
                            }}
                            transition={{ ease: "easeIn", damping: 300, mass: 1.5, visualDuration: 1 }}
                            className="leading-25 z-2 mr-20">shape</motion.div>
                        <div className="absolute w-[204px] h-[155px] top-[60%] left-[27%]">
                            <Image alt="logo" 
                                className="z-0 hover:opacity-85 transition-opacity duration-400 object-cover"
                                fill
                                src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68840d2477f6c7d14380dd64_rccl-watch2-p-800.jpg"} 
                            />
                        </div>
                        <motion.div 
                            style={{
                                x:x6,
                            }}
                            transition={{ ease: "easeIn", damping: 300, mass: 1.5, visualDuration: 1 }}
                            className="leading-25 z-2 tracking-tighter">the future.</motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}