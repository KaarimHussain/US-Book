"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, PenTool, BookOpen, Palette, Megaphone, Share2, Globe,
  Headphones, Users, Layout, Rocket, CheckCheck, Baby, ShoppingCart
} from "lucide-react";
import typewriterDeco from "@/app/assets/typewriter-deco.png";
import BookSvg from "@/app/assets/book-svg.svg";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Book Writing",
    desc: "Transform your specialized knowledge or story into a professionally written book.",
    icon: <PenTool className="size-6 text-primary" />,
    link: "/services/book-writing"
  },
  {
    title: "Ghostwriting",
    desc: "Your story, our words. Professional authors who capture your voice perfectly.",
    icon: <Users className="size-6 text-primary" />,
    link: "/services/ghostwriting"
  },
  {
    title: "Book Editing",
    desc: "From developmental editing to line editing, we polish your prose to perfection.",
    icon: <BookOpen className="size-6 text-primary" />,
    link: "/services/book-editing"
  },
  {
    title: "Proofreading",
    desc: "Ensuring zero errors in spelling, grammar, and punctuation before launch.",
    icon: <CheckCheck className="size-6 text-primary" />,
    link: "/services/editing-and-proofreading"
  },
  {
    title: "Book Publishing",
    desc: "Complete guidance through the complexities of professional publishing.",
    icon: <Rocket className="size-6 text-primary" />,
    link: "/services/book-publishing"
  },
  {
    title: "Amazon Publishing",
    desc: "Mastering KDP to ensure your book stands out on the world's largest platform.",
    icon: <ShoppingCart className="size-6 text-primary" />,
    link: "/services/amazon-publishing"
  },
  {
    title: "Children's Publishing",
    desc: "Specialized design and publishing services for the young reader market.",
    icon: <Baby className="size-6 text-primary" />,
    link: "/services/children-book-publishing"
  },
  {
    title: "Audiobook Production",
    desc: "Professional narration and technical production for top-tier audiobooks.",
    icon: <Headphones className="size-6 text-primary" />,
    link: "/services/audiobook-publishing"
  },
  {
    title: "Global Distribution",
    desc: "Getting your book onto shelves and digital platforms around the globe.",
    icon: <Globe className="size-6 text-primary" />,
    link: "/services/global-distribution"
  },
  {
    title: "Cover Design",
    desc: "Award-winning covers that grab attention and drive sales.",
    icon: <Palette className="size-6 text-primary" />,
    link: "/services/book-cover-design"
  },
  {
    title: "Interior Formatting",
    desc: "Professional layout design for print and all e-book devices.",
    icon: <Layout className="size-6 text-primary" />,
    link: "/services/formatting"
  },
  {
    title: "Book Marketing",
    desc: "Strategic promotion to reach your target audience and bestseller lists.",
    icon: <Megaphone className="size-6 text-primary" />,
    link: "/services/book-marketing"
  }
];

export default function Services() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary py-10 lg:py-20 lg:pt-15">
      {/* Decorative Typewriter - Left */}
      <div className="absolute -left-20 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
        <Image
          src={typewriterDeco}
          alt="Vintage Typewriter"
          width={400}
          className="-rotate-45 scale-125 pointer-events-none select-none"
        />
      </div>

      {/* Decorative Book - Right (Scroll Entrance) */}
      <div
        className={cn(
          "absolute -right-20 top-0 hidden opacity-30 lg:block transition-all duration-1000 ease-out pointer-events-none select-none",
          isInView ? "right-10 opacity-30 scale-125 rotate-12" : "-right-64 opacity-0"
        )}
      >
        <Image
          src={BookSvg}
          alt="Decorative Book"
          width={400}
          className="pointer-events-none select-none"
        />
      </div>

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Professional Book Services <br />
              Tailored For Every Author
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              From the first word to the bestseller list, we provide the elite resources you need to succeed.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between space-y-6 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <div className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-transform group-hover:rotate-12 group-hover:bg-primary/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>

              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground transition-all hover:text-primary">
                Read More
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
