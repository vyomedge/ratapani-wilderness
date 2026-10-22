import Link from 'next/link';
import Logo from './Logo';
import { NAV, SAFARI_SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="night-sky relative overflow-hidden bg-night text-haze">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-14 w-full text-paper md:h-20" aria-hidden>
        <path fill="currentColor" d="M0 0h1440v34c-120 10-200 30-330 26l-40-22-210 6-20 20C680 70 560 40 430 46l-30-28-150 4-26 26C150 56 70 44 0 50z" />
      </svg>
      <div className="container-site grid grid-cols-1 gap-12 pb-10 pt-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-5 max-w-sm leading-relaxed">
            A field guide to the Ratapani forest near Bhopal: its trails, birds and seasons, and how to walk lightly in tiger country.
          </p>
          <p className="mt-4 font-hand text-xl text-gold">22.9° N, 77.7° E · Vindhya hills</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="mb-4 text-label font-semibold uppercase text-gold">The journal</p>
          <ul className="space-y-1">
            {[{ path: '/', nav: 'Ratapani forest' }, ...NAV].map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="inline-block py-1.5 hover:text-mist">
                  {p.nav === 'Trekking' ? 'Trekking near Bhopal' : p.nav === 'Birdwatching' ? 'Birdwatching in Ratapani' : p.nav === 'Monsoon' ? 'Ratapani in monsoon' : p.nav}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="mb-4 text-label font-semibold uppercase text-gold">Field notes</p>
          <p className="leading-relaxed">
            Seasonal notes, sightings and trail updates are coming soon. Planning a tiger safari instead? See the{' '}
            <a href={SAFARI_SITE.home} className="text-mist underline decoration-gold/60 underline-offset-4 hover:decoration-gold">
              Ratapani jungle safari guide
            </a>
            .
          </p>
        </div>
      </div>
      <div className="container-site flex flex-col gap-2 border-t border-mist/10 py-6 text-[0.8125rem] sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Ratapani Wilderness. An independent nature guide.</p>
        <p className="font-hand text-lg text-gold">recorded in the field</p>
      </div>
    </footer>
  );
}
