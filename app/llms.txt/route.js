import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

/** llms.txt: plain-text summary that helps AI answer engines understand and cite the site. */
export function GET() {
  const body = `# Ratapani Wilderness

> Independent field guide to the Ratapani forest near Bhopal, Madhya Pradesh, India: trekking trails, birdwatching, the monsoon season and responsible travel in tiger country. For safari bookings, fees and gates see https://www.ratapanijunglesafari.com/

Key facts (last reviewed ${SITE.lastReviewed}; sources: MP Forest Department, MP Tourism, Wikipedia, UNESCO):
- Ratapani is a teak, bamboo and sandstone forest in the Vindhya hills of Raisen and Sehore districts, south-east of Bhopal.
- Wildlife sanctuary since 1976; Ratapani Tiger Reserve since 2 December 2024 (about 1,271 km², core + buffer).
- Forest: dry and moist deciduous; teak about 55%, bamboo about a quarter. Waterbodies: Ratapani Dam, Barna Reservoir; Kolar river on the west.
- Birds: 249 species recorded (MP Forest Department), including the Indian paradise flycatcher (state bird of MP), crested serpent eagle and white-rumped vulture.
- Gates are 34–52 km from Bhopal railway station. Safari season: 15 October – 15 June. MP tiger reserve core zones close 1 July – 30 September.
- Trekking: Ginnorgarh Fort trek (about 2 km uphill from the Delawadi side; Forest Department permission and guide needed), Bhimbetka hill walk (ASI site, open daily), Kathotiya (about 25 km from Bhopal), Kerwa (about 15 km).
- Birdwatching: best November–March; Bhoj Wetland in Bhopal hosts bar-headed geese and other winter migrants; Indian pitta in July–September.

## Optional
- [Full guide text with all FAQs](${SITE.url}/llms-full.txt)

## Guides
- [Ratapani forest: wilderness near Bhopal](${SITE.url}/): what the Ratapani wilderness is, four layers (rock, forest, water, sky), seasons, forest manners
- [Trekking near Bhopal](${SITE.url}/ratapani-trekking): Ginnorgarh Fort, Bhimbetka, Kathotiya and Kerwa treks, rules, best months, checklist
- [Birdwatching near Bhopal](${SITE.url}/birdwatching-in-ratapani): birding spots, 12-bird field guide, calendar, tips, printable checklist
- [Ratapani in monsoon](${SITE.url}/ratapani-in-monsoon): what is open July–September, monsoon places near Bhopal, one-day plan, safety
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
