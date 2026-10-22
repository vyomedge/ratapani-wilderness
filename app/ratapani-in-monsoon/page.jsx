import Link from 'next/link';
import { ArrowRight, Droplets, Leaf, CloudFog, Bug, Car, Landmark, Coffee, Sunset, Home } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import Checklist from '@/components/Checklist';
import { Rain } from '@/components/Sketch';
import { PageHero, SectionHead, AnswerBox, DoDont, FieldNote, Faq, Sources, NextPage } from '@/components/ui';
import { PAGES, SAFARI_SITE, OFFICIAL_PORTAL } from '@/lib/site';
import { pageMetadata, webPageSchema, itemListSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani in Monsoon: Rainy Season Trip Near Bhopal',
  description:
    'Ratapani in monsoon: what is open and closed from July to September, the best monsoon places near Bhopal, a one-day plan, safety tips and a packing list.',
  path: PAGES.monsoon.path,
  keywords: ['Ratapani in monsoon', 'monsoon trip near Bhopal', 'monsoon places near Bhopal', 'Ratapani in rainy season', 'places to visit near Bhopal in monsoon'],
  image: 'ratapani-in-monsoon-green-hills',
};
export const metadata = pageMetadata(META);

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Ratapani in Monsoon', path: META.path },
];

const CHANGES = [
  [Droplets, 'Streams run again', 'Dry stream beds fill and summer pools join up into flowing water across the sandstone.'],
  [Leaf, 'The forest turns green', 'Teak and other deciduous trees, bare in May, leaf out within weeks of the first heavy rain.'],
  [CloudFog, 'Mist on the cliffs', 'Low cloud drifts over the Vindhya ridges, especially in the early morning.'],
  [Bug, 'Small life takes over', 'Frogs, insects and fungi appear everywhere, and the Indian pitta arrives to breed.'],
];

const PLACES = [
  {
    name: 'Bhimbetka Rock Shelters',
    image: 'bhimbetka-rock-shelters-monsoon',
    dist: '≈ 45 km from Bhopal',
    why: 'Open every day of the year. Rain darkens the sandstone, the forest around the shelters turns green, and crowds are thin.',
    tip: 'Paths are slippery after rain: wear shoes with grip.',
  },
  {
    name: 'Kolar Dam',
    image: 'kolar-reservoir-near-bhopal',
    dist: 'West of Ratapani, Sehore district',
    why: 'The reservoir that supplies much of Bhopal’s water fills up in the rains, ringed by green Vindhya hills.',
    tip: 'Enjoy the views from the road; keep away from spillways and the water’s edge.',
  },
  {
    name: 'Kathotiya',
    image: 'vindhya-sandstone-ridges-near-bhopal',
    dist: '≈ 25 km from Bhopal',
    why: 'Forest trails and prehistoric rock shelters, with seasonal streams and small falls after heavy rain.',
    tip: 'Go with a local guide; do not cross flowing streams.',
  },
  {
    name: 'Kerwa',
    image: 'sandstone-gorge-forest-stream',
    dist: '≈ 15 km from Bhopal',
    why: 'The closest monsoon green to the city: forest, a reservoir and short nature walks.',
    tip: 'Never swim in the reservoir.',
  },
  {
    name: 'Ratapani forest drive (NH-46)',
    image: 'ratapani-forest-reservoir-aerial',
    dist: 'Bhopal – Obaidullaganj and beyond',
    why: 'The highway south of Bhopal skirts the reserve, with green hills on both sides through the monsoon.',
    tip: 'Drive by daylight and watch for animals crossing.',
  },
];

const TIMELINE = [
  ['6:30 am', Car, 'Leave Bhopal', 'Take NH-46 south towards Obaidullaganj while the roads are quiet and the hills are misty.'],
  ['7:45 am', Landmark, 'Bhimbetka rock shelters', 'Walk the shelters in soft light. Allow 1.5–2 hours.'],
  ['10:00 am', Coffee, 'Breakfast break', 'Chai and poha at a dhaba near Obaidullaganj.'],
  ['11:00 am', Leaf, 'Forest-edge drive', 'Drive slowly along the green forest edge on the highway; stop only at safe pull-offs.'],
  ['2:30 pm', Sunset, 'Kolar or Kerwa viewpoint', 'Head back by the western side for reservoir views in the afternoon.'],
  ['5:30 pm', Home, 'Back in Bhopal', 'Home before dark, when roads and forest edges are least safe.'],
];

