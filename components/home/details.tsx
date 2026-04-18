import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import writerImg from "@/app/assets/details-writer.png";

export default function Details() {
  return (
    <section className="bg-background py-10 lg:py-15">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Image with Funky/Professional Enhancements */}
          <div className="relative group perspective-1000">
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 rounded-xl bg-accent/20 -rotate-3 transition-transform duration-700 group-hover:rotate-0" />

            <div className="relative aspect-square overflow-hidden rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
              <Image
                src={writerImg}
                alt="Professional Book Writer"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-sm p-5 shadow-2xl border border-white/20 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    %
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Premium Quality</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Elite Book Writing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-5.5xl">
                Professional <span className="bg-primary px-3 text-primary-foreground">Book Writers</span> for Book Writing That Promises to Turn Your Dream into a Massively Successful Reality!
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
