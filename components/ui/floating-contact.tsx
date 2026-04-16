"use client";

import { Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingContact() {
  const scrollToContact = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-1.5 pr-0">
      {/* Phone Button */}
      <a
        href="tel:+13152390990"
        className={cn(
          "group flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-3 py-2 shadow-xl transition-all hover:bg-white hover:pr-4",
          "border-y border-l border-border rounded-l-full"
        )}
      >
        <span className="max-w-0 overflow-hidden text-[10px] font-bold uppercase tracking-widest text-primary transition-all group-hover:max-w-xs">
          +1 315 239 0990
        </span>
        <div className="bg-accent p-1.5 rounded-full text-primary-foreground">
          <Phone className="size-3.5" />
        </div>
      </a>

      {/* Let's Talk Button */}
      <button
        onClick={scrollToContact}
        className={cn(
          "group flex items-center gap-2.5 bg-primary/95 backdrop-blur-md px-3 py-2 shadow-xl transition-all hover:bg-primary hover:pr-4",
          "border-y border-l border-primary/20 rounded-l-full"
        )}
      >
        <span className="max-w-0 overflow-hidden text-[10px] font-bold uppercase tracking-widest text-white transition-all group-hover:max-w-xs">
          Let's Talk
        </span>
        <div className="bg-accent p-1.5 rounded-full text-primary-foreground">
          <MessageSquare className="size-3.5" />
        </div>
      </button>
    </div>
  );
}
