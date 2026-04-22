import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/screen-writing-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-screen.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-screen-section.png";
import { Video, Clapperboard, PenTool } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Screen-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/screen-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/screen-cta-right.png";

const screenProcess = [
    {
        title: "Narrative Blueprints",
        description: "We begin by developing your core premise and story engine. This foundation ensures your screenplay has the necessary momentum and conflict to sustain a feature-length experience."
    },
    {
        title: "Character Arc Engineering",
        description: "Great screenplays are driven by deep characters. We craft multi-layered identities with clear motivations and evolving arcs that resonate with global audiences."
    },
    {
        title: "Beat-by-Beat Construction",
        description: "Our writers map the cinematic journey with precision. We focus on dramatic tension and logical pacing, ensuring every scene contributes to a powerful and satisfying conclusion."
    },
    {
        title: "Lyrical Dialogue Drafting",
        description: "Dialogue is an art form. We draft your script with a focus on subtext and natural flow, ensuring every line carries emotional weight and professional flair."
    },
    {
        title: "Technical Script Formatting",
        description: "Professional scripts require technical precision. We use industry-leading software to ensure your manuscript meets the exact standards of Hollywood and global studios."
    },
    {
        title: "Studio-Ready Delivery",
        description: "The final step is delivering a polished masterpiece. We provide all the technical cues and structural notes needed for producers and directors to bring your vision to life."
    }
];

const screenFaqs = [
    {
        question: "What types of screenplays do you specialize in?",
        answer: "We specialize in a wide range of formats, including feature films, episodic television pilots, short films, and commercial scripts across all major genres."
    },
    {
        question: "How do you handle character voices and unique dialogue?",
        answer: "We use 'Vocal Archetyping' to define unique patterns for each character, ensuring their dialogue feels authentic, consistent, and full of subtext throughout the script."
    },
    {
        question: "Do you use professional software like Final Draft?",
        answer: "Yes. Every screenplay we deliver is formatted using industry-standard software like Final Draft, ensuring total compliance with global production requirements."
    },
    {
        question: "Who owns the intellectual property to the screenplay?",
        answer: "You retain 100% of the intellectual property rights and full author credit. Our role is strictly as your professional, behind-the-scenes screenwriting partner."
    }
];

export default function ScreenWriting() {
    return (
        <main>
            <ServiceHero 
                title="Author Your Next Cinematic Success" 
                subtitle="Transform your vision into a world-class screenplay. Our professional screenwriters craft compelling narratives with dramatic precision and industry-standard technical formatting." 
                tag="Screenplay Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Story, Professionally Scripted"
                description="The screen is the ultimate medium for high-impact storytelling. At The Publishing Genie, we specialize in distilling your expansive concepts into structured, high-impact screenplays. Whether you are aiming for a theatrical release or a streaming series, our expert ghostwriters ensure your story is told with the precision, heart, and professional dignity that your vision deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Video,
                            value: "350+",
                            label: "Scripts Crafted"
                        },
                        {
                            icon: Clapperboard,
                            value: "50+",
                            label: "Global Clients"
                        },
                        {
                            icon: PenTool,
                            value: "100%",
                            label: "Technical Accuracy"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Screen Concept to Life</>}
                description="Our strategic screenwriting process ensures your work stands as a testament to your innovation. We bridge the gap between imagination and world-class production!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Soul of the Visual Narrative"
                descLeft={
                    <>
                        <p>
                            In the realm of professional production, a screenplay is more than just words—it is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic blueprint</span>. Our writing services focus on identifying the core value of your story and presenting it in a way that captures the attention of industry leaders.
                        </p>
                        <p>
                            We understand that cinematic mastery requires a delicate balance of technical precision and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">compelling prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized screen ghostwriters produce impressive scripts that drive industry pride. A great screenplay finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Screenwriting Pillars:"
                listItems={[
                    "Dramatic Momentum & Pacing",
                    "Authentic Character Archetypes",
                    "Technical Standard Compliance",
                    "Visual Storytelling Clarity",
                    "Global Market Positioning",
                    "Rigorous Production Ethics",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your cinematic identity and show your true worth to the world of global entertainment.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Screenwriting Workflow" 
                steps={screenProcess} 
            />
            <FAQBuilder 
                faqs={screenFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous cinematic and editorial standards."
            />
        </main>
    )
}