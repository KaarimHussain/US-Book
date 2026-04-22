import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/non-fiction-writing.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-non-fiction.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-non-fiction.png";
import { BookOpen, ShieldCheck, Award } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Non-Fiction specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/non-fiction-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/non-fiction-cta-right.png";

const nonFictionProcess = [
    {
        title: "Conceptualization & Structure",
        description: "Every great non-fiction work begins with a solid foundation. We work closely with you to define your core thesis, target audience, and a logical table of contents that ensures a seamless flow of ideas."
    },
    {
        title: "Data & Research Integration",
        description: "Credibility is paramount in non-fiction. Our team assists in gathering and organizing your research, data, and anecdotal evidence, ensuring every claim is backed by the weight of authority and evidence."
    },
    {
        title: "Narrative Drafting",
        description: "Our expert ghostwriters transform raw information into a compelling narrative voice. We maintain your unique professional tone while ensuring the text remains accessible, engaging, and authoritative for your readers."
    },
    {
        title: "Strategic Editing",
        description: "We perform multiple rounds of deep-dive editing to refine the clarity, pace, and impact of your message. Our goal is to eliminate ambiguity and sharpen the persuasive power of your work."
    },
    {
        title: "Professional Formatting",
        description: "A professional manuscript requires professional presentation. We format your book to meet the highest industry standards, ensuring it is ready for both digital distribution and high-end physical printing."
    },
    {
        title: "Launch & Distribution",
        description: "Sharing your knowledge with the world is the final step. We provide guidance on publication paths and marketing strategies to ensure your non-fiction work reaches the influential audience it deserves."
    }
];

const nonFictionFaqs = [
    {
        question: "What makes a non-fiction book successful?",
        answer: "A successful non-fiction book blends deep subject matter expertise with a compelling, logical structure. It provides clear value to the reader through well-researched insights and a unique, authoritative perspective."
    },
    {
        question: "How do you handle technical or complex subjects?",
        answer: "We pair you with writers who have experience in your specific field. They bridge the gap between technical expertise and editorial clarity, ensuring your complex ideas are communicated effectively to your target audience."
    },
    {
        question: "Is source verification and research included?",
        answer: "Yes. Our premium non-fiction services include rigorous source verification and strategic research support to ensure the integrity and credibility of your manuscript stay beyond reproach."
    },
    {
        question: "Who owns the rights to the finished manuscript?",
        answer: "You do. As our client, you retain 100% of the intellectual property rights and full author credit. Our role is strictly as your professional ghostwriting partner, working behind the scenes to bring your vision to life."
    }
];

export default function NonFictionWriting() {
    return (
        <main>
            <ServiceHero 
                title="Elevate Your Expertise with Non-Fiction Writing" 
                subtitle="Transform your unique insights and research into a powerful, authoritative legacy. Our expert ghostwriters craft compelling narratives that establish your industry presence and resonate with global readers." 
                tag="Authoritative Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Knowledge, Our Narrative Expertise"
                description="Non-fiction writing is the art of presenting truth with the elegance and impact of high-end literature. At The Publishing Genie, we specialize in distilling your data, experiences, and vision into a structured, influential manuscript. Whether you are an industry leader, a historian, or a visionary, our expert ghostwriters ensure your message is delivered with precision and a sophisticated editorial voice that commands respect."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: BookOpen,
                            value: "10+",
                            label: "Years of Authority"
                        },
                        {
                            icon: ShieldCheck,
                            value: "300+",
                            label: "Manuscripts Delivered"
                        },
                        {
                            icon: Award,
                            value: "100%",
                            label: "Intellectual Property"
                        },
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Professional Vision to Life</>}
                description="Our strategic writing process ensures your work stands as a testament to your expertise. We don't just write; we build a foundation of credibility that lasts."
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="Distilling Truth into Global Impact"
                descLeft={
                    <>
                        <p>
                            In the realm of professional publishing, non-fiction is more than just information—it is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic asset</span>. Our writing services focus on identifying the core value of your knowledge and presenting it in a way that captures the attention of peers and the public alike.
                        </p>
                        <p>
                            We understand that complex subjects require a delicate balance of technical accuracy and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">engaging prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class literary contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        Our specialized non-fiction ghostwriters produce manuscripts that drive thought leadership and professional growth. We ensure that your narrative finds the right audience, spreading your insights brilliantly through professional-grade storytelling and rigorous editorial standards.
                    </p>
                }
                listTitle="Core Pillars of Our Service:"
                listItems={[
                    "Structural Integrity & Flow",
                    "Fact-Based Precision",
                    "Audience-Centric Narrative",
                    "Rigorous Research Ethics",
                    "Thought Leadership Positioning",
                    "Authentic Author Voice",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your expertise and showcase your true worth to the world.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Non-Fiction Workflow" 
                steps={nonFictionProcess} 
            />
            <FAQBuilder 
                faqs={nonFictionFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous editorial standards."
            />
        </main>
    )
}