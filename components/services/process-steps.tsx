"use client";

import { cn } from "@/lib/utils";

interface Step {
    title: string;
    description: string;
}

interface ProcessStepsProps {
    title: string;
    subtitle?: string;
    steps: Step[];
}

export default function ProcessSteps({ title, subtitle, steps }: ProcessStepsProps) {
    return (
        <section className="py-10 md:py-15 bg-primary overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-heading text-primary-foreground leading-tight">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-primary-foreground max-w-2xl mx-auto text-lg">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className="group flex items-start gap-6 relative">
                            {/* Step Number with Vertical Line */}
                            <div className="flex flex-col items-center">
                                <div className="space-y-1 text-center">
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-primary-foreground/60">Step</span>
                                    <span className="block text-4xl font-bold text-primary-foreground tabular-nums group-hover:text-accent transition-colors duration-500">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>
                                <div className="mt-4 w-px flex-1 bg-linear-to-b from-primary-foreground/20 via-transparent to-transparent group-hover:from-accent/30 transition-colors duration-500 h-20" />
                            </div>

                            {/* Content */}
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl text-primary-foreground leading-tight group-hover:text-secondary transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-[15px] leading-relaxed text-primary-foreground/80 font-medium">
                                    {step.description}
                                </p>
                            </div>

                            {/* Corner Accent for premium feel */}
                            <div className="absolute -top-2 -left-2 w-0 h-0 border-t border-l border-accent/0 group-hover:w-4 group-hover:h-4 group-hover:border-accent/30 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
