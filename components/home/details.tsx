import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import writerImg from "@/app/assets/details-writer.png";

export default function Details() {
  return (
    <section className="bg-background py-10 lg:py-15">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Simple Image Section */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl border border-border/50">
              <Image
                src={writerImg}
                alt="Professional Book Writer"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl leading-tight text-foreground md:text-5xl lg:text-5.5xl">
                Professional <span className="bg-primary px-3 text-primary-foreground">Book Writers</span> to Transform Your Vision into a Bestselling Reality!
              </h2>

              <ul className="space-y-4 pt-2">
                {[
                  "Transform your original ideas into publishable bestsellers.",
                  "Professional storytelling that entertains, connects, and sells.",
                  "Expert guidance through every step of the publishing process.",
                  "Ensured confidentiality and high-quality creative output.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-muted-foreground group">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:scale-125" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 font-bold uppercase tracking-wide">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 font-bold uppercase tracking-wide border-2">
                Live Chat
              </Button>
              <Button variant={"secondary"} size="lg" className="h-14 px-8 font-bold uppercase tracking-wide text-white">
                Call Us +1 (929) 610-6586
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
