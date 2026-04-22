import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/novel-writing-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-novel.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-novel-section.png";
import { BookOpen, UserCheck, Globe } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Novel-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/novel-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/novel-cta-right.png";

const novelProcess = [
    {
        title: "Epic Conceptualization",
        description: "We begin by laying the foundations of your world, theme, and genre. This strategic phase ensures your novel has a unique and powerful core premise that will resonate with readers."
    },
    {
        title: "Character Multi-Dimensionality",
        description: "Great novels are driven by complex protagonists. We craft multi-dimensional characters with evolving arcs, ensuring they feel authentic and memorable throughout their journey."
    },
    {
        title: "Plot & Subplot Architecture",
        description: "Our team engineers a robust, multi-layered story structure. We balance the main plot with engaging subplots, creating a narrative that is both expansive and tightly woven."
    },
    {
        title: "Immersive Manuscript Drafting",
        description: "Our expert ghostwriters draft your novel with a focus on pacing and sensory depth. We bridge the gap between abstract story beats and evocative, professional prose."
    },
    {
        title: "Editorial Developmental Pass",
        description: "We perform multiple rounds of deep-dive editing to refine the narrative flow and character consistency. Our focus is on maintaining a sophisticated and engaging literary voice."
    },
    {
        title: "Publishing-Ready Masterpiece",
        description: "The final step is delivering a polished manuscript. We ensure your novel meets the highest publishing standards, ready for global distribution and critical acclaim."
    }
];

const novelFaqs = [
    {
        question: "How long does it typically take to write a full-length novel?",
        answer: "A professional novel is a significant undertaking. Depending on the complexity and genre, a standard manuscript typically takes several months of dedicated drafting and refinement."
    },
    {
        question: "Do you specialize in specific genres like Sci-Fi, Fantasy, or Romance?",
        answer: "Yes. Our team includes specialized writers for every major literary genre, ensuring your novel has the specific tropes, tone, and world-building required for its category."
    },
    {
        question: "Will I be involved in the character development process?",
        answer: "Absolutely. We view this as a partnership. You will be involved in defining the core personalities and arcs of your characters to ensure they align with your vision."
    },
    {
        question: "How do you handle world-building for complex fictional settings?",
        answer: "We use 'Lore Mapping' to build consistent and immersive fictional worlds, documenting everything from social structures to physical geography to ensure a seamless reader experience."
    }
];

export default function NovelWriting() {
    return (
        <main>
            <ServiceHero 
                title="Craft Your Global Literary Masterpiece" 
                subtitle="Transform your epic vision into a professionally written novel. Our expert novelists craft multi-layered plots and complex characters that capture the imagination of a global audience." 
                tag="Novel Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Vision, Our Literary Expertise"
                description="Novel writing is the pinnacle of literary craftsmanship. At The Publishing Genie, we specialize in distilling your expansive concepts into structured, impactful manuscripts. Whether you are aiming for a classic epic or a modern bestseller, our expert ghostwriters ensure your story is told with the precision, depth, and sophisticated editorial voice that commands respect."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: BookOpen,
                            value: "15+",
                            label: "Years of Authority"
                        },
                        {
                            icon: Globe,
                            value: "500+",
                            label: "Novels Published"
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
                title={<>Bring Your Novel Vision to Life</>}
                description="Our strategic novel-writing process ensures your work stands as a testament to your innovation. We bridge the gap between imagination and world-class literature!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Architecture of Epic Fiction"
                descLeft={
                    <>
                        <p>
                            In the realm of high-end publishing, a novel is more than just a story—it is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic asset</span>. Our writing services focus on identifying the core value of your narrative and presenting it in a way that captures the attention of readers and critics.
                        </p>
                        <p>
                            We understand that complex fiction requires a delicate balance of technical precision and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">engaging prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class literary contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized novel ghostwriters produce impressive manuscripts that drive industry respect. A great novel finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Novel Writing Pillars:"
                listItems={[
                    "Strategic Plot Architecture",
                    "Multi-Dimensional Characters",
                    "Immersive World-Building lore",
                    "Lyrical Narrative Flow",
                    "Global Market Positioning",
                    "Authentic Author Identity",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your literary identity and show your true worth to the world of global fiction.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Novel Workflow" 
                steps={novelProcess} 
            />
            <FAQBuilder 
                faqs={novelFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous literary and editorial standards."
            />
        </main>
    )
}