'use client';

import { useState } from 'react';
import Img from './Img';
import { Bird } from './Sketch';

/** Field-guide grid of birds with group filter chips. All cards are in the HTML for search engines. */
export default function BirdGuide({ birds, groups }) {
  const [active, setActive] = useState('All');
  return (
    <div>
      <div role="group" aria-label="Filter birds by group" className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
        {['All', ...groups].map((g) => (
          <button
            key={g}
            type="button"
            aria-pressed={active === g}
            onClick={() => setActive(g)}
            className={`chip ${active === g ? 'chip-on' : ''}`}
          >
            {g}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {birds.map((b, i) => (
          <li key={b.name} hidden={active !== 'All' && b.group !== active} className="specimen flex flex-col border border-rule bg-paper-card">
            <div className="relative aspect-[4/3] overflow-hidden border-b border-rule bg-paper-deep">
              {b.image ? (
                <Img name={b.image} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" />
              ) : (
                <div className="flex h-full items-center justify-center text-sand">
                  <Bird className="h-24 w-36" />
                  <span className="absolute bottom-3 right-4 font-hand text-lg text-earth">sketch</span>
                </div>
              )}
              <span className="absolute left-3 top-3 bg-paper/90 px-2.5 py-1 text-label font-semibold uppercase text-earth">
                No. {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-label font-semibold uppercase text-lichen">{b.group}</p>
              <h3 className="mt-1.5 font-display text-[1.4rem] leading-tight text-ink">{b.name}</h3>
              <p className="mt-1 text-[0.9375rem] text-lichen">
                <i>{b.latin}</i>
                {b.hindi && <> · {b.hindi}</>}
              </p>
              <p className="mt-3 flex-1 text-[1rem] leading-relaxed text-ink-soft">{b.text}</p>
              <p className="mt-4 border-t border-dashed border-rule pt-3 text-[0.875rem] text-earth">
                <span className="font-semibold">Look for it:</span> {b.where}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
