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
        <div className="mx-auto space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Hire A Ghostwriter For Premium Services
          </h2>
          <p className="mx-auto text-lg leading-relaxed text-muted-foreground/90">
            Bring your story to life with our expert ghostwriting services. We guide you from concept to a polished manuscript, ensuring your unique voice shines through in a compelling, high-quality book.
          </p>
        </div>

        {/* Category Badges - Funky & Professional */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {categories.map((cat, idx) => {
            const variant = idx % 3;
            const colorClass =
              variant === 0 ? "bg-primary/10 border-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-primary/30" :
                variant === 1 ? "bg-secondary/15 border-secondary/20 text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground hover:shadow-secondary/30" :
                  "bg-accent/10 border-accent/10 text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-accent/30";

            const dotClass =
              variant === 0 ? "bg-primary/40 group-hover:bg-primary-foreground/60" :
                variant === 1 ? "bg-secondary-foreground/40 group-hover:bg-secondary-foreground/70" :
                  "bg-accent/40 group-hover:bg-accent-foreground/60";

            return (
              <div
                key={cat}
                className={cn(
                  "group px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border-2 cursor-default select-none",
                  colorClass,
                  idx % 3 === 0 ? "-rotate-1" : idx % 2 === 0 ? "rotate-2" : "-rotate-2"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className={cn("h-1.5 w-1.5 rounded-full transition-colors duration-300", dotClass)} />
                  {cat}
                </span>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="px-10 h-12 font-bold uppercase tracking-wider">
            Call Us
          </Button>
          <Link href="/portfolio">
            <Button
              size="lg"
              className="px-10 h-12 font-bold uppercase tracking-wider bg-secondary text-white border-0 shadow-lg shadow-secondary/20 hover:bg-accent transition-all"
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
              <Link key={idx} href={"/portfolio"}>
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
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
