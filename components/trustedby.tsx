"use client";
import { logos } from "@/utils/data/logos";
import Image from "next/image";

export default function TrustedBy() {
    return (
        <div className="w-full my-[10%] md:my-[5%] px-[3%] 2xl:px-[5%] py-20">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 place-items-center">
                {logos.map((logo, index) => (
                    <div key={index} className="relative w-full h-auto flex items-center justify-center">
                        <Image 
                            className="w-full h-auto object-contain max-w-[200px] sm:max-w-[250px] lg:max-w-[325px]" 
                            width={325} 
                            height={230} 
                            src={logo} 
                            alt={`Logo ${index + 1}`} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}