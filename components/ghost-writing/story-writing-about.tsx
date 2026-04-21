import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronsRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItem {
    icon: LucideIcon;
    value: string;
    label: string;
}

interface AboutSectionProps {
    title: string | React.ReactNode;
    description: React.ReactNode;
    image: StaticImageData | string;
    stats?: StatItem[];
    reverse?: boolean;
}

export default function AboutSection({
    title,
    description,
    image,
    stats = [],
    reverse = false
}: AboutSectionProps) {
    return (
        <section className="py-10 bg-background font-sans overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    reverse && "lg:flex lg:flex-row-reverse lg:gap-24"
                )}>

                    {/* Content Column */}
                    <div className={cn(
                        "space-y-8 animate-in fade-in duration-1000",
                        reverse ? "slide-in-from-right-5" : "slide-in-from-left-5"
                    )}>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
                            {title}
                        </h2>
                        <div className="space-y-6 text-muted-foreground/80 leading-relaxed text-lg">
                            {description}
                        </div>

                        {/* Stats Row (Optional) */}
                        {stats.length > 0 && (
                            <div className="grid grid-cols-3 gap-8 py-8 border-y border-border">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                                        <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
                                            <stat.icon className="size-5" />
                                        </div>
                                        <div>
                                            <div className="text-xl md:text-2xl font-bold text-foreground leading-none mb-1">{stat.value}</div>
                                            <div className="text-[10px] md:text-xs font-bold text-muted-foreground/60 uppercase tracking-widest leading-tight">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg">
                                Get Started
                                <ChevronsRight className="size-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Free Consultation
                            </Button>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className={cn(
                        "relative group animate-in fade-in duration-1000 delay-200",
                        reverse ? "slide-in-from-left-5" : "slide-in-from-right-5",
                        reverse ? "lg:flex-1" : ""
                    )}>
                        {/* Decorative Background Accents */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10 group-hover:-bottom-8 group-hover:-right-8 transition-all duration-500 blur-[1px]" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass">
                            <Image
                                src={image}
                                alt="About Highlight Image"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}