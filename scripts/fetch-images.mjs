/**
 * Скачивает фотографии с Unsplash CDN в public/images.
 * Лицензия Unsplash разрешает свободное коммерческое использование
 * без атрибуции: https://unsplash.com/license
 * Запуск: node scripts/fetch-images.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";

const img = (id, w, h, extra = "") =>
  `https://images.unsplash.com/${id}?q=80&fit=crop&w=${w}&h=${h}${extra}`;

const files = [
  // hero — светлая современная гостиная
  ["hero.jpg", img("photo-1522708323590-d24dbb6b0267", 1400, 1120)],

  // до/после: кухня
  ["ba-kitchen-after.jpg", img("photo-1556911220-bff31c812dba", 1200, 900)],
  ["ba-kitchen-before.jpg", img("photo-1504148455328-c376907d081c", 1200, 900)],

  // до/после: ванная
  ["ba-bathroom-after.jpg", img("photo-1584622650111-993a426fbf0a", 1200, 900)],
  ["ba-bathroom-before.jpg", img("photo-1562259949-e8e7689d7828", 1200, 900)],

  // до/после: гостиная
  ["ba-living-after.jpg", img("photo-1493809842364-78817add7ffb", 1200, 900)],
  ["ba-living-before.jpg", img("photo-1599619585752-c3edb42a414c", 1200, 900)],

  // до/после: спальня
  ["ba-bedroom-after.jpg", img("photo-1616594039964-ae9021a400a0", 1200, 900)],
  ["ba-bedroom-before.jpg", img("photo-1607400201889-565b1ee75f8e", 1200, 900)],

  // пакеты
  ["pkg-cosmetic.jpg", img("photo-1560448204-e02f11c3d0e2", 900, 506)],
  ["pkg-capital.jpg", img("photo-1556909212-d5b604d0c90d", 900, 506)],
  ["pkg-premium.jpg", img("photo-1600607687939-ce8a6c25118c", 900, 506)],

  // аватары клиентов (кроп по лицу)
  ["avatar-1.jpg", img("photo-1507003211169-0a1dd7228f2d", 256, 256, "&crop=faces")],
  ["avatar-2.jpg", img("photo-1494790108377-be9c29b29330", 256, 256, "&crop=faces")],
  ["avatar-3.jpg", img("photo-1472099645785-5658abf4ff4e", 256, 256, "&crop=faces")],
  ["avatar-4.jpg", img("photo-1438761681033-6461ffad8d80", 256, 256, "&crop=faces")],
];

await mkdir("public/images", { recursive: true });

let failed = 0;
for (const [name, url] of files) {
  try {
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());
    if (!res.ok || buf.length < 8_000) {
      failed++;
      console.error(`FAIL ${name}: HTTP ${res.status}, ${buf.length} bytes`);
      continue;
    }
    await writeFile(`public/images/${name}`, buf);
    console.log(`ok   ${name}  ${(buf.length / 1024).toFixed(0)} KB`);
  } catch (err) {
    failed++;
    console.error(`FAIL ${name}: ${err.message}`);
  }
}

process.exit(failed > 0 ? 1 : 0);
