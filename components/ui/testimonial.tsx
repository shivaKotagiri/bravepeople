"use client";
import Image from "next/image";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function Testimonial() {
    const textRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        if(!textRef.current) return;
        const text:HTMLDivElement = textRef.current;

        const splits = new SplitText(text, {
            type: "lines, words, chars",
            wordsClass: "word",
            linesClass: "line",
            charsClass: "char"
        });

        gsap.fromTo(splits.words, { opacity: 0.4 }, {
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                scrub: true,
                once: true,
                trigger: text,
                markers: true,
                start: "top 20%"
            }
        });

        return () => splits.revert();
    }, [textRef.current])
    return (
        <div className="w-full lg:my-35 mx-auto h-fit">
            <div ref={textRef} className="mb-15 mx-auto w-full leading-none text-white text-[3.5rem] lg:text-[5rem]">
                &quot;The Brave People team has done a masterful job at capturing the essence of FCF and projecting it through our site, mobile apps and branding elements. Always game for the next challenge, they continue to work closely with our product, tech and marketing groups under aggressive timelines to deliver creative which consistently exceeds expectations and delights our fans. Simply put, Brave People crushes it.&quot;
            </div>
            <div className="flex gap-3 items-center">
                <div className="h-[50px] w-[50px] rounded-full relative">
                    <Image
                        className="rounded-full h-full w-full object-cover inset-0 absolute" 
                        src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68708c314208a7a24e201324_steve-adler-headshot%201.png"} 
                        height={48}
                        width={48} 
                        alt={"pic"} 
                    />
                </div>
                <div className="uppercase font-[500] text-[1.125rem] text-[#696969] flex flex-col leading-none">
                    <div>steve adler</div>
                    <div>cto of fan controlled football</div>
                </div>
            </div>
        </div>
    )
}