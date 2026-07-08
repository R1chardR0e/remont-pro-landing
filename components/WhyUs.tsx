import { whyUsItems } from "@/lib/data";
import { whyUsIconMap } from "@/components/icons";

export function WhyUs() {
  return (
    <section id="why" className="wrap py-16 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Почему выбирают нас</h2>
        <p className="mt-3 text-ink-soft">
          Работаем официально и берём на себя ответственность за результат на каждом этапе ремонта
        </p>
      </div>

      <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyUsItems.map((item) => {
          const Icon = whyUsIconMap[item.icon];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-navy">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
