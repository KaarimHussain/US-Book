"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import bg from "@/app/assets/contact-hero-bg.png";

export default function ManuscriptPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center">
        <Image src={bg} alt="Manuscript Submission Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-primary/90 to-transparent" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[11px] animate-in fade-in slide-in-from-bottom-5 duration-700">
              Submit Your Work
            </span>
            <h1 className="font-heading text-4xl font-bold text-white md:text-6xl leading-tight animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              Manuscript Upload Form
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 font-sans">
              Take the first step toward becoming a published author. Share your vision with us, and we'll help bring it to life with professional editorial care.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="container mx-auto max-w-4xl -mt-20 relative z-20 pb-20 px-4">
        <Card className="border-t-4 border-t-primary shadow-2xl overflow-hidden bg-white/95 backdrop-blur-md border-x-0 border-b-0 md:border-x md:border-b">
          <div className="bg-muted/30 border-b py-8 text-center px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
              Begin Your Journey
            </h2>
          </div>
          
          <CardContent className="p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Name Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[15px] font-semibold text-foreground/80 flex items-center gap-1">
                    First Name <span className="text-accent">*</span>
                  </label>
                  <Input 
                    type="text" 
                    placeholder="First Name" 
                    className="h-12 border-input focus:ring-primary focus:border-primary transition-all bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-semibold text-foreground/80 flex items-center gap-1">
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Last Name" 
                    className="h-12 border-input focus:ring-primary focus:border-primary transition-all bg-background/50"
                  />
                </div>
              </div>

              {/* Contact Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[15px] font-semibold text-foreground/80 flex items-center gap-1">
                    Email <span className="text-accent">*</span>
                  </label>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="h-12 border-input focus:ring-primary focus:border-primary transition-all bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[15px] font-semibold text-foreground/80 flex items-center gap-1">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="h-12 border-input focus:ring-primary focus:border-primary transition-all bg-background/50"
                  />
                </div>
              </div>

              {/* Upload Section */}
              <div className="space-y-4">
                <label className="text-[17px] font-semibold text-primary">
                  Please upload your Manuscript
                </label>
                <div className="relative group">
                  <div className="border-2 border-dashed border-border rounded-xl p-10 text-center bg-muted/20 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all cursor-pointer">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 bg-card rounded-full shadow-sm group-hover:scale-110 transition-transform border border-border">
                        <Upload className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground/80">Browse Files</p>
                        <p className="text-sm text-muted-foreground">Drag and drop files here</p>
                      </div>
                      <Input 
                        type="file" 
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted p-3 rounded-md border border-border">
                  <span className="font-bold bg-primary text-primary-foreground px-2 py-1 rounded">Choose File</span>
                  <span>No file chosen</span>
                </div>
              </div>

              {/* Captcha Placeholder */}
              <div className="bg-muted/30 border border-border rounded-md p-4 flex items-center justify-between max-w-[300px]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 border-2 border-input bg-card rounded flex items-center justify-center cursor-pointer hover:border-primary/50">
                    <div className="content-['']" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                   <div className="w-8 h-8 relative opacity-70">
                    <svg viewBox="0 0 24 24" className="text-primary w-full h-full">
                      <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 2.3.8 4.4 2.1 6.1L4 21l2.9-.1C8.6 22.2 10.2 23 12 23a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8m-1-12v4h4v-4h-4m3 3h-2v-2h2v2m-3 2h4v4h-4v-4m3 3h-2v-2h2v2" />
                    </svg>
                   </div>
                   <span className="text-[10px] text-muted-foreground font-bold tracking-tighter uppercase">reCAPTCHA</span>
                   <div className="flex gap-1 text-[8px] text-muted-foreground/60">
                     <span>Privacy</span>
                     <span>-</span>
                     <span>Terms</span>
                   </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  className="w-full md:w-3/5 h-14 text-lg font-bold bg-primary hover:bg-accent text-primary-foreground transition-all duration-300 transform hover:scale-[1.02] shadow-xl rounded-lg uppercase tracking-wider bg-linear-to-r from-primary to-accent hover:from-accent hover:to-primary border-none"
                >
                  submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-sm border border-border">
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground">Secure Upload</h3>
                <p className="text-sm text-muted-foreground">Your manuscript is encrypted during transmission.</p>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-sm border border-border">
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground">Direct Delivery</h3>
                <p className="text-sm text-muted-foreground">Files go directly to our editorial department.</p>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-sm border border-border">
                <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground">Confidentiality</h3>
                <p className="text-sm text-muted-foreground">Complete privacy and IP protection guaranteed.</p>
            </div>
        </div>
      </div>
    </main>
  );
}
