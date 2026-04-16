import { books } from "@/data/books";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BannerCards() {
    return (
        <>
            <section className="bg-background pt-20">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Top Banners */}
                    <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Banner 1: Dark */}
                        <div className="relative flex h-[350px] overflow-hidden rounded-xl bg-black px-10 py-12 text-white transition-transform hover:scale-[1.01]">
                            {/* Background Image Layer */}
                            <Image src={books[0].image} alt="" fill className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

                            <div className="relative z-10 flex w-1/2 flex-col justify-center space-y-4">
                                <span className="text-accent/80 text-sm font-medium">From Classics to New</span>
                                <h3 className="font-heading text-3xl font-bold leading-tight">Get Noticed With <br /> Book Publishing <br /> Services</h3>
                                <Button variant="outline" className="w-max bg-white text-black hover:bg-white/90 font-bold px-6 border-none">
                                    Lets Get Started
                                </Button>
                            </div>
                            <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center p-4">
                                <Image src={books[0].image} alt="Main Seller" fill className="object-contain scale-90 translate-x-10 rotate-3 drop-shadow-2xl" />
                            </div>
                        </div>

                        {/* Banner 2: Light */}
                        <div className="relative flex h-[350px] overflow-hidden rounded-xl border border-border/50 bg-[#e8e2d4] px-10 py-12 text-foreground transition-transform hover:scale-[1.01]">
                            {/* Background Image Layer */}
                            <Image src={books[1].image} alt="" fill className="object-cover opacity-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#e8e2d4] via-[#e8e2d4]/40 to-transparent" />

                            <div className="relative z-10 flex w-1/2 flex-col justify-center space-y-4">
                                <span className="text-muted-foreground text-sm font-medium">Chapter by Chapter</span>
                                <h3 className="font-heading text-3xl font-bold leading-tight">Smart Strategies <br /> For Marketing <br /> Your Book</h3>
                                <Button className="w-max bg-secondary text-primary-foreground font-bold px-8">
                                    Chat With Us
                                </Button>
                            </div>
                            <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center p-4">
                                <Image src={books[1].image} alt="Main Seller" fill className="object-contain scale-95 translate-x-10 -rotate-2 drop-shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}