import Image from 'next/image';
import images from '@/data/images.json';

/** Optimised photo from data/images.json; fills its sized parent. Alt text comes from the manifest. */
export default function Img({ name, sizes = '100vw', priority = false, className = '', alt, position }) {
  const meta = images[name];
  if (!meta) throw new Error(`Unknown image "${name}" – add it to data/images.json`);
  return (
    <Image
      src={`/images/${name}.webp`}
      alt={alt ?? meta.alt}
      fill
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? 'high' : undefined}
      quality={priority ? 75 : 80}
      className={`object-cover ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
