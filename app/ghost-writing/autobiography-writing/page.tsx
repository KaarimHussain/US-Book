import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/memoir-writing.webp";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-memoir.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-memoir.png";
import { UserCheck, MessageSquare, Globe } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Autobiography-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/memoir-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/memoir-cta-right.png";

const autobiographyProcess = [
    {
        title: "Introspective Discovery",
        description: "We begin with deep-dive interviewing sessions designed to uncover the pivotal moments of your personal journey and the core values that have shaped your life."
    },
    {
        title: "Thematic Pillar Mapping",
        description: "Every life has recurring themes. We identify the key messages and lessons you want to impart, ensuring they form a cohesive and inspiring narrative thread throughout the book."
    },
    {
        title: "Voice & Tone Sculpting",
        description: "Our writers study your natural speech patterns and unique expressions. We ensure that every word in the manuscript sounds effectively like you, maintaining your authentic personality."
    },
    {
        title: "Chronological Layering",
        description: "We build your story from your earliest memories to the present day, providing a structured and engaging flow that captures the evolution of your life and accomplishments."
    },
    {
        title: "Reflective Refinement",
        description: "An autobiography needs depth. We add layers of retrospect and wisdom, helping you articulate the 'why' behind the 'what' in a way that resonates with future generations."
    },
    {
        title: "Legacy Delivery",
        description: "The final product is a world-class manuscript that serves as your permanent legacy. We ensure it is polished, professionally formatted, and ready for global publication."
    }
];

const autobiographyFaqs = [
    {
        question: "How is an autobiography different from a memoir?",
        answer: "While a memoir typically focuses on specific themes or periods, an autobiography is a comprehensive self-told account of your entire life journey, capturing your personal evolution from beginning to present."
    },
    {
        question: "How do you ensure the book sounds like me?",
        answer: "We use a 'Voice Modeling' process where we analyze your interviews and existing writings to replicate your specific cadence, vocabulary, and personality in the written word."
    },
    {
        question: "Will I have final approval on all content?",
        answer: "Absolutely. You have 100% control over the narrative. Every chapter is reviewed and approved by you to ensure it accurately reflects your life and your truth."
    },
    {
        question: "Is the ghostwriting process confidential?",
        answer: "Maximum confidentiality is our standard. We sign a strict Non-Disclosure Agreement (NDA), ensuring that you retain all credit and total ownership of your life story."
    }
];

export default function AutobiographyWriting() {
    return (
        <main>
            <ServiceHero
                title="Author Your Own Timeless Legacy"
                subtitle="Share your life's unique journey in your own authentic voice. Our expert autobiography ghostwriters partner with you to capture your milestones and personal truth in a compelling world-class manuscript."
                tag="Personal Legacy"
                bgImage={bgImage}
            />
            <Brands />
            <AboutSection
                title="Your Life, Told Your Way"
                description="An autobiography is the ultimate testament to a life lived with purpose. At The Publishing Genie, we specialize in helping prominent individuals, visionaries, and family leaders translate their memories into a professional literary legacy. We bridge the gap between your personal reflections and the written word, ensuring every victory and moment of wisdom is preserved with the dignity and authentic voice it deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: UserCheck,
                            value: "350+",
                            label: "Lives Chronicled"
                        },
                        {
                            icon: MessageSquare,
                            value: "100%",
                            label: "Voice Authenticity"
                        },
                        {
                            icon: Globe,
                            value: "NDA",
                            label: "Strict Confidentiality"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Transform Your Life Story Today</>}
                description="Our skilled writing capabilities can deliver effective word combinations! We portray the storyline as an inspirational guide to your unique journey!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="Capturing the Soul of the Subject"
                descLeft={
                    <>
                        <p>
                            Autobiography writing is a deeply personal partnership. It requires more than just writing—it requires an <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">empathetic ear</span> and the ability to capture the nuance of human experience.
                        </p>
                        <p>
                            Your story has the power to change lives and inspire future leaders. The Publishing Genie provides a professional autobiography writer to support you in developing a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">flawless narrative</span> that honors your contribution to the world.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled ghostwriters produce impressive autobiographical books that you can be proud of. An autobiography spreads your narrative in a way that ensures your wisdom finds an audience. We focus on the motivational perspective and reachable connectivity of your life event dignity.
                    </p>
                }
                listTitle="Autobiographical Pillars:"
                listItems={[
                    "Voice Authenticity",
                    "Thematic Wisdom",
                    "Emotional Nuance",
                    "Chronological Accuracy",
                    "Professional Literary Tone",
                    "Unmatched Confidentiality",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your unique journey and show your indeed worth to the world.
                    </p>
                }
            />
            <ProcessSteps
                title="Our Autobiography Writing Process"
                steps={autobiographyProcess}
            />
            <FAQBuilder
                faqs={autobiographyFaqs}
                description="We ensure your life story is preserved with the integrity and authentic voice it deserves."
            />
        </main>
    )
}