import { SITE, absoluteUrl } from './site';

/** Metadata for a page: keyword title, description, canonical, Open Graph and Twitter. */
export function pageMetadata({ title, description, path, keywords = [] }) {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url, languages: { 'en-IN': url, 'x-default': url } },
    openGraph: { type: path === '/' ? 'website' : 'article', locale: SITE.locale, url, siteName: SITE.name, title, description },
    twitter: { card: 'summary_large_image', title, description },
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
    touristType: ['Trekkers', 'Birdwatchers', 'Nature photographers', 'Monsoon travellers'],
  };
}

export function webPageSchema({ title, description, path, type = 'Article', image }) {
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
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
    ...(image && {
      image: absoluteUrl(`/images/${image}.webp`),
      primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(`/images/${image}.webp`) },
    }),
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
