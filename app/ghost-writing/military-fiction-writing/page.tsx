import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/military-fiction-hero.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-military.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-military-section.png";
import { Shield, Target, Users } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Military-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/military-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/military-cta-right.png";

const militaryProcess = [
    {
        title: "Tactical Blueprint",
        description: "We begin by defining the operational theater, units, and conflict scale. This ensures your story is built on a foundation of strategic realism and high-stakes tension."
    },
    {
        title: "Character Multi-Dimensionality",
        description: "Great military fiction is driven by deep characters. We craft complex soldiers with unique backgrounds and evolving arcs that explore the weight of duty and brotherhood."
    },
    {
        title: "Immersive World-Building",
        description: "A great narrative lives in its setting. We meticulously build the atmosphere and technical realism of your story, ensuring every detail contributes to a rich and believable reader experience."
    },
    {
        title: "Lyrical Drafting",
        description: "Our expert ghostwriters draft your story with a focus on sensory detail and high-stakes flow. We bridge the gap between technical operations and evocative, professional prose."
    },
    {
        title: "Refinement & Accuracy Audit",
        description: "Military fiction requires precision. We perform multiple rounds of deep-dive editing to ensure the technical, historical, and tactical details of your story are accurate and impactful."
    },
    {
        title: "Publishing-Ready Delivery",
        description: "The final step is delivering a polished manuscript. We ensure your story meets the highest publishing standards, ready for global distribution and critical acclaim."
    }
];

const militaryFaqs = [
    {
        question: "How do you ensure the military terminology and tactics are accurate?",
        answer: "Our team includes writers with specialized knowledge of military operations and history. We perform rigorous research and accuracy audits to ensure every detail is technically sound."
    },
    {
        question: "Do you specialize in specific eras like WWII or Modern Warfare?",
        answer: "Yes. Our team is versatile, covering everything from historical conflicts like WWII and Vietnam to modern tactical thrillers and futuristic speculative warfare."
    },
    {
        question: "Can you help if I only have a basic idea for a mission or battle?",
        answer: "Absolutely. We specialize in 'Operational Expansion.' We can take a simple premise or encounter and develop it into a full-scale military narrative with professional depth and structure."
    },
    {
        question: "Do I retain the full rights to the story and characters?",
        answer: "Yes. You retain 100% of the intellectual property rights and full author credit. Our role is strictly as your professional, behind-the-scenes military fiction writing partner."
    }
];

export default function MilitaryFictionWriting() {
    return (
        <main>
            <ServiceHero 
                title="Capture the Weight of Duty and Honor" 
                subtitle="Transform your vision into immersive, world-class military fiction. Our expert storytellers craft compelling tactical narratives and complex characters that resonate with a global audience." 
                tag="Tactical Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Vision, Our Tactical Expertise"
                description="Military fiction is the ultimate exploration of human experience under pressure. At The Publishing Genie, we specialize in distilling your abstract concepts and personal truths into structured, impactful manuscripts. Whether you are aiming for a classic war epic or a modern tactical thriller, our expert ghostwriters ensure your story is told with the precision, depth, and sophisticated editorial voice it deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Shield,
                            value: "15+",
                            label: "Years of Heritage"
                        },
                        {
                            icon: Target,
                            value: "450+",
                            label: "Stories Told"
                        },
                        {
                            icon: Users,
                            value: "100%",
                            label: "Brotherhood Focus"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Bring Your Tactical Vision to Life</>}
                description="Our strategic storytelling process ensures your work stands as a testament to your innovation. We bridge the gap between imagination and professional literature!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Soul of the Modern Soldier"
                descLeft={
                    <>
                        <p>
                            In the realm of high-end publishing, military fiction is a <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic asset</span>. Our writing services focus on identifying the core emotional truth of your story and presenting it in a way that resonates with global readers.
                        </p>
                        <p>
                            We understand that complex storytelling requires a delicate balance of technical precision and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">evocative prose</span>. The Publishing Genie serves as your creative partner, translating your expertise into a world-class contribution.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's specialized ghostwriters produce impressive military books that drive industry pride. A great story finds audiences across generations if it represents a motivational perspective and <span className="italic">reachable connectivity</span>. We focus on the high-end quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="Military Fiction Pillars:"
                listItems={[
                    "Strategic Plot Integrity",
                    "Authentic Character Depth",
                    "Technical Accuracy lore",
                    "Tactical Narrative Flow",
                    "Emotional Resonance",
                    "Sophisticated Author Voice",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your military identity and show your true worth to the world of global literature.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Strategic Military Workflow" 
                steps={militaryProcess} 
            />
            <FAQBuilder 
                faqs={militaryFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous storytelling and editorial standards."
            />
        </main>
    )
}