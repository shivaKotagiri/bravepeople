"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText)

interface Props {
    backgroundColor: string,
    textColor: string,
    hover_bg?: string,
    hover_text?: string,
    width: string,
    textSize: string, 
    padding: string,
}
export default function WorkWithUs({ backgroundColor, textColor, hover_bg, hover_text, width, textSize, padding }: Props) {
    const [hover, setHover] = useState<boolean>(false);
    const textRef = useRef<HTMLDivElement | null>(null);
    const splitRef = useRef<HTMLDivElement | null>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);


    useGSAP(() => {
        if (!textRef.current || !splitRef.current) return;

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
            stagger: { amount: 0.03, from: "center" },
            ease: "power3.inOut"
        }, "-=0.25");

        return () => {
            timelineRef.current?.kill();
            splits1.revert();
            splits2.revert();
        };
    }, []); 

    useGSAP(() => {
        if (!timelineRef.current) return;
        
        if (hover) {
            timelineRef.current.play();
        } else {
            timelineRef.current.reverse();
        }
    }, [hover]);
    return (
        <div 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            className={`hover:${hover_bg} overflow-hidden relative font-[500] transition-colors duration-300 hover:${hover_text} border cursor-pointer ${padding} rounded-[2rem] ${backgroundColor} ${textSize} ${textColor} flex justify-center items-center ${width}`}
        >
            <div ref={splitRef} className="absolute inset-0 flex justify-center items-center z-0">work &nbsp;with&nbsp; us</div>
            <div ref={textRef} className="absolute inset-0 flex justify-center items-center z-10">work &nbsp;with&nbsp; us</div>
        </div>
    )
}