/** Ratapani Wilderness mark: a Vindhya sandstone mesa with a crescent moon. */
export function LogoMark({ className = '', moon = '#A67C52' }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true" focusable="false">
      <path fill={moon} d="M52 2.6a6.6 6.6 0 1 0 0 13.2 8 8 0 0 1 0-13.2z" />
      <path
        fill="currentColor"
        d="M1 36c6-1.6 11-4 15-7.4l3-10 3.2-3.4 15.4-1.8 3 1.4.8 11.6c6 2.8 13 5.6 21.6 8.4V37H1z"
      />
      <path
        fill="currentColor"
        d="M5 34.4h1.2v-3.2a3 3 0 1 1 2-5.7 3.5 3.5 0 0 1 6.3 1.6 2.7 2.7 0 0 1-1 5.2h-1v1.5h1v1.2H5z"
      />
      <path stroke="currentColor" strokeWidth="1" fill="none" d="M24 19.5l11-1.3M23 24l12-1.4M38.5 17v9" opacity=".35" />
      <path stroke="currentColor" strokeWidth="1.2" d="M0 38.6h64" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className={`h-8 w-auto ${light ? 'text-mist' : 'text-ink'}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] ${light ? 'text-mist' : 'text-ink'}`}>Ratapani</span>
        <span className={`mt-1 font-body text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${light ? 'text-gold' : 'text-earth'}`}>
          Wilderness
        </span>
      </span>
    </span>
  );
}
