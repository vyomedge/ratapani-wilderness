import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { siteSchema, placeSchema } from '@/lib/seo';

const display = localFont({
  src: './fonts/playfair-display-latin-wght-normal.woff2',
  variable: '--font-display',
  weight: '400 900',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});
const body = localFont({
  src: './fonts/lora-latin-wght-normal.woff2',
  variable: '--font-body',
  weight: '400 700',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});
const hand = localFont({
  src: './fonts/caveat-latin-wght-normal.woff2',
  variable: '--font-hand',
  weight: '400 700',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Ratapani Wilderness', template: '%s | Ratapani Wilderness' },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'travel',
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    'geo.region': 'IN-MP',
    'geo.placename': 'Ratapani, Raisen, Madhya Pradesh',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
  // Search Console / Bing verification: set these in Vercel → Settings → Environment Variables.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && { other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION } }),
  },
};

export const viewport = { themeColor: '#F7F2E8', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>
        <a href="#main" className="sr-only z-[70] rounded-full bg-moss px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <div className="scroll-progress" aria-hidden />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <JsonLd data={[...siteSchema(), placeSchema()]} />
      </body>
    </html>
  );
}
