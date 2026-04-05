'use client'

import { useState, FormEvent } from 'react'
import { event as trackEvent } from '@/lib/analytics'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('sent')
      trackEvent('form_submit', { form: 'contact' })
      setForm({ firstName: '', lastName: '', email: '', organisation: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-navy-light/60 border border-accent/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300'

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-navy">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Get in touch!
        </h2>
        <p className="text-center text-white/50 mb-12">
          We&apos;d love to help you out!
        </p>

        <div className="card-glow rounded-[2rem] p-6 sm:p-10">
          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-xl font-bold text-white mb-2">Thank you!</p>
              <p className="text-sm text-white/50">We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-white/80 mb-4">Name</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">
                      First Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5">
                      Last Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className={inputClasses}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  Organisation <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.organisation}
                  onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 mb-1.5">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-10 py-3 rounded-full bg-accent text-sm font-semibold text-white hover:bg-accent-light active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {status === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
