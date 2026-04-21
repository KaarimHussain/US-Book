import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImg from "@/app/assets/faq-illustration.png";
import faqSvg from "@/app/assets/faq-svg.svg";


const faqs = [
  {
    question: "WHAT MAKES YOUR ONLINE BOOK WRITING FIRM DIFFERENT FROM OTHERS?",
    answer: "Our commitment to bespoke storytelling and our 'author-first' approach set us apart. We prioritize your voice and vision while providing professional-grade editorial and design expertise.",
  },
  {
    question: "WILL MY BOOK REMAIN 100% MINE?",
    answer: "Yes, absolutely. You retain 100% of the copyrights and ownership of your work. We are here as a service provider to help you bring your vision to life.",
  },
  {
    question: "WHAT ARE THE GENRES TO WHICH YOUR GHOSTWRITERS SPECIALIZE IN?",
    answer: "Our diverse team specializes in various genres, including fiction (thriller, romance, fantasy), non-fiction (biography, self-help, business), and academic or technical writing.",
  },
  {
    question: "HOW LONG DOES THE GHOSTWRITING PROCESS TAKE?",
    answer: "The timeline depends on the complexity and length of your book. On average, a standard manuscript takes between 4 to 8 months from discovery to final draft.",
  },
  {
    question: "DO YOU OFFER PUBLISHING ASSISTANCE AFTER WRITING?",
    answer: "Yes! We offer end-to-end publishing support, including formatting, cover design, and distribution on major platforms like Amazon, Barnes & Noble, and more.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-secondary py-10 lg:py-15">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-primary-foreground">
            The most common queries people have concerning our book writing service are listed below.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* FAQ Accordion */}
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-accent/30 py-2"
                >
                  <AccordionTrigger className="text-left text-md font-bold tracking-wider text-primary-foreground hover:text-primary-foreground/70 hover:no-underline md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg leading-relaxed text-primary-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Illustration */}
          <div className="relative flex aspect-square items-start justify-center lg:aspect-auto h-full">
            <Image
              src={faqSvg}
              alt="FAQ Illustration"
              className="object-contain max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
