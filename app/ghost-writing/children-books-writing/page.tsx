import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/children-books-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-children.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-children-section.png";
import { Heart, Star, UserCheck } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Children's-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/children-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/children-cta-right.png";

const childrenProcess = [
    {
        title: "Whimsical Discovery",
        description: "We begin by identifying your target age group and the core moral soul of your story. This ensures your book is built on a foundation of engagement and educational value."
    },
    {
        title: "Character Soul-Building",
        description: "Great children's books are driven by vibrant, relatable heroes. We craft memorable characters with unique personalities that capture the imagination of young readers."
    },
    {
        title: "Immersive World-Building",
        description: "A great narrative lives in its setting. We meticulously build the atmosphere and magical world of your story, ensuring every detail contributes to a rich reader experience."
    },
    {
        title: "Lyrical Drafting",
        description: "Our expert ghostwriters draft your story with a focus on rhythm, rhyme, and phonic flow. We bridge the gap between simple concepts and evocative, professional prose."
    },
    {
        title: "Refinement & Layout Pass",
        description: "We perform multiple rounds of deep-dive editing to polish the pacing, transitions, and emotional impact. Our focus is on maintaining a sophisticated and engaging authorial voice."
    },
    {
        title: "Publishing-Ready Delivery",
        description: "The final step is delivering a polished manuscript. We ensure your story meets the highest publishing standards, ready for global distribution and artistic collaboration."
    }
];

const childrenFaqs = [
    {
        question: "What age groups do you write for?",
        answer: "Our team is versatile, covering everything from picture books for toddlers to middle-grade adventures and young adult (YA) novels, ensuring age-appropriate tone and vocabulary."
    },
    {
        question: "Do you provide illustrations as part of the service?",
        answer: "Our core service is the professional manuscript. However, we can assist in coordinating with world-class illustrators to ensure your story's visual soul matches its written one."
    },
    {
        question: "How do you ensure the vocabulary is appropriate?",
        answer: "We perform a 'Vocabulary Audit' based on the target age group, balancing accessible language with developmental growth to ensure the story is both readable and enriching."
    },
    {
        question: "Do I retain the full rights to the characters?",
        answer: "Yes. You retain 100% of the intellectual property rights and full author credit. Our role is strictly as your professional, behind-the-scenes children's literature partner."
    }
];

export default function ChildrenBooksWriting() {
    return (
        <main>
            <ServiceHero 
                title="Ignite the Imagination of the Next Generation" 
                subtitle="Transform your ideas into enchanting, world-class children's books. Our expert storytellers craft whimsical narratives and vibrant characters that capture the hearts of young readers." 
                tag="Whimsical Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Vision, Our Whimsical Artistry"
                description="Children's literature is the most impactful form of storytelling. At The Publishing Genie, we specialize in distilling your abstract concepts and moral lessons into structured, high-impact manuscripts. Whether you are aiming for a classic bedtime story or a modern educational adventure, our expert ghostwriters ensure your message is delivered with the precision, heart, and professional dignity it deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Heart,
                            value: "10+",
                            label: "Years of Heritage"
                        },
                        {
                            icon: Star,
                            value: "500+",
                            label: "Stories Published"
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
                title={<>Bring Your Whimsical Vision to Life</>}
                description="Our strategic storytelling process ensures your work stands as a testament to your innovation. We bridge the gap between imagination and world-class children's literature!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Soul of the Modern Bedtime Story"
                descLeft={
                    <>
                        <p>
                            In the realm of high-end publishing, a children's book is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic asset</span>. Our writing services focus on identifying the core emotional value of your story and presenting it in a way that resonates with both children and parents.
                        </p>
                        <p>
                            We understand that whimsical storytelling requires a delicate balance of technical precision and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">engaging prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized children's ghostwriters produce impressive manuscripts that drive industry respect. A great story finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Children's Writing Pillars:"
                listItems={[
                    "Age-Appropriate Pacing",
                    "Vibrant Character Archetypes",
                    "Educational Moral Soul",
                    "Lyrical Phonic Flow",
                    "Global Market Positioning",
                    "Rigorous Editorial Standards",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your whimsical identity and show your true worth to the world of global literature.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Children's Writing Workflow" 
                steps={childrenProcess} 
            />
            <FAQBuilder 
                faqs={childrenFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous whimsical and editorial standards."
            />
        </main>
    )
}