"use client";

import { useMenuStore } from "@/store/menu";
import Navbar from "../navbar";
import WorkWithUs from "./work-with-us";

export default function NavMenu({ children }: { children: React.ReactNode }) {
    const { menuOpen } = useMenuStore();
    const navOptions = ["Services", "About", "Work", "Insights", "Careers"];
    return (
        <div>
            { menuOpen ? 
                <div className="pt-5 bg-black text-white flex flex-col items-center text-9xl font-semibold w-screen h-screen">
                    <Navbar />
                    <div className="w-full h-full text-center flex justify-center items-center mt-30 md:capitalize uppercase">
                        <div style={{ WebkitTextStrokeWidth: "1px"}} className="flex flex-col items-center gap-13 w-[95%] h-full text-[3rem] font-[400]">
                            {navOptions.map((option) => (
                                <div key={option}>{ option }</div>
                            ))}
                            <div className="w-full mt-3 flex justify-center">
                                <WorkWithUs backgroundColor="bg-white" textColor="text-black" width="w-[95%]" textSize="text-base" padding="py-[30px]" />
                            </div>
                        </div>
                    </div>
                </div>
                :children
            }
        </div>
    )
}