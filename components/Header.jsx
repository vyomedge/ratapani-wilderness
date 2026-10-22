'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? 'border-rule bg-paper/95 backdrop-blur' : 'border-transparent bg-paper/0'}`}>
      <div className="container-site flex h-[72px] items-center justify-between">
        <Link href="/" className="py-2">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((p) => (
              <li key={p.path}>
                <Link
                  href={p.path}
                  aria-current={pathname === p.path ? 'page' : undefined}
                  className={`nav-link py-3 text-[0.95rem] ${pathname === p.path ? 'text-moss' : 'text-ink-soft hover:text-ink'}`}
                >
                  {p.nav}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/ratapani-trekking#checklist" className="btn-moss hidden !min-h-[42px] !px-5 !text-[0.9rem] md:inline-flex">
          Trail checklist
        </Link>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="paper-grain h-[calc(100dvh-72px)] overflow-y-auto border-t border-rule bg-paper md:hidden">
          <ul className="container-site flex flex-col py-6">
            {[{ path: '/', nav: 'Home' }, ...NAV].map((p, i) => (
              <li key={p.path} className="border-b border-rule">
                <Link href={p.path} className="flex min-h-[64px] items-center gap-4 font-display text-2xl text-ink">
                  <span className="font-body text-marker text-earth">0{i + 1}</span>
                  {p.nav}
                </Link>
              </li>
            ))}
          </ul>
          <p className="container-site font-hand text-2xl text-earth">walk lightly, look closely.</p>
        </nav>
      )}
    </header>
  );
}
