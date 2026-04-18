import ServiceHero from "@/components/services/service-hero";
import GenreGrid from "@/components/services/genre-grid";
import GhostwritingFeature from "@/components/services/ghostwriting-feature";
import Steps from "@/components/home/steps";
import ContactForm from "@/components/home/contact-form";
import Testimonials from "@/components/home/testimonials";
import bg from "@/app/assets/book-writing-hero-bg.png";
import Image from "next/image";
import writerImg from "@/app/assets/typewriter-deco.png";

const writingSteps = [
  {
    number: "01",
    title: "Concept & Outline",
    desc: "We dive deep into your ideas, goals, and voice to create a comprehensive chapter-by-chapter roadmap for your book."
  },
  {
    number: "02",
    title: "Ghostwriting & Drafting",
    desc: "Our elite ghostwriters bring your story to life, maintaining your unique tone while ensuring world-class literary quality."
  },
  {
    number: "03",
    title: "Substantive Editing",
    desc: "We refine the narrative arc, pace, and structure, polishing every sentence to ensure a captivating reader experience."
  },
  {
    number: "04",
    title: "Final Polish",
    desc: "Detailed proofreading and final adjustments to ensure your manuscript is 100% ready for the publishing phase."
  }
];

export default function BookWritingPage() {
  return (
    <main className="min-h-screen ">
      <ServiceHero
        tag="Writing Services"
        title={<>Masterful <span className="text-accent italic font-medium">Book Writing</span> Services</>}
        subtitle="Turn your vision into a literary legacy with our elite ghostwriting and editorial team."
        bgImage={bg}
      />

      {/* Unique Section 1: Genre Specialization */}
      <GenreGrid />

      {/* Existing Feature Section with context */}
      <section className="bg-white py-10 lg:py-15">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl font-bold text-primary md:text-5xl">Your Voice, Our <br /> <span className="text-accent italic">Exceptional</span> Craft</h2>
                <div className="h-1 w-20 bg-accent" />
              </div>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Writing a book is a monumental journey. At US Book Authors, we provide the
                  expert guidance and masterful prose needed to navigate that path successfully.
                  Whether you have a fully formed concept or just a spark of inspiration,
                  our ghostwriters are trained to capture your essence perfectly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-primary font-medium">
                    <span className="size-1.5 rounded-full bg-accent" />
                    Bestseller-Grade Ghostwriting
                  </li>
                  <li className="flex items-center gap-3 text-primary font-medium">
                    <span className="size-1.5 rounded-full bg-accent" />
                    In-Depth Research & Interviews
                  </li>
                  <li className="flex items-center gap-3 text-primary font-medium">
                    <span className="size-1.5 rounded-full bg-accent" />
                    Complete Narrative Structuring
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
              <Image
                src={writerImg}
                alt="Book Writing Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unique Section 2: Dark High-Impact Ghostwriting */}
      <GhostwritingFeature />

      <Steps
        title="Our Masterful Writing Lifecycle"
        subtitle="From Inspiration to Manuscript"
        customSteps={writingSteps}
      />

      <Testimonials />
      <ContactForm />
    </main>
  );
}

