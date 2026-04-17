"use client";

import Link from "next/link";
import { Menu, PenTool, Layout, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
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

const serviceCategories = [
  {
    title: "Writing Services",
    icon: <PenTool className="size-4" />,
    items: [
      { name: "Book Writing", desc: "Turn your ideas into a complete manuscript.", href: "/services/book-writing" },
      { name: "Ghostwriting", desc: "Your story, our words. Professional secrecy.", href: "/services/ghostwriting" },
      { name: "Editing & Proofreading", desc: "Polish your work to perfection.", href: "/services/editing-and-proofreading" },
    ]
  },
  {
    title: "Publishing & Design",
    icon: <Layout className="size-4" />,
    items: [
      { name: "Book Cover Design", desc: "Visuals that capture the heart of your story.", href: "/services/book-cover-design" },
      { name: "Formatting", desc: "Interior design for print and digital devices.", href: "/services/formatting" },
      { name: "Publishing Assistance", desc: "Navigate KDP, IngramSpark, and more.", href: "/services/publishing-assistance" },
    ]
  },
  {
    title: "Author Growth",
    icon: <Rocket className="size-4" />,
    items: [
      { name: "Book Marketing", desc: "Strategies to reach the bestseller lists.", href: "/services/book-marketing" },
      { name: "Author Website", desc: "Your digital home as a professional author.", href: "/services/author-website" },
      { name: "Public Relations", desc: "Get featured in news and literary media.", href: "/services/public-relations" },
    ]
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" width={150} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-3 gap-3 p-6">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
                          {category.icon}
                          {category.title}
                        </div>
                        <div className="flex flex-col gap-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group flex flex-col gap-0.5 rounded-md p-2 transition-colors hover:bg-muted"
                            >
                              <span className="text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                                {item.name}
                              </span>
                              <p className="line-clamp-1 text-[11px] leading-tight text-muted-foreground">
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
                  <Link href="/portfolio" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    Portfolio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button size="lg" className="px-8 font-bold">
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-foreground"
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
