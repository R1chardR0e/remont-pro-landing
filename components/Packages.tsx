import Image from "next/image";
import { packages } from "@/lib/data";
import { IconCheck } from "@/components/icons";

export function Packages() {
  return (
    <section id="packages" className="bg-navy py-16 text-white lg:py-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Пакеты ремонта</h2>
          <p className="mt-3 text-white/70">
            Выберите готовое решение или получите индивидуальный расчёт под ваш объект
          </p>
        </div>

        <div className="mt-11 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`relative flex flex-col overflow-hidden rounded-2xl ${
                pkg.popular
                  ? "bg-white text-ink shadow-lift ring-2 ring-gold lg:-translate-y-3"
                  : "bg-navy-soft text-white"
              }`}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
                {pkg.popular && (
                  <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy-deep shadow-soft">
                    Популярный выбор
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-xl font-bold">{pkg.title}</h3>
              <p className="mt-3">
                <span className="text-sm opacity-70">от</span>{" "}
                <span className="font-display text-3xl font-bold">
                  {pkg.priceFrom.toLocaleString("ru-RU")} ₽
                </span>
                <span className="text-sm opacity-70">/м²</span>
              </p>
              <p className={`mt-1 text-sm ${pkg.popular ? "text-ink-soft" : "text-white/60"}`}>
                Срок: {pkg.term}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <IconCheck
                      className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.popular ? "text-gold-dark" : "text-gold"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacts"
                className={`mt-7 rounded-full px-6 py-3 text-center font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-navy text-white hover:bg-navy-soft"
                    : "bg-gold text-navy-deep hover:bg-gold-dark hover:text-white"
                }`}
              >
                Выбрать пакет
              </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