const FAQS = [
  {
    q: 'Is Ratapani open in monsoon?',
    a: 'Partly. In Madhya Pradesh, the core zones of tiger reserves close to visitors from 1 July to 30 September, while buffer areas may stay open in a restricted manner. Ratapani’s official safari season runs from 15 October to 15 June. The Bhimbetka rock shelters stay open every day of the year.',
  },
  {
    q: 'Can I do a Ratapani safari in the rainy season?',
    a: 'Regular core-zone safaris do not run in the monsoon. If any buffer-zone safaris are offered, they will be listed on the official MP Forest booking portal, so check there before you travel.',
  },
  {
    q: 'Is Bhimbetka open in the rainy season?',
    a: 'Yes. The Bhimbetka rock shelters, managed by the Archaeological Survey of India, are open daily from about sunrise to sunset throughout the year. The paths can be slippery after rain.',
  },
  {
    q: 'What are the best monsoon places near Bhopal?',
    a: 'Around Ratapani, the best monsoon outings from Bhopal are the Bhimbetka rock shelters, the green highway drive towards Obaidullaganj, the Kolar Dam area, and the forests at Kathotiya and Kerwa.',
  },
  {
    q: 'Are there waterfalls in Ratapani?',
    a: 'Ratapani has no well-known waterfall that is open to visitors. Seasonal streams run over the sandstone after heavy rain, and Kathotiya, about 25 km from Bhopal, is known for small seasonal falls near its rock shelters. Never enter closed forest areas to look for them.',
  },
  {
    q: 'Is it safe to visit Ratapani in monsoon?',
    a: 'Yes, if you stay in open, public places. Avoid crossing flowing streams, keep off wet rock edges, watch for snakes in long grass, shelter from lightning and drive only in daylight. Do not enter closed forest zones.',
  },
];

