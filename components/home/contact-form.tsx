"use client"

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import illustration from "@/app/assets/contact-svg.svg";

export default function ContactForm() {
  return (
    <section className="bg-primary py-24 lg:py-32 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left: Whimsical Illustration */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[550px]">
              <div className="absolute inset-0 bg-accent/10 blur-[120px] rounded-full scale-110" />
              <Image
                src={illustration}
                alt="Author Consultation Illustration"
                fill
                className="object-contain relative z-10 drop-shadow-2xl animate-in fade-in duration-1000 slide-in-from-left-5"
              />
            </div>
          </div>

          {/* Right: Form Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Start Your Journey</span>
              <h2 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                Book a Free <br className="hidden lg:block" /> Author Consultation
              </h2>
              <p className="text-white/60 max-w-lg leading-relaxed mx-auto lg:mx-0 text-base md:text-lg">
                Your story deserves the world's attention. Let's discuss your project and find the
                perfect path to publication together.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Name</label>
                    <Input
                      placeholder="Enter your name"
                      className="h-14 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:ring-accent focus-visible:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Email</label>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="h-14 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:ring-accent focus-visible:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Phone (Optional)</label>
                  <Input
                    placeholder="Enter your phone number"
                    className="h-14 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:ring-accent focus-visible:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Project Details</label>
                  <textarea
                    placeholder="Tell us about your book..."
                    className="min-h-[120px] w-full rounded-xl border-white/10 bg-white/5 p-4 text-white placeholder:text-white/20 focus-visible:ring-accent outline-none focus:ring-2 focus:ring-accent focus:bg-white/10 transition-all text-sm"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full h-15 rounded-xl bg-accent px-8 font-bold text-primary-foreground hover:bg-accent/90 shadow-xl shadow-accent/20 transition-all active:scale-95"
                >
                  Confirm Registration
                </Button>

                <p className="text-[10px] text-center text-white/30 uppercase tracking-widest pt-2">
                  Strictly Professional Secrecy Guaranteed
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
