import { SITE, absoluteUrl } from './site';
import images from '@/data/images.json';

/** Metadata for a page: keyword title, description, canonical, Open Graph and Twitter. */
export function pageMetadata({ title, description, path, keywords = [], section }) {
  const url = absoluteUrl(path);
  const isHome = path === '/';
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: { 'en-IN': url, 'x-default': url },
      types: { 'text/plain': [{ url: '/llms.txt', title: 'llms.txt' }] },
    },
    // Share images come from each route's opengraph-image.jsx / twitter-image.jsx (1200×630 JPEG).
    openGraph: {
      type: isHome ? 'website' : 'article',
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      ...(!isHome && {
        publishedTime: `${SITE.published}T00:00:00+05:30`,
        modifiedTime: `${SITE.lastReviewed}T00:00:00+05:30`,
        authors: [SITE.url],
        section: section || 'Nature travel',
        tags: keywords,
      }),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

/** ImageObject for a manifest photo, with real dimensions. */
export function imageObject(name) {
  const m = images[name];
  return {
    '@type': 'ImageObject',
    url: absoluteUrl(`/images/${name}.webp`),
    contentUrl: absoluteUrl(`/images/${name}.webp`),
    ...(m && { width: m.width, height: m.height, caption: m.alt }),
  };
}

export const orgId = `${SITE.url}/#organization`;
export const siteId = `${SITE.url}/#website`;
export const placeId = `${SITE.url}/#ratapani-forest`;

export function siteSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': orgId,
      name: SITE.name,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png'), width: 512, height: 512 },
      image: absoluteUrl('/opengraph-image'),
      description: SITE.description,
      knowsAbout: ['Ratapani forest', 'Trekking near Bhopal', 'Birdwatching near Bhopal', 'Ratapani in monsoon', 'Vindhya hills'],
      areaServed: { '@type': 'State', name: 'Madhya Pradesh' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': siteId,
      name: SITE.name,
      url: SITE.url,
      inLanguage: SITE.language,
      publisher: { '@id': orgId },
      about: { '@id': placeId },
    },
  ];
}

/** The Ratapani forest as a place. */
export function placeSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristDestination', 'Park'],
    '@id': placeId,
    name: 'Ratapani Forest',
    alternateName: ['Ratapani Tiger Reserve', 'Ratapani Wildlife Sanctuary'],
    description:
      'A forest of teak, bamboo and Vindhya sandstone south-east of Bhopal, Madhya Pradesh, protected as Ratapani Wildlife Sanctuary since 1976 and as Ratapani Tiger Reserve since December 2024.',
    url: SITE.url,
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    address: { '@type': 'PostalAddress', addressRegion: 'Madhya Pradesh', addressCountry: 'IN' },
    containedInPlace: { '@type': 'State', name: 'Madhya Pradesh' },
    image: imageObject('ratapani-forest-vindhya-hills-sunrise'),
    touristType: ['Trekkers', 'Birdwatchers', 'Nature photographers', 'Monsoon travellers'],
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Bhimbetka Rock Shelters', sameAs: 'https://whc.unesco.org/en/list/925/' },
      { '@type': 'TouristAttraction', name: 'Ginnorgarh Fort', sameAs: 'https://en.wikipedia.org/wiki/Ginnorgarh' },
      { '@type': 'TouristAttraction', name: 'Ratapani Dam' },
      { '@type': 'TouristAttraction', name: 'Barna Reservoir' },
    ],
    sameAs: ['https://en.wikipedia.org/wiki/Ratapani_Tiger_Reserve'],
  };
}

export function webPageSchema({ title, description, path, type = 'Article', image, keywords = [] }) {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    headline: title,
    description,
    inLanguage: SITE.language,
    isPartOf: { '@id': siteId },
    about: { '@id': placeId },
    publisher: { '@id': orgId },
    author: { '@id': orgId },
    datePublished: SITE.published,
    dateModified: SITE.lastReviewed,
    mainEntityOfPage: url,
    isAccessibleForFree: true,
    keywords: keywords.join(', '),
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
    ...(image && { image: imageObject(image), primaryImageOfPage: imageObject(image) }),
  };
}

export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function itemListSchema(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })),
  };
}

/** A day trip as a TouristTrip with an ordered itinerary. */
export function tripSchema({ name, description, path, stops }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    url: absoluteUrl(path),
    touristType: ['Day trippers from Bhopal', 'Monsoon travellers'],
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: stops.length,
      itemListElement: stops.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'TouristAttraction', name: s.name, description: s.text } })),
    },
  };
}
