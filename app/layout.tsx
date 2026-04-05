import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elite Football Coaching Consultancy | M.C. Coaching Consultancy',
  description:
    'Discover customised coaching solutions and proven tactics to elevate the performance of your football club. 20+ years of international football coaching expertise.',
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
    title: 'Elite Football Coaching Consultancy | M.C. Coaching Consultancy',
    description:
      'Discover customised coaching solutions and proven tactics to elevate the performance of your football club.',
    url: 'https://www.mccoachingconsultancy.com',
    siteName: 'M.C. Coaching Consultancy',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.C. Coaching Consultancy',
    description:
      'Discover customised coaching solutions and proven tactics to elevate the performance of your football club.',
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
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-navy text-white font-body antialiased">
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
