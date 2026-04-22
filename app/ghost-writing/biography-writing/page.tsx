import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/biography-writing.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-memoir.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-memoir.png";
import { History, UserCheck, Search } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Biography-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/memoir-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/memoir-cta-right.png";

const biographyProcess = [
    {
        title: "Strategic Discovery & Interviewing",
        description: "Our process begins with intensive one-on-one sessions to uncover the nuances of your life or your subject's journey. We listen for the turning points that define an extraordinary legacy."
    },
    {
        title: "Historical Contextualization",
        description: "A great biography lives within its era. We research and integrate the social, political, and historical contexts that shaped the events of the life story, providing depth and authenticity."
    },
    {
        title: "Structural Outlining",
        description: "We map out the milestones and thematic threads that will guide the narrative. This ensuring a logical yet emotionally resonant progression through the chapters of the biography."
    },
    {
        title: "Narrative Composition",
        description: "Our expert ghostwriters draft the manuscript with a focus on authority and empathy. We aim to capture the subject's true essence, using a sophisticated editorial voice that commands respect."
    },
    {
        title: "Fact-Verification & Review",
        description: "Credibility is non-negotiable. We meticulously verify dates, names, and events, ensuring the final manuscript stands as an accurate and dignified record of the subject's life."
    },
    {
        title: "Legacy Delivery & Launch",
        description: "We provide a polished, publication-ready manuscript. We also guide you through the final steps of sharing this important legacy with family, peers, and the global audience."
    }
];

const biographyFaqs = [
    {
        question: "What is the difference between biography and memoir writing?",
        answer: "While a memoir focuses on a specific period or theme in a person's life, a biography is a comprehensive account typically spanning the subject's entire life, often including independent research and historical context."
    },
    {
        question: "Can you write a biography if the subject is unavailable for interviews?",
        answer: "Yes. Our team is skilled in archival research, utilizing letters, journals, existing records, and interviews with peers to construct a truthful and compelling narrative for deceased or unavailable subjects."
    },
    {
        question: "How long does it take to complete a full-length biography?",
        answer: "A professional biography is a meticulous process. Depending on the depth of research required, a standard manuscript typically takes several months to ensure every milestone is captured with the dignity it deserves."
    },
    {
        question: "Is the final manuscript ready for professional publishing?",
        answer: "Absolutely. We deliver your biography in a format that meets the highest industry standards, ready for global distribution, high-end physical printing, or private legacy preservation."
    }
];

export default function BiographyWriting() {
    return (
        <main>
            <ServiceHero 
                title="Chronicle a Life of Global Impact" 
                subtitle="Transform a monumental journey into a timeless literary legacy. Our expert biography writers capture factual precision and emotional depth, ensuring your story resonates for generations." 
                tag="Legacy Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Journey, Our Narrative Expertise"
                description="Writing a biography is the sacred task of preserving a legacy. At The Publishing Genie, we bridge the gap between historical facts and compelling storytelling. Our expert ghostwriters specialize in distilling extraordinary lives into structured, impactful manuscripts that capture technical brilliance and emotional resonance. We ensure that every struggle, victory, and moment of wisdom is preserved with the dignity and authority it commands."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: History,
                            value: "20+",
                            label: "Years of Heritage"
                        },
                        {
                            icon: UserCheck,
                            value: "500+",
                            label: "Lives Chronicled"
                        },
                        {
                            icon: Search,
                            value: "100%",
                            label: "Fact-Verified"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Find Expert Biography Writers Near You</>}
                description="Our skilled writing capabilities can deliver effective word combinations! We portray the storyline as an inspirational guide to your life's journey!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="Life Through the Lens of History"
                descLeft={
                    <>
                        <p>
                            Biography writing is more than just recording dates—it is about capturing the <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">spirit of an era</span>. Our specialized ghostwriters work to ensure that the subject's actions and influence are understood in context.
                        </p>
                        <p>
                            Professional biographies require a perfect balance of <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">empathy and objectivity</span>. The Publishing Genie provides the expertise needed to transform a personal record into a world-class literary contribution that inspires future generations.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's biography ghostwriters produce impressive books that drive heritage and family pride. A great biography finds audiences with whom the subject's life may relate or inspire them. We focus on the motivational perspective and reachable connectivity of the life story.
                    </p>
                }
                listTitle="Pillars of Biographical Writing:"
                listItems={[
                    "Historical Accuracy",
                    "Thematic Cohesion",
                    "Professional Archival Research",
                    "Dignified Authorial Voice",
                    "Full Confidentiality",
                    "Authentic Character Depth",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your heritage and show your true worth to the world.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our Biography Creation Process" 
                steps={biographyProcess} 
            />
            <FAQBuilder 
                faqs={biographyFaqs}
                description="We ensure your life story is preserved with the integrity and impact it deserve."
            />
        </main>
    )
}