"use client";

import Link from "next/link";
import { Menu, PenTool, Layout, Rocket, Phone, Mail } from "lucide-react";
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
    title: "Book Editing",
    icon: <PenTool className="size-4" />,
    items: [
      { name: "Book Editing", desc: "Comprehensive editing for flawless prose.", href: "/services/book-editing" },
      { name: "Book Formatting", desc: "Professional layout for print and digital.", href: "/services/book-formatting" },
      { name: "Children's Book Editors", desc: "Specialized care for young readers.", href: "/services/children-book-editors" },
      { name: "Book Proofreading", desc: "Polish your work to perfection.", href: "/services/book-proofreading" },
    ]
  },
  {
    title: "Publishing & Distribution",
    icon: <Layout className="size-4" />,
    items: [
      { name: "Book Publishing", desc: "Your path to becoming a published author.", href: "/services/book-publishing" },
      { name: "Children's Book Publishing", desc: "Specialized care for young readers.", href: "/services/children-book-publishing" },
      { name: "Audiobook Publishing", desc: "Bring your story to life in audio.", href: "/services/audiobook-publishing" },
      { name: "Global Book Distribution", desc: "Get your book on every shelf worldwide.", href: "/services/global-distribution" },
      { name: "Children's Book Printing", desc: "High-quality print for young audiences.", href: "/services/children-book-printing" },
    ]
  },
  {
    title: "Design & Growth",
    icon: <Rocket className="size-4" />,
    items: [
      { name: "Book Cover Design", desc: "Visuals that capture the heart of your story.", href: "/services/book-cover-design" },
      { name: "Book Audio", desc: "Bring your story to life in high-quality audio.", href: "/services/book-audio" },
      { name: "Book Trailer", desc: "Cinematic previews for your book launch.", href: "/services/book-trailer" },
      { name: "Author Website Design", desc: "Your digital home as a professional author.", href: "/services/author-website-design" },
      { name: "Book Illustration Services", desc: "Professional visuals for every page.", href: "/services/illustration-services" },
      { name: "Comic Book Illustration", desc: "Dynamic art for graphic storytelling.", href: "/services/comic-illustration" },
      { name: "Children's Book Illustration", desc: "Bright, engaging art for kids.", href: "/services/children-illustration" },
    ]
  }
];

const ghostwritingLinks = [
  { name: "Story Writing", desc: "Crafting captivating narratives.", href: "/ghost-writing/story-writing" },
  { name: "Song Writing", desc: "Melodic lyrics for any genre.", href: "/ghost-writing/song-writing" },
  { name: "Memoir Writing", desc: "Preserving your life story.", href: "/ghost-writing/memoir-writing" },
  { name: "Non-Fiction Writing", desc: "Expertly researched knowledge.", href: "/ghost-writing/non-fiction-writing" },
  { name: "Rhymes Writing", desc: "Perfectly timed poetry.", href: "/ghost-writing/rhymes-writing" },
  { name: "Ebook Writing", desc: "Digital-first storytelling.", href: "/ghost-writing/ebook-writing" },
  { name: "Biography Writing", desc: "Chronicling notable lives.", href: "/ghost-writing/biography-writing" },
  { name: "Autobiography Writing", desc: "Your life, in your own words.", href: "/ghost-writing/autobiography-writing" },
  { name: "Business Writing", desc: "Expert corporate communication.", href: "/ghost-writing/business-writing" },
  { name: "SEO Content Writing", desc: "High-ranking digital copy.", href: "/ghost-writing/seo-content-writing" },
  { name: "Hip Hop Writing", desc: "Rhythmic bars and lyrics.", href: "/ghost-writing/hip-hop-writing" },
  { name: "Script Writing", desc: "From stage to silver screen.", href: "/ghost-writing/script-writing" },
  { name: "Narrative Writing", desc: "Immersive storytelling.", href: "/ghost-writing/narrative-writing" },
  { name: "Novel Writing", desc: "Full-length fiction works.", href: "/ghost-writing/novel-writing" },
  { name: "Wiki Writing", desc: "Credible encyclopedia entries.", href: "/ghost-writing/wiki-writing" },
  { name: "Speech Writing", desc: "Compelling oratory pieces.", href: "/ghost-writing/speech-writing" },
  { name: "Comedy Writing", desc: "Wit and humor for any platform.", href: "/ghost-writing/comedy-writing" },
  { name: "Movie Writing", desc: "Screenplays for feature films.", href: "/ghost-writing/movie-writing" },
  { name: "Screen Writing", desc: "Professional script formatting.", href: "/ghost-writing/screen-writing" },
  { name: "Military Fiction", desc: "Authentic tactical stories.", href: "/ghost-writing/military-fiction-writing" },
  { name: "Comic Book writing", desc: "Visual storytelling scripts.", href: "/ghost-writing/comic-book-writing" },
  { name: "Children’s Books", desc: "Enchanting young minds.", href: "/ghost-writing/children-books-writing" },
];

