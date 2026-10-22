import { ArrowRight, Binoculars, Footprints, Smartphone, VolumeX, Shirt, Sunrise } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { FAQS_BIRDWATCHING as FAQS } from '@/content/faqs';
import BirdGuide from '@/components/BirdGuide';
import Checklist from '@/components/Checklist';
import { Feather } from '@/components/Sketch';
import { PageHero, SectionHead, AnswerBox, Plate, FieldNote, Faq, Sources, NextPage } from '@/components/ui';
import { PAGES, SAFARI_SITE } from '@/lib/site';
import { pageMetadata, webPageSchema, itemListSchema } from '@/lib/seo';

const META = {
  section: 'Birdwatching',
  title: 'Birdwatching Near Bhopal: Birds of Ratapani & Best Spots',
  description:
    'Birdwatching near Bhopal: 249 bird species in Ratapani, the best birding spots, a 12-bird field guide, a month-by-month calendar and a printable checklist.',
  path: PAGES.birdwatching.path,
  keywords: ['birdwatching near Bhopal', 'birds of Ratapani', 'Ratapani bird checklist', 'bird watching spots Bhopal', 'migratory birds Bhopal'],
  image: 'birdwatching-near-bhopal-paradise-flycatcher',
};
export const metadata = pageMetadata(META);

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Birdwatching Near Bhopal', path: META.path },
];

const SPOTS = [
  {
    name: 'Ratapani Dam & Barna Reservoir',
    image: 'ratapani-dam-reservoir-evening',
    habitat: 'Reservoir · inside the reserve',
    text: 'The forest’s two largest waterbodies draw kingfishers, herons and, in winter, ducks. Inside the reserve they are seen only on permitted safari routes or from public roads nearby.',
    look: 'Kingfishers, egrets, winter ducks',
  },
  {
    name: 'Jhiri & Delawadi safari routes',
    image: 'ratapani-teak-forest-trees',
    habitat: 'Teak & bamboo forest',
    text: 'A morning safari is the only way to bird the reserve’s core. You stay in the vehicle, so a forest guide who knows the calls makes all the difference.',
    look: 'Paradise flycatcher, drongos, peafowl, raptors',
    href: SAFARI_SITE.booking,
    hrefLabel: 'How to book a Ratapani safari',
  },
  {
    name: 'Bhimbetka rock shelters',
    image: 'bhimbetka-rock-shelters-monsoon',
    habitat: 'Rocky scrub & forest edge',
    text: 'Open every day, so it is the easiest place to bird on foot in Ratapani. Arrive at opening time and walk slowly between the sandstone towers.',
    look: 'Indian roller, coucal, barbets, bulbuls',
  },
  {
    name: 'Kerwa & Kolar reservoirs',
    image: 'kolar-reservoir-near-bhopal',
    habitat: 'Forest-edge reservoirs west of Ratapani',
    text: 'Forested reservoirs on Bhopal’s edge. MP Tourism lists the crested serpent eagle and brown fish owl among the birds at Kerwa.',
    look: 'Crested serpent eagle, brown fish owl',
  },
  {
    name: 'Bhoj Wetland (Upper Lake), Bhopal',
    image: 'ratapani-forest-reservoir-aerial',
    habitat: 'Ramsar wetland in the city',
    text: 'For winter migrants, start in Bhopal itself. In winter the lake hosts bar-headed geese, red-crested pochards and Eurasian spoonbills.',
    look: 'Bar-headed goose, pochards, spoonbills',
  },
];

const GROUPS = ['Forest birds', 'Raptors & owls', 'Winter visitors'];

