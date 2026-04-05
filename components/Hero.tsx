import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-brand-400/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-32 pb-20 lg:pt-0 lg:pb-0">
        {/* Left — Copy */}
        <div className="max-w-xl">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-brand-400 border border-brand-500/20 bg-brand-500/[0.06] mb-8">
              Football coaching consultancy
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-balance mb-6">
              Build winning football programs
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-stone-400 leading-relaxed max-w-[50ch] mb-10">
              Customised coaching solutions and proven methodologies to transform the performance of your football club. Over two decades of international experience.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-500 text-sm font-semibold text-zinc-950 hover:bg-brand-400 active:scale-[0.97] transition-all duration-300"
              >
                Our services
                <span className="w-7 h-7 rounded-full bg-zinc-950/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-zinc-950">
                    <path d="M1.75 7h10.5M8.75 3.5 12.25 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-stone-300 border border-white/10 hover:border-white/20 hover:text-stone-50 active:scale-[0.97] transition-all duration-300"
              >
                Get in touch
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right — Abstract pitch element */}
        <ScrollReveal delay={0.3} className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
              {/* Outer ring */}
              <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(52,211,153,0.06)" strokeWidth="0.5" />
              {/* Center circle */}
              <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(52,211,153,0.15)" strokeWidth="1" />
              {/* Center dot */}
              <circle cx="200" cy="200" r="4" fill="rgba(52,211,153,0.4)" />
              {/* Cross lines */}
              <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(52,211,153,0.08)" strokeWidth="0.5" />
              <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(52,211,153,0.08)" strokeWidth="0.5" />
              {/* Penalty arc top */}
              <path d="M 140 60 A 60 60 0 0 1 260 60" fill="none" stroke="rgba(52,211,153,0.12)" strokeWidth="0.8" />
              {/* Penalty arc bottom */}
              <path d="M 140 340 A 60 60 0 0 0 260 340" fill="none" stroke="rgba(52,211,153,0.12)" strokeWidth="0.8" />
              {/* Corner arcs */}
              <path d="M 10 30 A 20 20 0 0 1 30 10" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="0.8" />
              <path d="M 370 10 A 20 20 0 0 1 390 30" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="0.8" />
              <path d="M 10 370 A 20 20 0 0 0 30 390" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="0.8" />
              <path d="M 370 390 A 20 20 0 0 0 390 370" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="0.8" />
              {/* Outer rectangle (pitch boundary) */}
              <rect x="10" y="10" width="380" height="380" rx="2" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="0.8" />
              {/* Penalty boxes */}
              <rect x="110" y="10" width="180" height="70" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="0.7" />
              <rect x="110" y="320" width="180" height="70" fill="none" stroke="rgba(52,211,153,0.1)" strokeWidth="0.7" />
              {/* Goal boxes */}
              <rect x="150" y="10" width="100" height="30" fill="none" stroke="rgba(52,211,153,0.08)" strokeWidth="0.5" />
              <rect x="150" y="360" width="100" height="30" fill="none" stroke="rgba(52,211,153,0.08)" strokeWidth="0.5" />
              {/* Decorative outer circle */}
              <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(52,211,153,0.04)" strokeWidth="0.5" strokeDasharray="4 8" />
            </svg>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  )
}
