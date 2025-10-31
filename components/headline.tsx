"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { containerContext } from "@/utils/context/containerContext";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Headline() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useContext(containerContext);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.set("#text1", { xPercent: -15 });
    gsap.set("#text2", { xPercent: 25 });
    gsap.set("#text3", { xPercent: -15 });

    const baseScroll = {
      trigger: sectionRef.current,
      scroller: containerRef?.current || "body",
      scrub: true,
      markers: true,
      end: "bottom top",
      toggleActions: "play none none reverse",
    };

    gsap.to("#text1", {
      xPercent: 15,
      ease: "power4.inOut",
      scrollTrigger: {
        ...baseScroll,
        start: "top 5%",
      },
    });

    gsap.to("#text2", {
      xPercent: -15,
      ease: "power4.inOut",
      scrollTrigger: {
        ...baseScroll,
        start: "top 10%",
      },
    });

    gsap.to("#text3", {
      xPercent: 15,
      ease: "power4.inOut",
      scrollTrigger: {
        ...baseScroll,
        start: "top 20%",
      },
    });
  });

  return (
    <div ref={sectionRef} className="w-full pt-[15%] will-change-transform flex justify-center">
      <div
        ref={textRef}
        style={{ WebkitTextStroke: "5px" }}
        className="flex flex-col text-[25vw] font-[400] uppercase leading-[75%]"
      >
        <div id="text1">Expect</div>
        <div id="text2">Brave</div>
        <div id="text3">Results</div>
      </div>
    </div>
  );
}
