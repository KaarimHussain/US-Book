import { ShieldAlert, Fingerprint, EyeOff, Lock } from "lucide-react";

export default function GhostwritingFeature() {
  return (
    <section className="bg-primary py-10 lg:py-15 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/db7b4ozrz/image/upload/v1776385369/book_writing_hero_bg_1776385369983.png')] opacity-10 grayscale scale-110 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-[0.4em] text-xs">
              <ShieldAlert className="size-4" />
              Ghostwriting Confidentiality
            </span>
            <h2 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Your Vision. Our <span className="text-accent italic">Ghost</span> Writing.
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are the silent partners behind world-class legacies. Our process ensures your
              voice remains the star, while our writers vanish into the shadows of your story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 bg-white px-5 py-10 rounded-lg">
              <div className="mx-auto size-12 flex items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent">
                <Fingerprint className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-black uppercase">Zero Trail</h3>
              <p className="text-black/40 text-sm">We maintain strict NDAs to ensure your identity as the sole creator is never compromised.</p>
            </div>
            <div className="space-y-4 bg-white px-5 py-10 rounded-lg">
              <div className="mx-auto size-12 flex items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent">
                <EyeOff className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-black uppercase">Invisible Hand</h3>
              <p className="text-black/40 text-sm">Our writers adapt perfectly to your unique syntax, tone, and professional vocabulary.</p>
            </div>
            <div className="space-y-4 bg-white px-5 py-10 rounded-lg">
              <div className="mx-auto size-12 flex items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent">
                <Lock className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-black uppercase">Ironclad Privacy</h3>
              <p className="text-black/40 text-sm">All communications and manuscript drafts are handled through secure, encrypted channels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
