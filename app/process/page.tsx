"use client"

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, PenTool, BookOpen, Palette, Megaphone,
  Rocket, Search, CheckCircle2, Globe, Headphones,
  Sparkles, Layers, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import bg from "@/app/assets/contact-hero-bg.png"; // Unique background for process
import CTA from "@/components/home/cta";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    highlight: "The Foundation",
    desc: "Every great book begins with a deep dive. We analyze your vision, target audience, and market trends to build a strategic roadmap for your bestseller.",
    icon: <Search className="size-8 text-accent" />,
    features: ["Project Scope Definition", "Market Competition Analysis", "Genre Positioning"]
  },
  {
    number: "02",
    title: "Ghostwriting & Creative Development",
    highlight: "The Narrative",
    desc: "Our elite ghostwriters translate your ideas into world-class prose. We focus on capturing your unique voice while ensuring structural brilliance.",
    icon: <PenTool className="size-8 text-accent" />,
    features: ["Captured Voice Methodology", "Chapter-by-Chapter Feedback", "Confidential Authorship"]
  },
  {
    number: "03",
    title: "Editorial Excellence",
    highlight: "The Polish",
    desc: "Profound polishing by editors from the world's leading publishing houses. We refine every sentence for impact, clarity, and flawless execution.",
    icon: <BookOpen className="size-8 text-accent" />,
    features: ["Developmental Editing", "Line-level Refinement", "Zero-Tolerance Proofreading"]
  },
  {
    number: "04",
    title: "Artistic Design & Formatting",
    highlight: "The Visuals",
    desc: "We create genre-defining covers and professional interior layouts that make an immediate psychological impact on potential readers.",
    icon: <Palette className="size-8 text-accent" />,
    features: ["Award-Winning Cover Art", "Multi-Device Formatting", "Psychological Market Design"]
  },
  {
    number: "05",
    title: "Strategic Global Publishing",
    highlight: "The Launch",
    desc: "We manage the technical complexity of global distribution, ensuring your book is perfectly poised for the bestseller charts on Amazon and beyond.",
    icon: <Rocket className="size-8 text-accent" />,
    features: ["KDP & IngramSpark Setup", "ISBN & Metadata Optimization", "Global Distribution Logistics"]
  },
  {
    number: "06",
    title: "Growth & Targeted Marketing",
    highlight: "The Scale",
    desc: "The journey doesn't end at launch. We implement strategic promotional campaigns and PR moves to scale your author brand globally.",
    icon: <Megaphone className="size-8 text-accent" />,
    features: ["Author Website Launch", "Social Media Strategy", "Bestseller List Campaigns"]
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf6]">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center bg-black pt-50 pb-20">
        <Image src={bg} alt="Process Roadmap Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/70 bg-linear-to-t from-primary/90 to-transparent" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <div className="mx-auto space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[11px] animate-in fade-in slide-in-from-bottom-5 duration-700">
              Our Blueprint
            </span>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white leading-tight animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              A Pro Path From <span className="text-accent italic">Concept</span> To Bestseller
            </h1>
            <p className="text-white/70 max-w-6xl mx-auto text-lg md:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 font-sans">
              Our elite 6-step methodology combines traditional publishing quality with modern
              strategic velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section className="py-10 lg:py-15">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-20 lg:space-y-24">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-10 lg:flex-row lg:items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image/Visual Column - Compact */}
                <div className="w-full lg:w-[45%]">
                  <div className="relative aspect-16/10 bg-white shadow-xl rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-[150px] lg:text-[200px] font-black text-black/3 select-none tracking-tighter">
                        {step.number}
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 space-y-3">
                      <div className="h-12 w-12 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                        <div className="scale-75">
                          {step.icon}
                        </div>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-black uppercase tracking-widest text-accent">{step.highlight}</p>
                        <h3 className="text-xl text-primary">{step.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-[55%] space-y-6">
                  <div className="space-y-4">
                    <div className="h-0.5 w-12 bg-accent rounded-full" />
                    <p className="text-lg leading-relaxed text-muted-foreground/80 font-medium italic">
                      "{step.desc}"
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 group">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                        <span className="text-[13px] font-bold text-primary/70 tracking-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="link" className="px-0 h-auto text-accent text-[11px] font-black uppercase tracking-[0.2em] hover:text-primary transition-all group">
                    Explore this stage
                    <ArrowRight className="ml-1.5 size-3 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar Section - Compact */}
      <section className="bg-white py-16 border-y border-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="space-y-3">
              <div className="flex justify-center md:justify-start">
                <ShieldCheck className="size-8 text-accent" />
              </div>
              <h4 className="text-base font-sans font-bold">100% Confidential</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">Rigorous protocols to protect your identity and property.</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center md:justify-start">
                <Layers className="size-8 text-accent" />
              </div>
              <h4 className="text-base font-sans font-bold">Total Authorship</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">You maintain all rights, royalties, and ownership.</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center md:justify-start">
                <Sparkles className="size-8 text-accent" />
              </div>
              <h4 className="text-base font-sans font-bold">VIP VIP Service</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">A dedicated manager for every milestone of the journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Reusing Homepage CTA Component */}
      <CTA />
    </main>
  );
}
