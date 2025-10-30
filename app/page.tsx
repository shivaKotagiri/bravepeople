"use client";
import BentoGrid from "@/components/bento-grid";
import Carousel from "@/components/carounsel";
import { useRef } from "react";
import Testimonial from "@/components/ui/testimonial";
import Landing from "@/pages/landing";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={containerRef} className="w-full overflow-x-hidden h-fit flex flex-col justify-center items-center px-[2.5%] 2xl:px-[8%]">
      <Landing containerRef={containerRef} />
      <BentoGrid />
      <Carousel />
      <Testimonial />
    </div>
  );
}