"use client"

import Image from "next/image";
import typewriterImg from "@/app/assets/typewriter-deco.png";

const milestones = [
  {
    number: "01",
    title: "Founding Vision",
    desc: "We started with a simple belief: every story deserves to be heard. Our founders set out to build a creative sanctuary where authors' voices are prioritized over industry numbers."
  },
  {
    number: "02",
    title: "Empowering Authors",
    desc: "Over the years, we've empowered thousands of indie and first-time authors by providing high-end editorial resources usually reserved for traditional publishing giants."
  },
  {
    number: "03",
    title: "Scaling Heights",
    desc: "By integrating cutting-edge eBook conversion and global distribution tech, we transformed from a local writing studio into a global publishing powerhouse."
  },
  {
    number: "04",
    title: "Leading the Industry",
    desc: "Today, US Book Authors stands as a leader in ghostwriting and independent publishing, consistently delivering bestsellers and building lasting legacies for our clients."
  }
];

export default function AboutHistory() {
  return (
    <section className="bg-white py-10 lg:py-15 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Decorative Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse duration-[10000ms]" />
            <Image
              src={typewriterImg}
              alt="Vintage Typewriter Legacy Illustration"
              className="w-full h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Timeline/Milestones */}
          <div className="space-y-12 relative">
            <div className="absolute left-6 top-4 bottom-4 w-px bg-black/5 lg:block hidden" />

            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-0 lg:pl-16 space-y-3 group">
                {/* Number Circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-black text-sm absolute -left-0 top-0 lg:-left-0 shadow-lg z-10 transition-transform group-hover:bg-accent ring-8 ring-white">
                  {milestone.number}
                </div>

                <div className="space-y-2 pt-1 lg:pt-0 pl-16 lg:pl-0">
                  <h3 className="text-xl font-bold text-primary tracking-tight md:text-2xl uppercase">
                    {milestone.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-muted-foreground/80 font-medium">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
