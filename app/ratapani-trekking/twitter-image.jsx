import { renderOg } from '@/lib/og';

export const alt = 'Trekking Near Bhopal: Ratapani Treks & Trails';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Trekking Near Bhopal: Ratapani Treks & Trails', marker: 'Trails & escarpments', image: 'trekking-near-bhopal-ratapani-hilltop' });
}
