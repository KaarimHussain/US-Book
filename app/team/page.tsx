"use client"

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import bg from "@/app/assets/book-writing-hero-bg.png";
import CTA from "@/components/home/cta";

const teamGroups = [
  {
    category: "Leadership & Vision",
    members: [
      {
        name: "Jonathan Thorne",
        role: "Chief Executive Officer & Founder",
        bio: "With over 20 years in traditional and boutique publishing, Jonathan leads our mission to democratize elite storytelling.",
        socials: { linkedin: "#", twitter: "#" }
      },
      {
        name: "Elara Vance",
        role: "Chief Editorial Officer",
        bio: "A former acquisitions editor at a 'Big Five' house, Elara ensures every manuscript meets world-class standards.",
        socials: { linkedin: "#", instagram: "#" }
      }
    ]
  },
  {
    category: "Writing & Editorial Suite",
    members: [
      {
        name: "Marcus Holloway",
        role: "Lead Ghostwriter",
        bio: "Specialize in business memoirs and technical leadership books for Silicon Valley's top executives.",
        socials: { linkedin: "#", twitter: "#" }
      },
      {
        name: "Sarah Jenkins",
        role: "Senior Developmental Editor",
        bio: "Specialist in narrative structure and character arc development for high-stakes fiction and thrillers.",
        socials: { linkedin: "#", mail: "mailto:sarah@example.com" }
      },
      {
        name: "David Chen",
        role: "Cultural & Sensitivity Consultant",
        bio: "Ensuring stories resonate authentically across diverse global audiences and cultural landscapes.",
        socials: { linkedin: "#" }
      }
    ]
  },
  {
    category: "Design & Production",
    members: [
      {
        name: "Sophie Laurent",
        role: "Creative Director",
        bio: "Award-winning designer focusing on typography-led covers that dominate Amazon bestseller lists.",
        socials: { instagram: "#", linkedin: "#" }
      },
      {
        name: "Alex Rivera",
        role: "Technical Production Manager",
        bio: "Master of global distribution logistics and specialized audiobook production standards.",
        socials: { linkedin: "#" }
      }
    ]
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf6]">

      {/* Hero Section - Replicated from About Us */}
      <section className="relative h-[50vh] min-h-[500px] w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <Image
          src={bg}
          alt="Team Leadership Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-primary/80 to-transparent" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[12px] animate-in fade-in slide-in-from-bottom-5 duration-700">
              The Visionaries
            </span>
            <h1 className="font-heading text-5xl font-bold text-white md:text-7xl leading-tight animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              The Architects Behind <br /> <span className="text-accent italic font-medium">Your Success</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 font-sans">
              Meet the collective of world-class ghostwriters, elite designers, and strategic
              publishing experts dedicated to turning your ideas into a global legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-15">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {teamGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-16">
                <div className="flex items-center gap-6">
                  <h2 className="text-[25px] font-black uppercase text-primary shrink-0">{group.category}</h2>
                  <div className="h-px w-full bg-black/5" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                  {group.members.map((member, memberIdx) => (
                    <div key={memberIdx} className="group space-y-8">
                      {/* Member Image Placeholder */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-2xl transition-all duration-700 group-hover:-translate-y-4 rounded-2xl">
                        <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-8xl italic">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>

                        {/* Social Links Reveal */}
                        <div className="absolute bottom-6 left-6 right-6 flex gap-2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          {Object.entries(member.socials).map(([platform, href]) => (
                            <Link
                              key={platform}
                              href={href as string}
                              className="h-10 w-10 bg-white rounded-lg flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors shadow-lg"
                            >
                              {platform === 'linkedin' && <Linkedin size={18} />}
                              {platform === 'twitter' && <Twitter size={18} />}
                              {platform === 'instagram' && <Instagram size={18} />}
                              {platform === 'mail' && <Mail size={18} />}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold text-primary tracking-tight">{member.name}</h3>
                          <p className="text-sm font-black uppercase tracking-widest text-accent">{member.role}</p>
                        </div>
                        <p className="text-[15px] leading-relaxed text-muted-foreground/80 font-medium italic">
                          "{member.bio}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
