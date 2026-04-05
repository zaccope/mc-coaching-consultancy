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
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-brand-500/40 focus:ring-1 focus:ring-brand-500/20 transition-all duration-300'

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <div className="max-w-md">
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-brand-400 border border-brand-500/20 bg-brand-500/[0.06] mb-6">
              Contact
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
              Get in touch
            </h2>

            <p className="text-stone-400 leading-relaxed mb-10">
              Ready to take your coaching program to the next level? Send us a message and we will get back to you to discuss how we can help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-stone-300">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-brand-400">
                    <path d="M2 4l6 4 6-4M2 12h12V4H2v8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <a
                  href="mailto:MarcCampbell@mccoachingconsultancyltd.onmicrosoft.com"
                  className="hover:text-brand-400 transition-colors break-all"
                  onClick={() => trackEvent('cta_click', { type: 'email' })}
                >
                  MarcCampbell@mccoachingconsultancyltd.onmicrosoft.com
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-[1.5rem] bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5">
            <div className="rounded-[calc(1.5rem-6px)] bg-surface p-7 sm:p-8">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-500/15 flex items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-400">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-lg font-serif text-stone-100 mb-2">Message sent</p>
                  <p className="text-sm text-stone-400">We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-2">
                        First name <span className="text-brand-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className={inputClasses}
                        placeholder="Marc"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className={inputClasses}
                        placeholder="Campbell"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-2">
                      Email <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClasses}
                      placeholder="you@club.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-2">
                      Organisation <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.organisation}
                      onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                      className={inputClasses}
                      placeholder="Your club or academy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-2">
                      Message <span className="text-brand-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your coaching needs..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl bg-brand-500 text-sm font-semibold text-zinc-950 hover:bg-brand-400 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
