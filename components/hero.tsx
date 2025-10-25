"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="h-fit">
            <div className="mt-5">
                <Image alt="logo" width={192} height={24} src={"/logo.svg"} />
            </div>
            <div className="-translate-x-3 mt-30 relative tracking-tighter font-pp-mori uppercase font-normal text-[138px] w-fit h-fit">
                <div className="flex items-center gap-5 justify-start inset-0">
                    <div className="leading-25 z-2 mr-45">launch</div>
                    <div className="w-[171px] h-[96px] absolute left-[40%]">
                        <Image alt="logo" 
                            className="z-0 rounded-[100px] object-cover"
                            fill
                            src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68bc614a66517b375079c7d1_d469d7a20ddc11d8df488b498873aa0c_bravepeople-teaser-reel.gif"} 
                        />
                    </div>
                    <div className="leading-0 z-2">digital</div>
                </div>
                <div className="flex gap-5 justify-start inset-0">
                    <div className="leading-none z-2 mr-20">experien­ces</div>
                    <div className="absolute w-[220] h-[211] top-[15%] left-[60%]">
                        <Image alt="logo" 
                            className="z-0 h-auto hover:opacity-80 object-cover"
                            fill
                            src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68bcc2070b51d06488307d3a_683cf5a69ff407866c3051b9e5aded55_iPhone_15_Pro_Max_10-1-copy-main2-1465x980-p-1080.jpg"} 
                        />
                    </div>
                    <div className="leading-none z-2">that</div>
                </div>
                <div className="flex gap-5 justify-start inset-0">
                    <div className="leading-25 z-2 mr-20">shape</div>
                    <div className="absolute w-[204px] h-[155px] top-[60%] left-[27%]">
                        <Image alt="logo" 
                            className=" z-0 hover:opacity-80 object-cover"
                            fill
                            src={"https://cdn.prod.website-files.com/658031e408a50a76013e5183/68840d2477f6c7d14380dd64_rccl-watch2-p-800.jpg"} 
                        />
                    </div>
                    <div className="leading-25 z-2 tracking-tighter">the future.</div>
                </div>
            </div>
        </div>
    )
}