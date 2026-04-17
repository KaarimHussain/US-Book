import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/home/contact-form";
import FAQ from "@/components/home/faq";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <div className="bg-primary pb-20">
         <ContactForm />
      </div>
      <FAQ />
    </main>
  );
}
