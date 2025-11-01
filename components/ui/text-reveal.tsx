"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

interface Props {
    children: React.ReactNode,
    onScrollAnimation?: boolean,
    delay?: number
}

interface SplitTextInstance {
    lines: HTMLElement[],
    revert: () => void
}
gsap.registerPlugin(ScrollTrigger, SplitText);
export default function TextReveal({ children, onScrollAnimation = false, delay = 0 }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const splitRef = useRef<SplitTextInstance | null>(null);

    useGSAP(() => {
        if(!containerRef.current) return;
        if(splitRef && splitRef.current) return splitRef.current.revert();
        const split = new SplitText(containerRef.current, {
            linesClass: "split-line",
            type: "lines",
            mask: "lines",
        }) as unknown as SplitTextInstance;

        const lines = split.lines;

        gsap.set(lines, {
            yPercent: 500,
            opacity: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
            lineHeight: "0.75",
        });

        const animationProps = {
            yPercent: 0,
            duration: 1,
            ease: "power4.out",
            opacity: 1,
            stagger: 0.1,
            delay,
        }

        if(onScrollAnimation) {
            gsap.to(lines, {
                ...animationProps,
                scrollTrigger: {
                    start: "top 85%",
                    trigger: containerRef.current,
                    once: true
                }
            })
        } else {
            gsap.to(lines, animationProps);
        }

        splitRef.current = split;

        return () => {
            split.revert();
        };
    }, { dependencies: [onScrollAnimation, delay, children]})
    return (
        <div ref={containerRef} className="overflow-hidden leading-[75%] flex flex-col gap-0">
            { children }
        </div>
    )
}