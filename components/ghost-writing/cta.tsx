import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GraphicCTAProps {
    title: React.ReactNode;
    description: string;
    imageLeft: StaticImageData | string;
    imageRight: StaticImageData | string;
    bgClass?: string;
    phoneNumber?: string;
}

export default function GraphicCTA({
    title,
    description,
    imageLeft,
    imageRight,
    bgClass = "bg-primary",
    phoneNumber = "(855) 282-9779"
}: GraphicCTAProps) {
    return (
        <section className={cn("py-5 relative font-sans border-y border-white/5", bgClass)}>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left Illustration */}
                    <div className="hidden lg:block w-1/4 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="relative aspect-square">
                            <Image
                                src={imageLeft}
                                alt="Branding Illustration Left"
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="flex-1 text-center space-y-6 animate-in fade-in duration-1000 flex flex-col items-center justify-center h-[350px]">
                        <div className="space-y-3">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
                                {title}
                            </h2>
                            <p className="text-white/70 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-1">
                            <Button size="sm">
                                Get Started
                                <ChevronsRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                            </Button>

                            <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="flex items-center gap-3 text-white hover:text-accent transition-all duration-300 font-bold group">
                                <div className="p-2 bg-accent rounded-full group-hover:bg-white transition-all shadow-md ring-1 ring-white/10">
                                    <Phone className="size-3.5 text-white group-hover:text-primary" />
                                </div>
                                <span className="text-sm md:text-base hover:text-black">{phoneNumber}</span>
                            </a>

                            <Button size="sm" variant="outline" className="text-white">
                                <MessageSquare className="size-3.5" />
                                Live Chat
                            </Button>
                        </div>
                    </div>

                    {/* Right Decoration */}
                    <div className="hidden lg:block w-1/4 animate-in fade-in duration-1000">
                        <div className="relative aspect-[3/4]">
                            <Image
                                src={imageRight}
                                alt="Branding Illustration Right"
                                className="object-contain drop-shadow-[20px_20px_60px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:-rotate-2"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative BG Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-white" />
            </div>
        </section>
    );
}