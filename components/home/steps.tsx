"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface StepData {
  number: string;
  title: string;
  desc: string;
}

const defaultSteps = [
  {
    number: "1",
    title: "Sign Up",
    desc: "Firstly, you have to register with The Publishing Genie to get started on your published author journey with expert help.",
  },
  {
    number: "2",
    title: "Research & Draft",
    desc: "Secondly, our book genie will gather information and start putting your ideas on paper by drafting your book, developing your story through clear direction.",
  },
  {
    number: "3",
    title: "First Chapter",
    desc: "Write and edit your first chapter to set the tone and interest readers with a great opening.",
  },
  {
    number: "4",
    title: "Editing & Proofreading",
    desc: "Read through and proofread your manuscript to get clarity, accuracy, and a clean final manuscript, professional in finish.",
  },
  {
    number: "5",
    title: "Typesetting & Designing",
    desc: "Format your manuscript and design an attractive look that makes reading and presenting your book easy and enjoyable.",
  },
  {
    number: "6",
    title: "Publishing & Promotion",
    desc: "Finally, our book genie will publish your book on different sites and promote your book for reaching a wider audience and getting noticed.",
  },
];

export default function Steps({ customSteps }: { customSteps?: StepData[] }) {
  const steps = customSteps || defaultSteps;
  return (
    <section className="bg-primary py-10 lg:py-15 overflow-hidden">
      <div>
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary-foreground/80 mb-4 font-sans">The Publishing Process</p>
          <h2 className="text-4xl font-heading font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Success In 6 Simple Steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-0 border-t border-primary-foreground/10">
          {defaultSteps.map((step, idx) => (
            <div
              key={idx}
              className={cn(
                "group flex items-center py-12 border border-primary-foreground/10 transition-all duration-500 hover:bg-white/5 px-4",
              )}
            >
              {/* Number and Vertical Divider */}
              <div className="flex items-center gap-8 shrink-0">
                <span className="text-6xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-none">
                  {step.number}
                </span>
                <div className="h-16 w-px bg-primary-foreground/30" />
              </div>

              {/* Content */}
              <div className="pl-4 md:pl-2">
                <h3 className="mb-3 text-xl md:text-2xl font-heading font-bold text-primary-foreground transition-all group-hover:translate-x-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-primary-foreground/70 max-w-sm font-sans">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-10 text-center">
          <Button className="h-15 px-10 py-4 bg-accent hover:bg-primary-foreground hover:text-primary transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-xs text-accent-foreground">
            Start Your Journey Now
          </Button>
        </div>
      </div>
    </section>
  );
}
