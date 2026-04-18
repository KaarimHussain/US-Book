import Image from "next/image";
import writerImg from "@/app/assets/details-writer.png";

export default function OurStory() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Image Side - Compact */}
          <div className="relative aspect-[16/10] lg:aspect-square w-full overflow-hidden rounded-xl shadow-xl">
            <Image 
              src={writerImg} 
              alt="Professional writer at work" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-heading text-3xl font-bold text-primary md:text-5xl leading-tight">
                A Decade of Literary <br /> Excellence
              </h2>
              <div className="h-0.5 w-16 bg-accent" />
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Founded on the belief that great stories change lives, US Book Authors has grown 
                from a small collective of elite editors to a premier global publishing force. 
              </p>
              <p>
                Our team is comprised of award-winning ghostwriters, veteran editors from top-tier 
                publishing houses, and master designers who understand that a book is more than 
                just words on a page—it is a legacy.
              </p>
              <div className="pt-2">
                <p className="italic font-serif text-primary/80 border-l-2 border-accent/20 pl-4 py-1">
                  "We don't just write books; we curate experiences that resonate across 
                  generations."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
