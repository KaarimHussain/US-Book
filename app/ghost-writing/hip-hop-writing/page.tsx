import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/hip-hop-writing.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-hip-hop.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-hip-hop.png";
import { Mic2, Music, Zap } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Hip-Hop specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/hip-hop-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/hip-hop-cta-right.png";

const hipHopProcess = [
    {
        title: "Rhythmic Blueprint",
        description: "We begin by analyzing your beat's tempo and pocket. This ensuring every syllable and rhyme scheme sits perfectly within the rhythmic architecture of your track."
    },
    {
        title: "Thematic Concept Mapping",
        description: "Great Hip-Hop is rooted in truth. We work with you to define the narrative soul of your project, identifying the core messages and street-level experiences you want to convey."
    },
    {
        title: "Lyrical Composition",
        description: "Our expert ghostwriters craft high-impact bars, metaphors, and punchlines that command attention. We focus on linguistic flair and rhythmic complexity that sets you apart."
    },
    {
        title: "Auditory Flow Testing",
        description: "Lyrics are meant to be performed. We rigorously test the auditory flow of every verse, ensuring the transitions are seamless and the energy remains consistent throughout."
    },
    {
        title: "Hook & Chorus Finalization",
        description: "The hook is the heart of the track. We build infectious, memorable centerpieces that anchor your project and resonate with your target audience on a global scale."
    },
    {
        title: "Performance Manuscript",
        description: "The final step is delivering a studio-ready script. We provide phonetic cues and structural notes to ensure your performance captures the full artistic intent of the work."
    }
];

const hipHopFaqs = [
    {
        question: "What styles of Hip-Hop do you specialize in?",
        answer: "Our team is versatile, covering everything from classic boom-bap and lyrical wordplay to modern trap flows, melodic rap, and conscious storytelling."
    },
    {
        question: "Can you write lyrics for specific beats I already have?",
        answer: "Absolutely. We encourage you to provide your production so our writers can tailor the cadence, rhyme schemes, and energy to match the specific vibes of your instrumental."
    },
    {
        question: "How do you ensure the lyrics don't sound generic?",
        answer: "We avoid cliches by focusing on your unique life experiences and specific vocabulary. Every project is built from scratch with a focus on original metaphors and sophisticated wordplay."
    },
    {
        question: "Do I own 100% of the rights to the lyrics?",
        answer: "Yes. As our client, you retain full author credit and 100% of the intellectual property. Our role is strictly as your professional, behind-the-scenes ghostwriting partner."
    }
];

export default function HipHopWriting() {
    return (
        <main>
            <ServiceHero 
                title="Master the Art of Rhythmic Storytelling" 
                subtitle="Elevate your bars and beats with professional Hip-Hop composition. From high-impact lyricism to infectious hooks, we capture the soul of your narrative in a world-class cadence." 
                tag="Lyrical Authority" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Truth, Our Lyrical Expertise"
                description="Hip-Hop is the modern language of the world, and every great track starts with the written word. At The Publishing Genie, we specialize in distilling your experiences and vision into a structured, impactful lyrical manuscript. Whether you are aiming for chart-topping success or underground credibility, our expert ghostwriters ensure your message is delivered with precision, flair, and a sophisticated rhythmic voice."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Mic2,
                            value: "500+",
                            label: "Tracks Crafted"
                        },
                        {
                            icon: Zap,
                            value: "100%",
                            label: "Lyric Authenticity"
                        },
                        {
                            icon: Music,
                            value: "NDA",
                            label: "Total Confidentiality"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Lyrical Vision to Life</>}
                description="Our strategic lyrical crafting process ensures your work stands as a testament to your innovation. We bridge the gap between raw emotion and professional bars!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Soul of the Modern Street"
                descLeft={
                    <>
                        <p>
                            In the world of Hip-Hop, your lyricism is your <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic asset</span>. Our writing services focus on identifying the core value of your message and presenting it in a way that captures the attention of the global music scene.
                        </p>
                        <p>
                            We understand that complex subjects require a delicate balance of street authenticity and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">rhythmic precision</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class lyrical contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled ghostwriters produce impressive lyrical books that drive industry respect. A great Hip-Hop track finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Hip-Hop Lyrical Pillars:"
                listItems={[
                    "Precise Rhythmic Flow",
                    "Authentic Street Narrative",
                    "Sophisticated Metaphors",
                    "High-Impact Wordplay",
                    "Genre-Specific Nuance",
                    "Performance-Ready Cadence",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your lyrical identity and show your true worth to the world of global Hip-Hop.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Hip-Hop Lyrical Workflow" 
                steps={hipHopProcess} 
            />
            <FAQBuilder 
                faqs={hipHopFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous lyrical and editorial standards."
            />
        </main>
    )
}