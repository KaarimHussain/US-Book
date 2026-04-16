import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenTool, BookOpen, Palette, Megaphone, Share2, Globe } from "lucide-react";
import typewriterDeco from "@/app/assets/typewriter-deco.png";

const services = [
  {
    title: "Ghostwriting",
    desc: "Our expert online book writers craft high-quality content that captures your voice and vision, with full confidentiality and complete authorship rights.",
    icon: <PenTool className="size-6 text-primary" />,
  },
  {
    title: "Book Editing",
    desc: "Our professional editors refine your work with clarity and flow, offering timely support from developmental editing to copyediting for publication-ready results.",
    icon: <BookOpen className="size-6 text-primary" />,
  },
  {
    title: "Book Design",
    desc: "Our design team ensures that your book makes a good impression in stores and on screens, positioning it in an eye-catching format and genre-consistent look.",
    icon: <Palette className="size-6 text-primary" />,
  },
  {
    title: "Book Marketing",
    desc: "We offer customized marketing to boost your book's visibility, sales, and author brand through strategic campaigns and digital promotions.",
    icon: <Megaphone className="size-6 text-primary" />,
  },
  {
    title: "Book Publishing",
    desc: "Our all-inclusive publication services handle formatting, editing, and global publishing, ensuring a smooth, professional release on major platforms.",
    icon: <Share2 className="size-6 text-primary" />,
  },
  {
    title: "Author Website",
    desc: "We create personalized author website designs that showcase your brand, connect with readers, and promote your books effectively online.",
    icon: <Globe className="size-6 text-primary" />,
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Decorative Typewriter */}
      <div className="absolute -left-20 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
        <Image
          src={typewriterDeco}
          alt="Vintage Typewriter"
          width={400}
          className="-rotate-45 scale-125 pointer-events-none select-none"
        />
      </div>

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Our Featured Services At <br />
              Prestige Books Publishers
            </h2>
          </div>
          <Button variant="outline" className="h-12 px-5">
            Lets Get Started
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between space-y-6 rounded-sm bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>

              <button className="flex items-center gap-2 text-sm font-bold tracking-wide text-foreground transition-colors hover:text-primary">
                Read More
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border group-hover:border-primary">
                  <ArrowRight className="size-3" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
