import Image from "next/image";
import writerImg from "@/app/assets/details-writer.png";

export default function OurStory() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Image Side */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl">
            <Image 
              src={writerImg} 
              alt="Professional writer at work" 
              fill 
              className="object-cover" 
            />
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none" />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-bold text-primary md:text-5xl leading-tight">
                A Decade of Literary <br /> Excellence
              </h2>
              <div className="h-1 w-20 bg-accent" />
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Founded on the belief that great stories change lives, US Book Authors has grown 
                from a small collective of elite editors to a premier global publishing force. 
                We have spent the last ten years helping visionaries, industry leaders, and 
                dreamers transform their ideas into beautifully crafted manuscripts.
              </p>
              <p>
                Our team is comprised of award-winning ghostwriters, veteran editors from top-tier 
                publishing houses, and master designers who understand that a book is more than 
                just words on a page—it is a legacy.
              </p>
              <p className="italic font-serif text-primary/80">
                "We don't just write books; we curate experiences that resonate across 
                generations."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
