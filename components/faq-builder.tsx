"use client";

import Image, { StaticImageData } from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import faqSvg from "@/app/assets/faq-svg.svg";

interface FAQ {
    question: string;
    answer: string;
}

interface FAQBuilderProps {
    title?: string;
    description?: string;
    faqs: FAQ[];
    image?: StaticImageData | string;
    bgClass?: string;
}

export default function FAQBuilder({
    title = "Frequently Asked Questions",
    description = "The most common queries people have concerning our services are listed below.",
    faqs,
    image = faqSvg,
    bgClass = "bg-background",
}: FAQBuilderProps) {
    return (
        <section className={`${bgClass} py-10 lg:py-15`}>
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-4 text-muted-foreground italic font-medium">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                    {/* FAQ Accordion */}
                    <div className="w-full">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`item-${idx}`}
                                    className="border-b border-primary/20 py-2"
                                >
                                    <AccordionTrigger className="text-left text-base font-bold tracking-wider text-foreground hover:text-primary transition-colors hover:no-underline md:text-lg uppercase">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-lg leading-relaxed text-muted-foreground pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Illustration */}
                    <div className="relative flex items-center justify-center min-h-[400px]">
                        <Image
                            src={image}
                            alt="FAQ Illustration"
                            className="object-contain max-h-[500px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}