import Image from "next/image";
import bg from "@/app/assets/about-hero-bg.png";

export default function AboutHero() {
  return (
    <section className="relative h-[40vh] min-h-[400px] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <Image 
        src={bg} 
        alt="Grand Library Background" 
        fill 
        priority
        className="object-cover" 
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-primary/80 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[11px] animate-in fade-in slide-in-from-bottom-5 duration-700">
             Our Legacy
          </span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-6xl leading-tight animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
             Committed to the <br /> <span className="text-accent italic font-medium">Art</span> of Storytelling
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 font-sans">
             At US Book Authors, we believe every voice deserves to be heard with clarity, 
             precision, and professional brilliance.
          </p>
        </div>
      </div>
    </section>
  );
}
