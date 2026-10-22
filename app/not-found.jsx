import Link from 'next/link';
import { TrailMarker } from '@/components/Sketch';

export const metadata = { title: 'Trail not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="paper-grain flex min-h-[80vh] items-center pt-24">
      <div className="container-site max-w-2xl text-center">
        <TrailMarker className="mx-auto h-24 w-24 text-sand" />
        <p className="mt-6 font-hand text-2xl text-earth">this path isn’t on the map</p>
        <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">Trail not found</h1>
        <p className="mt-4 text-ink-soft">The page you were looking for has moved or never existed. Pick up the trail from one of these guides.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-moss">Ratapani forest</Link>
          <Link href="/ratapani-trekking" className="btn-outline">Trekking near Bhopal</Link>
        </div>
      </div>
    </section>
  );
}
