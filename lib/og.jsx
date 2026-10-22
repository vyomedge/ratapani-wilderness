import { ImageResponse } from 'next/og';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export const OG_SIZE = { width: 1200, height: 630 };

const root = process.cwd();
// Static at build time, so skip output tracing of the project folder.
const read = (p) => fs.readFile(path.join(/*turbopackIgnore: true*/ root, p));

/** Field-journal share card: paper background, framed photo, keyword title. Rendered once at build. */
export async function renderOg({ title, marker, image }) {
  const [display, body, mark] = await Promise.all([
    read('lib/og-fonts/playfair-display-latin-500-normal.woff'),
    read('lib/og-fonts/lora-latin-400-normal.woff'),
    read('public/logo-mark.svg'),
  ]);
  let photo = null;
  try {
    const jpg = await sharp(await read(`public/images/${image}.webp`)).resize(470, 530, { fit: 'cover' }).jpeg({ quality: 82 }).toBuffer();
    photo = `data:image/jpeg;base64,${jpg.toString('base64')}`;
  } catch {
    photo = null;
  }
  const markSrc = `data:image/svg+xml;base64,${mark.toString('base64')}`;

  const png = new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#F7F2E8', padding: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 580, paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src={markSrc} width={52} height={52} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'Playfair', fontSize: 30, color: '#1F2921', lineHeight: 1 }}>Ratapani</span>
              <span style={{ fontFamily: 'Lora', fontSize: 13, letterSpacing: 5, color: '#86613D', marginTop: 6 }}>WILDERNESS</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 40, height: 2, background: '#A67C52' }} />
              <span style={{ fontFamily: 'Lora', fontSize: 18, letterSpacing: 3, color: '#86613D' }}>{marker.toUpperCase()}</span>
            </div>
            <span style={{ fontFamily: 'Playfair', fontSize: title.length > 34 ? 52 : 62, lineHeight: 1.1, color: '#1F2921' }}>{title}</span>
          </div>
          <span style={{ fontFamily: 'Lora', fontSize: 20, color: '#5A6A77' }}>ratapaniwilderness.com</span>
        </div>
        <div style={{ display: 'flex', background: '#FAF7F0', border: '1px solid #D6CEC1', padding: 12, width: 494, height: 530 }}>
          {photo ? <img src={photo} width={470} height={506} style={{ objectFit: 'cover' }} /> : <div style={{ display: 'flex', flex: 1, background: '#E3E9DA' }} />}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Playfair', data: display, weight: 500, style: 'normal' },
        { name: 'Lora', data: body, weight: 400, style: 'normal' },
      ],
    }
  );
  const jpg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  return new Response(jpg, { headers: { 'Content-Type': 'image/jpeg' } });
}
