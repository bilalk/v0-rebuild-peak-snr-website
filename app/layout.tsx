import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Peak SNR - Signal Processing Software Solutions',
  description: 'Military-founded software solutions for VoIP, signal processing, radio systems, GPU acceleration, and AI voice. Engineered for enterprise reliability and precision.',
  keywords: 'signal processing, VoIP, radio solutions, DSP, GPU acceleration, AI voice, telecom',
  generator: 'v0.dev',
  openGraph: {
    title: 'Peak SNR - Signal Processing Software Solutions',
    description: 'Cut through the noise, deliver crystal clear solutions for enterprise telecommunications.',
    type: 'website',
    locale: 'en_US',
    url: 'https://peaksnr.tech',
    siteName: 'PeakSNR',
  },
  metadataBase: new URL('https://peaksnr.tech'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg',    type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* ── Security headers via meta tags (works on static/GitHub Pages) ── */}

        {/* Clickjacking protection */}
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />

        {/* XSS protection for older browsers */}
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Prevent MIME-type sniffing */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

        {/* Referrer policy - don't leak full URL to third parties */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Content Security Policy - allow only trusted sources */}
        <meta
          httpEquiv="Content-Security-Policy"
          content=[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https:",
            "connect-src 'self' https://vitals.vercel-insights.com",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self' mailto:",
          ].join('; ')
        />

        {/* Permissions policy - disable unused browser APIs */}
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=(), payment=(), usb=()"
        />
      </head>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
