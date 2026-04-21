"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import illus1 from "@/app/assets/illus-1.png";
import illus2 from "@/app/assets/illus-2.png";
import illus3 from "@/app/assets/illus-3.png";
import illus4 from "@/app/assets/illus-4.png";
import illus5 from "@/app/assets/illus-5.png";

const illustrations = [
    { src: illus1, alt: "Illustration Design 1" },
    { src: illus2, alt: "Illustration Design 2" },
    { src: illus3, alt: "Illustration Design 3" },
    { src: illus4, alt: "Illustration Design 4" },
    { src: illus5, alt: "Illustration Design 5" },
];

export default function Illustrations() {
    return (
        <section className="bg-background py-6 overflow-hidden">
            <div className="container mx-auto px-2 lg:px-10">
                <div className="mb-4">
                    <h2 className="text-xl font-bold leading-tight text-foreground md:text-2xl">
                        Illustrations
                    </h2>
                </div>

                <div className="relative px-2">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-3">
                            {illustrations.map((item, idx) => (
                                <CarouselItem key={idx} className="pl-3 basis-full lg:basis-1/2">
                                    <div className="relative group overflow-hidden border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-md rounded-sm">
                                        <div className="relative aspect-16/10 w-full bg-slate-50">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-contain p-0.5 transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 lg:-left-10">
                            <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-8 w-8 border-0 shadow-lg bg-white/95 hover:bg-primary hover:text-white transition-all" />
                        </div>
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 lg:-right-10">
                            <CarouselNext className="relative right-0 top-0 translate-y-0 h-8 w-8 border-0 shadow-lg bg-white/95 hover:bg-primary hover:text-white transition-all" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
