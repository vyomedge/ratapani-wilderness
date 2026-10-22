import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { TeakLeaf, Feather, Moon, Rain, TrailLine } from '@/components/Sketch';
import { Marker, SectionHead, QuickFacts, FieldNote, Plate, Faq, Sources } from '@/components/ui';
import { PAGES, SAFARI_SITE, SITE } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani Forest: Wilderness & Nature Near Bhopal',
  description:
    'Ratapani forest near Bhopal: Vindhya sandstone, teak and bamboo, 249 bird species, monsoon streams and dark skies. Trails, birding and seasons explained.',
  path: '/',
  keywords: ['Ratapani forest', 'Ratapani wilderness', 'jungle near Bhopal', 'forest near Bhopal', 'nature places near Bhopal', 'Vindhya hills Bhopal'],
  image: 'ratapani-forest-vindhya-hills-sunrise',
};
export const metadata = pageMetadata(META);

const LAYERS = [
  {
    n: '01',
    topic: 'Rock',
    title: 'Vindhya Sandstone & Rock Shelters',
    image: 'ratapani-sandstone-rock-formations',
    caption: 'Weathered sandstone towers above the forest',
    text: [
      'Ratapani sits on the sandstone of the Vindhya range, a plateau of flat-topped hills, cliffs and deep gorges that rises south of Bhopal. Wind and water have carved the rock into overhangs and towers.',
      'Those overhangs became shelters. At Bhimbetka, on the forest’s edge, more than 750 rock shelters have been found, about 400 of them painted. The oldest paintings are at least 10,000 years old, and UNESCO listed the site as World Heritage in 2003.',
    ],
    note: 'oldest walls in the forest →',
    Sketch: Moon,
  },
  {
    n: '02',
    topic: 'Forest',
    title: 'Teak, Bamboo & Mahua',
    image: 'ratapani-teak-forest-trees',
    caption: 'Straight-stemmed teak, the forest’s main tree',
    text: [
      'Most of Ratapani is dry and moist deciduous forest. Teak covers about 55% of the area and bamboo about a quarter, with mahua, tendu and palash scattered between them.',
      'Being deciduous, the forest changes completely through the year: bare and golden in summer, then green almost overnight once the monsoon arrives.',
    ],
    note: 'teak leaves can be bigger than your face',
    Sketch: TeakLeaf,
  },
  {
    n: '03',
    topic: 'Water',
    title: 'Streams, Reservoirs & Summer Pools',
    image: 'ratapani-dam-reservoir-evening',
    caption: 'Ratapani Dam reservoir in the evening',
    text: [
      'Ratapani Dam and Barna Reservoir are the forest’s two largest waterbodies, and the Kolar river runs along its western side.',
      'Most streams flow only in the rains. In summer they shrink to scattered pools, and those pools decide where animals and birds gather in the hottest months.',
    ],
    note: 'in May, follow the water',
    Sketch: Rain,
  },
  {
    n: '04',
    topic: 'Sky',
    title: 'Birds by Day, Stars by Night',
    image: 'crested-serpent-eagle-ratapani',
    caption: 'Crested serpent eagle above the canopy',
    text: [
      'The Madhya Pradesh Forest Department records 249 bird species in Ratapani, from the Indian paradise flycatcher, the state bird, to the crested serpent eagle and the critically endangered white-rumped vulture.',
      'After sunset the forest belongs to nightjars, owlets and a sky far darker than Bhopal’s. Protected areas close at dusk, so enjoy it from permitted places on the forest edge.',
    ],
    note: 'listen for the nightjar’s “chuk-chuk”',
    Sketch: Feather,
  },
];

const SEASONS = [
  {
    name: 'Monsoon',
    months: 'Mid-June – September',
    image: 'ratapani-in-monsoon-green-hills',
    text: 'The rains usually arrive in the second week of June. Streams run, the forest turns green and mist settles on the cliffs. Core safari zones close from 1 July to 30 September.',
    best: 'Greenery, photography, short drives',
    href: PAGES.monsoon.path,
  },
  {
    name: 'Winter',
    months: 'October – February',
    image: 'ratapani-winter-mist-deer',
    text: 'Cool, clear mornings and misty valleys. The safari season opens on 15 October, and winter migrant birds arrive on the reservoirs from November.',
    best: 'Trekking, birdwatching, safaris',
    href: PAGES.trekking.path,
  },
  {
    name: 'Summer',
    months: 'March – mid-June',
    image: 'palash-flowers-summer-ratapani',
    text: 'Palash flowers set the bare forest alight in spring. Leaves fall, water shrinks to a few pools and animals gather near them; middays are very hot.',
    best: 'Wildlife at water, early mornings only',
    href: SAFARI_SITE.bestTime,
    external: true,
  },
];

