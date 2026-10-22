import Link from 'next/link';
import { ArrowRight, Clock, Mountain, Route, Footprints } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { FAQS_TREKKING as FAQS } from '@/content/faqs';
import Checklist from '@/components/Checklist';
import { PageHero, SectionHead, AnswerBox, DoDont, Plate, FieldNote, Faq, Sources, NextPage, Table, Marker } from '@/components/ui';
import { PAGES, SAFARI_SITE, absoluteUrl } from '@/lib/site';
import { pageMetadata, webPageSchema, itemListSchema } from '@/lib/seo';

const META = {
  section: 'Trekking',
  title: 'Trekking Near Bhopal: Ratapani Treks & Nature Trails',
  description:
    'Trekking near Bhopal in the Ratapani forest: Ginnorgarh Fort trek, Bhimbetka hill walk, Kathotiya and Kerwa trails, with distances, difficulty and rules.',
  path: PAGES.trekking.path,
  keywords: ['trekking near Bhopal', 'Ratapani trek', 'Ginnorgarh fort trek', 'nature trails near Bhopal', 'hiking near Bhopal', 'one day trek from Bhopal'],
  image: 'trekking-near-bhopal-ratapani-hilltop',
};
export const metadata = pageMetadata(META);

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Trekking Near Bhopal', path: META.path },
];

const TREKS = [
  {
    id: 'ginnorgarh-fort-trek',
    title: 'Ginnorgarh Fort Trek from Delawadi',
    image: 'ginnorgarh-fort-trek-walls',
    caption: 'Fort walls swallowed by forest on the Ginnorgarh trail',
    stats: [
      [Route, 'From Bhopal', '≈ 60 km'],
      [Footprints, 'Walk', '≈ 2 km uphill each way'],
      [Clock, 'Time', '45–60 min each way'],
      [Mountain, 'Level', 'Moderate'],
    ],
    level: 3,
    text: [
      'The classic Ratapani trek climbs to Ginnorgarh, a ruined Gond hill fort on a rocky summit of about 700 m inside the tiger reserve. The walk starts from the end of the forest road on the Delawadi side and climbs roughly 2 km through teak and bamboo to gateways, palace walls and old water cisterns.',
      'From the top you look over an unbroken sea of forest, one of the best views near Bhopal. The fort is linked with Rani Kamlapati and Dost Mohammad Khan, the founder of Bhopal State.',
    ],
    rules: 'Inside the tiger reserve: Forest Department permission and a local guide are required. Ask at the Delawadi forest office.',
    note: 'start by 7 am; the climb is shadeless near the top',
  },
  {
    id: 'bhimbetka-hill-walk',
    title: 'Bhimbetka Hill Walk',
    image: 'bhimbetka-hill-walk-sunset',
    caption: 'Sandstone towers along the Bhimbetka walking route',
    stats: [
      [Route, 'From Bhopal', '≈ 45 km'],
      [Footprints, 'Walk', 'Marked path through the shelters'],
      [Clock, 'Time', '1.5–2 hours'],
      [Mountain, 'Level', 'Easy'],
    ],
    level: 1,
    text: [
      'The easiest wilderness walk near Bhopal follows the marked visitor path at the Bhimbetka rock shelters, a UNESCO World Heritage Site within the Ratapani forest. It winds between giant sandstone towers and overhangs painted by people over thousands of years.',
      'It is ideal for families and first-time walkers, and it is open every day from roughly sunrise to sunset. Go early for soft light and birdsong from the surrounding forest.',
    ],
    rules: 'Managed by the Archaeological Survey of India: buy a ticket at the gate, stay on the path and never touch the paintings.',
    note: 'look up: many paintings are on the ceilings',
    link: { href: SAFARI_SITE.bhimbetka, label: 'Bhimbetka rock shelters guide' },
  },
  {
    id: 'kathotiya-trek',
    title: 'Kathotiya Trek: Rock Shelters & Forest Trails',
    image: 'vindhya-sandstone-ridges-near-bhopal',
    caption: 'Sandstone ridges of the Vindhya hills near Bhopal',
    stats: [
      [Route, 'From Bhopal', '≈ 25 km'],
      [Footprints, 'Walk', 'Forest trails to rock shelters'],
      [Clock, 'Time', 'Half day'],
      [Mountain, 'Level', 'Easy to moderate'],
    ],
    level: 2,
    text: [
      'Kathotiya sits in the same Vindhya forest on Bhopal’s south-western edge, outside the tiger reserve. Its trails lead through dry forest to more than a hundred rock shelters with prehistoric paintings, a quieter alternative to Bhimbetka.',
      'It is one of the most popular trekking spots near Bhopal, with guided treks, mountain biking and, in season, rock climbing and rappelling run locally. After the rains, seasonal streams and small falls appear near the shelters.',
    ],
    rules: 'Go with an organised group or local guide; trails are not always signposted.',
    note: 'best after the rains, before the heat',
  },
  {
    id: 'kerwa-forest-trails',
    title: 'Kerwa Forest Trails Near Bhopal',
    image: 'sandstone-gorge-forest-stream',
    caption: 'A forest stream in a sandstone gorge, Vindhya hills',
    stats: [
      [Route, 'From Bhopal', '≈ 15 km'],
      [Footprints, 'Walk', 'Nature walks and longer treks'],
      [Clock, 'Time', '2–4 hours'],
      [Mountain, 'Level', 'Easy to strenuous'],
    ],
    level: 2,
    text: [
      'The forest around Kerwa Dam is the closest wild walking to the city. Gentle nature walks follow the forest edge, while a strenuous trek climbs to rock shelters with prehistoric paintings.',
      'It is also good birding country: MP Tourism lists the crested serpent eagle and brown fish owl among Kerwa’s birds. Leopards live here too, so never walk the forest without a guide.',
    ],
    rules: 'Do not swim in the reservoir; people have drowned there. Walk only with a guide.',
    note: 'closest trail to the city',
    link: { href: PAGES.birdwatching.path, label: 'Birdwatching near Bhopal', internal: true },
  },
];

