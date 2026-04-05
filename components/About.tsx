import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const credentials = [
  {
    icon: '/images/icon-expertise.png',
    title: '20+ years of international football coaching expertise',
    description:
      'Benefit from decades of hands-on experience across diverse settings, ensuring unparalleled insights and strategies for success.',
  },
  {
    icon: '/images/icon-tailored.png',
    title: 'Tailored football programs',
    description:
      'Bespoke football programs meticulously tailored to your team\'s unique strengths, weaknesses, and aspirations, achieving sustainable growth.',
  },
  {
    icon: '/images/icon-proven.png',
    title: 'Proven track record of success',
    description:
      'Trust in our history of transforming teams into champions, delivering tangible results through effective coaching and strategic program development.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-navy">
      {/* Subtle blue glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-full overflow-hidden border-2 border-accent/20 shadow-[0_0_40px_rgba(0,180,216,0.1)]">
              <Image
                src="/images/about-pitch.jpeg"
                alt="Digital football pitch visualisation"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold leading-[1.15] mb-10">
                Decades of international experience building winning football programs
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {credentials.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.1 + i * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center shrink-0 border border-accent/20">
                      <Image
                        src={item.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
