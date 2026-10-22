import { renderOg } from '@/lib/og';

export const alt = 'Birdwatching Near Bhopal: Birds of Ratapani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Birdwatching Near Bhopal: Birds of Ratapani', marker: '249 species · Field guide', image: 'birdwatching-near-bhopal-paradise-flycatcher' });
}
