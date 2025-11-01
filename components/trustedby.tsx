"use client";
import { logos } from "@/utils/data/logos";
import Image from "next/image";
export default function TrustedBy() {
    return (
        <div className="grid lg:grid-cols-4 grid-cols-3 w-full h-screen mt-[20%] md:mt-[10%] px-[3%] 2xl:px-[5%]">
            {logos.map((logo, index) => (
                <div key={index} className="col-span-1 h-fit w-auto relative max-w-[325px] max-h-[230px]">
                    <Image className="absolute inset-0 h-fit w-auto object-cover" width={325} height={230} src={logo} alt={logo} />
                </div>
            ))}
        </div>
    )
}