export const SITE = {
  name: 'Ratapani Wilderness',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ratapaniwilderness.com').replace(/\/$/, ''),
  description:
    'Ratapani Wilderness is a field guide to the Ratapani forest near Bhopal, Madhya Pradesh: trekking trails, birdwatching, the monsoon forest, seasons and how to walk lightly in tiger country.',
  locale: 'en_IN',
  language: 'en-IN',
  lastReviewed: '2026-10-22',
  published: '2026-10-22',
  geo: { lat: 22.918, lng: 77.722 },
};

export const absoluteUrl = (path = '/') => (path === '/' ? SITE.url : `${SITE.url}${path}`);

export const PAGES = {
  home: { path: '/', title: 'Ratapani Forest', nav: 'Home' },
  trekking: { path: '/ratapani-trekking', title: 'Trekking Near Bhopal', nav: 'Trekking' },
  birdwatching: { path: '/birdwatching-in-ratapani', title: 'Birdwatching Near Bhopal', nav: 'Birdwatching' },
  monsoon: { path: '/ratapani-in-monsoon', title: 'Ratapani in Monsoon', nav: 'Monsoon' },
};

export const NAV = [PAGES.trekking, PAGES.birdwatching, PAGES.monsoon];

/** Sister site: practical safari information lives there, so we link to it in context only. */
export const SAFARI_SITE = {
  home: 'https://www.ratapanijunglesafari.com/',
  ginnorgarh: 'https://www.ratapanijunglesafari.com/ginnorgarh-fort',
  bhimbetka: 'https://www.ratapanijunglesafari.com/bhimbetka-rock-shelters',
  wildlife: 'https://www.ratapanijunglesafari.com/ratapani-wildlife',
  bestTime: 'https://www.ratapanijunglesafari.com/best-time-to-visit-ratapani',
  booking: 'https://www.ratapanijunglesafari.com/book-ratapani-tiger-safari',
};

export const OFFICIAL_PORTAL = 'https://forest.mponline.gov.in/';
