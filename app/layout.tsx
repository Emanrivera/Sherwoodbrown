import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Archivo } from 'next/font/google'
import './globals.css'

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' })

export const metadata: Metadata = {
  title: 'Sherwood Brown | Dunk City to Pro | Basketball Coaching',
  description:
    'Sherwood Brown — 2013 Atlantic Sun Player of the Year, leader of FGCU’s historic Sweet 16 run, NBA G League and international pro. Book 1-on-1 and group basketball training with Coach Brown.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#131c33',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
