"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Carousel() {
    const lists = [{
        number: "01",
        text: "Solve mission-critical business problems—every single month.",
        img: "/carousel1.webp"
    }, {
        number: "02",
        text: "Execute internal projects without disrupting internal bandwidth.",
        img: "/carousel2.webp"
    }, {
        number: "03",
        text: "Expand your creative capabilities without the stress of hiring.",
        img: "/carousel3.webp"
    }, {
        number: "04",
        text: "Drive new revenue because of better design and engineering.",
        img: "/carousel1.webp"
    }, {
        number: "05",
        text: "Find a partner (instead of a vendor) that executes your vision.",
        img: "/carousel2.webp"
    }, ]
    return (
        <div className="mt-30">
            <div className="bg-black border border-neutral-400 text-white p-10 lg:p-20 rounded-[50px] w-full h-[665px] selection:bg-white selection:text-black">
                <div className="uppercase mb-[2rem] pr-[5%] text-[80px] lg:text-[100px] font-normal leading-none">
                    Ask yourself — What if you could:
                </div>
                <div 
                    className="w-full flex flex-col"
                    style={{ cursor: 'url("https://cdn.prod.website-files.com/658031e408a50a76013e5183/65b134bb5f9e4c283d76c055_Mouse%20Grab-01.svg"), auto',}}>
                    <div className="w-full flex gap-20">
                        {lists.map((list, index) => (
                            <div key={index} className="relative max-w-[400px] max-h-[400px] rounded-[40px] lg:max-w-[432px] lg:max-h-[432px] w-full h-full flex justify-center items-center">
                                <Image 
                                    className="z-5 rounded-[30px] lg:rounded-[40px] lg:w-[432px] lg:h-[432px] w-full h-full inset-0 bottom-0 max-w-[432px] max-h-[432px]"
                                    src={list.img} width={432} height={432} alt="carousel1" 
                                />
                                <div className="z-7 inset-0 bottom-0 flex flex-col justify-center px-[3rem] absolute">
                                    <div className="text-2xl tracking-tight mb-[2rem]">{list.number}</div>
                                    <div className="text-2xl font-normal w-full">{list.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex text-white mt-5">
                        <ArrowLeft className="stroke-[0.8]" size={70} />
                        <ArrowRight className="stroke-[0.8]" size={70} />
                    </div>
                </div>
            </div>
        </div>
    )
}