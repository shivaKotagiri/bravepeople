import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="w-screen h-fit px-[8%] overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
}
