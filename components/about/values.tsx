import { ShieldCheck, Sparkles, UserCheck, BookOpen } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck className="size-8 text-accent" />,
    title: "Unwavering Integrity",
    desc: "Complete confidentiality and creative honesty in every word we write. Your intellectual property is our highest priority."
  },
  {
    icon: <Sparkles className="size-8 text-accent" />,
    title: "Masterful Craft",
    desc: "We don't settle for 'good.' Our standard is literary excellence, ensuring your manuscript stands shoulder-to-shoulder with bestsellers."
  },
  {
    icon: <UserCheck className="size-8 text-accent" />,
    title: "Author Empowerment",
    desc: "You remain the pilot of your story. We provide the expertise and the engine to help you reach your destination with impact."
  },
  {
    icon: <BookOpen className="size-8 text-accent" />,
    title: "Legacy Focus",
    desc: "We build books that endure. Our strategies are designed for long-term growth and lasting influence in your industry."
  }
];

export default function Values() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 text-center space-y-20">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">Our Publishing Pillars</h2>
          <p className="text-white/60 text-lg">The foundational principles that guide every project we undertake.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value) => (
            <div key={value.title} className="space-y-6 flex flex-col items-center group">
              <div className="p-4 bg-white/5 rounded-full border border-white/10 transition-all group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/40">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{value.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[250px]">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
