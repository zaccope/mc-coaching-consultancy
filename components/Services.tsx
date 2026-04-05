import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    image: '/images/service-playing.jpeg',
    title: 'Playing Methodology Design',
    subtitle: 'Crafting innovative strategies for individual and team performance enhancement.',
    points: [
      'Age-appropriate game model',
      'Clearly defined principles in/out of possession & transition',
      'Consistent terminology',
      'Individual Development Plans (IDPs) for players',
      'Use of video analysis for performance assessment',
    ],
  },
  {
    image: '/images/service-coaching.jpeg',
    title: 'Coaching Methodology Design',
    subtitle: 'Empowering coaches with effective teaching methodologies.',
    points: [
      'Coaching methodology outlining key principles',
      'Plan-Do-Review process',
      'Guidance for setting key objectives in training and matches',
      'Development of a session plan library',
      'Effective team talks',
      'Establishment of delivery standards',
    ],
  },
  {
    image: '/images/service-syllabus.jpeg',
    title: 'Coaching Syllabus Design',
    subtitle: 'Creating structured teaching programs for coaches and teams.',
    points: [
      'Development of an annual syllabus linked to the Playing Methodology',
      'Creation of 6-8 week cycles of work',
      'Weekly cycles of work development',
      'Incorporation of physical, psychological, and social characteristics into the program',
    ],
  },
  {
    image: '/images/service-development.jpeg',
    title: 'Coach Development Program',
    subtitle: 'Fostering continuous growth and improvement for coaches.',
    points: [
      'Coaching CPD (Continuous Professional Development) with a seasonal calendar',
      'Guidance for session planning',
      'Subjective and objective feedback for sessions (remote and in-situ)',
      'Coach Individual Development Plan (IDP)',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-navy">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
        </ScrollReveal>

        {/* 2x2 grid matching original */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.1 + i * 0.08}>
              <div className="card-glow rounded-[2rem] overflow-hidden h-full transition-all duration-500">
                <div className="p-6 sm:p-8">
                  {/* Service image */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-accent/20 shrink-0 shadow-[0_0_12px_rgba(0,180,216,0.15)]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-accent-light">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-white/60 italic mb-5">
                    {service.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-white/75"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
