import Image from "next/image";
import { Button } from "@/components/ui/button";
import ctaBg from "@/app/assets/cta-bg.png";
import book4 from "@/app/assets/books/Book-4.png";
import book3 from "@/app/assets/books/Book-3.png";

export default function CTA() {
  return (
    <section className="py-5 lg:py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden bg-black px-5 py-10 lg:px-20 lg:py-15">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={ctaBg}
              alt="Scenic Hillside"
              fill
              className="object-cover opacity-60"
            />
            {/* Warm Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
            {/* Left Content */}
            <div className="max-w-xl space-y-6 text-white text-center lg:text-left">
              <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Ready to Publish <br />
                Your Masterpiece?
              </h2>
              <p className="max-w-md text-[15px] leading-relaxed text-white/80">
                Join a community of successful authors who trusted Prestige Books Publishers
                to bring their stories to the world with quality and care.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/80 hover:text-black px-5">
                  Get Started
                </Button>
                <Button size="lg" variant="secondary" className="px-5">
                  Call Us
                </Button>
              </div>
            </div>

            {/* Right Content: Tilted Books */}
            <div className="relative hidden lg:flex h-full w-full max-w-[300px] items-center justify-center">
              <div className="relative h-[300px] w-full">
                {/* Front Book */}
                <div className="absolute right-0 top-1/2 z-20 w-[70%] -translate-y-1/2 rotate-3 drop-shadow-2xl">
                  <Image src={book4} alt="Featured Book" className="rounded-sm shadow-2xl" />
                </div>
                {/* Back Book */}
                <div className="absolute left-0 top-1/2 z-10 w-[65%] -translate-y-1/2 -rotate-6 opacity-60 blur-[0.5px]">
                  <Image src={book3} alt="Background Book" className="rounded-sm shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
