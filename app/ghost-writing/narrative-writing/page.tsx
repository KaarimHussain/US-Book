import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/narrative-writing.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-narrative.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-writing-section.png";
import { BookOpen, UserCheck, Heart } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Narrative-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/narrative-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/narrative-cta-right.png";

const narrativeProcess = [
    {
        title: "Strategic Arc Mapping",
        description: "Every great story needs a direction. We begin by defining the emotional journey and key plot points of your narrative, ensuring a cohesive and compelling structure from start to finish."
    },
    {
        title: "Character Soul-Building",
        description: "We craft deep, complex identities for your protagonists and supporting cast. Our goal is to create relatable and memorable characters that drive the story forward with authenticity."
    },
    {
        title: "Immersive World-Building",
        description: "A great narrative lives in its setting. We meticulously build the atmosphere and physical world of your story, ensuring every detail contributes to a rich and believable reader experience."
    },
    {
        title: "Lyrical Drafting",
        description: "Our expert ghostwriters draft your story with a focus on sensory detail and phonic flow. We bridge the gap between abstract ideas and evocative, professional prose."
    },
    {
        title: "Dramatic Refinement",
        description: "We perform multiple rounds of deep-dive editing to polish the tension, pacing, and emotional impact of your narrative. Our focus is on maintaining a sophisticated and engaging authorial voice."
    },
    {
        title: "Publishing-Ready Delivery",
        description: "The final step is delivering a polished manuscript. We ensure your narrative meets the highest publishing standards, ready for global distribution and reader impact."
    }
];

const narrativeFaqs = [
    {
        question: "What is the difference between narrative writing and standard ghostwriting?",
        answer: "Narrative writing focuses on the art of storytelling—building arcs, character depth, and immersive atmospheres—rather than just recording facts or information."
    },
    {
        question: "Can you help me develop a story from a single idea?",
        answer: "Absolutely. Our team specializes in 'Concept Expansion.' We can take a simple premise or image and develop it into a full-scale narrative with professional depth and structure."
    },
    {
        question: "How do you ensure the narrative maintains emotional consistency?",
        answer: "We use 'Emotional Mapping' to track the character's internal journey alongside the plot. This ensures that every scene contributes to the overall emotional resonance of the book."
    },
    {
        question: "Do I retain the full rights to the story and characters?",
        answer: "Yes. You retain 100% of the intellectual property rights and full author credit. Our role is strictly as your professional, behind-the-scenes storytelling partner."
    }
];

export default function NarrativeWriting() {
    return (
        <main>
            <ServiceHero
                title="Master the Art of Deep Storytelling"
                subtitle="Transform your ideas into immersive, world-class narratives. Our expert storytellers craft compelling arcs and complex characters that capture the heart of your reader's imagination."
                tag="Narrative Excellence"
                bgImage={bgImage}
            />
            <Brands />
            <AboutSection
                title="Your Vision, Our Narrative Artistry"
                description="Narrative writing is the ultimate expression of human experience. At The Publishing Genie, we specialize in distilling your abstract concepts and personal truths into structured, impactful manuscripts. Whether you are aiming for a classic literary style or a modern immersive experience, our expert ghostwriters ensure your story is told with the precision, depth, and sophisticated editorial voice it deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: BookOpen,
                            value: "10+",
                            label: "Years of Heritage"
                        },
                        {
                            icon: Heart,
                            value: "450+",
                            label: "Stories Told"
                        },
                        {
                            icon: UserCheck,
                            value: "100%",
                            label: "Confidentiality"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Narrative Vision to Life</>}
                description="Our strategic storytelling process ensures your work stands as a testament to your creativity. We bridge the gap between imagination and professional literature!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Soul of the Written Word"
                descLeft={
                    <>
                        <p>
                            In the realm of high-end publishing, narrative is more than just a plot—it is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">creative legacy</span>. Our writing services focus on identifying the core emotional truth of your story and presenting it in a way that resonates with readers.
                        </p>
                        <p>
                            We understand that complex storytelling requires a delicate balance of technical precision and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">evocative prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized ghostwriters produce impressive narrative books that drive industry respect. A great story finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Narrative Writing Pillars:"
                listItems={[
                    "Strategic Arc Integrity",
                    "Authentic Character Depth",
                    "Immersive World-Building",
                    "Lyrical Phonic Flow",
                    "Emotional Resonance",
                    "Sophisticated Author Voice",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your narrative identity and show your true worth to the world of global literature.
                    </p>
                }
            />
            <ProcessSteps
                title="Our Strategic Narrative Workflow"
                steps={narrativeProcess}
            />
            <FAQBuilder
                faqs={narrativeFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous storytelling and editorial standards."
            />
        </main>
    )
}