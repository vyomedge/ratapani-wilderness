# Ratapani Wilderness

A field-journal style nature guide to the Ratapani forest near Bhopal, built with Next.js (static) for **ratapaniwilderness.com**.

## Pages

| Page | URL | Main keyword |
|---|---|---|
| Home | `/` | Ratapani forest / wilderness near Bhopal |
| Trekking | `/ratapani-trekking` | trekking near Bhopal |
| Birdwatching | `/birdwatching-in-ratapani` | birdwatching near Bhopal |
| Monsoon | `/ratapani-in-monsoon` | Ratapani in monsoon / monsoon places near Bhopal |

## Run it on your computer

1. Install Node.js 20 or newer.
2. In this folder run `npm install`, then `npm run dev`.
3. Open http://localhost:3000.

## Deploy on Vercel

1. Vercel → Add New → Project → import `vyomedge/ratapani-wilderness` → Deploy (no settings needed).
2. Project → Settings → Domains → add `ratapaniwilderness.com` and `www.ratapaniwilderness.com`, then copy the DNS records Vercel shows into your domain registrar (remove the parking records).
3. Settings → Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.ratapaniwilderness.com`
   - `NEXT_PUBLIC_GOOGLE_VERIFICATION` and `NEXT_PUBLIC_BING_VERIFICATION` (only the code from the HTML-tag method)
   Then redeploy.
4. Submit `https://www.ratapaniwilderness.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
5. After each deploy, run `npm run indexnow`.

## Where to edit things

- Page text: `app/<page>/page.jsx` (FAQs and lists are at the top of each file)
- Site name, URL, menu: `lib/site.js`
- Photos: `public/images/` + alt text in `data/images.json`
- Colours and fonts: `tailwind.config.js`, `app/layout.jsx`

## SEO built in

Keyword titles, descriptions and headings; one H1 per page; image alt text; canonical + en-IN hreflang; Open Graph and Twitter images per page; JSON-LD (Organization, WebSite, TouristDestination, Article, BreadcrumbList, FAQPage, ItemList, Speakable); sitemap with images; robots.txt open to AI search bots; `/llms.txt` and `/llms-full.txt` (all FAQs in plain text); TouristTrip schema for the monsoon day plan; Open Graph article dates, section and tags; redirects for short URLs; HSTS and security headers; IndexNow.
