import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/seo-content-writing.png";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-seo.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-seo.png";
import { Search, Globe, LineChart } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import ProcessSteps from "@/components/services/process-steps";
import FAQBuilder from "@/components/faq-builder";

// SEO-specific CTA assets
import ctaLeft from "@/app/assets/ghost-writer/seo-cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/seo-cta-right.png";

const seoProcess = [
    {
        title: "Strategic Keyword Audit",
        description: "We begin by identifying the specific search pillars and long-tail keywords that define your niche. This ensuring your content is built on a foundation of proven search demand."
    },
    {
        title: "Semantic Content Architecture",
        description: "Great SEO requires more than keywords. We build a logical, semantic structure that helps search engines understand the depth of your expertise while providing a seamless user experience."
    },
    {
        title: "Immersive Strategic Drafting",
        description: "Our writers balance algorithmic requirements with high-end editorial quality. We create content that ranks effectively while maintaining a sophisticated and engaging brand voice."
    },
    {
        title: "Technical SEO Enrichment",
        description: "We embed the necessary metadata, internal linking structures, and technical schema that search engines crave, ensuring your content is highly discoverable and crawlable."
    },
    {
        title: "Performance Optimization",
        description: "SEO is a numbers game. We optimize for engagement metrics like time-on-page and bounce rate, ensuring your content not only attracts visitors but also converts them into followers."
    },
    {
        title: "Continuous Search Evolution",
        description: "The digital landscape is always changing. We provide strategies for updating and evolving your content to stay ahead of algorithm updates and shifting search trends."
    }
];

const seoFaqs = [
    {
        question: "How do you balance SEO optimization with readability?",
        answer: "We prioritize 'Readability-First SEO.' Our method involves embedding keywords naturally into high-quality, authoritative prose so that neither the reader nor the search engine feels the optimization is forced."
    },
    {
        question: "Is keyword research included in the writing service?",
        answer: "Yes. Our premium SEO service includes comprehensive keyword research and competitive gap analysis to ensure we are targeting the most impactful search terms for your brand."
    },
    {
        question: "How long does it take for SEO content to show results?",
        answer: "While search results can vary, high-quality authoritative content typically begins to see organic growth and indexing improvements within a few weeks of publication and technical optimization."
    },
    {
        question: "Can you optimize my existing website content?",
        answer: "Absolutely. We offer SEO 'Refresh' services where we analyze your existing pages and update them with modern keywords, better structures, and updated technical metadata to boost their performance."
    }
];

export default function SEOContentWriting() {
    return (
        <main>
            <ServiceHero 
                title="Dominate the Global Search Landscape" 
                subtitle="Expert SEO content writing that balances algorithmic precision with high-end editorial quality. Establish your digital presence and rank for the terms that define your industry authority." 
                tag="Search Excellence" 
                bgImage={bgImage} 
            />
            <Brands />
            <AboutSection
                title="Rank High, Read Better"
                description="In the crowded digital marketplace, visibility is authority. At The Publishing Genie, we specialize in crafting content that search engines love and readers trust. Our approach focuses on semantic depth, keyword strategy, and technical optimization, ensuring your brand stands out on the first page of global search results without ever compromising on a sophisticated, professional voice."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Search,
                            value: "100%",
                            label: "Keyword Optimized"
                        },
                        {
                            icon: Globe,
                            value: "500+",
                            label: "Rankings Secured"
                        },
                        {
                            icon: LineChart,
                            value: "95%",
                            label: "Reach Increase"
                        }
                    ]
                }
            />
            <GraphicCTA
                title={<>Transform Your Digital Presence Today</>}
                description="Our strategic SEO writing process ensures your work stands as a testament to your innovation. We bridge the gap between algorithms and impactful literature!"
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="The Intersection of Tech and Text"
                descLeft={
                    <>
                        <p>
                            Transitioning to a digital-first strategy requires a unique set of skills. Our SEO writing is a perfect way to share your <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">expertise</span> with a fast-paced digital world that relies on search engines as the primary gateway to knowledge.
                        </p>
                        <p>
                            We focus on semantic depth and <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">strategic linking</span> to ensure your readers and search crawlers stay engaged. The Publishing Genie can assist you with a professional digital author to support you in developing a perfect SEO narrative.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        The Publishing Genie's skilled ghostwriters produce impressive SEO content that drives global organic growth. Successful content finds audiences across continents if it represents a modern perspective and <span className="italic">seamless connectivity</span>. We focus on the digital-first quality of your words to ensure a lasting impact.
                    </p>
                }
                listTitle="SEO Content Pillars:"
                listItems={[
                    "Semantic Keyword Depth",
                    "Strategic Internal Linking",
                    "Technical Meta-Optimization",
                    "Algorithm-Aware Structure",
                    "High-Engagement Readability",
                    "Global Search Positioning",
                ]}
                descRightBottom={
                    <p>
                        Trust The Publishing Genie to uphold the dignity of your digital identity and show your true worth to the global online market.
                    </p>
                }
            />
            <ProcessSteps 
                title="Our SEO Content Creation Workflow" 
                steps={seoProcess} 
            />
            <FAQBuilder 
                faqs={seoFaqs}
                description="We ensure your expertise reaches the influential audience it deserves through rigorous SEO and editorial standards."
            />
        </main>
    )
}