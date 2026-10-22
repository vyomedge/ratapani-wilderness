// Tells Bing, Yandex, Seznam and other IndexNow engines that every page changed.
// Run after a deploy:  npm run indexnow
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ratapaniwilderness.com').replace(/\/$/, '');
const keyFile = fs.readdirSync(path.join(root, 'public')).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('IndexNow key file missing in /public');
const key = keyFile.replace('.txt', '');

const src = fs.readFileSync(path.join(root, 'lib/site.js'), 'utf8');
const paths = [...src.matchAll(/path:\s*'([^']+)'/g)].map((m) => m[1]);
const urlList = [...new Set(paths)].map((p) => site + p);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${keyFile}`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
