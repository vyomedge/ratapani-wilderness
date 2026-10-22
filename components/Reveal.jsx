'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * One tiny observer for the whole site: elements with class "reveal" fade up
 * when they scroll into view. Content is fully visible if JavaScript is off.
 */
export default function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    const vh = window.innerHeight;
    // Read all positions first, then write, to avoid layout thrashing.
    const tops = Array.from(els, (el) => el.getBoundingClientRect().top);
    document.documentElement.classList.add('js-motion');
    els.forEach((el, i) => (tops[i] < vh ? el.classList.add('is-visible') : io.observe(el)));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
