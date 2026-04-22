"use client"

import Image from "next/image";
import bg from "@/app/assets/contact-hero-bg.png"; // Unique background for process

export default function AboutMainHero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center bg-black pt-50 pb-20">
      <Image src={bg} alt="Process Roadmap Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/70 bg-linear-to-t from-primary/90 to-transparent" />
      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[11px] animate-in fade-in slide-in-from-bottom-5 duration-700">
            US Book Authors
          </span>
          <h1 className="font-heading text-4xl text-white md:text-6xl leading-tight animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Your professional writing, editing
            and publishing solution!
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 font-sans">
            Creative Innovative Professional
          </p>
        </div>
      </div>
    </section>
  );
}

