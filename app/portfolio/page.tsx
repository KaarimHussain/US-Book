import PortfolioHero from "@/components/portfolio/portfolio-hero";
import PortfolioGrid from "@/components/home/portfolio-grid";
import ContactForm from "@/components/home/contact-form";
import PortfolioHeader from "@/components/portfolio/portfolio-header";
import Brands from "@/components/home/brands";
import EditingFormattingProofreading from "@/components/portfolio/Editing-Formatting-Proofreading";
import BookCoverDesign from "@/components/portfolio/book-cover-design";
import AuthorWebsites from "@/components/portfolio/author-websites";
import Illustrations from "@/components/portfolio/illustrations";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />
      <Brands />
      <PortfolioHeader title="Our Portfolio - From Designing, Formatting to Publishing" subtitle="Here are some of our best works" />
      <BookCoverDesign />
      <EditingFormattingProofreading />
      <Illustrations />
      <AuthorWebsites />
      <PortfolioGrid />
      <ContactForm />
    </main>
  );
}
