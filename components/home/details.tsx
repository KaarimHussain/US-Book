import Image from "next/image";
import { Button } from "@/components/ui/button";
import writerImg from "@/app/assets/details-writer.png";

export default function Details() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left: Image */}
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
              src={writerImg}
              alt="Professional Book Writer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-5.5xl">
                Professional <span className="bg-primary px-3 text-primary-foreground">Book Writers</span> for Book Writing That Promises to Turn Your Dream into a Massively Successful Reality!
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  We have the expertise to give your brilliant ideas and riveting storylines the literary treatment they deserve, which enables you to transform your original ideas into a publishable bestseller that entertains, connects, sells, and gets optioned.
                </p>
                <p>
                  Our custom book writers weave the information in a way that falls nothing short of a creative storytelling, while maintaining professionalism. With the industry on your side, every step of the publishing process is guided.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 font-bold uppercase tracking-wide">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 font-bold uppercase tracking-wide border-2">
                Live Chat
              </Button>
              <Button size="lg" className="h-14 px-8 font-bold uppercase tracking-wide bg-primary/90 hover:bg-primary">
                Call Us +1 (929) 610-6586
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
