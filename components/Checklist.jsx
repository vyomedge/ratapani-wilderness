'use client';

import { useState } from 'react';
import { Printer, RotateCcw } from 'lucide-react';

/** Tickable, printable checklist. State is kept only in the page (nothing is stored). */
export default function Checklist({ id, title, groups, printLabel = 'Print checklist' }) {
  const [done, setDone] = useState({});
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const count = Object.values(done).filter(Boolean).length;
  return (
    <div className="print-area border border-rule bg-paper-note p-6 md:p-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-display text-2xl text-ink">{title}</p>
        <div className="no-print flex items-center gap-3">
          <span className="text-[0.875rem] text-lichen" aria-live="polite">
            {count} of {total} packed
          </span>
          <button type="button" onClick={() => setDone({})} className="btn-outline !min-h-[44px] !px-4" aria-label="Clear all ticks">
            <RotateCcw className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" onClick={() => window.print()} className="btn-moss !min-h-[44px]">
            <Printer className="h-4 w-4" aria-hidden /> {printLabel}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {groups.map((g) => (
          <fieldset key={g.title}>
            <legend className="mb-3 text-label font-semibold uppercase text-earth">{g.title}</legend>
            <ul className="space-y-1">
              {g.items.map((item) => {
                const key = `${id}-${item}`;
                return (
                  <li key={item}>
                    <label className="flex min-h-[44px] cursor-pointer items-center gap-3 border-b border-dashed border-rule text-[1.0625rem] text-ink-soft">
                      <input
                        type="checkbox"
                        className="check h-5 w-5 shrink-0"
                        checked={!!done[key]}
                        onChange={(e) => setDone((d) => ({ ...d, [key]: e.target.checked }))}
                      />
                      <span className={done[key] ? 'text-lichen line-through' : ''}>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
