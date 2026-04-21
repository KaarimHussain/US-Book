"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import cover1 from "@/app/assets/cover-1.jpg";
import cover2 from "@/app/assets/cover-2.png";
import cover3 from "@/app/assets/cover-3.png";
import cover4 from "@/app/assets/cover-4.png";
import cover5 from "@/app/assets/cover-5.png";
import cover6 from "@/app/assets/cover-6.png";

const covers = [
    { src: cover1, alt: "Doris Book Cover" },
    { src: cover2, alt: "Silent Fear Book Cover" },
    { src: cover3, alt: "Full Cover Design" },
    { src: cover4, alt: "Hardcover Book Design" },
    { src: cover5, alt: "Katie Loftis Book Cover" },
    { src: cover6, alt: "Paperback Design" },
];

export default function BookCoverDesign() {
    return (
        <section className="bg-background py-6 overflow-hidden">
            <div className="container mx-auto px-2 lg:px-10">
                <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
                        Book Cover Design
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
                            {covers.map((item, idx) => (
                                <CarouselItem key={idx} className="pl-3 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="relative group overflow-hidden border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-md rounded-sm">
                                        <div className="relative aspect-4/3 w-full">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-cover p-0.5 transition-transform duration-700 group-hover:scale-105"
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
