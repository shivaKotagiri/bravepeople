"use client";
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react";
import TextReveal from "./ui/text-reveal";


export default function Headline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-15%", "55%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["35%", "-35%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-55%", "35%"]);
  return (
    <div ref={sectionRef} className="flex flex-col w-full will-change-transform justify-center">
      <motion.div
        style={{ WebkitTextStroke: "5px" }}
        className="flex flex-col text-[25vw] font-[400] uppercase leading-[75%]"
      >
        <motion.div
          style={{x: x1}}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          id="text1">Expect</motion.div>
        <motion.div
          style={{x: x2}}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          id="text2">Brave</motion.div>
        <motion.div
          style={{x: x3}}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          id="text3">Results</motion.div>
      </motion.div>
      <div className="mt-15">
        <TextReveal onScrollAnimation={true}>
          <div className="text-2xl font-[500] max-w-md">We help ambitious teams build better, more connected experiences for web.</div>
        </TextReveal>
      </div>
    </div>
  );
}
