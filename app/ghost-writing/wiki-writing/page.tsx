import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/wiki-writing-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-wiki.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-wiki-section.png";
import { ShieldCheck, Globe, Search } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Wiki-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/wiki-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/wiki-cta-right.png";

const wikiProcess = [
    {
        title: "Notability Assessment",
        description: "We begin by verifying your achievements and milestones against global Wiki notability standards. This ensures your profile has the necessary weight for a successful and lasting entry."
    },
    {
        title: "Rigorous Source Verification",
        description: "Wiki entries require independent verification. We curate a robust bibliography of high-end, reliable sources to back every claim in your profile, ensuring total credibility."
    },
    {
        title: "Neutral Point-of-View Drafting",
        description: "Our writers use an objective, encyclopedic tone that meets strict Wiki guidelines. We present your story with technical precision, avoiding promotional language while highlighting your impact."
    },
    {
        title: "Structural Compliance",
        description: "We organize your content into a professionally formatted layout that adheres to standard Wiki architecture, including lead sections, infoboxes, and logical headers."
    },
    {
        title: "Citation & Reference Integration",
        description: "Every sentence in your Wiki entry is supported by rigorous citations. We embed verifiable references from reputable publishers, ensuring your entry stands as a definitive record."
    },
    {
        title: "Maintenance & Integrity Protection",
        description: "The digital archive is dynamic. We provide strategies for maintaining the accuracy of your entry and protecting it from unauthorized or biased edits over time."
    }
];

const wikiFaqs = [
    {
        question: "What does it mean to be 'notable' for a Wiki page?",
        answer: "Notability is defined by significant coverage in independent, reliable secondary sources. We help you assess your career milestones to ensure they meet these global standards for inclusion."
    },
    {
        question: "Can I write my own Wiki page or profile?",
        answer: "Wiki guidelines strongly discourage writing about yourself due to 'Conflict of Interest.' Our professional third-party writing ensures your entry is neutral, objective, and compliant with all community standards."
    },
    {
        question: "How do you handle source verification for private achievements?",
        answer: "Wiki only accepts information that is already published in reliable sources. We work with you to identify existing press, books, or academic journals that can serve as verifiable proof for your career highlights."
    },
    {
        question: "What happens if my Wiki page is challenged or edited?",
        answer: "Wiki is a collaborative platform. We focus on 'Bulletproof Drafting'—ensuring every claim is so well-sourced and neutral that it naturally withstands community scrutiny and maintains its integrity."
    }
];

export default function WikiWriting() {
    return (
        <main>
            <ServiceHero 
                title="Establish Your Global Digital Authority" 
                subtitle="Transform your achievements into a definitive encyclopedic record. Our expert Wiki writers craft neutral, verifiable, and authoritative profiles that stand as a testament to your global impact." 
                tag="Encyclopedic Authority" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Legacy, Digitally Verified"
                description="In the age of information, a Wiki entry is the ultimate marker of global authority. At The Publishing Genie, we specialize in distilling your complex career and achievements into structured, impactful encyclopedic profiles. Whether you are an industry leader, a visionary, or a high-impact organization, our expert writers ensure your message is delivered with the objective precision and technical dignity that your heritage deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: ShieldCheck,
                            value: "100%",
                            label: "Policy Compliant"
                        },
                        {
                            icon: Globe,
                            value: "400+",
                            label: "Profiles Managed"
                        },
                        {
                            icon: Search,
                            value: "100%",
                            label: "Source Verified"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Authoritative Profile to Life</>}
                description="Our strategic Wiki-writing process ensures your work stands as a testament to your innovation. We bridge the gap between achievement and global verification!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Architecture of Digital Truth"
                descLeft={
                    <>
                        <p>
                            In the realm of high-end reputation management, a Wiki entry is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic asset</span>. Our writing services focus on identifying the verifiable value of your journey and presenting it in a way that commands respect from global readers.
                        </p>
                        <p>
                            We understand that encyclopedic writing requires a delicate balance of factual density and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">neutral prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class contribution to the global digital archive.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized Wiki writers produce impressive profiles that drive heritage and digital pride. A great entry finds audiences across continents if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Wiki Writing Pillars:"
                listItems={[
                    "Neutral Point-of-View (NPOV)",
                    "Rigorous Source Integration",
                    "Notability Analysis",
                    "Encyclopedic Architecture",
                    "Global Digital Positioning",
                    "Long-Term Integrity Protection",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your digital identity and show your true worth to the world of global information.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Wiki Workflow" 
                steps={wikiProcess} 
            />
            <FAQBuilder 
                faqs={wikiFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous encyclopedic and editorial standards."
            />
        </main>
    )
}