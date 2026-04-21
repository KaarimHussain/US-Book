"use client"
import { ChevronDown } from "lucide-react";

import Image from "next/image";
import bg from "@/app/assets/cta-bg.png";

export default function PortfolioHero() {
  const scrollToGrid = () => {
    const element = document.getElementById("portfolio-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center bg-black pt-50 pb-20">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Portfolio Hero Background"
        fill
        priority
        className="object-cover opacity-60"
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs animate-in fade-in slide-in-from-bottom-3 duration-700">
            The Collection
          </span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl leading-tight animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Literary <span className="text-accent italic font-medium">Excellence</span>
          </h1>
          <p className="text-white/70 max-w-6xl mx-auto text-sm md:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            A curated selection of manuscripts transformed into world-class legacies.
          </p>
        </div>

        <div className="flex justify-center pt-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-700">
          <button
            onClick={scrollToGrid}
            className="group flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors"
          >
            <div className="p-2 border border-white/10 rounded-full group-hover:border-accent group-hover:text-accent transition-all animate-bounce">
              <ChevronDown size={18} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
