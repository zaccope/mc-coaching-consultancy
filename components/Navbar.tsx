'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-5 px-4">
        <div
          className={`flex items-center gap-2 sm:gap-6 px-4 sm:px-6 py-3 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? 'bg-zinc-950/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/[0.08]'
              : 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.05]'
          }`}
        >
          <a href="#" className="font-serif text-xl text-stone-50 tracking-tight pr-2 sm:pr-4">
            M.C.
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-400 hover:text-stone-50 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-500 text-sm font-medium text-zinc-950 hover:bg-brand-400 active:scale-[0.97] transition-all duration-300 ml-2"
          >
            Get in touch
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center ml-2"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-stone-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-[5px]'
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-stone-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-[5px]'
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 bg-zinc-950/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.07,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="text-3xl font-serif text-stone-50 hover:text-brand-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + links.length * 0.07,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="mt-4 px-8 py-3 rounded-full bg-brand-500 text-lg font-medium text-zinc-950"
            >
              Get in touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
