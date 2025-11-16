"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BentoGrid from "@/components/bento-grid";
import ChallengesSection from "@/components/challenges";
import Carousel from "@/components/carounsel";
import Part3 from "./part3";
import Footer from "@/components/footer";


gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { backgroundColor: "#F9F9F9", color: "black" },
      {
        backgroundColor: "black",
        color: "white",
        scrollTrigger: {
          trigger: el,
          start: "10% top",
          end: "bottom",
          toggleActions: "play reverse play reverse",
        },
        duration: 0.35,
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="w-full flex flex-col">
      <div className="w-full px-[3.5%] lg:px-[5%] xl:px-[8%]">
        <BentoGrid />
        <ChallengesSection />
        <Carousel />
      </div>
      <Part3 />
      <Footer />
    </div>
  );
}
