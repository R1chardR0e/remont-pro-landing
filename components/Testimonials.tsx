"use client";

import { useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { IconChevronLeft, IconChevronRight, IconStar } from "@/components/icons";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  }

  return (
    <section id="reviews" className="wrap py-16 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Отзывы клиентов</h2>
          <p className="mt-3 max-w-xl text-ink-soft">Что говорят о работе с нами наши заказчики</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Предыдущие отзывы"
            onClick={() => scroll(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-colors hover:border-navy"
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Следующие отзывы"
            onClick={() => scroll(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-colors hover:border-navy"
          >
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-9 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="w-[320px] shrink-0 snap-start rounded-2xl border border-line bg-card p-6 shadow-soft sm:w-[380px]"
          >
            <div className="flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={`Фото клиента: ${t.name}`}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="font-display font-bold text-navy">{t.name}</p>
                <div className="mt-0.5 flex gap-0.5 text-gold" aria-label={`Рейтинг ${t.rating} из 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" filled={i < t.rating} />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-soft">{t.text}</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {t.thumbs.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
                  <Image
                    src={src}
                    alt={`Фото выполненного ремонта — ${t.meta}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-soft/70">{t.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
