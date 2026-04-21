"use client"

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Send, Mail } from "lucide-react";
import Logo from "@/app/assets/Logo.png";

const footerLinks = {
  writingServices: [
    { name: "Story Writing", href: "/services/story-writing" },
    { name: "Song Writing", href: "/services/song-writing" },
    { name: "Memoir Writing", href: "/services/memoir-writing" },
    { name: "Non-Fiction Writing", href: "/services/non-fiction-writing" },
    { name: "Rhymes Writing", href: "/services/rhymes-writing" },
    { name: "Children's Book Writing", href: "/services/children-book-writing" },
    { name: "Biography Writing", href: "/services/biography-writing" },
    { name: "Business Writing", href: "/services/business-writing" },
    { name: "SEO Content Writing", href: "/services/seo-content-writing" },
    { name: "Hip Hop Writing", href: "/services/hip-hop-writing" },
    { name: "Script Writing", href: "/services/script-writing" },
    { name: "Narrative Writing", href: "/services/narrative-writing" },
    { name: "Novel Writing", href: "/services/novel-writing" },
    { name: "Wiki Writing", href: "/services/wiki-writing" },
    { name: "Speech Writing", href: "/services/speech-writing" },
    { name: "Military Fiction Writing", href: "/services/military-fiction-writing" },
    { name: "Comic Book Writing", href: "/services/comic-book-writing" },
    { name: "Comedy Writing", href: "/services/comedy-writing" },
    { name: "Movie Writing", href: "/services/movie-writing" },
    { name: "Screen Writing", href: "/services/screen-writing" },
    { name: "Autobiography Writing", href: "/services/autobiography-writing" },
    { name: "Ebook Writing", href: "/services/ebook-writing" },
  ],
  fictionWriting: [
    { name: "Action Adventure Writing", href: "/services/action-adventure-writing" },
    { name: "Fantasy Writing", href: "/services/fantasy-writing" },
    { name: "Science Fiction Writing", href: "/services/science-fiction-writing" },
    { name: "Horror Writing", href: "/services/horror-writing" },
  ],
  bookEditing: [
    { name: "Book Editing", href: "/services/book-editing" },
    { name: "Book Formatting", href: "/services/book-formatting" },
    { name: "Children's Book Editors", href: "/services/children-book-editors" },
    { name: "Book Proofreading", href: "/services/book-proofreading" },
  ],
  otherServices: [
    { name: "Book Cover Design", href: "/services/book-cover-design" },
    { name: "Book Audio", href: "/services/book-audio" },
    { name: "Book Trailer", href: "/services/book-trailer" },
    { name: "Author Website Design", href: "/services/author-website-design" },
    { name: "Book Publishing", href: "/services/book-publishing" },
    { name: "Book Marketing", href: "/services/book-marketing" },
    { name: "Children's Book Printing", href: "/services/children-book-printing" },
    { name: "Book Illustration Services", href: "/services/book-illustration-services" },
    { name: "Comic Book Illustration", href: "/services/comic-book-illustration" },
    { name: "Children's Book Illustration", href: "/services/children-book-illustration" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#fcfaf6] border-t border-black/5 pt-20 pb-10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-5">

          {/* Column 1-3: Writing Services (split) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[17px] font-serif font-bold text-primary flex items-end h-8">The Publishing Genie</h4>
              <ul className="space-y-3">
                {footerLinks.writingServices.slice(0, 8).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] text-muted-foreground/80 hover:text-accent transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="h-8 md:block hidden" /> {/* Alignment Spacer */}
              <ul className="space-y-3">
                {footerLinks.writingServices.slice(8, 15).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] text-muted-foreground/80 hover:text-accent transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="h-8 md:block hidden" /> {/* Alignment Spacer */}
              <ul className="space-y-3">
                {footerLinks.writingServices.slice(15).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] text-muted-foreground/80 hover:text-accent transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Fiction Writing */}
          <div className="space-y-6">
            <h4 className="text-[17px] font-serif font-bold text-primary flex items-end h-8">Fiction Writing</h4>
            <ul className="space-y-3">
              {footerLinks.fictionWriting.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground/80 hover:text-accent transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Book Editing */}
          <div className="space-y-6">
            <h4 className="text-[17px] font-serif font-bold text-primary flex items-end h-8">Book Editing</h4>
            <ul className="space-y-3">
              {footerLinks.bookEditing.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground/80 hover:text-accent transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Other Services */}
          <div className="space-y-6">
            <h4 className="text-[17px] font-serif font-bold text-primary flex items-end h-8">Other Services</h4>
            <ul className="space-y-3">
              {footerLinks.otherServices.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[13px] text-muted-foreground/80 hover:text-accent transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brand Bar */}
        <div className="pt-5 border-t border-black/5 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="space-y-4">
            <Image src={Logo} alt="US Book Authors Logo" width={160} />
            <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-xs">
              Elite ghostwriting, award-winning design, and global publishing strategies. Your legacy, professionally crafted.
            </p>
          </div>

          <div className="flex flex-col md:items-center space-y-4">
            <div className="flex gap-4">
              <Mail className="text-accent" size={18} />
              <span className="text-sm font-bold text-muted-foreground">info@usbookauthors.com</span>
            </div>
            <div className="flex gap-4">
              <Phone className="text-accent" size={18} />
              <span className="text-sm font-bold text-muted-foreground">+1 315 239 0990</span>
            </div>
          </div>

          <div className="flex flex-col md:items-end space-y-4">
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-black/5 text-muted-foreground/60 hover:bg-accent hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
              © {new Date().getFullYear()} US Book Authors. A Prestige Books Publication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
