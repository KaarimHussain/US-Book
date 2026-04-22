import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/speech-writing-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-speech.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-speech-section.png";
import { Mic2, MessageSquare, Award } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Speech-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/speech-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/speech-cta-right.png";

const speechProcess = [
    {
        title: "Oratorical Discovery",
        description: "We begin by analyzing your stage, your audience, and your core message. This session allows us to define the emotional tone and authoritative voice required for your specific oratorical moment."
    },
    {
        title: "Rhetorical Architecture",
        description: "Great speeches are engineered, not just written. We build a persuasive structure with powerful emotional hooks and logical transitions that keep your audience engaged from start to finish."
    },
    {
        title: "Drafting for the Ear",
        description: "Our expert ghostwriters draft your speech with a focus on cadence, rhythm, and natural pauses. We ensure the written word translates perfectly into a powerful auditory experience."
    },
    {
        title: "Opening & Closing Mastery",
        description: "The first and last minutes are crucial. We build impactful bookends that command attention immediately and leave a lasting, motivational impression on your audience."
    },
    {
        title: "Auditory Refinement",
        description: "Speeches are meant to be heard. We perform rigorous testing of the flow and phonetic clarity of every paragraph, ensuring your delivery feels effortless and authoritative."
    },
    {
        title: "Master Performance Script",
        description: "The final step is delivering a performance-ready manuscript. We provide delivery cues, emphasis markers, and structural notes to ensure you command the stage with confidence."
    }
];

const speechFaqs = [
    {
        question: "How do you ensure the speech sounds like my authentic voice?",
        answer: "We use 'Vocal Modeling' to analyze your previous speeches or natural speech patterns. Our goal is to enhance your original personality while adding professional rhetorical depth."
    },
    {
        question: "Can you write for different events like Keynotes or Galas?",
        answer: "Yes. Our team is experienced in crafting speeches for a wide range of settings, from high-stakes corporate keynotes and political addresses to intimate wedding toasts and gala inductions."
    },
    {
        question: "Do you provide tips for delivery and stage presence?",
        answer: "Every speech we deliver includes a 'Performance Guide' with notes on pacing, emphasis, and physical presence to help you maximize your oratorical impact."
    },
    {
        question: "What is the typical timeline for a professionally written speech?",
        answer: "For a standard high-impact speech, we typically recommend a 1-2 week window for drafting and refinement, ensuring every word is polished to perfection."
    }
];

export default function SpeechWriting() {
    return (
        <main>
            <ServiceHero
                title="Command the Stage with Rhetorical Authority"
                subtitle="Transform your message into a powerful, world-class speech. Our expert speechwriters craft impactful narratives that engage your audience and establish your oratorical legacy."
                tag="Rhetorical Mastery"
                bgImage={bgImage}
            />
            <Brands />
            <AboutSection
                title="Your Message, Our Oratorical Expertise"
                description="The spoken word is the ultimate tool of leadership and influence. At The Publishing Genie, we specialize in distilling your complex ideas into structured, impactful speeches. Whether you are addressing a corporate boardroom, a national convention, or a private celebration, our expert ghostwriters ensure your message is delivered with the precision, heart, and professional dignity it commands."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Mic2,
                            value: "500+",
                            label: "Speeches Delivered"
                        },
                        {
                            icon: MessageSquare,
                            value: "100%",
                            label: "Voice Authenticity"
                        },
                        {
                            icon: Award,
                            value: "15+",
                            label: "Years of Impact"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Command Your Next Stage Today</>}
                description="Our strategic speechwriting process ensures your work stands as a testament to your leadership. We bridge the gap between abstract thought and world-class oratory!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Power of the Spoken Word"
                descLeft={
                    <>
                        <p>
                            In the realm of high-stakes communication, a speech is more than just words—it is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic performance</span>. Our writing services focus on identifying the core emotional value of your message.
                        </p>
                        <p>
                            We understand that oratorical mastery requires a delicate balance of rhetorical devices and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">natural cadence</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class oratorical contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled ghostwriters produce impressive speeches that drive industry respect. A great speech finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Speechwriting Pillars:"
                listItems={[
                    "Rhetorical Impact & Pacing",
                    "Authentic Vocal Identity",
                    "Opening & Closing Mastery",
                    "Auditory Flow Precision",
                    "Global Market Positioning",
                    "Rigorous Editorial Standards",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your oratorical identity and show your true worth to the world of global leadership.
                    </p>
                }
            />
            <ProcessSteps
                title="Our Strategic Speechwriting Workflow"
                steps={speechProcess}
            />
            <FAQBuilder
                faqs={speechFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous rhetorical and editorial standards."
            />
        </main>
    )
}