export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <div className="flex h-full w-full items-center justify-center">
                {/* Visual Indicator for the stream placeholder */}
                <div className="text-center">
                    <div className="mb-4 h-12 w-12 animate-pulse rounded-full border-4 border-white/20 border-t-white mx-auto" />
                    <p className="text-xs font-bold uppercase tracking-[0.5em] text-white/30">Ready for Stream</p>
                </div>
            </div>
        </section>
    )
}