import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/rhymes-writing.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-rhymes.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-rhymes.png";
import { Music, BookOpen, Heart } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Rhymes-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/rhymes-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/rhymes-cta-right.png";

const rhymesProcess = [
    {
        title: "Cadence & Metric Analysis",
        description: "We begin by identifying the rhythmic heartbeat of your work. This ensures the syllable counts and internal meters are consistent, creating a natural flow that is pleasing to the ear."
    },
    {
        title: "Thematic & Phonic Exploration",
        description: "Our team explores the core emotions of your piece, curating a vocabulary that not only rhymes but carries the precise phonetic weight and linguistic flair your project demands."
    },
    {
        title: "Verse Composition",
        description: "We draft your poems or lyrics with a focus on impact and resonance. Every rhyme is chosen to advance the narrative or emotion, avoiding forced pairings and maintaining artistic integrity."
    },
    {
        title: "Auditory Refinement",
        description: "Rhymes are meant to be heard. We test the auditory flow of every verse, ensuring it sounds as good spoken or sung as it looks on the page, with a focus on natural pauses and breath work."
    },
    {
        title: "Structural Finalization",
        description: "We polish the arrangement of your stanzas, choruses, or verses. This step ensures the overarching structure of the piece builds momentum and delivers a satisfying lyrical resolution."
    },
    {
        title: "Master Manuscript Delivery",
        description: "The final step is delivering a performance-ready manuscript. Whether for publication, recording, or recitation, your work is formatted to meet the highest artistic standards."
    }
];

const rhymesFaqs = [
    {
        question: "What styles of rhyme writing do you offer?",
        answer: "Our service is versatile, covering everything from classic sonnets and poetic anthologies to modern song lyrics, children's book meters, and catchy commercial hooks."
    },
    {
        question: "How do you maintain the author's original creative voice?",
        answer: "We work closely with your inspirations and existing drafts. Our goal is to enhance your original creative energy, ensuring the rhymes feel like a natural and authentic extension of your voice."
    },
    {
        question: "Can you assist with rhythms for children's literature?",
        answer: "Absolutely. Children's books require a very specific, consistent meter to be engaging. We specialize in creating playful yet structured rhymes that make for a delightful reading experience."
    },
    {
        question: "Is every verse original and unique?",
        answer: "Yes. Every piece we craft is written from scratch specifically for your project. We ensure 100% originality, providing you with a unique lyrical identity that stands out in the literary world."
    }
];

export default function RhymesWriting() {
    return (
        <main>
            <ServiceHero 
                title="Master the Art of Rhythm and Rhyme" 
                subtitle="Elevate your lyrics and poetry with professional rhythmic composition. From soulful verses to high-impact rhymes, we capture the essence of your message in a cadence that truly resonates." 
                tag="Lyrical Precision" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Crafting Verses That Resonate"
                description="Rhyme writing is the delicate balance of phonetics, flow, and deep emotional resonance. At The Publishing Genie, we don't just find words that match; we craft a rhythmic journey that captures the soul of your intent. Whether you are composing a poetic anthology, a children's book, or a musical masterpiece, our expert lyricists ensure your work carries the weight of professional artistry and technical precision."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Music,
                            value: "500+",
                            label: "Lyrical Works"
                        },
                        {
                            icon: Heart,
                            value: "12+",
                            label: "Master Lyricists"
                        },
                        {
                            icon: BookOpen,
                            value: "100%",
                            label: "Unique Cadence"
                        },
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Lyrical Vision to Life</>}
                description="Our strategic rhyme-crafting process ensures your work stands as a testament to your creativity. We bridge the gap between abstract emotion and structured verse!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Symphony of the Written Word"
                descLeft={
                    <>
                        <p>
                            In the art of verse, rhythm is the foundation upon which meaning is built. Our rhymewriting is a perfect way to share your <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">creative vision</span> with a world that craves lyrical depth and phonic beauty.
                        </p>
                        <p>
                            We understand that every syllable matters. The Publishing Genie can assist you with a professional lyricist to support you in developing a perfect <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">cadence</span>. Whether you are aiming for a classic poetic style or modern rhythmic influence, we provide the expertise to make your words sing.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled ghostwriters produce impressive lyrical books that you can be proud of. A great rhyme can find audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the atmospheric quality of your words to ensure they leave a lasting impact.
                    </p>
                }
                listTitle="Core Lyrical Pillars:"
                listItems={[
                    "Precise Meter & Flow",
                    "Emotional Resonance",
                    "Versatile Stylings",
                    "Genre-Specific Nuance",
                    "Genre-Specific Phonetics",
                    "Authentic Author Identity",
                ]}
                descRightBottom={
                    <p>
                        The Publishing Genie wants you to spread the dignity of your creative work and show your unique poetic brilliance to the world.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Lyrical Creation Process" 
                steps={rhymesProcess} 
            />
            <FAQBuilder 
                faqs={rhymesFaqs}
                description="We ensure every verse captures the soul of your intent with professional-grade artistry."
            />
        </main>
    )
}