"use client";
import { useRef } from "react";
import Landing from "@/pages/landing";
import ProofOfWork from "@/pages/proof-of-work";
import { containerContext } from "@/utils/context/containerContext";
import Headline from "@/components/headline";
export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={containerRef} className="w-full overflow-x-hidden h-fit flex flex-col justify-center items-center">
      <containerContext.Provider value={containerRef}>
        <Landing />
        <ProofOfWork />
      </containerContext.Provider>
    </div>
  );
}