const WAYS = [
  {
    href: PAGES.trekking.path,
    marker: 'Walk',
    title: 'Trekking Near Bhopal',
    text: 'Ginnorgarh Fort, the Bhimbetka hill walk and forest trails at Kathotiya and Kerwa, with what is allowed where.',
    image: 'trekking-near-bhopal-ratapani-hilltop',
  },
  {
    href: PAGES.birdwatching.path,
    marker: 'Watch',
    title: 'Birdwatching in Ratapani',
    text: 'The best birding spots, a 12-bird field guide, a month-by-month calendar and a printable checklist.',
    image: 'birdwatching-near-bhopal-paradise-flycatcher',
  },
  {
    href: PAGES.monsoon.path,
    marker: 'Wander',
    title: 'Ratapani in Monsoon',
    text: 'What is open in the rains, the best monsoon places near Bhopal and a one-day plan from the city.',
    image: 'ratapani-forest-reservoir-aerial',
  },
];

const MANNERS = [
  ['Stay on marked paths and routes', 'Inside the reserve, go only where the Forest Department allows, with a guide.'],
  ['Carry every wrapper home', 'There are no bins in the forest. Plastic ends up in stomachs and streams.'],
  ['Keep it quiet', 'No music or speakers. You will hear far more birds, and animals will stay calm.'],
  ['Never feed wildlife', 'Fed langurs and boar become aggressive and are drawn to roads.'],
  ['Leave stones, flowers and feathers', 'Photograph them instead. Never touch or wet rock paintings.'],
  ['No fires, no smoking', 'In the dry months a single spark can burn a hillside.'],
  ['Be out before dark', 'Protected areas close at sunset; dusk is when big cats move.'],
];

