export default function manifest() {
  return {
    name: 'Ratapani Wilderness',
    short_name: 'Ratapani Wild',
    description: 'Trekking, birdwatching and monsoon guide to the Ratapani forest near Bhopal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F2E8',
    theme_color: '#F7F2E8',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
