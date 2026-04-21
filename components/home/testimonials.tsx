"use client"

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { books } from "@/data/books";
import author1 from "@/app/assets/authors/amelia-james.png";
import author2 from "@/app/assets/authors/oliver-white.png";
import wreath from "@/app/assets/icons/Award.png";

const testimonials = [
  {
    name: "Amelia James",
    role: "Senior News Writer at Search Engine Journal",
    image: author1,
    badge: "#1 New York Times",
    quote: "Prestige Books Publishers took my memoir from just an idea to a finished, professional book. They really paid attention to every detail and made the whole process feel personal. Now my story is reaching readers worldwide. I'm so thankful for their support!",
    authorBooks: [books[0], books[1]],
    awards: ["BOOKS AWARDS", "AUTHOR AWARDS", "BEST AWARDS"]
  },
  {
    name: "Oliver White",
    role: "Historical Fiction Author",
    image: author2,
    badge: "Wall Street Journal Bestseller",
    quote: "Finding a publisher who understands the soul of your story is rare. Prestige Books didn't just publish my work; they amplified it. Their marketing strategies and design sense are truly world-class.",
    authorBooks: [books[2], books[3]],
    awards: ["WRITING AWARDS", "FICTION AWARDS", "GOLD AWARDS"]
  }
];

export default function Testimonials() {
  return (
    <section className="bg-background py-10 lg:py-15">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex items-center justify-center">
          <h2 className="font-heading text-4xl font-bold text-foreground text-center">
            Hear From Our Wise Authors
          </h2>
          <div className="hidden lg:flex gap-2">
            {/* Controls will be injected by Carousel */}
          </div>
        </div>

        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="group relative md:w-[80%] mx-auto"
        >
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx}>
                <div className="flex flex-col gap-8 md:flex-row md:items-stretch lg:gap-20 py-8 select-none">
                  {/* Author Image */}
                  <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-xl shadow-2xl md:w-[450px]">
                    <div className="absolute left-0 top-0 z-10 bg-accent px-4 py-2 text-[12px] font-bold text-primary-foreground rounded-br-xl">
                      {t.badge}
                    </div>
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Profile & Words */}
                  <div className="flex flex-col justify-center space-y-10 py-6">
                    <div className="space-y-4">
                      <span className="text-[12px] font-black uppercase tracking-[0.2em] text-accent">Author Success Story</span>
                      <h4 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">{t.name}</h4>
                      <p className="text-lg text-muted-foreground font-medium">{t.role}</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-8 -top-8 text-8xl text-accent/10 font-serif">"</span>
                      <p className="text-xl italic leading-relaxed text-foreground/90 font-serif">
                        {t.quote}
                      </p>
                    </div>

                    {/* Awards Section */}
                    <div className="space-y-6 pt-5 border-t border-border/50">
                      <h5 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Career Accolades</h5>
                      <div className="flex flex-wrap gap-10">
                        {t.awards.map((award, i) => (
                          <div key={i} className="flex flex-col items-center gap-3 text-center group/award">
                            <div className="relative h-15 w-15 transition-transform group-hover/award:scale-110 duration-500">
                              <Image src={wreath} alt="Award" fill className="object-contain grayscale group-hover/award:grayscale-0 transition-all opacity-60 group-hover/award:opacity-100" />
                            </div>
                            <span className="max-w-[80px] text-[10px] font-bold leading-tight uppercase tracking-wider">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls - Positioned on sides */}
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-20 h-14 w-14 bg-white shadow-xl hover:bg-accent hover:text-white border-0" />
            <CarouselNext className="-right-20 h-14 w-14 bg-white shadow-xl hover:bg-accent hover:text-white border-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
