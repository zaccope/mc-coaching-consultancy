'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

const testimonials = [
  {
    quote:
      'M.C Coaching Consultancy transformed the way in which our coaches work at our Club. The Coach Development program they offered really took our on and off-field coach development to another level.',
    name: 'Neil Clinton',
    role: 'Director of Coaching',
    org: 'The Football Academy New Jersey (USA)',
  },
  {
    quote:
      'Having the support from M.C Coaching Consultancy to help develop our Academy coaching syllabus has been invaluable. Their knowledge and professionalism has helped us create a programme that is age-appropriate, challenging and fun for our players as well as user-friendly for our team of coaches.',
    name: 'J. Bailey',
    role: '',
    org: 'The Football Development Centre (U.K)',
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
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-navy">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Client Testimonials
        </h2>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ArrowRight size={18} />
          </button>

          {/* Quote */}
          <div className="card-glow rounded-[2rem] px-8 sm:px-14 py-12 sm:py-16 text-center min-h-[280px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                <blockquote className="text-lg sm:text-xl font-medium leading-relaxed text-white/90 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <p className="text-sm font-semibold text-white">
                  {t.name}
                  {t.role ? ` (${t.role})` : ''}
                </p>
                <p className="text-xs text-white/50 mt-1">
                  {t.org}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-accent w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
