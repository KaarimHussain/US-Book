import PortfolioHero from "@/components/portfolio/portfolio-hero";
import PortfolioGrid from "@/components/home/portfolio-grid";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/home/cta";
import ContactForm from "@/components/home/contact-form";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />
      <div className="p-5">
        <PortfolioGrid />
      </div>
      <Testimonials />
      <CTA />
      <ContactForm />
    </main>
  );
}
