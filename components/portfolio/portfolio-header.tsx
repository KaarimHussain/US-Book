export default function PortfolioHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <section className="py-10 md:py-15 bg-background">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Brand Accent */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[2px] w-12 bg-secondary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Creative Archive</span>
                        <div className="h-[2px] w-12 bg-secondary" />
                    </div>

                    <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-tight">
                        {title}
                    </h2>

                    <p className="text-base md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}