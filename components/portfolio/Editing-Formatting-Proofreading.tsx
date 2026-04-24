"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfter1 from "@/app/assets/before-after-1.png";
import beforeAfter2 from "@/app/assets/before-after-2.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function EditingFormattingProofreading() {
    return (
        <section className="bg-background py-10 overflow-hidden">
            <div className="container mx-auto px-2 lg:px-10">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl leading-tight text-foreground md:text-3xl">
                        Editing, Formatting & Proofreading
                    </h2>
                </div>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {[
                                { src: beforeAfter1, alt: "Manuscript 1" },
                                { src: beforeAfter2, alt: "Manuscript 2" },
                                { src: beforeAfter1, alt: "Manuscript 3" },
                                { src: beforeAfter2, alt: "Manuscript 4" },
                            ].map((item, idx) => (
                                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/2">
                                    <div className="relative group overflow-hidden border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                                        <div className="p-3 border-b border-border bg-muted/20 flex justify-between items-center px-6">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Before</span>
                                            <div className="h-px w-8 bg-border" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">After</span>
                                        </div>
                                        <div className="relative lg:aspect-12/10 xl:aspect-16/15 w-full">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-contain p-1"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 lg:-left-12">
                            <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-10 w-10 border-0 shadow-lg bg-white/90 hover:bg-primary hover:text-white transition-all" />
                        </div>
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 lg:-right-12">
                            <CarouselNext className="relative right-0 top-0 translate-y-0 h-10 w-10 border-0 shadow-lg bg-white/90 hover:bg-primary hover:text-white transition-all" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}