import Image from "next/image";
import { heroFeatures, heroStats } from "@/lib/data";
import { IconCheck } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="wrap grid gap-10 pb-16 pt-12 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pb-24 lg:pt-16">
      <div>
        <h1 className="font-display text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
          Ремонт квартир и домов{" "}
          <span className="relative whitespace-nowrap">
            под ключ
            <svg
              viewBox="0 0 220 14"
              className="absolute -bottom-1 left-0 h-3 w-full text-gold"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d="M2 10 Q60 2 110 7 T218 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="mt-5 max-w-lg text-lg text-ink-soft">
          Считаем смету за 1 минуту, фиксируем цену в договоре и сдаём объект точно в срок —
          с гарантией до 5 лет на все виды работ.
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {heroFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm font-medium text-navy">
              <IconCheck className="h-4 w-4 shrink-0 text-gold-dark" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#calculator"
            className="rounded-full bg-navy px-7 py-3.5 font-semibold text-white shadow-lift transition-colors hover:bg-navy-soft"
          >
            Рассчитать стоимость
          </a>
          <a
            href="#works"
            className="rounded-full border-2 border-navy/15 px-7 py-3.5 font-semibold text-navy transition-colors hover:border-navy/40"
          >
            Смотреть наши работы
          </a>
        </div>

        <dl className="mt-11 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-bold text-navy">{s.value}</dd>
              <dd className="mt-1 text-sm text-ink-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative">
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gold-soft blur-2xl" aria-hidden />
        <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-lift">
          <Image
            src="/images/hero.jpg"
            alt="Светлая гостиная с кухней после ремонта под ключ"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-card px-5 py-3.5 shadow-lift">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft text-gold-dark">
            <IconCheck className="h-5 w-5" />
          </span>
          <span className="text-sm leading-tight">
            <span className="block font-display font-bold text-navy">Сдано 640+ объектов</span>
            <span className="text-ink-soft">гарантия до 5 лет</span>
          </span>
        </div>
      </div>
    </section>
  );
}
