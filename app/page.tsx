"use client";
import About from "@/components/about";
import Hero from "@/components/hero";
import BentoGrid from "@/components/bento-grid";
import Carousel from "@/components/carounsel";

export default function Home() {
  return (
    <div className="w-full max-w-[2000px] h-fit px-[3%] 2xl:px-[8%]">
      <Hero />
      <About />
      <BentoGrid />
      <Carousel />
    </div>
  );
}