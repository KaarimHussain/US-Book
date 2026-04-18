"use client"

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import Logo from "@/app/assets/Logo.png";

const footerLinks = {
  services: [
    { name: "Book Writing", href: "/services/book-writing" },
    { name: "Ghostwriting", href: "/services/ghostwriting" },
    { name: "Book Editing", href: "/services/book-editing" },
    { name: "Editing & Proofreading", href: "/services/editing-and-proofreading" },
    { name: "Book Publishing", href: "/services/book-publishing" },
    { name: "Amazon Publishing", href: "/services/amazon-publishing" },
    { name: "Children's Book Publishing", href: "/services/children-book-publishing" },
    { name: "Audiobook Publishing", href: "/services/audiobook-publishing" },
    { name: "Global Book Distribution", href: "/services/global-distribution" },
    { name: "Cover Design", href: "/services/book-cover-design" },
    { name: "Illustrations", href: "/services/illustrations" },
    { name: "Interior Formatting", href: "/services/formatting" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#fcfaf6] border-t border-black/5 pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 lg:gap-8">

          {/* Brand & Mission */}
          <div className="space-y-8 lg:col-span-1">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image src={Logo} alt="US Book Authors Logo" width={200} />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground/80 max-w-sm font-medium">
              We empower authors to share their voice with the world through elite ghostwriting, award-winning design, and global publishing strategies. Your legacy, professionally crafted.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="h-11 w-11 flex items-center justify-center rounded-xl bg-white border border-black/5 text-muted-foreground/60 hover:bg-accent hover:text-white hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-8">
              <h4 className="text-[15px] font-black uppercase tracking-[0.2em] text-primary font-sans">Services</h4>
              <ul className="grid grid-cols-1 gap-y-4">
                {footerLinks.services.slice(0, 7).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] font-bold text-muted-foreground/80 hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[15px] font-black uppercase tracking-[0.2em] text-primary font-sans">More Specialties</h4>
              <ul className="space-y-4">
                {footerLinks.services.slice(7).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] font-bold text-muted-foreground/80 hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-10 lg:col-span-1">
            <div className="space-y-6">
              <h4 className="text-[15px] font-black uppercase tracking-[0.2em] text-primary font-sans">Stay Inspired</h4>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-black/5 rounded-2xl px-6 h-14 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-muted-foreground/40"
                />
                <button className="absolute right-2 top-2 h-10 w-10 bg-accent text-white rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[15px] font-black uppercase tracking-[0.2em] text-primary font-sans">Connect</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="h-8 w-8 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin size={16} />
                  </div>
                  <span className="text-[13px] font-bold text-muted-foreground/80 leading-relaxed">
                    7901 4th St N STE 300, <br />St. Petersburg, FL 33702, USA
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-8 w-8 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Phone size={16} />
                  </div>
                  <span className="text-[13px] font-bold text-muted-foreground/80">+1 315 239 0990</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-5 border-t border-black/5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between items-center text-center md:text-left">
          <div className="space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/40">
              © {new Date().getFullYear()} US Book Authors. A Prestige Books Publication.
            </p>
          </div>
          <div className="flex gap-8">
            {footerLinks.company.map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-widest text-muted-foreground/40 hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
