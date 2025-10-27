"use client";
import Hero from "@/components/hero";
import BentoGrid from "@/components/bento-grid";
import Carousel from "@/components/carounsel";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={containerRef} className="w-full overflow-x-hidden h-fit flex flex-col justify-center items-center">
      <Hero containerRef={containerRef} />
      <BentoGrid />
      <Carousel />
    </div>
  );
}