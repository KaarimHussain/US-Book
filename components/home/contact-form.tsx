"use client"

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import illustration from "@/app/assets/contact-svg.svg";

export default function ContactForm() {
  return (
    <section id="contact-section" className="bg-primary py-5 lg:py-10 overflow-hidden relative">
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left: Illustration (Ultra-Compact) */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[700px]">
              <div className="absolute inset-0 bg-accent/10 blur-[80px] rounded-full" />
              <Image
                src={illustration}
                alt="Author Consultation Illustration"
                fill
                className="object-contain relative z-10 drop-shadow-lg"
              />
            </div>
          </div>

          {/* Right: Form Content (Ultra-Compact) */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="space-y-1 text-center lg:text-left">
              <h2 className="font-heading text-2xl text-white md:text-3xl">
                Free Consultation
              </h2>
              <p className="text-white/60 text-[13px] max-w-sm mx-auto lg:mx-0">
                Discuss your project with our publishing experts today.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 md:p-6 border border-white/10 shadow-lg">
              <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-black/40 uppercase tracking-widest pl-1">Name</label>
                    <Input
                      placeholder="Your name"
                      className="h-10 rounded-md border-black/10 bg-black/5 text-black placeholder:text-black/20 focus-visible:ring-accent text-[13px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-black/40 uppercase tracking-widest pl-1">Email</label>
                    <Input
                      placeholder="Your email"
                      type="email"
                      className="h-10 rounded-md border-black/10 bg-black/5 text-black placeholder:text-black/20 focus-visible:ring-accent text-[13px]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-black/40 uppercase tracking-widest pl-1">Project Details</label>
                  <textarea
                    placeholder="Briefly describe your book..."
                    className="min-h-[70px] w-full rounded-md border-black/10 bg-black/5 p-2.5 text-black placeholder:text-black/20 focus-visible:ring-accent outline-none focus:ring-1 focus:ring-accent focus:bg-white/10 transition-all text-[13px]"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full h-11 rounded-md bg-accent px-8 font-bold text-primary-foreground hover:bg-accent/90 shadow-lg shadow-accent/10 transition-all active:scale-95 text-xs"
                >
                  Book My Call
                </Button>

                <p className="text-[8px] text-center text-black/30 uppercase tracking-widest">
                  Private & Confidential Consultation
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
