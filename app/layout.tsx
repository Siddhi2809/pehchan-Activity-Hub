import type { Metadata } from 'next'
import { Geist, Geist_Mono, Satisfy, Nunito, Fredoka } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const satisfy = Satisfy({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-satisfy',
})
const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Little Stars Therapy | Where Kids Shine Bright ⭐',
  description: 'A warm, welcoming therapy center for children with experienced therapists providing personalized care in a safe, playful environment.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`
        ${geist.variable} 
        ${geistMono.variable} 
        ${satisfy.variable} 
        ${nunito.variable} 
        ${fredoka.variable}
      `}
    >
      <body className="font-sans antialiased text-foreground overflow-x-hidden">
        {/* Floating Background Shapes */}
        <div className="floating-shapes" aria-hidden="true">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        
        {children}
        <Analytics />
      </body>
    </html>
  )
}