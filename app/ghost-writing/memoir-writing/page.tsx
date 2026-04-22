import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/memoir-writing.webp";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-memoir.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-memoir.png";
import { History, UserCheck, Globe } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// Memoir-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/memoir-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/memoir-cta-right.png";

const memoirProcess = [
    {
        title: "Getting Started",
        description: "Ready to transform your book idea into reality? Simply complete a brief form and connect with one of our friendly project managers. They are eager to hear about your book and will guide you through the process."
    },
    {
        title: "Shaping Your Vision",
        description: "We take great care in selecting the perfect writer for your book, someone with the necessary skills and expertise to bring your vision to life. With a deep understanding of your concept, our writer will create an outline you can review and approve before proceeding."
    },
    {
        title: "Engaging the Reader",
        description: "The opening chapter of a book is crucial for captivating readers, and our writers know how to hook them from the very beginning. With an engaging opener, we strive to keep your readers turning the pages. If you're satisfied with the first chapter, we'll continue writing the book according to the approved outline."
    },
    {
        title: "Polishing Your Masterpiece",
        description: "Our professional team will meticulously proofread and edit your book, ensuring it is polished and free of errors. We take pride in delivering an excellent final product that meets your expectations."
    },
    {
        title: "Finalizing and Formatting",
        description: "Once the manuscript is approved, it's time to add final touches. Our team of experts will format your book to meet publishing standards and provide it with a professional and aesthetically pleasing design. We'll ensure your book stands out, from fonts to graphics to cover design."
    },
    {
        title: "Sharing Your Story with the World",
        description: "The final step in our process is to publish your book in your desired format and execute a personalized marketing and promotional strategy. We are committed to helping you share your story with the world and make your book a resounding success."
    }
];

const memoirFaqs = [
    {
        question: "What is Memoir Writing?",
        answer: "Memoir writing is a perfect way to share your life's struggles and inspirational thoughts with the world. It involves capturing specific hurdles or thematic experiences from your life and transforming them into a literary narrative."
    },
    {
        question: "How to Begin Writing a Memoir?",
        answer: "The process begins with identifying the core message you want to share. Our expert ghostwriters assist you in developing a perfect book narrative through structured interviews and chronological story mapping."
    },
    {
        question: "What Techniques Do Writers Use in Memoir Writing?",
        answer: "We use professional memoir-writing techniques such as emotional connectivity, technical structural aspects, and research-based authentic narratives to ensure your story resonates with a world-class audience."
    },
    {
        question: "How to Overcome Writer's Block in Memoir Writing?",
        answer: "Our team acts as your creative partner. When blocks occur, we use depth of personal reflection and motivational perspective sessions to bypass the hurdle and maintain the dignity of your memoir event."
    }
];

export default function MemoirWriting() {
    return (
        <main>
            <ServiceHero 
                title="Hire Expert Memoir writing services" 
                subtitle="Transform your life journey into a compelling literary legacy. Our expert memoir writers capture the essence of your experiences with emotional depth and historical precision, ensuring your story resonates for generations." 
                tag="Memoir Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Your Life Is a Story Worth Telling"
                description="Hire memoir ghostwriters from The Publishing Genie to transform your extraordinary journey into a polished, professional narrative. Every individual has a story that can inspire, educate, or entertain. Our expertise lies in capturing the technical brilliance and emotional resonance of your life's milestones. We bridge the gap between your memories and the written word, ensuring every struggle, victory, and moment of wisdom is preserved with the dignity and impact it deserves."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: History,
                            value: "15+",
                            label: "Years of Legacy"
                        },
                        {
                            icon: UserCheck,
                            value: "450+",
                            label: "Lives Chronicled"
                        },
                        {
                            icon: Globe,
                            value: "100%",
                            label: "Confidentiality"
                        },
                    ]
                }
            />
            <GraphicCTA
                title={<>Find Memoir Writers for Hire Now</>}
                description="Our skilled writing capabilities can deliver effective word combinations! We portray the storyline as an inspirational guide to your memoir event!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="Life Through the Lens of Memory"
                descLeft={
                    <>
                        <p>
                            Our memoir writing is a perfect way to share your life's struggles and inspirational thoughts with the world. Keeping such thoughts of hurdles you go through in your profession needs to be shared in <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">stories</span>.
                        </p>
                        <p>
                            These words can change so many lives and people who are giving up their desires. The Publishing Genie can assist you with a professional memoir writer to support you in developing a perfect book <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">narrative</span>. Probably you are considering to be an author of your memoir book, we have professional memoir ghostwriting services.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled memoir ghostwriters produce impressive memoir books to be proud of your services. However, the best memoir ghostwriter can spread your narrative in a brilliant way. So, that memoir story will find audiences with whom it may relate or inspire them. A memoir can be significant for the reader if life events represent a motivational perspective and reachable connectivity.
                    </p>
                }
                listTitle=""
                listItems={[
                    "Technical Aspects",
                    "Depth of personal reflection",
                    "Professional memoir writers for hire",
                    "Research-based authentic narrative",
                    "A story that connects readers",
                    "The unique experience of life story",
                ]}
                descRightBottom={
                    <p>
                        The Publishing Genie wants you to spread memoir event dignity and show your indeed worth to the world.
                    </p>
                }
            />
            <ProcessSteps 
                title="Process of Memoir Writing" 
                steps={memoirProcess} 
            />
            <FAQBuilder 
                faqs={memoirFaqs}
                description="We find audiences with whom your story may relate or inspire them."
            />
        </main>
    )
}