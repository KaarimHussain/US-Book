"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import brand1 from "@/app/assets/brands/brand-1.png";
import brand2 from "@/app/assets/brands/brand-2.png";
import brand3 from "@/app/assets/brands/brand-3.png";
import brand4 from "@/app/assets/brands/brand-4.png";
import brand5 from "@/app/assets/brands/brand-5.png";
import brand6 from "@/app/assets/brands/brand-6.png";
import brand7 from "@/app/assets/brands/brand-7.png";
import brand8 from "@/app/assets/brands/brand-8.png";

const brandLogos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

export default function Brands() {
  return (
    <section className="bg-accent py-10 overflow-hidden">
      <div className="container mx-auto">
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
          <CarouselContent className="flex items-center">
            {brandLogos.map((logo, idx) => (
              <CarouselItem key={idx} className="basis-1/2 md:basis-1/4 lg:basis-1/6 pl-12 md:pl-16">
                <div
                  className="group relative h-10 w-40 grayscale brightness-200 transition-all hover:grayscale-0"
                >
                  <Image
                    src={logo}
                    alt={`Partner Brand ${idx + 1}`}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
            {/* Repeat items for better loop continuity in wide viewports */}
            {brandLogos.map((logo, idx) => (
              <CarouselItem key={`extra-${idx}`} className="basis-1/2 md:basis-1/4 lg:basis-1/6 pl-12 md:pl-16">
                <div
                  className="group relative h-10 w-40 grayscale brightness-200 transition-all hover:grayscale-0"
                >
                  <Image
                    src={logo}
                    alt={`Partner Brand scroll ${idx + 1}`}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
