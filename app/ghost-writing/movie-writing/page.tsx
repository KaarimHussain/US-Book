import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/movie-writing-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-movie.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-movie-section.png";
import { Film, Video, Clapperboard } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Movie-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/movie-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/movie-cta-right.png";

const movieProcess = [
    {
        title: "Cinematic Concept Development",
        description: "We begin by defining the core dramatic hook and logline of your movie. This ensures your story has the necessary scale and conflict to captivate a global audience."
    },
    {
        title: "Character Multi-Dimensionality",
        description: "Great movies are driven by complex protagonists. We build deep backstories and unique voices for your characters, ensuring their internal journeys drive the plot forward."
    },
    {
        title: "Scene-by-Scene Architecture",
        description: "Our writers construct the narrative beats and visual cues with precision. We focus on creating a structure that maintains tension and delivers a satisfying cinematic arc."
    },
    {
        title: "Dialogue & Subtext Refinement",
        description: "Every line must carry weight. We refine your dialogue to ensure it is sharp, natural, and filled with the subtext that defines high-end professional screenwriting."
    },
    {
        title: "Industry Standard Formatting",
        description: "Professional movies require professional scripts. We use industry-leading software to ensure your manuscript meets the exact formatting standards of global studios."
    },
    {
        title: "Pitch-Ready Masterpiece",
        description: "The final step is delivering a production-ready script. We provide all the technical cues and structural notes needed for directors and producers to greenlight your vision."
    }
];

const movieFaqs = [
    {
        question: "How is movie writing different from standard scriptwriting?",
        answer: "Movie writing often involves a larger scale of world-building and a specific 3-act structure designed for a feature-length cinematic experience, requiring deeper narrative arcs."
    },
    {
        question: "Do you specialize in specific genres like Action or Drama?",
        answer: "Yes. Our team includes specialized screenwriters for every major genre, from high-octane action and mind-bending Sci-Fi to intimate character-driven dramas."
    },
    {
        question: "Can you help if I only have a plot outline or treatment?",
        answer: "Absolutely. We can take your existing outline and expand it into a full-scale, professional screenplay, handling all the character dialogue and scene construction."
    },
    {
        question: "Do I retain the full rights to the screenplay?",
        answer: "Yes. You retain 100% of the intellectual property rights and full author credit. Our role is strictly as your professional, behind-the-scenes cinematic writing partner."
    }
];

export default function MovieWriting() {
    return (
        <main>
            <ServiceHero
                title="Transform Your Vision into a Cinematic Masterpiece"
                subtitle="Expert movie writing that captures the scale and emotion of the big screen. Our professional screenwriters craft production-ready scripts that command global attention."
                tag="Cinematic Authority"
                bgImage={bgImage}
            />
            <Brands />
            <AboutSection
                title="Your Story, Scaled for the Screen"
                description="Movie writing is the ultimate form of visual storytelling. At The Publishing Genie, we specialize in distilling your expansive concepts into structured, high-impact screenplays. Whether you are aiming for a Hollywood blockbuster or an independent cinematic gem, our expert ghostwriters ensure your message is delivered with the precision, heart, and professional dignity your legacy deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Film,
                            value: "400+",
                            label: "Scripts Delivered"
                        },
                        {
                            icon: Video,
                            value: "75+",
                            label: "Global Productions"
                        },
                        {
                            icon: Clapperboard,
                            value: "100%",
                            label: "Studio Compliant"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Movie Vision to Life</>}
                description="Our strategic movie writing process ensures your work stands as a testament to your innovation. We bridge the gap between abstract ideas and professional cinematic literature!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Architecture of the Big Screen"
                descLeft={
                    <>
                        <p>
                            In the realm of global entertainment, a movie script is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic blueprint</span>. Our writing services focus on identifying the core value of your story and presenting it in a way that captures the attention of producers.
                        </p>
                        <p>
                            We understand that cinematic mastery requires a delicate balance of technical cues and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">compelling narrative</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized movie ghostwriters produce impressive scripts that drive industry pride. A great movie finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Movie Writing Pillars:"
                listItems={[
                    "Cinematic Scale & Pacing",
                    "Deep Character Arcs",
                    "Industry Standard Structure",
                    "Visual Narrative Logic",
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
                title="Our Strategic Movie Writing Workflow"
                steps={movieProcess}
            />
            <FAQBuilder
                faqs={movieFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous cinematic and editorial standards."
            />
        </main>
    )
}