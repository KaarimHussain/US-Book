import { books } from "@/data/books";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const banners = [
    {
        title: <h3 className="font-heading text-2xl leading-tight">Get Noticed With <br /> Book Publishing <br /> Services</h3>,
        subtitle: "From Classics to New",
        buttonText: "Lets Get Started",
        image: books[0].image,
        className: "bg-black text-white",
        subColor: "text-accent/80",
        btnVariant: "default" as const,
        btnClass: "bg-accent text-black hover:bg-white/90 border-none",
        overlay: "bg-gradient-to-r from-black via-black/40 to-transparent"
    },
    {
        title: <h3 className="font-heading text-2xl leading-tight">Smart Strategies <br /> For Marketing <br /> Your Book</h3>,
        subtitle: "Chapter by Chapter",
        buttonText: "Chat With Us",
        image: books[1].image,
        className: "bg-[#e8e2d4] text-foreground border border-border/50",
        subColor: "text-muted-foreground",
        btnVariant: "default" as const,
        btnClass: "bg-secondary text-primary-foreground",
        overlay: "bg-gradient-to-r from-[#e8e2d4] via-[#e8e2d4]/40 to-transparent"
    },
    {
        title: <h3 className="font-heading text-2xl leading-tight">Elite Authors <br /> For Your <br /> Ghostwriting</h3>,
        subtitle: "Your Vision, Our Pen",
        buttonText: "Hire Expert",
        image: books[2].image,
        className: "bg-primary text-primary-foreground",
        subColor: "text-white/70",
        btnVariant: "default" as const,
        btnClass: "bg-white text-black hover:bg-white/80",
        overlay: "bg-gradient-to-r from-primary via-primary/60 to-transparent"
    },
    {
        title: <h3 className="font-heading text-2xl leading-tight">Polish Your <br /> Manuscript To <br /> Perfection</h3>,
        subtitle: "Editor's Choice",
        buttonText: "Get Free Review",
        image: books[3].image,
        className: "bg-accent text-white",
        subColor: "text-white/80",
        btnVariant: "default" as const,
        btnClass: "bg-black text-white hover:bg-black/90",
        overlay: "bg-gradient-to-r from-accent via-accent/60 to-transparent"
    }
];

export default function BannerCards() {
    return (
        <section className="bg-background py-10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {banners.map((banner, idx) => (
                        <div
                            key={idx}
                            className={`group relative flex h-[250px] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl ${banner.className} p-8 lg:p-10`}
                        >
                            {/* Background Image Layer */}
                            <Image
                                src={banner.image}
                                alt=""
                                fill
                                className="object-cover opacity-15 grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            />
                            <div className={`absolute inset-0 ${banner.overlay}`} />

                            <div className="relative z-10 flex w-full md:w-1/2 flex-col justify-center space-y-4">
                                <span className={`${banner.subColor} text-xs font-bold uppercase tracking-widest`}>
                                    {banner.subtitle}
                                </span>
                                {banner.title}
                                <Button
                                    variant={banner.btnVariant}
                                    className={`w-max font-bold px-5 ${banner.btnClass}`}
                                >
                                    {banner.buttonText}
                                </Button>
                            </div>

                            {/* Floating Book Image */}
                            <div className="absolute right-0 top-0 hidden h-full w-1/2 items-center justify-center p-4 md:flex">
                                <div className="relative h-full w-full">
                                    <Image
                                        src={banner.image}
                                        alt="Featured Book"
                                        fill
                                        className={`object-contain transition-all duration-700 group-hover:scale-105 ${idx % 2 === 0 ? "rotate-6 translate-x-8" : "-rotate-6 translate-x-8"
                                            } drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
