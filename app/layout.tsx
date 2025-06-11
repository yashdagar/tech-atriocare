import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tech Atriocare - Revolutionizing Preventive Healthcare Through Innovation',
  description: 'Tech Atriocare is a research & development company founded by IIT-Delhi incubated ex-research scientist, dedicated to developing breakthrough technologies and therapies for preventive healthcare solutions.',
  keywords: [
    'Tech Atriocare',
    'preventive healthcare',
    'biomedical research',
    'healthcare innovation',
    'medical technology',
    'R&D company',
    'IIT Delhi incubated',
    'Tarun Adarsh',
    'healthcare solutions',
    'medical research',
    'biotechnology',
    'healthcare startup',
    'medical devices',
    'preventive medicine',
    'heart and lungs',
    'Haal-Chaal Pravartak',
    'digital gym',
    'Novicule-TA',
  ],
  authors: [{ name: 'Tech Atriocare Private Limited' }],
  creator: 'Tech Atriocare Private Limited',
  publisher: 'Tech Atriocare Private Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.techatriocare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tech Atriocare - Revolutionizing Preventive Healthcare Through Innovation',
    description: 'Breakthrough technologies and therapies for preventive healthcare. R&D company founded by IIT-Delhi incubated ex-research scientist.',
    url: 'https://www.techatriocare.com',
    siteName: 'Tech Atriocare',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tech Atriocare - Preventive Healthcare Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // update in future when you have a twitter
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Tech Atriocare - Revolutionizing Preventive Healthcare',
  //   description: 'Breakthrough technologies and therapies for preventive healthcare solutions.',
  //   images: ['/og-image.png'],
  //   creator: '@tech.atriocare',
  // },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Healthcare Technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  // colorScheme: 'light dark',
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  //   { media: '(prefers-color-scheme: dark)', color: '#000000' },
  // ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
  appleWebApp: {
    title: 'Tech Atriocare',
    statusBarStyle: 'default',
    capable: true,
  },
  other: {
    'company-founded': '2022',
    'company-location': 'Delhi, India',
    'company-type': 'Research & Development',
    'incubator': 'IIT-Delhi',
    'industry': 'Healthcare Technology',
    'focus-area': 'Preventive Healthcare',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className="font-sans antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
