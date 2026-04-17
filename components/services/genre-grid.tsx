import { Book, User, Lightbulb, Trophy } from "lucide-react";

const genres = [
  {
    title: "Fiction & Novels",
    icon: <Book className="size-6" />,
    desc: "From immersive world-building to character arcs that breathe, we craft stories that readers can't put down."
  },
  {
    title: "The Business Legacy",
    icon: <Trophy className="size-6" />,
    desc: "Transform your industry expertise and professional journey into a powerful tool for authority and growth."
  },
  {
    title: "Personal Memoirs",
    icon: <User className="size-6" />,
    desc: "Every life is a story. We help you preserve your history and wisdom in a timeless, evocative narrative."
  },
  {
    title: "Thought Leadership",
    icon: <Lightbulb className="size-6" />,
    desc: "Translate complex ideas into accessible, engaging non-fiction that challenges and inspires your audience."
  }
];

export default function GenreGrid() {
  return (
    <section className="bg-muted/50 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Header Side */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-6">
            <span className="text-accent font-bold uppercase tracking-widest text-xs">Our Versatility</span>
            <h2 className="font-heading text-4xl font-bold text-primary leading-tight">Masters of Every <span className="text-accent italic">Literary</span> Landscape</h2>
            <p className="text-muted-foreground leading-relaxed">
              We don't believe in one-size-fits-all. Our writing team is divided into 
              specialized hubs, each dedicated to the unique nuances of their chosen genre.
            </p>
          </div>

          {/* Grid Side */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {genres.map((genre, idx) => (
              <div 
                key={genre.title}
                className="bg-white p-10 border border-border hover:border-accent/40 transition-all group relative overflow-hidden h-full flex flex-col justify-between"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 size-2 bg-accent/20 group-hover:bg-accent transition-colors" />
                
                <div className="space-y-6">
                  <div className="text-accent bg-accent/5 size-12 flex items-center justify-center rounded-sm">
                    {genre.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{genre.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {genre.desc}
                  </p>
                </div>

                <div className="pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                   Learn More <span className="h-px w-8 bg-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
