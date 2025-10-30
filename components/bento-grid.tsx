"use client";
import Image from "next/image";

export default function BentoGrid() {
    return (
        <div className="w-full grid grid-cols-7 mt-20 gap-2 px-[2.5%] 2xl:px-[8%]">
            <div className="col-span-3 w-full h-[780px] relative overflow-hidden cursor-pointer rounded-[45px]">
                <Image 
                    className="w-full hover:scale-115 transition-transform duration-300 scale-110 h-full absolute inset-0 object-cover rounded-[45px]"
                    width={804}
                    height={800} 
                    alt="Image1" 
                    src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68708292636719b853fff47b_wa-solutions-thumb2.jpg"} />
                <span className="absolute bottom-[5%] left-[5%] text-white font-[500] text-4xl">WA Solutions</span>
            </div>
            <div className="col-span-2 rounded-[45px] border border-neutral-300 uppercase text-sm flex font-[500] justify-center items-center text-center px-[10%]">
                From digital strategy, brand & user experience design, and full-stack development, our expertise empowers brands to look ahead and bring bold concepts to life.
            </div>
            <div className="relative w-full h-[780px] overflow-hidden col-span-2 cursor-pointer rounded-[45px]">
                <Image 
                    className="w-full h-full scale-110 hover:scale-115 trnasition-transform duration-300 absolute inset-0 object-cover rounded-[45px]" 
                    width={409}
                    height={800} 
                    alt="Image2" 
                    src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/6870843eefe9d2046a02afa9_karsten-winegeart-LFWIxEGvwiE-unsplash-p-2000.jpg"} 
                />
                <span className="absolute bottom-[5%] left-[7%] text-white font-[500] text-4xl">SeatGeek</span>
            </div>

            <div className="col-span-3 w-full uppercase text-sm font-[500] px-[10%] h-[780px] text-center flex justify-center items-center border border-neutral-300 relative overflow-hidden cursor-pointer rounded-[45px]">
                <div>
                    SAAS, gaming, finance, sports, logistics, fashion, insurance, fitness, e-commerce, security, information technology, <span className="font-extrabold uppercase">yes</span>
                </div>
            </div>
            <div className="relative w-full h-[780px] overflow-hidden col-span-2 cursor-pointer rounded-[45px]">
                <Image 
                    className="w-full h-full scale-110 hover:scale-115 trnasition-transform duration-300 absolute inset-0 object-cover rounded-[45px]" 
                    width={409}
                    height={800} 
                    alt="Image2" 
                    src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/67910c2c2cc903d0ea11cf9a_img-1-min.webp"} 
                />
                <span className="absolute bottom-[5%] left-[7%] text-white font-[500] text-4xl">Optix</span>
            </div>
            <div className="relative w-full h-[780px] overflow-hidden col-span-2 cursor-pointer rounded-[45px]">
                <Image 
                    className="w-full h-full scale-110 hover:scale-115 trnasition-transform duration-300 absolute inset-0 object-cover rounded-[45px]" 
                    width={409}
                    height={800} 
                    alt="Image2" 
                    src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/680fa3a1d652455f91de45bf_jackie-work-thumb.png"} 
                />
                <span className="absolute bottom-[5%] left-[7%] text-white font-[500] text-4xl">Jackie</span>
            </div>
            
        </div>
    )
}