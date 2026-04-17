import AboutHero from "@/components/about/about-hero";
import OurStory from "@/components/about/our-story";
import Values from "@/components/about/values";
import ContactForm from "@/components/home/contact-form";
import CTA from "@/components/home/cta";
import Testimonials from "@/components/home/testimonials";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <OurStory />
      <Values />
      <CTA />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
