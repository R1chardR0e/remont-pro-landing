/**
 * Генерирует public/og.png (1200×630) — скриншот hero-блока с запущенного
 * дев-сервера. Запуск: npm run og (сервер должен работать на :3001).
 */
import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("public/og.png готов");
