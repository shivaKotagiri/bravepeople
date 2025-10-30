"use client";
import { useRef } from "react";
import Landing from "@/pages/landing";
import ProofOfWork from "@/pages/proof-of-work";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={containerRef} className="w-full overflow-x-hidden h-fit flex flex-col justify-center items-center">
      <Landing containerRef={containerRef} />
      <ProofOfWork />
    </div>
  );
}