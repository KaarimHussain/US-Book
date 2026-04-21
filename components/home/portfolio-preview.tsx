"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { books } from "@/data/books";
import Link from "next/link";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const categories = [
  "Book Writing",
  "Ghostwriting",
  "Editing & Proofreading",
  "Book Cover Design",
  "Formatting",
  "Publishing Assistance",
  "Book Marketing",
  "Author Website",
  "Public Relations",
];

export default function PortfolioPreview() {
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
    <section ref={sectionRef} className="bg-background pt-10 lg:pt-15 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Hire A Ghostwriter For Premium Services
          </h2>
          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed text-muted-foreground/90">
            Writing a book doesn't have to be overwhelming. When you hire a ghostwriter from our team, you get expert online book writers who guide the process, listen to your goals, and deliver high-quality work every step of the way. We work with you to develop your story, ensuring your distinctive tone of voice, and presenting your argument well and in a compelling way.
          </p>
        </div>

        {/* Category Badges - Funky & Professional */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {categories.map((cat, idx) => (
            <div
              key={cat}
              className={cn(
                "px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border-2 cursor-default select-none",
                "bg-muted/30 border-muted-foreground/10 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-white hover:shadow-xl",
                idx % 3 === 0 ? "-rotate-1" : idx % 2 === 0 ? "rotate-2" : "-rotate-2"
              )}
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                {cat}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="px-10 h-12 font-bold uppercase tracking-wider">
            Call Us
          </Button>
          <Link href="/portfolio">
            <Button
              size="lg"
              className="px-10 h-12 font-bold uppercase tracking-wider bg-accent text-white border-0 shadow-lg shadow-primary/20 hover:bg-primary transition-all"
            >
              View Our Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Carousel Grid with Up-Down Effect */}
      <div className="mt-20 relative -bottom-15">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          <CarouselContent className="ml-0 flex items-start">
            {[...books, ...books].map((item, idx) => (
              <CarouselItem
                key={`${item.title}-${idx}`}
                className="basis-auto pl-10"
              >
                <div
                  className={cn(
                    "group relative",
                    // Alternate push down effect
                    idx % 2 === 0 ? "mt-15" : "mt-0"
                  )}
                >
                  <div className="relative h-[400px] w-[270px] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="270px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
