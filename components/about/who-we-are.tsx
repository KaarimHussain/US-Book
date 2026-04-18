"use client"

export default function WhoWeAre() {
  return (
    <section className="py-10 lg:py-15">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title Box */}
          <div className="lg:col-span-4">
             <div className="bg-white border border-black/5 rounded-3xl p-12 lg:p-20 shadow-2xl shadow-black/5 flex items-center justify-center text-center">
                <h2 className="font-heading text-5xl lg:text-7xl font-black text-accent leading-none uppercase tracking-tighter">
                  Who <br /> We Are
                </h2>
             </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-[15px] lg:text-[16px] font-medium max-w-3xl">
              <p>
                We're a powerhouse team of professional ghostwriters, seasoned editors, 
                publishing experts, and content strategists—dedicated to turning your story 
                into a bestseller. At US Book Authors, we specialize in delivering top-tier 
                book writing services tailored for authors across all genres.
              </p>
              <p>
                From autobiographies and novels to business books and sci-fi epics, our 
                collaborative approach ensures each project is original, market-ready, and 
                written to shine. We also offer expert-level support in areas like Wikipedia 
                page creation, book editing, and publishing consultation.
              </p>
              <p className="text-primary font-bold italic border-l-2 border-accent/30 pl-6 py-2">
                Excellence, trust, and long-term partnerships define us. We don't just write 
                books—we build author legacies.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
