"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface Props {
    title: string,
    link: string,
    text: string,
    para: string
}

export default function ChoosePath({ title, link, text, para}: Props) {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative w-full md:h-[780px] h-[492px] border cursor-pointer hover:border-transparent border-neutral-400 rounded-[40px] text-black hover:text-white">
            <Image 
                className={`absolute inset-0 rounded-[40px] transition-opacity duration-500 ${hover ? "opacity-100": "opacity-0"}`}
                alt="image1" 
                fill
                style={{ objectFit: 'cover' }}
                src={link} 
            />
            <div className="absolute inset-0 lg:p-15 p-[5%] flex flex-col justify-between items-start">
                <div className="flex flex-col">
                    <div className="md:text-6xl text-[2.75rem] font-[500] mt-5 lg:mt-[30%]">{ title }</div>
                    <div className="px-4 py-1 border w-fit rounded-2xl font-[500] mt-5">{ text }</div>
                </div>
                <div className="flex flex-col">
                    <div className="max-w-lg text-2xl font-[500]">
                        { para }
                    </div>
                    <motion.div
                        initial={{width: "3.75rem"}}
                        animate={{ width: hover ? "15rem": "3.75rem"}} 
                        transition={{
                            width: {
                                duration: 0.3
                            }
                        }}
                        className={`border border-white overflow-hidden rounded-full relative cursor-pointer mt-10 h-[3.75rem] w-[3.75rem] flex ${hover ? "justify-between": "justify-center"} items-center text-black bg-white hover:text-white hover:bg-transparent transition-colors duration-500 ${hover ? "px-5": ""}`}>
                        {hover && <motion.div
                            className="overflow-hidden h-fit"
                            initial={{display: "hidden", opacity: 0, y: "200%", overflow: "hidden" }}
                            animate={{ display: "block", y: "0%", opacity: 1, overflow: "hidden" }}
                            transition={{
                                y: {
                                    delay: 0.2,
                                    duration: 0.25
                                }
                            }}
                            >
                            Work With Us
                        </motion.div>}
                        <Image
                            className="h-[38px] w-[26px]"
                            width={26} 
                            height={38} 
                            alt="Right arrow" 
                            src={"/right-arrow.svg"} 
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}