const BIRDS = [
  { name: 'Indian Paradise Flycatcher', latin: 'Terpsiphone paradisi', hindi: 'Dudhraj', group: 'Forest birds', image: 'indian-paradise-flycatcher-stream', text: 'Madhya Pradesh’s state bird. Adult males trail white or rufous tail ribbons longer than their body.', where: 'shady streams and thick forest' },
  { name: 'Indian Peafowl', latin: 'Pavo cristatus', hindi: 'Mor', group: 'Forest birds', image: 'indian-peafowl-ratapani-forest', text: 'India’s national bird. Its loud calls at dawn and dusk often warn of a predator nearby.', where: 'forest clearings and track edges' },
  { name: 'Indian Roller', latin: 'Coracias benghalensis', hindi: 'Neelkanth', group: 'Forest birds', text: 'Dull brown when perched, then a flash of electric blue in flight. Listed as “blue jay” in older Ratapani records.', where: 'wires and bare branches in open country' },
  { name: 'Black Drongo', latin: 'Dicrurus macrocercus', hindi: 'Kotwal', group: 'Forest birds', text: 'Glossy black with a deep forked tail; a fearless “policeman” that chases crows and raptors.', where: 'perches near grazing animals' },
  { name: 'Coppersmith Barbet', latin: 'Psilopogon haemacephalus', hindi: 'Chhota basanta', group: 'Forest birds', text: 'A tiny green barbet whose metallic “tuk-tuk-tuk” sounds like a coppersmith at work.', where: 'fruiting fig trees' },
  { name: 'Greater Coucal', latin: 'Centropus sinensis', hindi: 'Mahoka', group: 'Forest birds', text: 'A large black-and-chestnut cuckoo, called “crow pheasant”, with a deep booming call.', where: 'thickets and undergrowth' },
  { name: 'Indian Pitta', latin: 'Pitta brachyura', hindi: 'Navrang', group: 'Forest birds', text: 'Nine colours on one small bird. MP Tourism names the monsoon as the best time to see it.', where: 'leaf litter on the forest floor, July–September' },
  { name: 'Crested Serpent Eagle', latin: 'Spilornis cheela', group: 'Raptors & owls', image: 'crested-serpent-eagle-ratapani', text: 'A forest eagle that hunts snakes and lizards. Its ringing whistle carries over the canopy.', where: 'soaring over the forest at mid-morning' },
  { name: 'White-rumped Vulture', latin: 'Gyps bengalensis', hindi: 'Gidh', group: 'Raptors & owls', image: 'white-rumped-vulture-ratapani', text: 'Critically endangered across India and recorded in Ratapani (as “Bengal vulture”).', where: 'tall trees and cliff ledges' },
  { name: 'Brown Fish Owl', latin: 'Ketupa zeylonensis', group: 'Raptors & owls', image: 'brown-fish-owl-ratapani', text: 'A big ear-tufted owl that hunts fish and frogs at night and roosts in shady gorges by day.', where: 'pools in shaded ravines' },
  { name: 'White Wagtail', latin: 'Motacilla alba', hindi: 'Khanjan', group: 'Winter visitors', text: 'A slim black, white and grey bird that wags its tail constantly; a winter visitor named in Ratapani’s bird list.', where: 'muddy reservoir edges, November–March' },
  { name: 'Bar-headed Goose', latin: 'Anser indicus', group: 'Winter visitors', text: 'Crosses the Himalaya to winter in India. MP Tourism lists it on Bhopal’s Bhoj Wetland in winter.', where: 'Upper Lake, Bhopal, in winter' },
];

const CAL_MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const CALENDAR = [
  ['Resident forest birds', [3, 3, 2, 2, 1, 1, 1, 1, 2, 3, 3, 3], 'All year; best on cool mornings'],
  ['Winter migrants', [3, 3, 2, 0, 0, 0, 0, 0, 0, 1, 3, 3], 'Peak November – March'],
  ['Monsoon specials (Indian pitta)', [0, 0, 0, 0, 0, 1, 3, 3, 3, 0, 0, 0], 'July – September'],
];
const HEAT = ['bg-paper-deep', 'bg-moss-pale', 'bg-[#9FB08F]', 'bg-moss'];
const HEAT_LABEL = ['rare or absent', 'some', 'good', 'best'];

const TIPS = [
  [Sunrise, 'Start at first light', 'Birds are most active in the first three hours after sunrise.'],
  [Binoculars, 'Use 8x42 binoculars', 'Bright and wide enough for dim forest light.'],
  [VolumeX, 'Move slowly, stay quiet', 'Stop often and listen; most birds are heard before they are seen.'],
  [Shirt, 'Wear earth colours', 'Olive, brown and khaki. Avoid white and bright colours.'],
  [Smartphone, 'Record with eBird or Merlin', 'Free apps to identify calls and log sightings for science.'],
  [Footprints, 'Keep your distance', 'Never chase birds or use call playback near nests.'],
];


