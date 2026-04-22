import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/script-writing.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-script.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-script.png";
import { Clapperboard, Video, PenTool } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Script-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/script-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/script-cta-right.png";

const scriptProcess = [
    {
        title: "Cinematic Blueprint",
        description: "We begin by developing your core idea into a compelling logline and narrative arc. This foundation ensures your story has the dramatic tension required for the screen."
    },
    {
        title: "Character Architecture",
        description: "Great scripts are driven by great characters. We craft deep, complex protagonists and antagonists with unique voices and clear motivations that drive the action forward."
    },
    {
        title: "Scene Construction",
        description: "Our writers draft every scene with a focus on dramatic impact. We balance sharp dialogue with precise action cues, building a world that is visually and emotionally immersive."
    },
    {
        title: "Pacing & Tempo Refinement",
        description: "Timing is everything in scriptwriting. We rigorously refine the pacing of your story beats, ensuring the tension builds to a satisfying and meaningful climax."
    },
    {
        title: "Industry Standard Formatting",
        description: "Professional scripts require professional presentation. We format your work to meet the exact standards of Hollywood and global studios, ensuring it is ready for production."
    },
    {
        title: "Studio-Ready Delivery",
        description: "The final step is delivering a pitch-ready manuscript. We provide all the technical cues and structural notes needed for directors, actors, and producers to bring your vision to life."
    }
];

const scriptFaqs = [
    {
        question: "What types of scripts do you specialize in?",
        answer: "We specialize in a wide range of formats, including feature-length films, episodic television series, short films, stage plays, and commercial screenplays."
    },
    {
        question: "Can you help if I only have a basic concept or treatment?",
        answer: "Absolutely. We can take your kernel of an idea and develop it into a full-scale script, handling everything from world-building and character development to final dialogue."
    },
    {
        question: "Do you follow professional industry formatting?",
        answer: "Yes. Every script we deliver is formatted to precise industry standards (such as Final Draft requirements), ensuring it is respected by studio readers and production crews alike."
    },
    {
        question: "How are the screenplay rights handled?",
        answer: "You retain 100% of the intellectual property rights and full author credit. We operate as your professional ghostwriting partner, ensuring your creative vision belongs entirely to you."
    }
];

export default function ScriptWriting() {
    return (
        <main>
            <ServiceHero 
                title="Bring Your Cinematic Vision to Life" 
                subtitle="Transform your ideas into professional, production-ready scripts. Our expert screenwriters craft compelling narratives with dramatic precision and industry-standard formatting for the screen and stage." 
                tag="Cinematic Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Story, Screen-Ready"
                description="The screen is the ultimate canvas for storytelling, and every great production starts with a flawless script. At The Publishing Genie, we specialize in distilling your vision and characters into a structured, impactful screenplay. Whether you are aiming for a Hollywood blockbuster, an indie masterpiece, or a commercial success, our expert ghostwriters ensure your story is told with the precision, pace, and dramatic flair it deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Clapperboard,
                            value: "300+",
                            label: "Scripts Delivered"
                        },
                        {
                            icon: Video,
                            value: "50+",
                            label: "Productions Set"
                        },
                        {
                            icon: PenTool,
                            value: "100%",
                            label: "Industry Standard"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Transform Your Script Concept Today</>}
                description="Our strategic scriptwriting process ensures your work stands as a testament to your innovation. We bridge the gap between imagination and professional production!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Art of Visual Storytelling"
                descLeft={
                    <>
                        <p>
                            In the realm of professional production, the script is the <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic blueprint</span>. Our writing services focus on identifying the core value of your story and presenting it in a way that captures the attention of producers and performers alike.
                        </p>
                        <p>
                            We understand that visual storytelling require a delicate balance of technical cues and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">compelling dialogue</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class cinematic contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled ghostwriters produce impressive scripts that drive industry pride. A great screenplay finds audiences across the globe if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Scriptwriting Pillars:"
                listItems={[
                    "Dramatic Tension & Pacing",
                    "Authentic Character Voices",
                    "Industry Standard Formatting",
                    "Visual Narrative Clarity",
                    "Global Market Positioning",
                    "Rigorous Storytelling Ethics",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your cinematic identity and show your true worth to the world of global entertainment.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Scriptwriting Workflow" 
                steps={scriptProcess} 
            />
            <FAQBuilder 
                faqs={scriptFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous cinematic and editorial standards."
            />
        </main>
    )
}