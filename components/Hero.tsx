import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-b from-navy-dark via-navy to-navy">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent pointer-events-none z-10" />

      {/* Hero image - right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
        <Image
          src="/images/AI Low poly digital football jpg.jpeg"
          alt="Digital football graphic"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:hidden" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 w-full pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-xl">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-5 sm:mb-6">
              Unlock your football success with our expertise
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-md mb-8 sm:mb-10">
              Discover customised coaching solutions and proven tactics to elevate the performance of your football club.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#about"
                className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border-2 border-white/30 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 active:scale-[0.97] transition-all duration-300"
              >
                About Us
              </a>
              <a
                href="#services"
                className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border-2 border-white/30 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/50 active:scale-[0.97] transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom blue glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-20" />
    </section>
  )
}
