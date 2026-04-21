import ServiceHero from "@/components/services/service-hero";
import storyWriting from "@/app/assets/ghost-writer/story-writing.webp"
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";
import StoryWritingProcess from "@/components/ghost-writing/story-writing-process";
import CTA from "@/components/home/cta";
import ContactForm from "@/components/home/contact-form";

// Icons & Assets
import { Calendar, BookOpen, Users } from "lucide-react";
import aboutImg from "@/app/assets/ghost-writer/about-story.png";
import storyMan from "@/app/assets/ghost-writer/story-man.png";
import ctaLeft from "@/app/assets/ghost-writer/cta-left.png";
import ctaRight from "@/app/assets/ghost-writer/cta-right.png";

const stats = [
    { icon: Calendar, value: "3 +", label: "Years of Experience" },
    { icon: BookOpen, value: "233 +", label: "Books Written" },
    { icon: Users, value: "83 +", label: "Native Writers" },
];

const skills = [
    "Creative Story Writing",
    "Stories with Strong Narratives",
    "Comic Series Story Writing",
    "Descriptive Writing Skills",
    "Convincing Story Writing",
    "Assertive Approach Writing",
    "Customize Story Writing",
];

export default function StoryWriting() {
    return (
        <>
            <ServiceHero title="Enhance Your Book's Readability With Professional Book Formatting Services" subtitle="Are you in search of expert book formatting services to get your manuscript formatted well? If so, then we're here to help. At Pine Book Publishing, we offer professional book formatting services to blow life into your book. Our expert team of book formatters will work together with you to give your book a professional and polished look. Get a free quote now!" tag="Story Writing" bgImage={storyWriting} />
            <Brands />
            <AboutSection
                title="Superb Story Writing Standards"
                description={
                    <>
                        <p>
                            The Publishing Genie is capable of reliable content writing experience of decades. Our writers deliver the ink of soul to reach readers' emotional attachment through words. That's how we can develop adorable characters that bring charm to engage readers worldwide.
                        </p>
                        <p>
                            The excellence of our short story writers delivers connectivity of sentiments in any genre. Our specialty is to promote all the dynamics of original authors whose idea comes to us for story writing. Each novel story ghostwriter at The Publishing Genie promises to deliver engaging content.
                        </p>
                    </>
                }
                image={aboutImg}
                stats={stats}
            />
            <GraphicCTA
                title={<>Offer Another Short <br className="hidden md:block" /> Story Book to Fans</>}
                description="Do you have any unbelievable story thoughts? Doesn't matter if you have a raw idea, our experts can harvest the fruit from any unique story idea."
                imageLeft={ctaLeft}
                imageRight={ctaRight}
                bgClass="bg-secondary"
            />
            <NarrativeSection
                title="Story Writing Runs in Our Veins Like Blood"
                descLeft={
                    <>
                        <p>
                            Have you ever realized? We can narrate scrambled thoughts and turn them into remarkable reading pleasure. Of course, this is what our expertise can provide you with world-class quality standard of story writing services.
                        </p>
                        <p>
                            However, we deliver astonishing, adventurous story narratives to audiences that live in readers' minds for a long time. The Publishing Genie's talented team of story writers can provide you a bestseller status. We aim to route your career toward a successful future in the <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">book publishing industry</span>.
                        </p>
                    </>
                }
                image={storyMan}
                descRightTop={
                    <p>
                        Keep in mind that our loyal commitment promises to support you in reaching your targets with our writing expertise. Our short story writing services are the most influential in demand due to readers' likeness. We ensure every aspect that clients receive satisfaction from our services.
                    </p>
                }
                listTitle="Here are the skills details of our story writers:"
                listItems={skills}
                descRightBottom={
                    <>
                        <p>
                            The Publishing Genie's highly efficient writers are available to provide you an excellent book. Our writers are perfect to complete your precious project with innovative word selections.
                        </p>
                        <p>
                            That's the reason our clients remain happy to work with our team again and again. Do not hesitate to contact our representative because we know readers' nerves and bring delightful reading experience.
                        </p>
                    </>
                }
            />
            <CTA />
            <StoryWritingProcess />
            <ContactForm />
        </>
    )
}