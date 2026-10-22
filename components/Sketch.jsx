/** Hand-drawn style line illustrations (inline SVG, inherit currentColor). */
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function TeakLeaf({ className = '' }) {
  return (
    <svg viewBox="0 0 80 110" className={`sketch ${className}`} aria-hidden="true" {...base}>
      <path d="M40 104V92M40 92C14 80 6 52 14 30 22 12 36 6 40 4c4 2 18 8 26 26 8 22 0 50-26 62z" />
      <path d="M40 92V10M40 30l-14-8M40 30l14-8M40 46l-19-10M40 46l19-10M40 62l-21-10M40 62l21-10M40 78l-17-9M40 78l17-9" />
    </svg>
  );
}

export function Feather({ className = '' }) {
  return (
    <svg viewBox="0 0 60 120" className={`sketch ${className}`} aria-hidden="true" {...base}>
      <path d="M30 116V20M30 20C46 32 50 62 40 92L30 104M30 20C14 34 10 62 20 90L30 104" />
      <path d="M30 40l10-6M30 52l12-6M30 64l12-6M30 76l10-6M30 46l-11-6M30 58l-12-6M30 70l-12-6M30 82l-10-6" />
    </svg>
  );
}

export function Moon({ className = '' }) {
  return (
    <svg viewBox="0 0 120 80" className={`sketch ${className}`} aria-hidden="true" {...base}>
      <path d="M78 10a22 22 0 1 0 0 44 18 18 0 1 1 0-44z" />
      <path d="M2 74c14-8 26-12 40-12l8-10 16-2 4 8c16 2 30 8 48 16" />
      <path d="M22 18l2 4M23 20h-3M100 30l1.5 3M100.8 31.5h-2.5M40 36l1.5 3" />
    </svg>
  );
}

export function TrailMarker({ className = '' }) {
  return (
    <svg viewBox="0 0 90 90" className={`sketch ${className}`} aria-hidden="true" {...base}>
      <path d="M36 86V14M36 20h34l8 7-8 7H36M36 40H12l-8 7 8 7h24" />
      <path d="M10 86c10-6 22-8 34-6s24 4 36 6" />
      <path d="M20 84l4-6 4 6M58 84l3-5 3 5" />
    </svg>
  );
}

export function Rain({ className = '' }) {
  return (
    <svg viewBox="0 0 120 90" className={`sketch ${className}`} aria-hidden="true" {...base}>
      <path d="M26 44a16 16 0 0 1 4-31 22 22 0 0 1 40-6 18 18 0 0 1 24 18 14 14 0 0 1-4 27H30" />
      <path d="M34 58l-5 12M52 58l-5 12M70 58l-5 12M88 58l-5 12M43 74l-4 10M61 74l-4 10M79 74l-4 10" />
    </svg>
  );
}

export function Bird({ className = '' }) {
  return (
    <svg viewBox="0 0 120 80" className={`sketch ${className}`} aria-hidden="true" {...base}>
      <path d="M8 62c18 2 34-2 46-12" />
      <path d="M40 40c6-10 16-16 28-16 4-6 10-8 14-6l8 2-8 3c2 10-2 22-14 30-10 6-24 6-34 2" />
      <path d="M58 34c8 2 14 8 16 16M80 22h.5" />
      <path d="M52 56l-4 12M60 54l-2 12M46 70h8M56 68h6" />
    </svg>
  );
}

/** Dotted trail line, drawn when its parent is revealed. */
export function TrailLine({ className = '' }) {
  return (
    <svg viewBox="0 0 400 60" preserveAspectRatio="none" className={`sketch ${className}`} aria-hidden="true" {...base}>
      <path strokeDasharray="2 7" d="M2 50c40-4 60-30 100-28s60 26 100 24 50-34 96-36 70 18 100 14" />
    </svg>
  );
}
