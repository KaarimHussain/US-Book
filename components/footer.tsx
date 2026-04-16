import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/app/assets/Logo.png";

const footerLinks = {
  services: [
    { name: "Book Writing", href: "#" },
    { name: "Ghostwriting", href: "#" },
    { name: "Editing & Proofreading", href: "#" },
    { name: "Formatting", href: "#" },
    { name: "Cover Design", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Process", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src={Logo} alt="Prestige Books Publishers Logo" width={180} />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Empowering authors worldwide with professional ghostwriting, elite design, and
              strategic publishing support. Your story, shared with excellence.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-widest text-primary">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-widest text-primary">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  7901 4th St N STE 300, <br />St. Petersburg, FL 33702, United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">+1 (727) 220-3331</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">care@usbookauthors.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prestige Books Publishers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent">Terms of Service</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
