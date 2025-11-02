"use client";
import { useEffect, useRef } from "react";
import Landing from "@/pages/landing";
import ProofOfWork from "@/pages/proof-of-work";
import { containerContext } from "@/utils/context/containerContext";
import { timelineContext } from "@/utils/context/timeline";
import gsap from "gsap";
export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  
  if(!timelineRef.current) {
    timelineRef.current = gsap.timeline({ paused: true })
  }

  useEffect(() => {
    if(timelineRef.current) {
      timelineRef.current.play();
    } 
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-hidden h-fit flex flex-col justify-center bg-[#F9F9F9] items-center">
      <containerContext.Provider value={containerRef}>
        <timelineContext.Provider value={timelineRef.current}>
          <Landing />
          <ProofOfWork />
        </timelineContext.Provider>
      </containerContext.Provider>
    </div>
  );
}