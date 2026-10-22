import Link from 'next/link';
import { ArrowRight, ChevronRight, Plus } from 'lucide-react';
import Img from './Img';
import JsonLd from './JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/seo';
import { SITE } from '@/lib/site';

const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

/* Chapter marker: "01 / ROCK" with a sandstone rule */
export function Marker({ children, light = false }) {
  return (
    <p className={`mb-4 flex items-center gap-3 font-body text-marker font-semibold uppercase ${light ? 'text-gold' : 'text-earth'}`}>
      <span className={`marker-rule h-px w-10 ${light ? 'bg-gold' : 'bg-sand'}`} aria-hidden />
      {children}
    </p>
  );
}

export function SectionHead({ marker, title, intro, id, center = false, light = false, as: H = 'h2' }) {
  return (
    <div className={`reveal mb-10 ${center ? 'mx-auto max-w-2xl text-center [&>p:first-child]:justify-center' : 'max-w-3xl'}`}>
      {marker && <Marker light={light}>{marker}</Marker>}
      <H id={id} className={`font-display text-[2rem] leading-tight md:text-display-md ${light ? 'text-mist' : 'text-ink'}`}>
        {title}
      </H>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-haze' : 'text-ink-soft'}`}>{intro}</p>}
    </div>
  );
}

/* Breadcrumbs with BreadcrumbList schema */
export function Breadcrumbs({ crumbs }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-label uppercase text-lichen">
          {crumbs.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />}
              {i < crumbs.length - 1 ? (
                <Link href={c.path} className="underline-offset-4 hover:text-moss hover:underline">
                  {c.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-ink">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}

/* Framed photo "plate" with a cream mat and figure caption */
export function Plate({ image, fig, caption, sizes = '(min-width: 1024px) 40vw, 100vw', priority = false, ratio = 'aspect-[4/3]', className = '', position }) {
  return (
    <figure className={`plate ${className}`}>
      <div className={`relative overflow-hidden ${ratio}`}>
        <Img name={image} sizes={sizes} priority={priority} position={position} />
      </div>
      {caption && (
        <figcaption className="mt-3 text-[0.8125rem] leading-snug text-lichen">
          {fig && <span className="mr-1 font-semibold text-earth">Fig. {fig} —</span>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* Taped field note */
export function FieldNote({ title = 'Field note', children, sign, className = '', tilt = '-0.6deg' }) {
  return (
    <aside className={`field-note reveal ${className}`} style={{ '--tilt': tilt }}>
      <p className="mb-2 font-body text-label font-semibold uppercase text-earth">{title}</p>
      <div className="font-hand text-[1.45rem] leading-snug text-ink">{children}</div>
      {sign && <p className="mt-3 text-[0.8125rem] text-lichen">{sign}</p>}
    </aside>
  );
}

/* Quick facts strip */
export function QuickFacts({ items }) {
  return (
    <dl className="grid grid-cols-2 border-y border-rule lg:grid-cols-4">
      {items.map(([label, value, note], i) => (
        <div key={label} className={`px-4 py-5 sm:px-6 ${i % 2 ? 'border-l border-rule' : ''} ${i >= 2 ? 'border-t border-rule lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}>
          <dt className="text-label font-semibold uppercase text-lichen">{label}</dt>
          <dd className="mt-1.5 font-display text-xl leading-snug text-ink">{value}</dd>
          {note && <dd className="mt-1 text-[0.8125rem] leading-snug text-lichen">{note}</dd>}
        </div>
      ))}
    </dl>
  );
}

/* Direct answer box (for featured snippets / AI answers) */
export function AnswerBox({ id, title, children }) {
  return (
    <section aria-labelledby={id} className="reveal border border-rule border-l-[3px] border-l-moss bg-paper-card p-6 sm:p-8 md:p-10">
      <h2 id={id} className="font-display text-[1.75rem] leading-tight text-ink md:text-[2rem]">
        {title}
      </h2>
      <div data-speakable className="prose-field mt-4">
        {children}
      </div>
    </section>
  );
}

/* Inner page hero: journal layout with framed plate */
export function PageHero({ crumbs, marker, title, intro, image, fig, caption, note, actions, facts }) {
  return (
    <section className="paper-grain border-b border-rule">
      <div className="container-site grid grid-cols-1 items-center gap-10 pb-12 pt-28 md:pt-32 lg:grid-cols-12 lg:gap-14 lg:pb-16">
        <div className="hero-in lg:col-span-7">
          <Breadcrumbs crumbs={crumbs} />
          {marker && <Marker>{marker}</Marker>}
          <h1 className="font-display text-[2.4rem] leading-[1.1] text-ink sm:text-5xl lg:text-display-lg">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{intro}</p>}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          <p className="mt-8 text-[0.8125rem] text-lichen">
            Field-checked and updated <time dateTime={SITE.lastReviewed}>{fmtDate(SITE.lastReviewed)}</time>
          </p>
        </div>
        <div className="relative lg:col-span-5">
          <Plate image={image} fig={fig} caption={caption} priority sizes="(min-width: 1024px) 38vw, 92vw" ratio="aspect-[5/4]" />
          {note && (
            <p className="absolute -top-5 right-4 z-10 max-w-[14rem] rotate-[2deg] border border-rule bg-paper-note px-4 py-2 font-hand text-xl leading-tight text-earth shadow-[0_1px_0_#D6CEC1]">
              {note}
            </p>
          )}
        </div>
      </div>
      {facts && (
        <div className="container-site pb-10">
          <QuickFacts items={facts} />
        </div>
      )}
    </section>
  );
}

/* Allowed / not allowed two-column list */
export function DoDont({ yes, no, yesTitle = 'Allowed', noTitle = 'Not allowed' }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {[
        [yesTitle, yes, 'text-moss', '✓'],
        [noTitle, no, 'text-[#9A3B2A]', '✕'],
      ].map(([t, list, color, mark]) => (
        <div key={t}>
          <p className="mb-3 text-label font-semibold uppercase text-lichen">{t}</p>
          <ul className="space-y-2.5">
            {list.map((x) => (
              <li key={x} className="flex gap-3 text-[1.0625rem] leading-snug text-ink-soft">
                <span className={`mt-0.5 font-semibold ${color}`} aria-hidden>
                  {mark}
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* FAQ accordion + FAQPage schema (works without JavaScript) */
export function Faq({ id = 'faq', title, intro, faqs }) {
  return (
    <section aria-labelledby={id}>
      <SectionHead marker="Questions" title={title} intro={intro} id={id} center />
      <div className="mx-auto max-w-3xl border-t border-rule">
        {faqs.map((f) => (
          <details key={f.q} className="faq group border-b border-rule">
            <summary className="flex min-h-[56px] items-center justify-between gap-6 py-5 font-display text-lg text-ink md:text-xl">
              {f.q}
              <Plus className="faq-icon h-5 w-5 shrink-0 text-moss transition-transform duration-300" aria-hidden />
            </summary>
            <p className="pb-6 pr-10 text-[1.0625rem] leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}

/* Sources */
export function Sources({ items }) {
  return (
    <aside className="border border-rule bg-paper-card p-6 md:p-8">
      <p className="mb-4 text-label font-semibold uppercase text-lichen">Sources for this guide</p>
      <ul className="space-y-2 text-[0.9375rem]">
        {items.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-ink-soft underline decoration-rule underline-offset-4 hover:text-moss hover:decoration-moss">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[0.8125rem] leading-relaxed text-lichen">
        Access rules, seasons and timings are set by the Madhya Pradesh Forest Department and the Archaeological Survey of India and can change. Confirm locally before you go.
      </p>
    </aside>
  );
}

/* "Next in the journal" card */
export function NextPage({ href, marker, title, text, image }) {
  return (
    <Link href={href} className="reveal card-lift group grid grid-cols-1 overflow-hidden border border-rule bg-paper-card md:grid-cols-5">
      <div className="relative min-h-[220px] md:col-span-2">
        <Img name={image} sizes="(min-width: 768px) 30vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-10">
        <Marker>{marker}</Marker>
        <p className="font-display text-[1.75rem] leading-tight text-ink group-hover:text-moss">{title}</p>
        <p className="mt-3 text-ink-soft">{text}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-label font-semibold uppercase text-moss">
          Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

/* Scrollable table wrapper */
export function Table({ caption, children, note }) {
  return (
    <div className="reveal">
      <div className="relative overflow-x-auto border border-rule bg-paper-card" tabIndex={0} role="region" aria-label={caption}>
        <table className="field-table">
          <caption className="sr-only">{caption}</caption>
          {children}
        </table>
      </div>
      {note && <p className="mt-3 text-[0.8125rem] text-lichen">{note}</p>}
    </div>
  );
}
