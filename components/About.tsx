import { Trophy, Globe, Target } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from './ScrollReveal'

const credentials = [
  {
    icon: Globe,
    stat: '20+',
    label: 'Years of international coaching',
    description:
      'Decades of hands-on experience across diverse settings worldwide, from grassroots academies to professional clubs. Unparalleled insights and strategies for success.',
  },
  {
    icon: Target,
    stat: 'Bespoke',
    label: 'Tailored football programs',
    description:
      'Programs meticulously crafted for your team\'s unique strengths, weaknesses, and aspirations. Every methodology is built around your specific context and goals.',
  },
  {
    icon: Trophy,
    stat: 'Proven',
    label: 'Track record of results',
    description:
      'A history of transforming teams into champions, delivering tangible results through effective coaching and strategic program development at every level.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-brand-400 border border-brand-500/20 bg-brand-500/[0.06] mb-6">
            Why M.C. Coaching
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] max-w-2xl mb-6">
            Decades of international experience building winning programs
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-stone-400 text-lg leading-relaxed max-w-2xl mb-16">
            M.C. Coaching Consultancy partners with clubs and academies worldwide to design and implement world-class coaching frameworks that deliver sustainable performance improvement.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((item, i) => (
            <ScrollReveal key={item.label} delay={0.1 + i * 0.1}>
              {/* Double-bezel card */}
              <div className="rounded-[1.5rem] bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5 h-full">
                <div className="rounded-[calc(1.5rem-6px)] bg-surface p-8 h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
                    <item.icon size={22} weight="duotone" className="text-brand-400" />
                  </div>
                  <p className="font-serif text-3xl text-brand-400 mb-1">{item.stat}</p>
                  <p className="text-sm font-semibold text-stone-200 uppercase tracking-wider mb-4">
                    {item.label}
                  </p>
                  <p className="text-stone-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
