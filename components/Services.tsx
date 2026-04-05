import { Crosshair, ChalkboardSimple, BookOpen, TrendUp } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: Crosshair,
    title: 'Playing Methodology Design',
    subtitle: 'Innovative strategies for individual and team performance enhancement',
    points: [
      'Age-appropriate game model',
      'Clearly defined principles in and out of possession and transition',
      'Consistent terminology across all age groups',
      'Individual Development Plans for players',
      'Video analysis integration for performance assessment',
    ],
  },
  {
    icon: ChalkboardSimple,
    title: 'Coaching Methodology Design',
    subtitle: 'Empowering coaches with effective, structured teaching methodologies',
    points: [
      'Coaching methodology outlining key principles',
      'Plan-Do-Review process implementation',
      'Guidance for setting key objectives in training and matches',
      'Development of a session plan library',
      'Effective team talks and delivery standards',
    ],
  },
  {
    icon: BookOpen,
    title: 'Coaching Syllabus Design',
    subtitle: 'Structured teaching programs for coaches and teams at every level',
    points: [
      'Annual syllabus linked to the Playing Methodology',
      'Creation of 6-8 week cycles of work',
      'Weekly cycles of work development',
      'Physical, psychological, and social characteristics integration',
    ],
  },
  {
    icon: TrendUp,
    title: 'Coach Development Program',
    subtitle: 'Fostering continuous growth and improvement for coaching staff',
    points: [
      'Coaching CPD with a seasonal calendar',
      'Guidance for session planning',
      'Subjective and objective feedback for sessions',
      'Coach Individual Development Plan',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-brand-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-brand-400 border border-brand-500/20 bg-brand-500/[0.06] mb-6">
            What we do
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] max-w-xl mb-16">
            Our services
          </h2>
        </ScrollReveal>

        {/* Asymmetric bento grid: 7fr 5fr alternating */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Row 1 */}
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <ServiceCard service={services[0]} />
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="lg:col-span-5">
            <ServiceCard service={services[1]} />
          </ScrollReveal>

          {/* Row 2 — flipped */}
          <ScrollReveal delay={0.15} className="lg:col-span-5">
            <ServiceCard service={services[2]} />
          </ScrollReveal>
          <ScrollReveal delay={0.25} className="lg:col-span-7">
            <ServiceCard service={services[3]} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number]
}) {
  const Icon = service.icon

  return (
    <div className="group rounded-[1.5rem] bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5 h-full hover:ring-brand-500/20 transition-all duration-500">
      <div className="rounded-[calc(1.5rem-6px)] bg-surface p-7 sm:p-8 h-full">
        <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/15 transition-colors duration-500">
          <Icon size={22} weight="duotone" className="text-brand-400" />
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-stone-50 mb-2">
          {service.title}
        </h3>
        <p className="text-stone-400 text-sm leading-relaxed mb-6">
          {service.subtitle}
        </p>

        <ul className="space-y-3">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-stone-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500/60 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