export default function MonsoonPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(META),
          itemListSchema(
            'Monsoon places near Bhopal around Ratapani',
            PLACES.map((p) => ({ '@type': 'TouristAttraction', name: p.name, description: p.why }))
          ),
        ]}
      />
      <PageHero
        crumbs={CRUMBS}
        marker="03 / The resurgence"
        title="Ratapani in Monsoon: A Rainy-Season Trip Near Bhopal"
        intro="When the rains arrive in mid-June, the bare forest turns green in weeks. What is open, where to go and how to stay safe on a monsoon trip from Bhopal."
        image="ratapani-in-monsoon-green-hills"
        fig="1"
        caption="Rain clouds over the green Vindhya hills"
        note="the forest drinks, then explodes"
        actions={
          <>
            <a href="#open" className="btn-moss">
              What’s open <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#one-day" className="btn-outline">
              One-day plan
            </a>
          </>
        }
        facts={[
          ['Rains arrive', 'Mid-June', 'Second week, usually'],
          ['Core zones', 'Closed', '1 July – 30 September'],
          ['Open', 'Bhimbetka & viewpoints', 'Every day'],
          ['Best for', 'Greenery & mist', 'Photography, drives'],
        ]}
      />

      <div id="open" className="container-site scroll-mt-24 py-16 md:py-20">
        <AnswerBox id="is-it-open" title="Is Ratapani Open in Monsoon?">
          <p>
            <strong>Partly.</strong> In Madhya Pradesh, the core zones of tiger reserves close to visitors from 1 July to 30 September, and buffer areas may stay open in a restricted manner. Ratapani’s official safari season is 15 October to 15 June. The Bhimbetka rock shelters, scenic drives and reservoir viewpoints stay open, so the monsoon is a season for green landscapes rather than tiger safaris.
          </p>
          <DoDont
            yesTitle="Open in monsoon"
            noTitle="Closed or unsafe"
            yes={['Bhimbetka rock shelters (ASI, daily)', 'Highway drives along the forest edge', 'Kolar and Kerwa reservoir viewpoints', 'Any buffer safaris listed on the official portal']}
            no={['Core-zone safaris (1 July – 30 September)', 'Treks inside the reserve, incl. Ginnorgarh', 'Crossing flooded streams or causeways', 'Driving forest roads after dark']}
          />
          <p className="!mt-6 text-[0.95rem]">
            Check current openings on the{' '}
            <a href={OFFICIAL_PORTAL} target="_blank" rel="noopener noreferrer" className="link">
              official MP Forest booking portal
            </a>{' '}
            or see{' '}
            <a href={SAFARI_SITE.bestTime} className="link">
              when Ratapani safaris run each month
            </a>
            .
          </p>
        </AnswerBox>
      </div>

      <section aria-labelledby="changes" className="contour pb-16 md:pb-24">
        <div className="container-site">
          <div className="flex items-start justify-between gap-6">
            <SectionHead
              marker="Hydrological rhythm"
              title="What Changes When the Rains Arrive"
              intro="The monsoon is when Ratapani is most alive, even if it is hardest to enter."
              id="changes"
            />
            <Rain className="reveal hidden h-24 w-32 shrink-0 text-sand md:block" />
          </div>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CHANGES.map(([Icon, t, d], i) => (
              <li key={t} className="reveal border border-rule bg-paper-card p-6" style={{ '--reveal-delay': `${i * 90}ms` }}>
                <span className="font-body text-marker font-semibold text-earth">0{i + 1}</span>
                <Icon className="mt-4 h-8 w-8 text-moss" aria-hidden />
                <h3 className="mt-4 font-display text-xl text-ink">{t}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="places" className="border-y border-rule bg-paper-deep py-16 md:py-24">
        <div className="container-site">
          <SectionHead
            marker="Monsoon field sites"
            title="Monsoon Places Near Bhopal Around Ratapani"
            intro="Five rainy-season outings that are open, green and within easy reach of the city."
            id="places"
          />
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PLACES.map((p, i) => (
              <li key={p.name} className="reveal card-lift flex flex-col border border-rule bg-paper-card" style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Img name={p.image} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-label font-semibold uppercase text-lichen">{p.dist}</p>
                  <h3 className="mt-1.5 font-display text-[1.4rem] leading-tight text-ink">{p.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.why}</p>
                  <p className="mt-4 border-t border-dashed border-rule pt-3 font-hand text-xl leading-snug text-earth">{p.tip}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="one-day" aria-labelledby="plan" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              marker="Itinerary"
              title="One-Day Monsoon Trip from Bhopal"
              intro="A relaxed loop that keeps you in open places and gets you home before dark."
              id="plan"
            />
            <FieldNote title="Weather check" tilt="-1deg" className="max-w-sm">
              If it has rained hard overnight, skip the forest roads and go straight to Bhimbetka. Streams rise fast.
            </FieldNote>
          </div>
          <ol className="relative lg:col-span-7">
            <span className="absolute bottom-6 left-[1.35rem] top-6 border-l-2 border-dashed border-sand/60" aria-hidden />
            {TIMELINE.map(([time, Icon, t, d], i) => (
              <li key={time} className="reveal relative flex gap-5 pb-8 last:pb-0" style={{ '--reveal-delay': `${i * 70}ms` }}>
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rule bg-paper-card text-moss">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="pt-1">
                  <p className="text-label font-semibold uppercase text-earth">{time}</p>
                  <h3 className="mt-1 font-display text-xl text-ink">{t}</h3>
                  <p className="mt-1 text-ink-soft">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="safety" className="night-sky bg-night py-16 text-haze md:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead light marker="Field protocols" title="Monsoon Safety Tips" intro="The rains make the forest beautiful and unpredictable." id="safety" />
          </div>
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:col-span-7">
            {[
              ['Never cross flowing water', 'Streams and causeways can rise within minutes after upstream rain.'],
              ['Stay off wet rock edges', 'Sandstone with moss or algae is very slippery.'],
              ['Watch your step', 'Snakes, including cobras, kraits and vipers, are active in the rains. Avoid long grass.'],
              ['Shelter from lightning', 'Move off exposed ridges and away from lone trees during storms.'],
              ['Drive by daylight', 'Expect potholes, waterlogging and animals crossing near the forest.'],
              ['Respect closures', 'Closed zones protect breeding wildlife and keep you out of danger.'],
            ].map(([t, d], i) => (
              <li key={t} className="reveal border-b border-mist/10 py-5" style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}>
                <h3 className="font-display text-xl text-mist">{t}</h3>
                <p className="mt-1">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="packing" aria-labelledby="packing-title" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-site">
          <SectionHead marker="Kit list" title="What to Pack for Ratapani in Monsoon" intro="Tick items off as you pack, or print the list." id="packing-title" />
          <div className="reveal">
            <Checklist
              id="monsoon"
              title="Monsoon day-trip checklist"
              groups={[
                { title: 'Rain gear', items: ['Rain jacket or poncho', 'Quick-dry clothes', 'Shoes with good grip', 'Spare socks', 'Dry bag or plastic cover for phone'] },
                { title: 'Health & safety', items: ['Insect repellent', 'Small first-aid kit', 'Drinking water', 'Torch', 'Charged phone and power bank'] },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-site space-y-16">
          <Faq id="faq" title="Ratapani Monsoon FAQs" faqs={FAQS} />
          <NextPage
            href={PAGES.trekking.path}
            marker="When the rains end"
            title="Trekking Near Bhopal"
            text="Trekking season opens as the forest dries out. Plan your first winter trek in Ratapani."
            image="trekking-near-bhopal-ratapani-hilltop"
          />
          <p className="text-center text-ink-soft">
            Or go back to the{' '}
            <Link href="/" className="link">
              Ratapani forest field guide
            </Link>
            .
          </p>
          <div className="mx-auto max-w-3xl">
            <Sources
              items={[
                { label: 'The Hitavada: MP tiger reserve core areas closed till 30 September, buffer open', url: 'https://thehitavada.com/Encyc/2021/7/5/Tiger-reserves-closed-till-Sep-30-buffer-area-to-remain-open.html' },
                { label: 'MP Forest Department: Ratapani e-brochure (season, monsoon arrival)', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
                { label: 'MP Tourism: Birdwatching in Madhya Pradesh (Indian pitta in monsoon)', url: 'https://www.mptourism.com/birdwatching-in-madhya-pradesh.html' },
                { label: 'Outlook Traveller: Getaways near Bhopal (Kathotiya waterfalls, Kerwa)', url: 'https://www.outlookindia.com/traveller/destinations/3-exciting-sylvan-getaways-near-bhopal/' },
                { label: 'Wikipedia: Ratapani Tiger Reserve (reptiles)', url: 'https://en.wikipedia.org/wiki/Ratapani_Tiger_Reserve' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
