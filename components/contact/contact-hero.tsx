import Image from "next/image";
import bg from "@/app/assets/contact-hero-bg.png";

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center bg-black">
      {/* Background Image */}
      <Image 
        src={bg} 
        alt="Contact Hero Background" 
        fill 
        priority
        className="object-cover opacity-60" 
      />
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
             Get In Touch
          </span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl leading-tight">
             Begin Your <span className="text-accent italic font-medium">Journey</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-lg">
             Your story is ready to be told. Reach out to our team of publishing experts 
             and let's start crafting your legacy today.
          </p>
        </div>
      </div>
    </section>
  );
}
