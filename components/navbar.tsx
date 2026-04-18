"use client";

import Link from "next/link";
import { Menu, PenTool, Layout, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import LogoWhite from "@/app/assets/Logo-White.png";


const serviceCategories = [
  {
    title: "Writing & Editing",
    icon: <PenTool className="size-4" />,
    items: [
      { name: "Book Writing", desc: "Turn your ideas into a complete manuscript.", href: "/services/book-writing" },
      { name: "Ghostwriting", desc: "Your story, our words. Professional secrecy.", href: "/services/ghostwriting" },
      { name: "Book Editing", desc: "Comprehensive editing for flawless prose.", href: "/services/book-editing" },
      { name: "Editing & Proofreading", desc: "Polish your work to perfection.", href: "/services/editing-and-proofreading" },
    ]
  },
  {
    title: "Publishing & Distribution",
    icon: <Layout className="size-4" />,
    items: [
      { name: "Book Publishing", desc: "Your path to becoming a published author.", href: "/services/book-publishing" },
      { name: "Amazon Publishing", desc: "Master the world's largest bookstore.", href: "/services/amazon-publishing" },
      { name: "Children's Book Publishing", desc: "Specialized care for young readers.", href: "/services/children-book-publishing" },
      { name: "Audiobook Publishing", desc: "Bring your story to life in audio.", href: "/services/audiobook-publishing" },
      { name: "Global Book Distribution", desc: "Get your book on every shelf worldwide.", href: "/services/global-distribution" },
    ]
  },
  {
    title: "Design & Growth",
    icon: <Rocket className="size-4" />,
    items: [
      { name: "Cover Design", desc: "Visuals that capture the heart of your story.", href: "/services/book-cover-design" },
      { name: "Illustrations", desc: "Custom artwork for your books.", href: "/services/illustrations" },
      { name: "Interior Formatting", desc: "Professional layout for print and digital.", href: "/services/formatting" },
      { name: "Book Marketing", desc: "Strategies to reach the bestseller lists.", href: "/services/book-marketing" },
      { name: "Author Website", desc: "Your digital home as a professional author.", href: "/services/author-website" },
    ]
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-background/95 backdrop-blur-sm border-b border-border/40 py-0"
        : "bg-transparent border-transparent py-2"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Image src={scrolled ? Logo : LogoWhite} alt="Logo" width={150} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent font-medium transition-colors hover:rotate-[10deg] hover:transition-transform hover:scale-110",
                    scrolled ? "text-foreground" : "text-white"
                  )}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent font-medium transition-colors hover:rotate-[10deg] hover:transition-transform hover:scale-110",
                  scrolled ? "text-foreground" : "text-white"
                )}>
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[250px] flex-col gap-1 p-4">
                    {[
                      { name: "Our Company", desc: "The story behind our mission.", href: "/about" },
                      { name: "Our Team", desc: "Meet the elite writers and designers.", href: "/team" },
                      { name: "Our Process", desc: "How we turn ideas into bestsellers.", href: "/process" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex flex-col gap-0.5 rounded-md p-2 transition-all hover:bg-primary/5 border border-transparent hover:border-primary/10"
                      >
                        <span className="text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                          {item.name}
                        </span>
                        <p className="text-[10.5px] leading-tight text-muted-foreground">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent font-medium transition-colors hover:rotate-[10deg] hover:transition-transform hover:scale-110",
                  scrolled ? "text-foreground" : "text-white"
                )}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[900px] grid-cols-3 gap-8 p-8">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="flex flex-col gap-5">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                          <div className="h-px flex-1 bg-accent/20" />
                          <span className="flex items-center gap-2">
                            {category.icon}
                            {category.title}
                          </span>
                          <div className="h-px flex-1 bg-accent/20" />
                        </div>
                        <div className="flex flex-col gap-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group flex flex-col gap-1 rounded-lg p-3 transition-all duration-200 hover:bg-primary/5 border border-transparent hover:border-primary/10"
                            >
                              <span className="text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                                {item.name}
                              </span>
                              <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground/80">
                                {item.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/portfolio" className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent font-medium transition-colors hover:rotate-[10deg] hover:transition-transform hover:scale-110",
                    scrolled ? "text-foreground" : "text-white"
                  )}>
                    Portfolio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent font-medium transition-colors hover:rotate-[10deg] hover:transition-transform hover:scale-110",
                    scrolled ? "text-foreground" : "text-white"
                  )}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Button
            size="lg"
            variant={scrolled ? "default" : "secondary"}
            className={cn(
              "px-8 font-bold transition-all duration-300 hover:rotate-[10deg] hover:transition-transform hover:scale-110",
              !scrolled && "bg-linear-to-l from-primary to-accent hover:from-accent hover:to-primary"
            )}
          >
            Get Free Consultation
          </Button>
        </div>

        <button
          className={cn(
            "block md:hidden transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background border-b border-border p-6 md:hidden animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-4">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button

              className="mt-4 w-full font-bold"
              onClick={() => {
                const element = document.getElementById("contact-section");
                if (element) element.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
