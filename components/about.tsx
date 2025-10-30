"use client";

export default function About() {
    return (
        <div className="flex mb-10 items-center w-full">
            <div className="mt-25 w-full flex lg:flex-row justify-between">
                <div className="bg-black w-[254px] h-[33px] lg:min-w-[384px] lg:min-h-[104px] leading-none border text-start uppercase text-[17px] tracking-tighter border-black text-white hover:bg-white hover:text-black cursor-pointer transition-colors duration-350 px-10 max-w-[384px] py-8.5 rounded-[50px]">
                    Learn more about our design & partnership approach →
                </div>
                <div className="min-w-[15%]" />
                <div className="flex flex-col gap-5 border-t border-neutral-400 w-full">
                    <div className="pt-2 text-xs text-neutral-400">
                        Who We Are
                    </div> 
                    <div className="max-w-2xl text-[2rem] leading-[2.4rem] font-[500]">
                        ✺ Brave People is a strategic design partner to bold digital brands. We join your team, co-build your thing, and help bring it to the world.
                    </div>
                </div>
            </div>
        </div>
    )
}