import Image, { StaticImageData } from "next/image";

interface ServiceHeroProps {
  title: React.ReactNode;
  subtitle: string;
  tag: string;
  bgImage: StaticImageData;
}

export default function ServiceHero({ title, subtitle, tag, bgImage }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center bg-black pt-50 pb-20">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={`${tag} Hero Background`}
        fill
        priority
        className="object-cover opacity-60"
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center lg:text-left">
        <div className="max-w-4xl space-y-4">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs animate-in fade-in slide-in-from-bottom-3 duration-700">
            {tag}
          </span>
          <h1 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            {title}
          </h1>
          <p className="text-white/70 max-w-2xl text-sm md:text-lg animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
