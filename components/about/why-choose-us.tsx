"use client"

import React from "react";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content Column */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-4">
              <h2 className="font-heading text-6xl lg:text-8xl font-black text-[#c49a2d] leading-none uppercase tracking-tighter">
                About Us
              </h2>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary/70">
                YOUR ULTIMATE GHOSTWRITING & BOOK EDITING PARTNER
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-[15px] lg:text-[17px] font-medium max-w-xl">
              <p>
                Ghostwriters Publishing is home to elite ghostwriting services, expert editors,
                and publishing pros dedicated to helping authors bring their stories to life.
                From concept to print, we provide comprehensive book writing support designed
                to captivate, inform, and inspire.
              </p>
              <p>
                Whether you're an aspiring author or an experienced voice seeking help, our
                team of seasoned writers and book publishing professionals is here to guide
                you every step of the way—from writing and editing to final distribution.
              </p>
              <p className="text-primary font-bold">
                Turn your story into a published success—this is where it starts.
              </p>
            </div>

            <Button className="bg-[#c49a2d] hover:bg-[#b08a28] text-white font-bold py-7 px-10 rounded-lg text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#c49a2d]/20 h-auto">
              LET'S START WRITING
            </Button>
          </div>

          {/* Right Video Column */}
          <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
            <video
              src="/assets/about-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}


