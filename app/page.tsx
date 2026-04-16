import Hero from "@/components/home/hero";
import Brands from "@/components/home/brands";
import PortfolioPreview from "@/components/home/portfolio-preview";
import PortfolioGrid from "@/components/home/portfolio-grid";
import Details from "@/components/home/details";
import Services from "@/components/home/services";
import BannerCards from "@/components/home/banner-cards";
import Steps from "@/components/home/steps";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import ContactForm from "@/components/home/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Brands />
      <PortfolioPreview />
      <Details />
      <Services />
      <BannerCards />
      <PortfolioGrid />
      <Steps />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
  );
}
