import type { Metadata } from 'next'
import { Geist, Geist_Mono, Satisfy } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const satisfy = Satisfy({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-satisfy',
})

export const metadata: Metadata = {
  title: 'Kids Therapy Center | Professional Child Therapy',
  description: 'A warm, welcoming therapy center for children with experienced therapists providing personalized care in a safe environment.',
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${satisfy.variable}`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
