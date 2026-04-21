const steps = [
  {
    number: "01",
    title: "Get Started",
    desc: "Ready to transform your book idea into reality? Simply complete a brief form and connect with one of our friendly project managers. They are eager to hear about your book and will guide you through the process."
  },
  {
    number: "02",
    title: "Shaping Your Vision",
    desc: "We take great care in selecting the perfect writer for your book, someone with the necessary skills and expertise to bring your vision to life. With a deep understanding of your concept, our writer will create an outline you can review and approve before proceeding."
  },
  {
    number: "03",
    title: "Engaging the Reader",
    desc: "The opening chapter of a book is crucial for captivating readers, and our writers know how to hook them from the very beginning. With an engaging opener, we strive to keep your readers turning the pages. If you're satisfied with the first chapter, we'll continue writing the book according to the approved outline."
  },
  {
    number: "04",
    title: "Polishing Your Masterpiece",
    desc: "Our professional team will meticulously proofread and edit your book, ensuring it is polished and free of errors. We take pride in delivering an excellent final product that meets your expectations."
  },
  {
    number: "05",
    title: "Breathing Life into Your Book",
    desc: "Once the manuscript is approved, it's time to add the final touches. Our team of experts will format your book to meet publishing standards and provide a professional and aesthetically pleasing design. We'll ensure your book stands out, from fonts to graphics to cover design."
  },
  {
    number: "06",
    title: "Sharing Your Story with the World",
    desc: "The final step in our process is to publish your book in your desired format and execute a personalized marketing and promotional strategy. We are committed to helping you share your story with the world and make your book a resounding success."
  }
];

export default function StoryWritingProcess() {
  return (
    <section className="py-10 bg-background font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-5 duration-1000">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Process of Story Writing
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-6 group animate-in fade-in slide-in-from-bottom-5 duration-700"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Number and Step Label */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">Step</span>
                   <span className="text-5xl font-black text-primary leading-none transition-transform group-hover:scale-110 duration-300">
                     {step.number}
                   </span>
                </div>
                {/* Vertical Divider */}
                <div className="w-px h-16 bg-border group-hover:bg-accent transition-colors duration-500" />
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground transition-all group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}