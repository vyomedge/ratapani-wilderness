/** Brand tokens from the Ratapani Wilderness brand board (contrast-checked). */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#F7F2E8', card: '#FAF7F0', deep: '#EFE9DC', note: '#FCF9F2' },
        ink: { DEFAULT: '#1F2921', soft: '#3D4A3F' },
        moss: { DEFAULT: '#59704E', deep: '#4B5F42', pale: '#E3E9DA' },
        sand: '#A67C52',
        earth: '#86613D',
        rule: '#D6CEC1',
        lichen: '#5A6A77',
        night: { DEFAULT: '#0E2433', soft: '#16324A' },
        mist: '#F1F6F9',
        gold: '#C9A27A',
        haze: '#9AABB8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem', { lineHeight: '1.18', letterSpacing: '-0.005em' }],
        'headline': ['1.75rem', { lineHeight: '1.3' }],
        marker: ['0.8125rem', { lineHeight: '1.1rem', letterSpacing: '0.18em' }],
        label: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
      },
      maxWidth: { site: '77.5rem', read: '42rem' },
      borderRadius: { leaf: '2px' },
    },
  },
  plugins: [],
};
