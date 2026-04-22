import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/ebook-writing.webp";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import { Tablet, Globe, Search } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Ebook-specific Assets (Providing variety using existing high-end editorial assets)
import aboutImg from "@/app/assets/ghost-writer/ebook-writing.png";
import narrativeImg from "@/app/assets/ghost-writer/ebook-narrative.png";
import ctaLeft from "@/app/assets/ghost-writer/cta-song-left.png";
import ctaRight from "@/app/assets/ghost-writer/cta-song-right.png";

const ebookProcess = [
    {
        title: "Digital Strategy & Blueprint",
        description: "We begin by analyzing your target digital niche and reader personas. This allows us to map out a content strategy that resonates specifically with digital-first audiences."
    },
    {
        title: "Interactive Architecture",
        description: "Ebooks require a logical, clickable structure. we build a robust table of contents and internal navigation that ensures a seamless reading experience across all devices."
    },
    {
        title: "Reader-Centric Drafting",
        description: "Our writers focus on high-engagement, screen-friendly prose. We ensure your message is delivered in a way that captures attention and maintains interest in a digital environment."
    },
    {
        title: "Technical Enhancement",
        description: "We optimize your manuscript for digital display, ensuring all internal links, references, and digital assets are properly embedded and functional for the reader."
    },
    {
        title: "Multi-Standard Formatting",
        description: "Your ebook is professionally converted into industry-standard formats including ePub, KPF (Kindle), and PDF, ensuring perfect rendering on any E-reader or tablet."
    },
    {
        title: "Global Distribution & Launch",
        description: "The final step is reaching your audience. We provide full support for Amazon KDP setup and global distribution, ensuring your ebook is ready for the digital marketplace."
    }
];

const ebookFaqs = [
    {
        question: "Do you handle the Amazon Kindle upload process?",
        answer: "Yes, we provide comprehensive support for Kindle Direct Publishing (KDP) setup, metadata optimization, and category selection to ensure your launch is successful."
    },
    {
        question: "Will my eBook look consistent on all digital devices?",
        answer: "We use professional reflowable formatting techniques that allow your text to adjust perfectly to any screen size, from smartphones to large tablets and dedicated E-readers."
    },
    {
        question: "Do I need a separate design for the digital cover?",
        answer: "Digital covers have specific visibility and contrast requirements for thumbnail display. We provide optimized, digital-first cover designs that stand out in digital storefronts."
    },
    {
        question: "Who owns the rights to the digital files?",
        answer: "You retain 100% of the intellectual property and full author credit. You will receive all final source files, including the ePub and Kindle-ready versions."
    }
];

export default function EbookWriting() {
    return (
        <main>
            <ServiceHero
                title="Specialized eBook Writing Services"
                subtitle="The Publishing Genie is a versatile platform that provides eBook writing services to authors who avail of our publication services. Our skilled ghostwriters for eBooks are highly professional in delivering accurate author's vision and thoughts in manuscripts. Thus, we have dynamic support for eBook projects to deliver high-quality content. Our skilled ghostwriting enforces the creative abilities to facilitate authors for successful content in eBook writing services."
                tag="Ebook Writing"
                bgImage={bgImage}
            />
            <Brands />
            <AboutSection
                title="Your Vision, Digitally Optimized"
                description="In the digital age, an eBook is more than just a book—it is a portable gateway to your ideas. At The Publishing Genie, we specialize in crafting eBooks that aren't just read, but experienced. Our writers focus on digital-first readability, strategic chapter structures, and cross-platform compatibility, ensuring your message reaches the global mobile audience with clarity, impact, and professional polish."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Tablet,
                            value: "1000+",
                            label: "Digital Authorings"
                        },
                        {
                            icon: Globe,
                            value: "50+",
                            label: "Global Top-Sellers"
                        },
                        {
                            icon: Search,
                            value: "100%",
                            label: "Kindle Optimized"
                        },
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Ebook Vision to Life</>}
                description="Our strategic digital crafting process ensures your work stands as a testament to your innovation. We bridge the gap between pixels and professional literature!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="Literature for the Modern Era"
                descLeft={
                    <>
                        <p>
                            Transitioning from paper to pixels requires a unique set of skills. Our ebook writing is a perfect way to share your <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">expertise</span> with a fast-paced digital world.
                        </p>
                        <p>
                            We focus on high-res typography and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">clickable navigation</span> to ensure your readers stay engaged. The Publishing Genie can assist you with a professional digital author to support you in developing a perfect ebook narrative.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled ghostwriters produce impressive digital books that drive global engagement. Successful ebooks find audiences across continents if they represent a modern perspective and <span className="italic">seamless connectivity</span>. We focus on the digital-first quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Digital Creation Pillars:"
                listItems={[
                    "Cross-Platform Consistency",
                    "Clickable Architecture",
                    "High-Engagement Prose",
                    "SEO-Driven Metadata",
                    "Global Market Access",
                    "Instant Digital Delivery",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your digital identity and show your true worth to the global online market.
                    </p>
                }
            />
            <ProcessSteps
                title="Our Digital Publishing Workflow"
                steps={ebookProcess}
            />
            <FAQBuilder
                faqs={ebookFaqs}
                description="We ensure your digital masterpiece captures the attention of the global mobile audience."
            />
        </main>
    )
}