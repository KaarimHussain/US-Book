import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/business-writing.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-business.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-business.png";
import { Briefcase, TrendingUp, BarChart3 } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Business-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/business-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/business-cta-right.png";

const businessProcess = [
    {
        title: "Corporate Discovery",
        description: "We begin with a deep-dive into your professional journey and brand objectives. This session allows us to define the brand voice and key business goals your book needs to achieve."
    },
    {
        title: "Market & Competitor Analysis",
        description: "We analyze your industry landscape to ensure your book offers a unique and superior perspective. This positioning helps you stand out as a definitive authority in your field."
    },
    {
        title: "Strategic Roadmapping",
        description: "Consistency is key in business literature. We outline your core insights and expertise in a logical structure that builds credibility and guides your reader toward your professional vision."
    },
    {
        title: "Expert Drafting",
        description: "Our professional ghostwriters transform your technical expertise and industry knowledge into polished, authoritative prose. We bridge the gap between jargon and compelling professional narrative."
    },
    {
        title: "Thought-Leadership Polish",
        description: "We perform multiple rounds of strategic editing to refine your message for maximum impact. Our focus is on establishing you as a visionary thought-leader through clear and impactful writing."
    },
    {
        title: "Global Market Launch",
        description: "The final step is preparing your manuscript for the global business stage. We ensure your book meets the highest publishing standards, ready for professional distribution and impact."
    }
];

const businessFaqs = [
    {
        question: "What types of business books do you specialize in?",
        answer: "We specialize in a wide range of categories, including leadership guides, corporate histories, industry-specific analytical reports, entrepreneurial memoirs, and strategic management books."
    },
    {
        question: "Can you help if I don't have all the data or case studies ready?",
        answer: "Absolutely. Our team includes researchers who can assist in gathering empirical data, verifying industrial trends, and crafting compelling case studies to support your professional insights."
    },
    {
        question: "How do you ensure my professional brand voice is preserved?",
        answer: "We use a collaborative drafting process where we study your previous works, speeches, and interviews to replicate your specific authoritative tone and professional communication style."
    },
    {
        question: "How do we handle confidential company information?",
        answer: "Confidentiality is our top priority. We operate under strict Non-Disclosure Agreements (NDAs) and have secure processes in place to ensure that all proprietary business data is handled with maximum discretion."
    }
];

export default function BusinessWriting() {
    return (
        <main>
            <ServiceHero 
                title="Establish Your Industry Authority" 
                subtitle="Transform your professional expertise into a world-class business manuscript. Our expert ghostwriters craft authoritative narratives that drive thought leadership and establish your corporate legacy." 
                tag="Authoritative Business" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Expertise, Our Strategic Narrative"
                description="In the competitive world of global business, authority is your most valuable asset. At The Publishing Genie, we specialize in distilling your industrial insights and visionary leadership into structured, impactful manuscripts. Whether you are an executive, an entrepreneur, or a consultant, our expert business ghostwriters ensure your message is delivered with the professional dignity and editorial precision that your career deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Briefcase,
                            value: "15+",
                            label: "Years of Authority"
                        },
                        {
                            icon: TrendingUp,
                            value: "400+",
                            label: "Leaders Served"
                        },
                        {
                            icon: BarChart3,
                            value: "100%",
                            label: "Strategic Impact"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Professional Vision to Life</>}
                description="Our strategic writing process ensures your work stands as a testament to your expertise. We don't just write; we build a foundation of credibility that lasts!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="Driving Global Thought Leadership"
                descLeft={
                    <>
                        <p>
                            Corporate literature is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic tool</span> for growth. Our business writing service focuses on identifying the core value of your professional knowledge and presenting it in a way that captures the attention of peers and the public alike.
                        </p>
                        <p>
                            We understand that complex industrial subjects require a delicate balance of technical accuracy and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">engaging prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized business ghostwriters produce manuscripts that drive thought leadership and corporate pride. A great business book finds audiences across the globe if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Business Writing Pillars:"
                listItems={[
                    "Strategic Message Clarity",
                    "Authoritative Industry Voice",
                    "Empirical Data Integration",
                    "Professional Brand Consistency",
                    "Global Market Positioning",
                    "Rigorous Research Standards",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your professional identity and show your true worth to the world of global business.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Business Writing Process" 
                steps={businessProcess} 
            />
            <FAQBuilder 
                faqs={businessFaqs}
                description="We ensure your professional expertise reaches the influential audience it deserves with rigorous editorial standards."
            />
        </main>
    )
}