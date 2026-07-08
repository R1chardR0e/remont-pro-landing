"use client";

import { useRef } from "react";
import { beforeAfterItems } from "@/lib/data";
import { CompareSlider } from "@/components/CompareSlider";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";

export function BeforeAfter() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    trackRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });
  }

  return (
    <section id="works" className="wrap py-16 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Фото до / после</h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            Потяните ползунок, чтобы сравнить объект до и после ремонта
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Предыдущие работы"
            onClick={() => scroll(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy transition-colors hover:border-navy"
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Следующие работы"
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
        {beforeAfterItems.map((item) => (
          <article
            key={item.id}
            className="w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-card shadow-soft sm:w-[440px]"
          >
            <CompareSlider
              before={item.before}
              after={item.after}
              alt={item.title}
              sizes="(min-width: 640px) 440px, 320px"
            />
            <div className="p-4">
              <h3 className="font-display font-bold text-navy">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{item.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
