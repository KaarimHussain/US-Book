import AboutMainHero from "@/components/about/about-main-hero";
import WhoWeAre from "@/components/about/who-we-are";
import WhyChooseUs from "@/components/about/why-choose-us";
import AboutHistory from "@/components/about/about-history";
import ContactForm from "@/components/home/contact-form";

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans">
      <AboutMainHero />
      <WhoWeAre />
      <WhyChooseUs />
      <AboutHistory />
      <ContactForm />
    </main>
  );
}
