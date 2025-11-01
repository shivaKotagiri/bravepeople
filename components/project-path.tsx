"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProjectPath() {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <div className="flex flex-col w-full">
            <div className="uppercase text-8xl max-w-4xl font-family-pp-mori">choose your project path</div>
            <div className="leading-relaxed text-2xl font-[500] max-w-lg mt-5">Going from 0-1 or breaking into your next stage of growth? We specialize in all of the above.</div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-25">
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="col-span-1 relative w-[710px] h-[780px] border cursor-pointer hover:border-transparent border-neutral-400 rounded-[40px] text-black hover:text-white">
                    <Image 
                        className={`absolute inset-0 w-[711px] h-[780px] transition-opacity duration-500 ${hover ? "opacity-100": "opacity-0"}`}
                        alt="image1" 
                        width={711} 
                        height={780} 
                        src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/680fa5ebdd3d9d78849fe02c_sarah-dorweiler-Rv2kTIuya_I-unsplash%203%20(1).png"} 
                    />
                    <div className="absolute inset-0 p-15 flex flex-col justify-between items-start">
                        <div className="flex flex-col">
                            <div className="text-6xl font-[500] mt-[30%]">Build a Website</div>
                            <div className="px-4 py-1 border w-fit rounded-2xl font-[500] mt-5">Fixed Scope</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="max-w-lg text-2xl font-[500]">
                                Plan-driven, fixed timelines, deliverable-centric. Focus your effort and investment toward singular business needs with precision.
                            </div>
                            <div className="rounded-full relative cursor-pointer mt-10 text-black h-[3.75rem] w-[3.75rem] flex justify-center items-center bg-white hover:bg-transparent transition-colors duration-500 hover:text-white">
                                <Image 
                                    className=""
                                    width={26} 
                                    height={38} 
                                    alt="Right arrow" 
                                    src={"/right-arrow.svg"} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}