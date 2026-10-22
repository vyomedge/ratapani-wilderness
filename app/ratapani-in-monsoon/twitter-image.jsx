import { renderOg } from '@/lib/og';

export const alt = 'Ratapani in Monsoon: Rainy-Season Trip';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani in Monsoon: Rainy-Season Trip', marker: 'What’s open · One-day plan', image: 'ratapani-in-monsoon-green-hills' });
}
