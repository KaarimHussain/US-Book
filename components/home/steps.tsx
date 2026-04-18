import { cn } from "@/lib/utils";

interface StepData {
  number: string;
  title: string;
  desc: string;
}

interface StepsProps {
  title?: string;
  subtitle?: string;
  customSteps?: StepData[];
}

const defaultSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Review your brand, goals, and target audience to define your author identity.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Create a visually compelling layout highlighting your unique style.",
  },
  {
    number: "03",
    title: "Build",
    desc: "Develop with high-performance code and essential author integrations.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Thorough testing and deployment with dedicated post-launch support.",
  },
];

export default function Steps({
  title = "Our Simple Process",
  subtitle = "Author Website Design",
  customSteps
}: StepsProps) {
  const displaySteps = customSteps || defaultSteps;

  return (
    <section className="bg-accent py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header - Compact */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60 mb-2">{subtitle}</p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>

        {/* Interactive Grid with Gradients - High Contrast */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displaySteps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-black/5 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/5 rounded"
            >
              {/* Dynamic Gradient Badge */}
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-linear-to-r from-accent to-primary blur-md opacity-20" />
                <div className="relative flex h-14 w-14 items-center justify-center bg-linear-to-br from-accent to-primary text-xl font-black text-white shadow-xl transition-transform duration-500 group-hover:-rotate-12 rounded">
                  {step.number}
                </div>
              </div>

              <h3 className="mb-4 text-xl font-black text-black transition-colors group-hover:text-primary">
                {step.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-black/60 transition-colors group-hover:text-black/80">
                {step.desc}
              </p>

              {/* Decorative Mesh Accent */}
              <div className="absolute -bottom-1 -right-1 h-20 w-20 bg-linear-to-br from-primary/10 to-accent/10 blur-3xl rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