const fictionLinks = [
  { name: "Action Adventure Writing", desc: "High-stakes, fast-paced journeys.", href: "/services/action-adventure-writing" },
  { name: "Fantasy Writing", desc: "Magic and epic world-building.", href: "/services/fantasy-writing" },
  { name: "Science Fiction Writing", desc: "Futuristic and scientific wonders.", href: "/services/science-fiction-writing" },
  { name: "Horror Writing", desc: "Suspense and supernatural thrills.", href: "/services/horror-writing" },
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
    <div className="fixed top-0 z-50 w-full transition-all duration-300">
      <TopBar scrolled={scrolled} />
      <nav className={cn(
        "transition-bg duration-300",
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
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent font-medium transition-all rotate-0 hover:-rotate-10",
                      scrolled ? "text-foreground" : "text-white"
                    )}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent font-medium transition-all rotate-0 hover:-rotate-10",
                    scrolled ? "text-foreground" : "text-white"
                  )}>
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                    <div className="flex w-[250px] flex-col gap-1 p-4">
                      {[
                        { name: "Our Company", desc: "The story behind our mission.", href: "/about" },
                        { name: "Our Team", desc: "Meet the elite writers and designers.", href: "/team" },
                        { name: "Our Process", desc: "How we turn ideas into bestsellers.", href: "/process" },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex flex-col gap-0.5 rounded-md p-2 transition-all bg-primary/5 hover:bg-accent border border-transparent hover:border-primary/10"
                        >
                          <span className="text-sm font-bold transition-colors group-hover:text-black">
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
                    "bg-transparent font-medium transition-all rotate-0 hover:-rotate-10",
                    scrolled ? "text-foreground" : "text-white"
                  )}>
                    Ghost Writing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                    <div className="grid w-[900px] grid-cols-4 gap-4 p-8">
                      {ghostwritingLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex flex-col gap-1 rounded-md p-2 transition-all bg-primary/5 hover:bg-accent border border-transparent hover:border-primary/10"
                        >
                          <span className="text-xs font-bold text-foreground transition-colors group-hover:text-black">
                            {item.name}
                          </span>
                          <p className="text-[9px] leading-tight text-muted-foreground/80 line-clamp-1">
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent font-medium transition-all rotate-0 hover:-rotate-10",
                    scrolled ? "text-foreground" : "text-white"
                  )}>
                    Fiction Writing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                    <div className="flex w-[250px] flex-col gap-1 p-4">
                      {fictionLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex flex-col gap-0.5 rounded-md p-2 transition-all bg-primary/5 hover:bg-accent border border-transparent hover:border-primary/10"
                        >
                          <span className="text-sm font-bold text-foreground transition-colors group-hover:text-black">
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
                    "bg-transparent font-medium transition-all rotate-0 hover:-rotate-10",
                    scrolled ? "text-foreground" : "text-white"
                  )}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                    <div className="grid w-[600px] grid-cols-2 gap-8 p-8">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-5">
                          <div className="flex items-center gap-3 text-[17px] font-light uppercase text-black flex-nowrap">
                            <div className="h-px flex-1 bg-black" />
                            <span className="flex items-center gap-2 nowrap">
                              {category.icon}
                              {category.title}
                            </span>
                            <div className="h-px flex-1 bg-black" />
                          </div>
                          <div className="flex flex-col gap-2 overflow-y-auto h-[70vh]">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group flex flex-col gap-1 rounded-lg p-3 transition-all duration-200 bg-primary/5 hover:bg-accent border border-transparent hover:border-primary/10"
                              >
                                <span className="text-sm font-bold text-foreground transition-colors group-hover:text-black">
                                  {item.name}
                                </span>
                                <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
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
                      "bg-transparent font-medium transition-all rotate-0 hover:-rotate-10",
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
                      "bg-transparent font-medium transition-all rotate-0 hover:-rotate-10",
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
              variant={scrolled ? "secondary" : "default"}
              className={cn(
                "px-8 font-bold transition-all duration-300 hover:rotate-[10deg] hover:transition-transform hover:scale-110 text-white",
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
                { name: "Ghostwriting Services", href: "/services/ghostwriting" },
                { name: "Fiction Writing", href: "/services/fiction-writing" },
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
    </div>
  );
}


const TopBar = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <>
      <div className={cn(
        "w-full py-2 text-sm transition-all duration-300 px-6 lg:px-12 flex items-center justify-between",
        scrolled ? "bg-primary text-white" : "bg-transparent text-white"
      )}>
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+13152390990" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="text-[11px] md:text-sm font-medium">+1 (315) 239-0990</span>
          </a>
          <a href="mailto:info@usbookauthors.com" className="hidden md:flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">info@usbookauthors.com</span>
          </a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/manuscript">
            <Button size={"sm"} className="h-7 md:h-9 text-[10px] md:text-xs px-2 md:px-4" variant={"outline"}>
              Submit Manuscript
            </Button>
          </Link>
          <Button size={"sm"} className="hidden sm:flex h-7 md:h-9 text-[10px] md:text-xs px-2 md:px-4" variant={"outline"}>
            Live Chat
          </Button>
        </div>
      </div>
    </>
  )
}