const FAQS = [
  {
    q: 'Where is the Ratapani forest?',
    a: 'The Ratapani forest lies in the Vindhya hills of Raisen and Sehore districts, Madhya Pradesh, south-east of Bhopal. Its main entry points are 34 to 52 km from Bhopal railway station, so it is the closest large wilderness to the city.',
  },
  {
    q: 'Is Ratapani a tiger reserve or a wildlife sanctuary?',
    a: 'Both. Ratapani was declared a wildlife sanctuary in 1976 and notified as Ratapani Tiger Reserve on 2 December 2024. The tiger reserve covers about 1,271 km², with a core zone and a buffer zone.',
  },
  {
    q: 'Can you walk or trek inside the Ratapani forest?',
    a: 'Not freely. Ratapani is tiger habitat, and walking off the safari routes needs Forest Department permission and a guide. Ginnorgarh Fort can be visited on foot with permission, Bhimbetka has its own walking path, and forest trails at Kathotiya and Kerwa near Bhopal are popular for treks.',
  },
  {
    q: 'What is the best time to visit the Ratapani forest?',
    a: 'October to February is best for walking and birdwatching, with cool mornings and winter migrant birds. July to September is the greenest time, but core safari zones are closed. March to June is hot, but animals gather at the few remaining pools.',
  },
  {
    q: 'What animals and birds live in Ratapani?',
    a: 'Ratapani has tigers, leopards, sloth bears, dholes, sambar, chital and nilgai, and the Madhya Pradesh Forest Department records 249 bird species, including the Indian paradise flycatcher, crested serpent eagle and white-rumped vulture.',
  },
  {
    q: 'Is Bhimbetka part of the Ratapani forest?',
    a: 'Yes. The Bhimbetka rock shelters, a UNESCO World Heritage Site, lie within the Ratapani forest about 45 km from Bhopal, and the reserve has a Bhimbetka gate. The rock shelters themselves are managed by the Archaeological Survey of India.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'WebPage' })} />

      {/* Hero */}
      <section className="paper-grain relative overflow-hidden">
        <div className="container-site grid grid-cols-1 items-end gap-10 pb-14 pt-28 md:pt-36 lg:grid-cols-12 lg:gap-12 lg:pb-20">
          <div className="hero-in lg:col-span-6">
            <Marker>Vindhya hills · 35 km from Bhopal</Marker>
            <h1 className="font-display text-[2.6rem] leading-[1.08] text-ink sm:text-[3.4rem] lg:text-[4.1rem]">
              Ratapani Forest: A Wilderness Near Bhopal
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Sandstone cliffs, teak and bamboo, monsoon streams and 249 kinds of birds, a short drive from the city. A field guide to walking, watching and wandering in Ratapani.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={PAGES.trekking.path} className="btn-moss">
                Explore the trails <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href="#seasons" className="btn-outline">
                See the seasons
              </a>
            </div>
            <p className="mt-8 font-hand text-2xl text-earth">the wild heart of the Vindhyas</p>
          </div>
          <div className="relative lg:col-span-6">
            <Plate
              image="ratapani-forest-vindhya-hills-sunrise"
              fig="1"
              caption="Morning mist over the Vindhya hills, Ratapani"
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              ratio="aspect-[4/3]"
            />
            <Moon className="absolute -top-10 right-4 hidden h-16 w-24 text-sand md:block" />
          </div>
        </div>
        <TrailLine className="pointer-events-none absolute bottom-0 left-0 h-12 w-full text-sand/60" />
      </section>

      {/* Answer */}
      <section aria-labelledby="what-is" className="border-y border-rule bg-paper-card">
        <div className="container-site grid grid-cols-1 gap-10 py-16 md:py-20 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <Marker>Field definition</Marker>
            <h2 id="what-is" className="font-display text-[2rem] leading-tight text-ink md:text-display-md">
              What Is the Ratapani Wilderness?
            </h2>
            <div data-speakable className="prose-field mt-5">
              <p>
                <strong>Ratapani is a forest of teak, bamboo and Vindhya sandstone south-east of Bhopal, in Madhya Pradesh’s Raisen and Sehore districts.</strong> Protected as a wildlife sanctuary since 1976 and as Ratapani Tiger Reserve since December 2024, it covers about 1,271 km² of hills, gorges, streams and reservoirs.
              </p>
              <p>
                It is home to tigers and leopards, 249 recorded bird species and the prehistoric Bhimbetka rock shelters. For people in Bhopal it is the nearest true wilderness: a place to trek, birdwatch and watch the seasons change, not only to go on safari.
              </p>
            </div>
          </div>
          <div className="reveal flex items-center lg:col-span-5" style={{ '--reveal-delay': '120ms' }}>
            <FieldNote sign={`Ratapani · ${SITE.geo.lat}° N, ${SITE.geo.lng}° E`}>
              “Wilderness is land where nature, not people, sets the rhythm. In Ratapani that rhythm is the monsoon.”
            </FieldNote>
          </div>
        </div>
        <div className="container-site pb-14">
          <QuickFacts
            items={[
              ['Area', '1,271 km²', 'Tiger reserve, core + buffer'],
              ['From Bhopal', '34–52 km', 'To the reserve’s gates'],
              ['Forest', 'Teak & bamboo', 'Teak ~55%, bamboo ~25%'],
              ['Bird species', '249', 'MP Forest Department'],
            ]}
          />
        </div>
      </section>

      {/* Four layers */}
      <section aria-labelledby="layers" className="contour py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            marker="Four chapters"
            title="Four Layers of the Ratapani Forest"
            intro="Read Ratapani like a naturalist’s notebook: from the ancient rock underfoot to the birds and stars overhead."
            id="layers"
          />
          <div className="space-y-20 md:space-y-28">
            {LAYERS.map((l, i) => (
              <article key={l.n} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <div className={`reveal relative lg:col-span-6 ${i % 2 ? 'lg:order-2' : ''}`}>
                  <Plate image={l.image} fig={i + 2} caption={l.caption} sizes="(min-width: 1024px) 45vw, 92vw" />
                  <p className={`absolute -top-4 z-10 hidden max-w-[15rem] rotate-[-2deg] border border-rule bg-paper-note px-3 py-1 font-hand text-xl leading-tight text-earth md:block ${i % 2 ? 'left-6' : 'right-6'}`}>
                    {l.note}
                  </p>
                </div>
                <div className={`reveal lg:col-span-6 ${i % 2 ? 'lg:order-1' : ''}`} style={{ '--reveal-delay': '100ms' }}>
                  <div className="flex items-start justify-between gap-6">
                    <Marker>
                      {l.n} / {l.topic}
                    </Marker>
                    <l.Sketch className="-mt-4 h-14 w-14 shrink-0 text-sand" />
                  </div>
                  <h3 className="font-display text-[1.75rem] leading-tight text-ink md:text-[2.1rem]">{l.title}</h3>
                  <div className="prose-field mt-5">
                    {l.text.map((t) => (
                      <p key={t.slice(0, 20)}>{t}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mt-16 max-w-3xl text-ink-soft">
            Want the history behind the rock shelters? Read this{' '}
            <a href={SAFARI_SITE.bhimbetka} className="link">
              guide to the Bhimbetka rock shelters
            </a>
            .
          </p>
        </div>
      </section>

      {/* Seasons */}
      <section id="seasons" aria-labelledby="seasons-title" className="border-y border-rule bg-paper-deep py-20 md:py-24">
        <div className="container-site">
          <SectionHead
            marker="Phenology"
            title="Ratapani Through the Year"
            intro="Ratapani is three different forests in one year. Choose your season by what you want to do."
            id="seasons-title"
          />
          <ol className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {SEASONS.map((s, i) => (
              <li key={s.name} className="reveal w-[82%] shrink-0 snap-start md:w-auto" style={{ '--reveal-delay': `${i * 100}ms` }}>
                <article className="flex h-full flex-col border border-rule bg-paper-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Img name={s.image} sizes="(min-width: 768px) 30vw, 80vw" />
                    <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-3 py-1 text-label font-semibold uppercase text-earth">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-label font-semibold uppercase text-lichen">{s.months}</p>
                    <h3 className="mt-1.5 font-display text-2xl text-ink">Ratapani in {s.name}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{s.text}</p>
                    <p className="mt-4 border-t border-dashed border-rule pt-3 text-[0.9375rem] text-earth">
                      <span className="font-semibold">Best for:</span> {s.best}
                    </p>
                    {s.external ? (
                      <a href={s.href} className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-moss hover:underline">
                        Month-by-month safari season <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    ) : (
                      <Link href={s.href} className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-moss hover:underline">
                        {s.name === 'Monsoon' ? 'Ratapani monsoon guide' : 'Winter trekking guide'} <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ways */}
      <section aria-labelledby="ways" className="py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            marker="Into the field"
            title="Ways to Experience the Wild Near Bhopal"
            intro="Beyond the jeep safari: three ways to spend a day in the Ratapani wilderness."
            id="ways"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WAYS.map((w, i) => (
              <Link
                key={w.href}
                href={w.href}
                className="reveal card-lift group flex flex-col border border-rule bg-paper-card"
                style={{ '--reveal-delay': `${i * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img name={w.image} sizes="(min-width: 768px) 30vw, 92vw" className="transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Marker>{`0${i + 1} / ${w.marker}`}</Marker>
                  <h3 className="font-display text-2xl text-ink group-hover:text-moss">{w.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{w.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-moss">
                    Open the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manners */}
      <section aria-labelledby="manners" className="border-t border-rule bg-paper-card py-20 md:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              marker="Field ethics"
              title="Forest Manners: How to Walk Lightly"
              intro="Ratapani is tiger country and a living home for wildlife and forest villages. Seven simple rules keep it that way."
              id="manners"
            />
            <FieldNote title="From the notebook" tilt="0.8deg" className="max-w-sm">
              Take only photographs, leave only footprints, and keep only memories.
            </FieldNote>
          </div>
          <ol className="lg:col-span-7">
            {MANNERS.map(([t, d], i) => (
              <li key={t} className="reveal flex gap-5 border-b border-rule py-5 first:border-t" style={{ '--reveal-delay': `${i * 60}ms` }}>
                <span className="font-display text-2xl text-sand">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-xl text-ink">{t}</h3>
                  <p className="mt-1 text-ink-soft">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Night */}
      <section aria-labelledby="night" className="night-sky relative overflow-hidden bg-night py-20 text-haze md:py-28">
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead
              light
              marker="After dark"
              title="Under Ratapani Skies"
              id="night"
            />
            <div className="reveal space-y-4 text-lg leading-relaxed">
              <p>
                When the jeeps leave, Ratapani changes shift. Nightjars call from the tracks, owlets whistle from the teak, and with no city glow the Milky Way rises over the sandstone on clear winter nights.
              </p>
              <p>
                Protected areas close at sunset, so never walk into the forest after dark. Watch the night from a permitted stay or village on the forest edge, with a red torch and a warm layer from November to February.
              </p>
            </div>
          </div>
          <div className="reveal flex justify-center lg:col-span-5">
            <Moon className="h-40 w-60 text-gold" />
          </div>
        </div>
      </section>

      {/* FAQ + sources */}
      <section className="py-20 md:py-28">
        <div className="container-site space-y-16">
          <Faq id="faq" title="Ratapani Forest FAQs" faqs={FAQS} />
          <div className="mx-auto max-w-3xl">
            <Sources
              items={[
                { label: 'MP Forest Department: Ratapani e-brochure (area, birds, gates, season)', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
                { label: 'Wikipedia: Ratapani Tiger Reserve (forest types, waterbodies)', url: 'https://en.wikipedia.org/wiki/Ratapani_Tiger_Reserve' },
                { label: 'UNESCO: Rock Shelters of Bhimbetka', url: 'https://whc.unesco.org/en/list/925/' },
                { label: 'The Hitavada: MP tiger reserve core zones closed 1 July – 30 September', url: 'https://thehitavada.com/Encyc/2021/7/5/Tiger-reserves-closed-till-Sep-30-buffer-area-to-remain-open.html' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
