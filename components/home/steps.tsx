import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "The first step is to review your brand, goals, visions, and target audience that can benefit us, to decide how your site should support your identity as an author.",
  },
  {
    number: "02",
    title: "Design & Layout",
    desc: "Our design team creates a visually compelling layout with user-friendly navigation, highlighting your books, bio, and any essential features that represent your unique style as an author.",
  },
  {
    number: "03",
    title: "Development & Integration",
    desc: "We develop the website with high-performance coding, integrating essential features like book showcases, contact forms, e-commerce options, and email sign-ups for maximum engagement.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    desc: "Before launching, we thoroughly test the website for speed, responsiveness, and compatibility. Once approved, we go live and offer post-launch support to ensure optimal functionality.",
  },
];

export default function Steps() {
  return (
    <section className="bg-accent py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center space-y-4">
          <p className="font-heading text-xl italic text-primary-foreground/80">The Complete Author Website Design Process</p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Explained Simply and Clearly
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Central Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-white/30 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "relative flex flex-col items-center lg:flex-row lg:justify-between",
                  idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Step Content Card */}
                <div className="w-full lg:w-[45%]">
                  <div className="rounded-sm border-2 border-dashed border-black/20 bg-white p-8 backdrop-blur-sm transition-colors hover:border-black/40">
                    <h3 className="mb-4 text-2xl font-bold text-black">{step.title}</h3>
                    <p className="text-[15px] leading-relaxed text-black/70">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="relative z-10 my-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-primary shadow-xl lg:my-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                   {step.number}
                   {/* Pointy Arrow indicator */}
                   <div className={cn(
                     "absolute top-1/2 -translate-y-1/2 border-8 border-transparent hidden lg:block",
                     idx % 2 === 0 ? "right-full border-r-white" : "left-full border-l-white"
                   )} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden w-full lg:block lg:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
