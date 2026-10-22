import { renderOg } from '@/lib/og';

export const alt = 'Ratapani Forest: Wilderness Near Bhopal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani Forest: Wilderness Near Bhopal', marker: 'Vindhya hills · Field guide', image: 'ratapani-forest-vindhya-hills-sunrise' });
}
