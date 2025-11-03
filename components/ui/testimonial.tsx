/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useContext, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { containerContext } from "@/utils/context/containerContext"; 

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Testimonial() {
  const containerRef = useContext(containerContext);
  const textRef = useRef<HTMLDivElement | null>(null);
  
  useGSAP(() => {
    if (!textRef.current) {
      return;
    }

    const text = textRef.current;
    const split = new SplitText(text, {
      type: "words",
      wordsClass: "word",
    });


    const scrollTriggerConfig: any = {
      trigger: text,
      start: "top 50%",
      end: "bottom 50%",
      scrub: 1,
      // onEnter: () => console.log("ScrollTrigger entered"),
      // onLeave: () => console.log("ScrollTrigger left"),
      // onUpdate: (self: any) => console.log("Progress:", self.progress),
    };

    if (containerRef?.current) {
      scrollTriggerConfig.scroller = containerRef.current;
      console.log("Using custom scroller");
    } else {
      console.log("Using window as scroller");
    }

    const animation = gsap.fromTo(
      split.words,
      { opacity: 0.3 },
      {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: scrollTriggerConfig,
      }
    );

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      split.revert();
      animation.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [containerRef]);

  return (
    <div className="w-full mx-auto h-fit lg:pt-20 pb-[20%]">
      <div
        ref={textRef}
        style={{ WebkitTextStroke: "0.5px" }}
        className="mb-15 mx-auto w-full font-[400] md:leading-none leading-tight text-white text-[2rem] md:text-[3.5rem] lg:text-[5rem]"
      >
        &quot;The Brave People team has done a masterful job at capturing the essence
        of FCF and projecting it through our site, mobile apps and branding
        elements. Always game for the next challenge, they continue to work
        closely with our product, tech and marketing groups under aggressive
        timelines to deliver creative which consistently exceeds expectations
        and delights our fans. Simply put, Brave People crushes it.&quot;
      </div>

      <div className="flex gap-3 items-center">
        <div className="h-[50px] w-[50px] rounded-full relative">
          <Image
            className="rounded-full h-full w-full object-cover inset-0 absolute"
            src="https://cdn.prod.website-files.com/658031e408a50a76013e5183/68708c314208a7a24e201324_steve-adler-headshot%201.png"
            height={48}
            width={48}
            alt="Steve Adler headshot"
          />
        </div>
        <div className="uppercase font-[500] text-[1.125rem] text-[#696969] flex flex-col leading-none">
          <div>steve adler</div>
          <div>cto of fan controlled football</div>
        </div>
      </div>
    </div>
  );
}