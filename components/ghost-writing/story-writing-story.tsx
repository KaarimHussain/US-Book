import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface NarrativeSectionProps {
  title: string;
  descLeft: React.ReactNode;
  descRightTop: React.ReactNode;
  descRightBottom: React.ReactNode;
  image: StaticImageData | string;
  listTitle?: string;
  listItems?: string[];
}

export default function NarrativeSection({
  title,
  descLeft,
  descRightTop,
  descRightBottom,
  image,
  listTitle,
  listItems = []
}: NarrativeSectionProps) {
  return (
    <section className="py-24 bg-background font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Heading */}
        <div className="mb-16 animate-in fade-in slide-in-from-top-5 duration-1000">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Narrative + Visual */}
          <div className="space-y-12 animate-in fade-in slide-in-from-left-5 duration-1000">
            <div className="space-y-6 text-muted-foreground/80 leading-relaxed text-lg">
              {descLeft}
            </div>

            {/* Image Block with Offset Backdrop */}
            <div className="relative group">
               <div className="absolute -bottom-5 -right-5 w-full h-full bg-primary/10 rounded-2xl -z-10 group-hover:-bottom-7 group-hover:-right-7 transition-all duration-500" />
               <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-muted/20">
                 <Image 
                   src={image} 
                   alt="Narrative Visual Support" 
                   fill 
                   className="object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none" />
               </div>
            </div>
          </div>

          {/* Right Column: Commitment + Optional List Section */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-5 duration-1000 delay-200">
            <div className="space-y-6 text-muted-foreground/80 leading-relaxed text-lg">
              {descRightTop}
            </div>

            {/* Optional List Section */}
            {listItems.length > 0 && (
              <div className="space-y-5">
                {listTitle && (
                  <h4 className="text-foreground font-bold text-lg border-l-4 border-accent pl-4">
                    {listTitle}
                  </h4>
                )}

                {/* Animated Skill Bullets */}
                <ul className="space-y-4">
                  {listItems.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-center group/item transition-all duration-300 hover:translate-x-3">
                      <div className="size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)] transition-all group-hover/item:bg-accent group-hover/item:scale-125" />
                      <span className="text-muted-foreground font-medium group-hover/item:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-6 text-muted-foreground/80 leading-relaxed text-lg pt-4">
              {descRightBottom}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}