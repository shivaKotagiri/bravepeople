/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Challenge {
  number: string
  title: string
  description: string
}

const challenges: Challenge[] = [
  {
    number: "01",
    title: "Your Focus Is Split",
    description:
      "You don't have the time, energy, or resources to implement your ideas and don't want to reassign your internal team from core tasks to work on new initiatives.",
  },
  {
    number: "02",
    title: "Hiring Is Hard",
    description:
      "Expanding your team with full-time employees is time-consuming and expensive. Then there's culture—hiring the right fit adds another layer of complexity.",
  },
  {
    number: "03",
    title: "Gaps In Expertise",
    description:
      "You have a strong design team, but some projects demand niche expertise or additional support to bring your vision to life seamlessly.",
  },
  {
    number: "04",
    title: "Stuck in Echo Chambers",
    description:
      "You're looking for fresh outside perspective in areas like brand strategy, UX, UI, and beyond. You need an integrated thought partner who doesn't just consult but executes.",
  },
]


export default function ChallengesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return
    const items = itemsRef.current
    items.forEach((item, index) => {
      if (!item) return
      const setActive = (idx: number, el: HTMLDivElement) => {
        setActiveIndex(idx)
        gsap.to(el, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" })
        items.forEach((otherItem, otherIndex) => {
          if (otherIndex !== idx && otherItem) {
            gsap.to(otherItem, { opacity: 0.3, scale: 0.95, duration: 0.6, ease: "power2.out" })
          }
        })
      }
      const trigger = ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(index, item),
        onEnterBack: () => setActive(index, item),
      })
      return () => trigger.kill()
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[90rem] mx-auto mt-10 pl-16 pr-4 relative"
      style={{
        fontFamily: "PP Neue Montreal, sans-serif",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      }}
    >
      <div className="pt-[20vh] pb-[40vh]">
        <div className="w-full max-w-5xl leading-none pb-2.5">
          <div className="relative z-[2] w-full">
            <div className="mb-16 w-full font-family-pp-mori">
              <h2 className="text-[6rem] font-[400] mb-6 text-[#f9f9f9] leading-none uppercase">
                Your biggest challeng &nbsp;es don&apos;t scare us
              </h2>
              <p className="text-2xl text-white leading-relaxed max-w-2xl">
                Big or small, 5 employees or 5,000, most organizations face the same challenges at different scales:
              </p>
            </div>
          </div>
          <div
            className="absolute top-0 bottom-0 left-0 w-px h-full mx-auto z-[1]"
            style={{
              backgroundColor: "silver",
              backgroundImage:
                "linear-gradient(180deg, black, black 0%, #414141 10%, #414141 68%, #414141 90%, black)",
              mixBlendMode: "difference",
            }}
          />
        </div>
      </div>
    </div>
  )
}
