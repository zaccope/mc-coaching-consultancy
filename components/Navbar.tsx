'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
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
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-dark/90 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="relative h-8 sm:h-10 w-40 sm:w-48 shrink-0">
            <Image
              src="/images/Horizontal Logo.png"
              alt="M.C. Coaching Consultancy"
              fill
              className="object-contain object-left"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-accent text-sm font-semibold text-white hover:bg-accent-light active:scale-[0.97] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-[6px]'
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-[6px]'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 bg-navy-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
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
                className="text-2xl font-semibold text-white hover:text-accent transition-colors"
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
              className="mt-4 px-8 py-3 rounded-full bg-accent text-lg font-semibold text-white"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
