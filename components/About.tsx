import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const credentials = [
  {
    icon: '/images/Expertise.png',
    title: '20+ years of international football coaching expertise',
    description:
      'Benefit from decades of hands-on experience across diverse settings, ensuring unparalleled insights and strategies for success.',
  },
  {
    icon: '/images/Personal approach.png',
    title: 'Tailored football programs',
    description:
      'Bespoke football programs meticulously tailored to your team\'s unique strengths, weaknesses, and aspirations, achieving sustainable growth.',
  },
  {
    icon: '/images/Proven record of success.png',
    title: 'Proven track record of success',
    description:
      'Trust in our history of transforming teams into champions, delivering tangible results through effective coaching and strategic program development.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-navy">
      {/* Subtle blue glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content — first on mobile, right on desktop */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.15] mb-8 lg:mb-10">
                Decades of international experience building winning football programs
              </h2>
            </ScrollReveal>

            <div className="space-y-6 sm:space-y-8">
              {credentials.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.1 + i * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-navy-light flex items-center justify-center shrink-0 border border-accent/20">
                      <Image
                        src={item.icon}
                        alt=""
                        width={26}
                        height={26}
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

          {/* Image — second on mobile, left on desktop */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-full overflow-hidden border-2 border-accent/20 shadow-[0_0_40px_rgba(0,180,216,0.1)]">
              <Image
                src="/images/AI Digital football pitch graphic jpg.jpeg"
                alt="Digital football pitch visualisation"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
