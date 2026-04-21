"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import web1 from "@/app/assets/web-1.png";
import web2 from "@/app/assets/web-2.png";
import web3 from "@/app/assets/web-3.png";
import web4 from "@/app/assets/web-4.png";
import web5 from "@/app/assets/web-5.png";

const websites = [
    { src: web1, alt: "Author Website Design 1" },
    { src: web2, alt: "Author Website Design 2" },
    { src: web3, alt: "Author Website Design 3" },
    { src: web4, alt: "Author Website Design 4" },
    { src: web5, alt: "Author Website Design 5" },
];

export default function AuthorWebsites() {
    return (
        <section className="bg-background py-6 overflow-hidden">
            <div className="container mx-auto px-2 lg:px-10">
                <div className="mb-4">
                    <h2 className="text-xl font-bold leading-tight text-foreground md:text-2xl">
                        Author Websites
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
                            {websites.map((item, idx) => (
                                <CarouselItem key={idx} className="pl-3 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                                    <div className="relative group overflow-hidden border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-md rounded-sm">
                                        <div className="relative aspect-3/4 w-full">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                className="object-contain object-top p-0.5 transition-transform duration-700 group-hover:scale-105"
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
