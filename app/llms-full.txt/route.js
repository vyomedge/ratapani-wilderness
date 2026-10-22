import { SITE, absoluteUrl } from '@/lib/site';
import { FAQS_HOME, FAQS_TREKKING, FAQS_BIRDWATCHING, FAQS_MONSOON } from '@/content/faqs';

export const dynamic = 'force-static';

const qa = (faqs) => faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n');

/** llms-full.txt: every guide's key answers in plain text, for AI answer engines. */
export function GET() {
  const body = `# Ratapani Wilderness: full guide text

> Independent field guide to the Ratapani forest near Bhopal, Madhya Pradesh, India. Last reviewed ${SITE.lastReviewed}. Summary: ${absoluteUrl('/llms.txt')}

## Ratapani forest: a wilderness near Bhopal
URL: ${absoluteUrl('/')}

Ratapani is a forest of teak, bamboo and Vindhya sandstone south-east of Bhopal, in Raisen and Sehore districts. It has been a wildlife sanctuary since 1976 and Ratapani Tiger Reserve since 2 December 2024 (about 1,271 km²). Teak covers about 55% and bamboo about a quarter. Ratapani Dam and Barna Reservoir are the main waterbodies. The Madhya Pradesh Forest Department records 249 bird species. The Bhimbetka rock shelters (UNESCO, 2003) lie within the forest.

${qa(FAQS_HOME)}

## Trekking near Bhopal: Ratapani treks and trails
URL: ${absoluteUrl('/ratapani-trekking')}

Treks: Ginnorgarh Fort (Delawadi side, about 60 km from Bhopal, about 2 km uphill each way, Forest Department permission and guide required); Bhimbetka hill walk (about 45 km, ASI site, open daily, easy); Kathotiya (about 25 km, forest trails to 100+ rock shelters, outside the reserve); Kerwa (about 15 km, nature walks and a strenuous trek to rock shelters). Best months: November to February.

${qa(FAQS_TREKKING)}

## Birdwatching near Bhopal: birds of Ratapani
URL: ${absoluteUrl('/birdwatching-in-ratapani')}

Spots: Ratapani Dam and Barna Reservoir; Jhiri and Delawadi safari routes; Bhimbetka rock shelters; Kerwa and Kolar reservoirs; Bhoj Wetland (Upper Lake) in Bhopal for winter migrants. Field guide birds: Indian paradise flycatcher, Indian peafowl, Indian roller, black drongo, coppersmith barbet, greater coucal, Indian pitta, crested serpent eagle, white-rumped vulture, brown fish owl, white wagtail, bar-headed goose.

${qa(FAQS_BIRDWATCHING)}

## Ratapani in monsoon: rainy-season trip near Bhopal
URL: ${absoluteUrl('/ratapani-in-monsoon')}

Rains usually arrive in the second week of June. Core zones of Madhya Pradesh tiger reserves close 1 July to 30 September; buffer areas may stay open in a restricted manner. Open in monsoon: Bhimbetka rock shelters, highway drives, Kolar and Kerwa viewpoints.

${qa(FAQS_MONSOON)}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
