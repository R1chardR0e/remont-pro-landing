import type { Metadata, Viewport } from "next";
import { Rubik, Inter } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["cyrillic", "latin"],
  variable: "--font-rubik",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stroygarant-landing.vercel.app"),
  title: "СтройГарант — ремонт квартир и домов под ключ",
  description:
    "Ремонт квартир и домов под ключ с фиксированной сметой и гарантией до 5 лет. Собственные бригады, договор, точные сроки. Бесплатный расчёт стоимости за 1 минуту.",
  keywords: [
    "ремонт квартир",
    "ремонт домов",
    "ремонт под ключ",
    "капитальный ремонт",
    "косметический ремонт",
    "смета на ремонт",
    "СтройГарант",
  ],
  openGraph: {
    title: "СтройГарант — ремонт квартир и домов под ключ",
    description:
      "Фиксированная смета, гарантия до 5 лет и точные сроки. Рассчитайте стоимость ремонта за 1 минуту.",
    url: "/",
    siteName: "СтройГарант",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "СтройГарант — ремонт квартир и домов под ключ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "СтройГарант — ремонт квартир и домов под ключ",
    description:
      "Фиксированная смета, гарантия до 5 лет и точные сроки ремонта под ключ.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1e2a3d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${rubik.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
