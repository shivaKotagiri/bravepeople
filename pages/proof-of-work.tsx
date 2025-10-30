"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BentoGrid from "@/components/bento-grid";
import ChallengesSection from "@/components/challenges";
import Carousel from "@/components/carounsel";
import Testimonial from "@/components/ui/testimonial";


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
          start: "18% top",
          end: "bottom 20%",
          markers: true,
          toggleActions: "play reverse play reverse",
        },
        duration: 0.35,
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="w-full px-[2.5%] 2xl:px-[8%]">
      <BentoGrid />
      <ChallengesSection />
      <Carousel />
      <Testimonial />
    </div>
  );
}