const MONTHS = [
  ['Jan', 'good'], ['Feb', 'good'], ['Mar', 'fair'], ['Apr', 'avoid'], ['May', 'avoid'], ['Jun', 'avoid'],
  ['Jul', 'closed'], ['Aug', 'closed'], ['Sep', 'closed'], ['Oct', 'fair'], ['Nov', 'good'], ['Dec', 'good'],
];
const MONTH_STYLE = {
  good: ['bg-moss text-paper', 'Best: cool and clear'],
  fair: ['bg-moss-pale text-ink', 'Fine: early starts'],
  avoid: ['bg-[#EAD9C6] text-ink', 'Hot: before 9 am only'],
  closed: ['bg-paper-deep text-lichen', 'Monsoon: reserve treks closed, outside trails slippery'],
};


export default function TrekkingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(META),
          itemListSchema(
            'Treks near Bhopal in and around Ratapani',
            TREKS.map((t) => ({ '@type': 'TouristAttraction', name: t.title, url: absoluteUrl(`${META.path}#${t.id}`) }))
          ),
        ]}
      />
      <PageHero
        crumbs={CRUMBS}
        marker="01 / Trails & escarpments"
        title="Trekking Near Bhopal: Ratapani Treks & Trails"
        intro="Four ways to walk the Vindhya forest within an hour or two of Bhopal, from an easy rock-shelter path to a climb to a ruined hill fort, with what is allowed and when to go."
        image="trekking-near-bhopal-ratapani-hilltop"
        fig="1"
        caption="Forested ridges below the Ginnorgarh hilltop"
        note="every trail here starts before sunrise"
        actions={
          <>
            <a href="#treks" className="btn-moss">
              Compare the treks <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#checklist" className="btn-outline">
              Trekking checklist
            </a>
          </>
        }
        facts={[
          ['From Bhopal', '15–60 km', 'Kerwa to Ginnorgarh'],
          ['Difficulty', 'Easy – moderate', 'No technical climbing'],
          ['Best months', 'Nov – Feb', 'Early mornings'],
          ['Guide', 'Required', 'Inside the tiger reserve'],
        ]}
      />

      <div className="container-site py-16 md:py-20">
        <AnswerBox id="can-you-trek" title="Can You Trek in Ratapani?">
          <p>
            <strong>Yes, but only on permitted routes.</strong> Ratapani is a tiger reserve, so you cannot wander into the forest on your own. The Ginnorgarh Fort trek is possible with Forest Department permission and a guide, and the Bhimbetka rock shelters have a marked visitor path. Just outside the reserve, the forests at Kathotiya and Kerwa offer the most popular trekking near Bhopal.
          </p>
          <DoDont
            yes={['Guided treks with Forest Department permission', 'The marked path at Bhimbetka (ASI ticket)', 'Organised treks at Kathotiya and Kerwa', 'Early-morning walks, out before dusk']}
            no={['Walking into the core zone on your own', 'Night walks or camping inside the reserve', 'Music, drones or fires on the trail', 'Leaving the path to follow animals']}
          />
        </AnswerBox>
      </div>

      <section id="treks" aria-labelledby="glance" className="scroll-mt-24 pb-6">
        <div className="container-site">
          <SectionHead
            marker="Survey of routes"
            title="Ratapani Treks at a Glance"
            intro="Distances are approximate driving distances from central Bhopal."
            id="glance"
          />
          <Table caption="Treks near Bhopal compared" note="Access and timings can change. Confirm with the Forest Department or site office before you go.">
            <thead>
              <tr>
                <th scope="col">Trek</th>
                <th scope="col">Start point</th>
                <th scope="col">From Bhopal</th>
                <th scope="col">Walk</th>
                <th scope="col">Level</th>
                <th scope="col">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ginnorgarh Fort</td><td>Delawadi side, Ratapani</td><td>≈ 60 km</td><td>≈ 2 km uphill each way</td><td>Moderate</td><td>Views, history</td></tr>
              <tr><td>Bhimbetka hill walk</td><td>Bhimbetka (ASI site)</td><td>≈ 45 km</td><td>Marked path, 1.5–2 hrs</td><td>Easy</td><td>Rock art, families</td></tr>
              <tr><td>Kathotiya</td><td>Kathotiya forest</td><td>≈ 25 km</td><td>Trails to rock shelters</td><td>Easy – moderate</td><td>Rock shelters, groups</td></tr>
              <tr><td>Kerwa</td><td>Kerwa Dam forest</td><td>≈ 15 km</td><td>Nature walks to long treks</td><td>Easy – strenuous</td><td>Quick escapes, birds</td></tr>
            </tbody>
          </Table>
        </div>
      </section>

      <section aria-label="Trek guides" className="contour py-16 md:py-24">
        <div className="container-site space-y-20 md:space-y-28">
          {TREKS.map((t, i) => (
            <article key={t.id} id={t.id} aria-labelledby={`${t.id}-h`} className="scroll-mt-24 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
              <div className={`reveal relative lg:col-span-6 ${i % 2 ? 'lg:order-2' : ''}`}>
                <Plate image={t.image} fig={i + 2} caption={t.caption} sizes="(min-width: 1024px) 45vw, 92vw" />
                <p className={`absolute -top-4 z-10 hidden max-w-[15rem] rotate-[-2deg] border border-rule bg-paper-note px-3 py-1 font-hand text-xl leading-tight text-earth md:block ${i % 2 ? 'left-6' : 'right-6'}`}>
                  {t.note}
                </p>
              </div>
              <div className={`reveal lg:col-span-6 ${i % 2 ? 'lg:order-1' : ''}`} style={{ '--reveal-delay': '100ms' }}>
                <Marker>Transect 0{i + 1}</Marker>
                <h2 id={`${t.id}-h`} className="font-display text-[1.9rem] leading-tight text-ink md:text-[2.25rem]">
                  {t.title}
                </h2>
                <dl className="mt-6 grid grid-cols-2 gap-px border border-rule bg-rule">
                  {t.stats.map(([Icon, label, value]) => (
                    <div key={label} className="bg-paper-card p-4">
                      <dt className="flex items-center gap-2 text-label font-semibold uppercase text-lichen">
                        <Icon className="h-4 w-4 text-sand" aria-hidden />
                        {label}
                      </dt>
                      <dd className="mt-1 text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="prose-field mt-6">
                  {t.text.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <p className="mt-5 border-l-2 border-sand bg-paper-card px-4 py-3 text-[0.975rem] text-ink-soft">
                  <span className="font-semibold text-ink">Access: </span>
                  {t.rules}
                </p>
                {t.id === 'ginnorgarh-fort-trek' && (
                  <p className="mt-4 text-[0.975rem] text-ink-soft">
                    Read the full story of the fort in this{' '}
                    <a href={SAFARI_SITE.ginnorgarh} className="link">
                      Ginnorgarh Fort history guide
                    </a>
                    .
                  </p>
                )}
                {t.link &&
                  (t.link.internal ? (
                    <Link href={t.link.href} className="mt-4 inline-flex items-center gap-2 font-semibold text-moss hover:underline">
                      {t.link.label} <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  ) : (
                    <a href={t.link.href} className="mt-4 inline-flex items-center gap-2 font-semibold text-moss hover:underline">
                      {t.link.label} <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="best-time" className="border-y border-rule bg-paper-card py-16 md:py-24">
        <div className="container-site">
          <SectionHead
            marker="Trail calendar"
            title="Best Time for Trekking Near Bhopal"
            intro="Central India’s heat and monsoon decide the trekking season. Plan around these months."
            id="best-time"
          />
          <ol className="reveal grid grid-cols-4 gap-1.5 sm:grid-cols-6 lg:grid-cols-12">
            {MONTHS.map(([m, k]) => (
              <li key={m} className={`flex min-h-[72px] flex-col items-center justify-center ${MONTH_STYLE[k][0]}`}>
                <span className="font-display text-lg">{m}</span>
                <span className="sr-only">: {MONTH_STYLE[k][1]}</span>
              </li>
            ))}
          </ol>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem] text-ink-soft">
            {Object.entries(MONTH_STYLE).map(([k, [c, label]]) => (
              <li key={k} className="flex items-center gap-2">
                <span className={`h-3.5 w-3.5 ${c.split(' ')[0]} border border-rule`} aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="checklist" aria-labelledby="checklist-title" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead marker="Kit list" title="Trekking Checklist" intro="Tick items off as you pack, then print it for the car." id="checklist-title" />
            <FieldNote title="Safety in tiger country" tilt="0.6deg">
              Walk in a group behind your guide, talk softly, and turn back by early afternoon. If you meet an animal, stop, stay together and back away slowly. Never run.
            </FieldNote>
          </div>
          <div className="reveal lg:col-span-8">
            <Checklist
              id="trek"
              title="Ratapani trekking checklist"
              groups={[
                { title: 'Carry', items: ['2–3 litres of water per person', 'Snacks and fruit', 'Photo ID (for permits)', 'Small first-aid kit', 'Charged phone and power bank', 'Cloth bag to bring back litter'] },
                { title: 'Wear', items: ['Trekking shoes with grip', 'Full-length trousers', 'Earth-coloured clothes', 'Hat and sunscreen', 'Light layer for winter mornings', 'Insect repellent'] },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-site space-y-16">
          <Faq id="faq" title="Trekking Near Bhopal: FAQs" faqs={FAQS} />
          <NextPage
            href={PAGES.birdwatching.path}
            marker="Next in the journal"
            title="Birdwatching Near Bhopal"
            text="Bring binoculars on your trek: where to find Ratapani’s 249 bird species, and when."
            image="birdwatching-near-bhopal-paradise-flycatcher"
          />
          <div className="mx-auto max-w-3xl">
            <Sources
              items={[
                { label: 'MP Forest Department: Ratapani e-brochure (gates and distances)', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
                { label: 'MP Tourism: Ratapani, wilderness near Bhopal (Ginnorgarh, Kathotiya)', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
                { label: 'Outlook Traveller: Getaways near Bhopal (Kathotiya and Kerwa)', url: 'https://www.outlookindia.com/traveller/destinations/3-exciting-sylvan-getaways-near-bhopal/' },
                { label: 'MP Tourism: Birdwatching in Madhya Pradesh (Kerwa birds)', url: 'https://www.mptourism.com/birdwatching-in-madhya-pradesh.html' },
                { label: 'Wikipedia: Ginnorgarh', url: 'https://en.wikipedia.org/wiki/Ginnorgarh' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
