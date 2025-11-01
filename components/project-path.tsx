"use client";
import Image from "next/image";
import { useState } from "react";
import ChoosePath from "./ui/choose-path";
export default function ProjectPath() {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <div className="flex flex-col w-full">
            <div className="uppercase text-8xl max-w-4xl font-family-pp-mori">choose your project path</div>
            <div className="leading-relaxed text-2xl font-[500] max-w-lg mt-5">Going from 0-1 or breaking into your next stage of growth? We specialize in all of the above.</div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-25">
                <ChoosePath 
                    title="Build a Website" 
                    text="Fixed Scope" 
                    para="Plan-driven, fixed timelines, deliverable-centric. Focus your effort and investment toward singular business needs with precision." 
                    link="https://cdn.prod.website-files.com/658031e408a50a76013e5183/680fa5ebdd3d9d78849fe02c_sarah-dorweiler-Rv2kTIuya_I-unsplash%203%20(1).png"  
                />
                <ChoosePath 
                    title="Build a Digital Product" 
                    text="Fixed Subscription" 
                    para="Change-driven, flexible roadmaps, people-centric. Add seasoned creatives to your team to launch or iterate on a digital product." 
                    link="https://cdn.prod.website-files.com/658031e408a50a76013e5183/680fa5eb3443e4c285b5db08_sarah-dorweiler-Rv2kTIuya_I-unsplash%201%20(1).png"  
                />
            </div>
        </div>
    )
}