import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    quote:
      'M.C Coaching Consultancy transformed the way in which our coaches work at our Club. The Coach Development program they offered really took our on and off-field coach development to another level.',
    name: 'Neil Clinton',
    role: 'Director of Coaching',
    org: 'The Football Academy New Jersey, USA',
  },
  {
    quote:
      'Having the support from M.C Coaching Consultancy to help develop our Academy coaching syllabus has been invaluable. Their knowledge and professionalism has helped us create a programme that is age-appropriate, challenging and fun for our players as well as user-friendly for our team of coaches.',
    name: 'J. Bailey',
    role: '',
    org: 'The Football Development Centre, UK',
  },
  {
    quote:
      "Can't recommend M.C Coaching Consultancy enough. They bring World-Class insight into coach and player development.",
    name: 'Saul Isaksson-Hurst',
    role: '',
    org: 'My Personal Football Coach',
  },
  {
    quote:
      'The team at M.C Coaching Consultancy are very passionate about the game and in addition to being highly knowledgeable, are skilled in communication and mentoring for both coaches and players. By working with M.C Coaching Consultancy we have been able to provide a higher level of coaching to our players.',
    name: 'Coach Ian McClurg',
    role: 'Prepare to Play Pro',
    org: 'Ontario, Canada',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-brand-400 border border-brand-500/20 bg-brand-500/[0.06] mb-6">
            Client testimonials
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] max-w-xl mb-16">
            Trusted worldwide
          </h2>
        </ScrollReveal>

        {/* 2-column offset grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column — slight top offset */}
          <div className="space-y-6">
            {testimonials.filter((_, i) => i % 2 === 0).map((t, i) => (
              <ScrollReveal key={t.name} delay={0.1 + i * 0.1}>
                <TestimonialCard testimonial={t} />
              </ScrollReveal>
            ))}
          </div>

          {/* Right column — pushed down for offset */}
          <div className="space-y-6 md:mt-12">
            {testimonials.filter((_, i) => i % 2 !== 0).map((t, i) => (
              <ScrollReveal key={t.name} delay={0.15 + i * 0.1}>
                <TestimonialCard testimonial={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <div className="rounded-[1.5rem] bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5">
      <div className="rounded-[calc(1.5rem-6px)] bg-surface p-7 sm:p-8">
        {/* Quote mark */}
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          className="text-brand-500/30 mb-5"
          aria-hidden="true"
        >
          <path
            d="M0 14.4C0 6.4 4.8 1.6 14.4 0l1.2 3.2C9.2 4.8 7.2 8 7.2 11.2h4.8v12.8H0V14.4Zm18 0C18 6.4 22.8 1.6 32 0l1.2 3.2c-6.4 1.6-8.4 4.8-8.4 8h4.8v12.8H18V14.4Z"
            fill="currentColor"
          />
        </svg>

        <blockquote className="text-stone-200 leading-relaxed mb-6">
          {testimonial.quote}
        </blockquote>

        <div className="border-t border-white/[0.06] pt-5">
          <p className="text-sm font-semibold text-stone-100">{testimonial.name}</p>
          <p className="text-xs text-stone-500 mt-0.5">
            {testimonial.role ? `${testimonial.role} — ` : ''}
            {testimonial.org}
          </p>
        </div>
      </div>
    </div>
  )
}
