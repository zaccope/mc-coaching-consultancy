import Image from 'next/image'

const services = [
  'Playing Methodology Design',
  'Coaching Methodology Design',
  'Coaching Syllabus Design',
  'Coach Development Program',
]

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 py-12 sm:py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="relative h-10 w-48 mb-5">
              <Image
                src="/images/Horizontal Logo.png"
                alt="M.C. Coaching Consultancy"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              International football coaching consultancy with over 20 years of
              experience building winning programs worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get in touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:MarcCampbell@mccoachingconsultancyltd.onmicrosoft.com"
                  className="text-sm text-white/50 hover:text-accent transition-colors duration-300 break-all"
                >
                  MarcCampbell@mccoachingconsultancyltd.onmicrosoft.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent hover:bg-accent/20 transition-all duration-300"
                >
                  Send a message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1.75 7h10.5M8.75 3.5 12.25 7l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} M.C. Coaching Consultancy Ltd. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/50 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
