"use client"

import Image from "next/image";
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
import wreath from "@/app/assets/awards/wreath.png";

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
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex items-center justify-between">
            <h2 className="font-heading text-4xl font-bold text-foreground">
               Hear From Our Wise Authors
            </h2>
            <div className="hidden lg:flex gap-2">
               {/* Controls will be injected by Carousel */}
            </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx}>
                <div className="flex flex-col gap-8 md:flex-row md:items-start lg:gap-16 max-w-5xl mx-auto py-8">
                   {/* Author Image */}
                   <div className="relative h-[450px] w-full shrink-0 overflow-hidden rounded-sm shadow-2xl md:w-[350px]">
                      <div className="absolute left-0 top-0 z-10 bg-accent px-3 py-1 text-[11px] font-bold text-primary-foreground">
                         {t.badge}
                      </div>
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                   </div>

                   {/* Profile & Words */}
                   <div className="flex flex-col justify-center h-full space-y-8 py-4">
                      <div className="space-y-2">
                         <span className="text-[11px] font-bold uppercase tracking-widest text-accent">Author Success Story</span>
                         <h4 className="text-4xl font-bold text-foreground">{t.name}</h4>
                         <p className="text-base text-muted-foreground">{t.role}</p>
                      </div>
                      
                      <div className="relative">
                        <p className="text-xl italic leading-relaxed text-foreground/80">
                           "{t.quote}"
                        </p>
                      </div>

                      {/* Awards Section */}
                      <div className="space-y-4 pt-4 border-t border-border">
                         <h5 className="text-sm font-bold tracking-wide">Career Accolades</h5>
                         <div className="flex gap-8">
                            {t.awards.map((award, i) => (
                               <div key={i} className="flex flex-col items-center gap-2 text-center">
                                  <div className="relative h-16 w-16">
                                     <Image src={wreath} alt="Award" fill className="object-contain grayscale hover:grayscale-0 transition-all opacity-80" />
                                  </div>
                                  <span className="max-w-[70px] text-[9px] font-bold leading-tight">{award}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="mt-12 flex justify-end gap-3 lg:mt-0 lg:absolute lg:-top-24 lg:right-0">
             <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white text-black hover:bg-accent hover:text-primary-foreground border-border" />
             <CarouselNext className="static translate-y-0 h-12 w-12 bg-white text-black hover:bg-accent hover:text-primary-foreground border-border" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
