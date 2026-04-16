"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { books } from "@/data/books";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const categories = [
  "Book writing services",
  "Book editing and formatting",
  "Cover Design Book",
  "Book Publishing",
];

export default function PortfolioPreview() {
  return (
    <section className="bg-background pt-24 lg:pt-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl space-y-6">
          <span className="font-heading text-lg font-medium italic text-primary/80">
            Looking For Expert Writers?
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Hire A Ghostwriter For Premium Services
          </h2>
          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed text-muted-foreground/90">
            Writing a book doesn't have to be overwhelming. When you hire a ghostwriter from our team, you get expert online book writers who guide the process, listen to your goals, and deliver high-quality work every step of the way. We work with you to develop your story, ensuring your distinctive tone of voice, and presenting your argument well and in a compelling way.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-semibold text-muted-foreground/60">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <button className="transition-colors hover:text-primary">
                {cat}
              </button>
              {idx < categories.length - 1 && <span className="text-border">|</span>}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="px-10 h-12 font-bold uppercase tracking-wider">
            Call Us
          </Button>
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="px-10 h-12 font-bold uppercase tracking-wider border-2 hover:bg-muted">
              View Our Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Marquee Grid with Up-Down Effect */}
      <div className="mt-20 relative -bottom-15">
        <Marquee gradient={false} speed={50}>
          <div className="flex items-start gap-10 pr-10">
            {books.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "group relative",
                  // Alternate push down effect
                  idx % 2 === 0 ? "mt-15" : "mt-0"
                )}
              >
                <div className="relative h-[400px] w-[270px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
