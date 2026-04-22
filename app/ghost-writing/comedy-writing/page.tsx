import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/comedy-writing-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-comedy.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-comedy-section.png";
import { Laugh, Zap, Mic2 } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Comedy-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/comedy-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/comedy-cta-right.png";

const comedyProcess = [
    {
        title: "Comedic Blueprint",
        description: "We begin by identifying your unique brand of humor and your target audience. This foundation ensures the wit is tailored perfectly to land with impact and authenticity."
    },
    {
        title: "Setup & Punchline Architecture",
        description: "Great comedy is engineered. We build the structural flow of your jokes, ensuring the setups are engaging and the punchlines deliver a satisfying and unexpected resolution."
    },
    {
        title: "Character & Voice Development",
        description: "Our writers craft unique, funny identities and perspectives. We focus on creating a specific comedic voice that drives the humor through personality and relatable observation."
    },
    {
        title: "Timing & Rhythm Refinement",
        description: "Comedy is all about the 'beats.' We rigorously refine the pacing and rhythm of your manuscript, ensuring the jokes have the necessary space to breathe and hit with precision."
    },
    {
        title: "Satirical Depth & Wordplay",
        description: "We add layers of clever wordplay or social commentary to your work. Our goal is to elevate the humor beyond the surface, creating content that is both funny and intelligent."
    },
    {
        title: "Performance Ready Script",
        description: "The final step is delivering a master manuscript. Whether for the stage, screen, or page, we provide the timing cues and structural notes needed for comedic success."
    }
];

const comedyFaqs = [
    {
        question: "What formats of comedy do you specialize in?",
        answer: "We specialize in a wide range of comedic writing, including stand-up sets, sitcom scripts, satirical articles, comedic memoirs, and humorous commercial scripts."
    },
    {
        question: "How do you ensure the humor is appropriate for my specific audience?",
        answer: "We perform an 'Audience Audit' before drafting. This allows us to calibrate the edge, tone, and subject matter of the humor to ensure it resonates without causing offense."
    },
    {
        question: "What if I'm not naturally funny myself?",
        answer: "That is where we come in. Our professional ghostwriters act as your comedic partner, providing the wit and structural timing needed to make your vision hilarious and professional."
    },
    {
        question: "Who owns the rights to the jokes and sketches?",
        answer: "You retain 100% of the intellectual property and full author credit. We operate as your professional, behind-the-scenes comedic writing partner."
    }
];

export default function ComedyWriting() {
    return (
        <main>
            <ServiceHero
                title="Master the Art of Professional Wit"
                subtitle="Transform your ideas into high-impact comedic masterpieces. Our expert comedy writers craft sharp wit, perfect timing, and infectious humor for the stage, screen, and page."
                tag="Comedic Authority"
                bgImage={bgImage}
            />
            <Brands />
            <AboutSection
                title="Your Vision, Our Comedic Expertise"
                description="Comedy is the most sophisticated form of communication, and every great laugh starts with a perfectly engineered script. At The Publishing Genie, we specialize in distilling your observations and vision into structured, impactful comedic manuscripts. Whether you are aiming for a classic sitcom feel or a modern satirical edge, our expert ghostwriters ensure your message is delivered with precision, heart, and professional wit."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Laugh,
                            value: "300+",
                            label: "Scripts Crafted"
                        },
                        {
                            icon: Zap,
                            value: "100%",
                            label: "Punchline Impact"
                        },
                        {
                            icon: Mic2,
                            value: "NDA",
                            label: "Strict Confidentiality"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Comedic Vision to Life</>}
                description="Our strategic comedy writing process ensures your work stands as a testament to your wit. We bridge the gap between abstract humor and professional masterpieces!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Architecture of the Perfect Laugh"
                descLeft={
                    <>
                        <p>
                            In the realm of professional entertainment, comedy is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic asset</span>. Our writing services focus on identifying the core value of your humor and presenting it in a way that captures the attention of global audiences.
                        </p>
                        <p>
                            We understand that comedic mastery requires a delicate balance of technical timing and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">engaging prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class comedic contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled ghostwriters produce impressive comedic books that drive industry respect. A great laugh finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Comedy Writing Pillars:"
                listItems={[
                    "Technical Timing & Beats",
                    "Authentic Comedic Voice",
                    "Setup & Punchline Clarity",
                    "Satirical Depth & Nuance",
                    "Global Market Positioning",
                    "Rigorous Editorial Standards",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your comedic identity and show your true worth to the world of global entertainment.
                    </p>
                }
            />
            <ProcessSteps
                title="Our Strategic Comedy Workflow"
                steps={comedyProcess}
            />
            <FAQBuilder
                faqs={comedyFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous comedic and editorial standards."
            />
        </main>
    )
}