export default function BirdwatchingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(META),
          itemListSchema(
            'Birds of Ratapani: field guide',
            BIRDS.map((b) => ({ '@type': 'Thing', name: b.name, alternateName: b.latin, description: b.text }))
          ),
        ]}
      />
      <PageHero
        crumbs={CRUMBS}
        marker="02 / Canopy & wetland"
        title="Birdwatching Near Bhopal: Birds of Ratapani"
        intro="249 recorded species in teak forest, sandstone cliffs and reservoirs, an hour from Bhopal. Where to go, what to look for and when, with a printable checklist."
        image="birdwatching-near-bhopal-paradise-flycatcher"
        fig="1"
        caption="Indian paradise flycatcher, Madhya Pradesh’s state bird"
        note="dudhraj: the milk king"
        actions={
          <>
            <a href="#field-guide" className="btn-moss">
              Open the field guide <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#bird-checklist" className="btn-outline">
              Printable checklist
            </a>
          </>
        }
        facts={[
          ['Bird species', '249', 'Recorded in Ratapani'],
          ['Best season', 'Nov – Mar', 'Winter migrants'],
          ['Best hours', 'Sunrise + 3 hrs', 'Most active'],
          ['Habitats', 'Forest, cliffs, water', 'Plus Bhopal’s lakes'],
        ]}
      />

      <div className="container-site py-16 md:py-20">
        <AnswerBox id="why-ratapani" title="Why Ratapani Is Great for Birdwatching">
          <p>
            <strong>Ratapani packs several habitats into a short drive from Bhopal:</strong> teak and bamboo forest, sandstone cliffs and gorges, streams and large reservoirs such as Ratapani Dam and Barna. That mix supports 249 recorded bird species, from forest birds like the Indian paradise flycatcher to raptors such as the crested serpent eagle and the critically endangered white-rumped vulture.
          </p>
          <p>
            Add Bhopal’s own Bhoj Wetland for winter waterbirds, and you can see forest, cliff and wetland birds in a single weekend.
          </p>
        </AnswerBox>
      </div>

      <section aria-labelledby="spots" className="contour pb-16 md:pb-24">
        <div className="container-site">
          <SectionHead
            marker="Survey sites"
            title="Best Birdwatching Spots In and Around Ratapani"
            intro="Five places to bird within about an hour of Bhopal, from forest safaris to the city’s lake."
            id="spots"
          />
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SPOTS.map((s, i) => (
              <li key={s.name} className="reveal flex flex-col border border-rule bg-paper-card p-3" style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}>
                <Plate image={s.image} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw" ratio="aspect-[16/10]" className="!border-0 !p-0" />
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <p className="text-label font-semibold uppercase text-lichen">{s.habitat}</p>
                  <h3 className="mt-1.5 font-display text-[1.4rem] leading-tight text-ink">{s.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{s.text}</p>
                  <p className="mt-4 border-t border-dashed border-rule pt-3 text-[0.9rem] text-earth">
                    <span className="font-semibold">Look for:</span> {s.look}
                  </p>
                  {s.href && (
                    <a href={s.href} className="mt-3 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-moss hover:underline">
                      {s.hrefLabel} <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                </div>
              </li>
            ))}
            <li className="reveal flex items-center justify-center p-4">
              <FieldNote title="Scribe log" tilt="1deg">
                At dawn the drongo calls first, then the peafowl, then everyone else. Be on the trail before the drongo.
              </FieldNote>
            </li>
          </ul>
        </div>
      </section>

      <section id="field-guide" aria-labelledby="birds" className="scroll-mt-24 border-y border-rule bg-paper-deep py-16 md:py-24">
        <div className="container-site">
          <div className="flex items-start justify-between gap-6">
            <SectionHead
              marker="Specimen folio"
              title="Birds of Ratapani: A Field Guide"
              intro="Twelve birds to start your Ratapani list, all named in Forest Department, Wikipedia or MP Tourism records for Ratapani and Bhopal."
              id="birds"
            />
            <Feather className="reveal hidden h-28 w-14 shrink-0 text-sand md:block" />
          </div>
          <BirdGuide birds={BIRDS} groups={GROUPS} />
          <p className="mt-8 text-ink-soft">
            Looking for Ratapani’s mammals too? See this{' '}
            <a href={SAFARI_SITE.wildlife} className="link">
              guide to Ratapani wildlife
            </a>
            .
          </p>
        </div>
      </section>

      <section aria-labelledby="calendar" className="py-16 md:py-24">
        <div className="container-site">
          <SectionHead
            marker="Temporal fluctuations"
            title="Birding Calendar: Month by Month"
            intro="Resident birds are here all year; visitors come and go with the seasons."
            id="calendar"
          />
          <div className="reveal relative overflow-x-auto border border-rule bg-paper-card p-4 sm:p-6" role="region" aria-label="Birding calendar" tabIndex={0}>
            <table className="w-full min-w-[640px] border-separate border-spacing-1 text-left">
              <caption className="sr-only">How good each month is for each bird group in Ratapani and Bhopal</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-56 pb-2 text-label font-semibold uppercase text-lichen">
                    Bird group
                  </th>
                  {CAL_MONTHS.map((m, i) => (
                    <th key={i} scope="col" className="pb-2 text-center font-display text-ink">
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CALENDAR.map(([g, vals, note]) => (
                  <tr key={g}>
                    <th scope="row" className="pr-3 align-middle font-normal">
                      <span className="block font-display text-[1.05rem] text-ink">{g}</span>
                      <span className="block text-[0.8125rem] text-lichen">{note}</span>
                    </th>
                    {vals.map((v, i) => (
                      <td key={i} className={`h-11 ${HEAT[v]}`} title={HEAT_LABEL[v]}>
                        <span className="sr-only">{HEAT_LABEL[v]}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[0.875rem] text-ink-soft">
              {HEAT_LABEL.map((l, i) => (
                <li key={l} className="flex items-center gap-2">
                  <span className={`h-3.5 w-3.5 border border-rule ${HEAT[i]}`} aria-hidden />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="tips" className="border-y border-rule bg-paper-card py-16 md:py-24">
        <div className="container-site">
          <SectionHead marker="Methodology" title="Birdwatching Tips & Gear" intro="Simple habits that double what you see, and keep birds undisturbed." id="tips" />
          <ul className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
            {TIPS.map(([Icon, t, d], i) => (
              <li key={t} className="reveal flex gap-4 border-b border-rule py-5" style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}>
                <Icon className="mt-1 h-6 w-6 shrink-0 text-sand" aria-hidden />
                <div>
                  <h3 className="font-display text-xl text-ink">{t}</h3>
                  <p className="mt-1 text-ink-soft">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="bird-checklist" aria-labelledby="bird-checklist-title" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-site">
          <SectionHead
            marker="Field record"
            title="Ratapani Bird Checklist (Printable)"
            intro="Tick birds as you see them, then print the page for your notebook. Add new species in the blank lines."
            id="bird-checklist-title"
          />
          <div className="reveal">
            <Checklist
              id="birds"
              title="Ratapani & Bhopal bird checklist"
              printLabel="Print bird list"
              groups={[
                { title: 'Forest birds', items: BIRDS.filter((b) => b.group === 'Forest birds').map((b) => b.name).concat(['Common babbler', 'Eurasian hoopoe', 'Rose-ringed parakeet']) },
                { title: 'Raptors, owls & water birds', items: BIRDS.filter((b) => b.group !== 'Forest birds').map((b) => b.name).concat(['Kingfisher (any)', 'Little egret', 'Woodpecker (any)']) },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-site space-y-16">
          <Faq id="faq" title="Birdwatching Near Bhopal: FAQs" faqs={FAQS} />
          <NextPage
            href={PAGES.monsoon.path}
            marker="Next in the journal"
            title="Ratapani in Monsoon"
            text="The Indian pitta’s season: what is open in the rains, and the best monsoon trip from Bhopal."
            image="ratapani-in-monsoon-green-hills"
          />
          <div className="mx-auto max-w-3xl">
            <Sources
              items={[
                { label: 'MP Forest Department: Ratapani e-brochure (249 bird species)', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
                { label: 'Wikipedia: Ratapani Tiger Reserve (bird list)', url: 'https://en.wikipedia.org/wiki/Ratapani_Tiger_Reserve' },
                { label: 'MP Tourism: Birdwatching in Madhya Pradesh (Bhoj Wetland, Kerwa, seasons)', url: 'https://www.mptourism.com/birdwatching-in-madhya-pradesh.html' },
                { label: 'Outlook Traveller: Small wonders of Ratapani (birds)', url: 'https://www.outlookindia.com/traveller/mp/inspire-me/wildlife/small-wonders-ratapani-wildlife-sanctuary/' },
                { label: 'BirdLife International: Ratapani Wildlife Sanctuary IBA', url: 'https://datazone.birdlife.org/site/factsheet/ratapani-wildlife-sanctuary-iba-india' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
