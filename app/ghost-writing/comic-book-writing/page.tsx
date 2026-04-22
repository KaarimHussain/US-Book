import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/comic-book-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-comic.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-comic-section.png";
import { BookOpen, Zap, Users } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Comic-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/comic-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/comic-cta-right.png";

const comicProcess = [
    {
        title: "Visual Concept Mapping",
        description: "We begin by defining the core visual soul of your project—the world, character silhouettes, and lore. This foundation ensures your story has the necessary scale for the graphic medium."
    },
    {
        title: "Script Architecture",
        description: "Great comics are engineered. We structure your narrative into issues, arcs, and panels, ensuring the pacing and dramatic tension translate perfectly to the page."
    },
    {
        title: "Immersive World-Building",
        description: "A great graphic narrative lives in its setting. We meticulously build the atmosphere and physical world of your story, providing detailed visual cues for your artists."
    },
    {
        title: "Lyrical Panel Drafting",
        description: "Our expert ghostwriters draft your script with a focus on visual impact and sharp, character-driven dialogue. We bridge the gap between imagination and professional comic prose."
    },
    {
        title: "Refinement & Layout Pass",
        description: "We perform multiple rounds of deep-dive editing to polish the pacing, transitions, and emotional impact. Our focus is on maintaining a sophisticated and engaging authorial voice."
    },
    {
        title: "Publishing-Ready Delivery",
        description: "The final step is delivering a polished master script. We ensure your work meets the highest industry standards, ready for global distribution and artistic collaboration."
    }
];

const comicFaqs = [
    {
        question: "How is comic book writing different from standard novel writing?",
        answer: "Comic writing is 'Visual-First.' It requires a deep understanding of panel layout, pacing, and visual subtext, focusing on showing the story through action and dialogue rather than just description."
    },
    {
        question: "Do you provide the artwork as well?",
        answer: "Our core service is the professional script. However, we can assist in coordinating with world-class artists and illustrators to bring your written vision to life."
    },
    {
        question: "How do you handle character designs and visual descriptions?",
        answer: "Every script we deliver includes detailed 'Visual Cue' documents, defining character appearances, costume details, and setting aesthetics to guide your artistic team."
    },
    {
        question: "Can you write for specific formats like Graphic Novels or Manga?",
        answer: "Absolutely. We are versatile in our approach, tailoring the script structure and pacing to match the specific requirements of Western comics, Graphic Novels, or Manga."
    }
];

export default function ComicBookWriting() {
    return (
        <main>
            <ServiceHero 
                title="Master the Art of Visual Storytelling" 
                subtitle="Transform your epic vision into a professionally written comic book script. From high-impact arcs to detailed panel descriptions, we capture the soul of your narrative in a world-class graphic format." 
                tag="Graphic Narrative Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Vision, Our Visual Narrative Expertise"
                description="Comic books are the ultimate fusion of literature and visual art. At The Publishing Genie, we specialize in distilling your expansive concepts into structured, high-impact scripts. Whether you are aiming for a classic superhero epic or a modern indie graphic novel, our expert ghostwriters ensure your message is delivered with the precision, flair, and professional dignity that your creative legacy deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: BookOpen,
                            value: "300+",
                            label: "Issues Crafted"
                        },
                        {
                            icon: Zap,
                            value: "100%",
                            label: "Visual Impact"
                        },
                        {
                            icon: Users,
                            value: "50+",
                            label: "Global Creators"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Graphic Vision to Life</>}
                description="Our strategic comic writing process ensures your work stands as a testament to your innovation. We bridge the gap between imagination and world-class graphic literature!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Soul of the Modern Graphic Era"
                descLeft={
                    <>
                        <p>
                            In the realm of modern entertainment, a comic book is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic asset</span>. Our writing services focus on identifying the core value of your story and presenting it in a way that captures the attention of global audiences.
                        </p>
                        <p>
                            We understand that visual storytelling requires a delicate balance of technical cues and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">engaging dialogue</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized comic ghostwriters produce impressive scripts that drive industry pride. A great graphic story finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Comic Writing Pillars:"
                listItems={[
                    "Strategic Panel Pacing",
                    "Visual Narrative Clarity",
                    "Deep Character Archetypes",
                    "Lore-Driven World-Building",
                    "Global Market Positioning",
                    "Rigorous Production Standards",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your graphic identity and show your true worth to the world of global literature.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Comic Writing Workflow" 
                steps={comicProcess} 
            />
            <FAQBuilder 
                faqs={comicFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous graphic and editorial standards."
            />
        </main>
    )
}