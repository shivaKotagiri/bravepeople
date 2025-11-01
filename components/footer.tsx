"use client";
import { ChangeEvent, useState } from "react";
import { company, discover, learn } from "@/utils/data/footer";
import FooterLinks from "./ui/footer-links";
import Logo from "./ui/logo";

export default function Footer() {
    const [mail, setMail] = useState("Your email here");
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setMail(e.target.value);
    }
    return (
        <div className="bg-black text-white pt-20 px-[3%] 2xl:px-[8%]">
            <div className="py-15"><Logo /></div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="max-w-lg selection:bg-white selection:text-black text-4xl font-[500] mb-10">
                        Get valuable strategy, culture, and brand insights straight to your inbox.
                    </div> 
                    <div className="flex gap-1 mb-10">
                        <input 
                            className="focus:outline-none bg-white p-3 text-gray-500 font-[500]"
                            onChange={handleInput} 
                            onFocus={() => setMail("")} 
                            type="text" 
                            value={mail}
                        />
                        <button className="bg-[#1A1A1A] cursor-pointer text-white p-3 border-none rounded-sm">Subscribe</button>
                    </div>
                    <div className="selection:bg-[#404040] selection:text-black text-neutral-600 max-w-[570px] mb-10">
                        By signing up to receive emails from Brave People, you agree to our Privacy Policy. We treat your info responsibly. Unsubscribe anytime.
                    </div>
                </div>
                <div className="flex justify-between gap-25">
                    <FooterLinks name="Company" lists={company} />
                    <FooterLinks name="Discover" lists={discover} />
                    <FooterLinks name="Learn" lists={learn} />
                </div>
            </div>
            <hr className="text-neutral-600 my-5" />
            <div className="selection:bg-[#404040] selection:text-black text-neutral-600 w-full flex justify-between text-sm mb-10">
                <div>©2025 BRAVE PEOPLE</div>
                <div className="uppercase hover:text-white cursor-pointer transition-colors duration-300">Back to top</div>
            </div>
        </div>
    )
}