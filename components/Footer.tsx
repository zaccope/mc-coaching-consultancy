export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg text-stone-100">M.C.</span>
          <span className="text-sm text-stone-500">
            M.C. Coaching Consultancy Ltd
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-stone-500">
          <a
            href="mailto:MarcCampbell@mccoachingconsultancyltd.onmicrosoft.com"
            className="hover:text-brand-400 transition-colors"
          >
            Email us
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
