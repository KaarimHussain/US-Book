import ServiceHero from "@/components/services/service-hero";
import bgImage from "@/app/assets/ghost-writer/song-writing.webp";
import Brands from "@/components/home/brands";
import AboutSection from "@/components/ghost-writing/story-writing-about";
import aboutImg from "@/app/assets/ghost-writer/about-song.png";
import narrativeImg from "@/app/assets/ghost-writer/narrative-song.png";
import { Badge, Calendar, Pen, Printer } from "lucide-react";
import GraphicCTA from "@/components/ghost-writing/cta";
import NarrativeSection from "@/components/ghost-writing/story-writing-story";

// Song-specific CTA assets
import ctaSongLeft from "@/app/assets/ghost-writer/cta-song-left.png";
import ctaSongRight from "@/app/assets/ghost-writer/cta-song-right.png";

const songSkills = [
    "Soulful Lyrics Writing",
    "Melodic Storytelling",
    "Rhyme & Rhythm Optimization",
    "Genre-Specific Songwriting",
    "Emotional Connectivity",
    "Professional Vocal Mapping",
    "Hook & Bridge Development",
];

export default function SongWriting() {
    return (
        <>
            <ServiceHero title="Lyrics That Reach Hearts Passionate Song Writing Team!" subtitle="Time to ring the bell for the party with some hit singles in the music industry. The Publishing Genie has brilliant song writers in the house to deliver standard of top-chart song lyrics. Our song writing services are unique and diversified, with the latest trending advancements to reach the emotions of listeners. We have the best Rap Ghostwriters available to deliver wonderful songs for your audience. Here is the list of our expertise:" tag="Songs Writing" bgImage={bgImage} />
            <Brands />
            <AboutSection
                title="Song Writing Services to Build Career"
                description="Our capable hands can build remarkable success for a music career. We have a team of great musical enthusiasts to provide you the best songs in the industry. The Publishing Genie's best song writers have delivered and served a lot of top chart hits in the USA. We have also delivered remarkable hits in European charts, bringing our versatility in song writing. Our song writing services are admirable among clients, which makes us proud. The best song writers can get you a successful career in the music industry."
                image={aboutImg}
                stats={
                    [
                        {
                            icon: Calendar,
                            value: "10+",
                            label: "Years of Experience"
                        },
                        {
                            icon: Pen,
                            value: "98+",
                            label: "Books Written"
                        },
                        {
                            icon: Printer,
                            value: "35+",
                            label: "Native Writers"
                        },
                    ]
                }
            />
            <GraphicCTA
                title={<>Words Can Melt <br className="hidden md:block" /> the Hearts</>}
                description="The Publishing Genie can deliver those words for melodious songs. Contact the best song writers now!"
                imageLeft={ctaSongLeft}
                imageRight={ctaSongRight}
                bgClass="bg-primary"
            />
            <NarrativeSection
                title="Musical Excellence in Every Note"
                descLeft={
                    <>
                        <p>
                            Have you ever realized? We can narrate scrambled thoughts and turn them into remarkable musical pleasure. Of course, this is what our expertise can provide you with world-class quality standard of song writing services.
                        </p>
                        <p>
                            However, we deliver astonishing, adventurous song narratives to audiences that live in listeners' minds for a long time. The Publishing Genie's talented team of song writers can provide you a top-chart status. We aim to route your career toward a successful future in the <span className="text-primary font-bold underline decoration-primary/30 underline-offset-4 cursor-pointer hover:text-accent transition-colors">music industry</span>.
                        </p>
                    </>
                }
                image={narrativeImg}
                descRightTop={
                    <p>
                        Keep in mind that our loyal commitment promises to support you in reaching your targets with our musical expertise. Our lyrics writing services are the most influential in demand due to listeners' likeness. We ensure every aspect that clients receive satisfaction from our services.
                    </p>
                }
                listTitle="Here are the skills details of our song writers:"
                listItems={songSkills}
                descRightBottom={
                    <>
                        <p>
                            The Publishing Genie's highly efficient writers are available to provide you an excellent song. Our writers are perfect to complete your precious project with innovative word selections.
                        </p>
                        <p>
                            That's the reason our clients remain happy to work with our team again and again. Do not hesitate to contact our representative because we know listeners' nerves and bring delightful musical experience.
                        </p>
                    </>
                }
            />
        </>
    )
}