import type { Metadata } from 'next'
import { Instrument_Serif, Outfit } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'M.C. Coaching Consultancy | Elite Football Coaching',
  description:
    'Decades of international football coaching expertise. Bespoke playing methodologies, coaching frameworks, and development programs for clubs and academies worldwide.',
  keywords: [
    'football coaching consultancy',
    'coaching methodology',
    'playing methodology design',
    'coach development',
    'football academy consulting',
    'coaching syllabus',
    'football program design',
  ],
  openGraph: {
    title: 'M.C. Coaching Consultancy | Elite Football Coaching',
    description:
      'Decades of international football coaching expertise. Bespoke playing methodologies, coaching frameworks, and development programs.',
    url: 'https://www.mccoachingconsultancy.com',
    siteName: 'M.C. Coaching Consultancy',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.C. Coaching Consultancy',
    description:
      'Decades of international football coaching expertise. Bespoke methodologies and development programs.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'M.C. Coaching Consultancy Ltd',
  url: 'https://www.mccoachingconsultancy.com',
  description:
    'International football coaching consultancy specialising in playing methodology design, coaching frameworks, syllabus development, and coach development programs.',
  email: 'MarcCampbell@mccoachingconsultancyltd.onmicrosoft.com',
  sameAs: [],
  serviceType: [
    'Playing Methodology Design',
    'Coaching Methodology Design',
    'Coaching Syllabus Design',
    'Coach Development Program',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${outfit.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-zinc-950 text-stone-50 font-sans antialiased">
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
