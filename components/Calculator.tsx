"use client";

import { useMemo, useState } from "react";
import {
  calculatorOptions,
  includedInPrice,
  objectTypes,
  renovationTypes,
} from "@/lib/data";
import { IconCheck, IconHome, IconPaintRoller, IconRuler, IconSliders } from "@/components/icons";

function formatPrice(value: number) {
  return Math.round(value / 1000) * 1000 > 0
    ? Math.round(value).toLocaleString("ru-RU")
    : "0";
}

export function Calculator() {
  const [objectTypeId, setObjectTypeId] = useState(objectTypes[0].id);
  const [area, setArea] = useState(60);
  const [renovationTypeId, setRenovationTypeId] = useState(renovationTypes[0].id);
  const [options, setOptions] = useState<string[]>([]);

  const objectType = objectTypes.find((o) => o.id === objectTypeId)!;
  const renovationType = renovationTypes.find((r) => r.id === renovationTypeId)!;

  const total = useMemo(() => {
    const base = area * renovationType.pricePerM2 * objectType.multiplier;
    const extras = options.reduce((sum, id) => {
      const opt = calculatorOptions.find((o) => o.id === id);
      return sum + (opt ? opt.pricePerM2 * area : 0);
    }, 0);
    return base + extras;
  }, [area, renovationType, objectType, options]);

  function toggleOption(id: string) {
    setOptions((prev) => (prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]));
  }

  return (
    <section id="calculator" className="wrap -mt-6 pb-20 lg:-mt-10">
      <div className="grid gap-0 overflow-hidden rounded-3xl bg-card shadow-lift lg:grid-cols-[1.4fr_1fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
            Рассчитайте стоимость ремонта
          </h2>
          <p className="mt-2 text-ink-soft">
            Ответьте на несколько вопросов и получите предварительную смету за 1 минуту
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy">
                <IconHome className="h-4 w-4 text-gold-dark" /> Тип объекта
              </span>
              <select
                id="field-object-type"
                value={objectTypeId}
                onChange={(e) => setObjectTypeId(e.target.value)}
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-navy"
              >
                {objectTypes.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy">
                <IconRuler className="h-4 w-4 text-gold-dark" /> Площадь, м²
              </span>
              <input
                id="field-area"
                type="number"
                min={10}
                max={500}
                value={area}
                onChange={(e) => setArea(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-navy"
              />
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy">
                <IconPaintRoller className="h-4 w-4 text-gold-dark" /> Тип ремонта
              </span>
              <select
                id="field-renovation-type"
                value={renovationTypeId}
                onChange={(e) => setRenovationTypeId(e.target.value)}
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-navy"
              >
                {renovationTypes.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-navy">
                <IconSliders className="h-4 w-4 text-gold-dark" /> Дополнительно
              </span>
              <div className="flex flex-col gap-2">
                {calculatorOptions.map((opt) => (
                  <label key={opt.id} className="flex items-center gap-2 text-sm text-ink">
                    <input
                      id={`field-option-${opt.id}`}
                      type="checkbox"
                      checked={options.includes(opt.id)}
                      onChange={() => toggleOption(opt.id)}
                      className="h-4 w-4 rounded border-line accent-navy"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
            <IconCheck className="h-4 w-4 text-gold-dark" />
            Расчёт бесплатный и ни к чему не обязывает
          </p>
        </div>

        <div className="flex flex-col justify-between bg-navy p-6 text-white sm:p-8 lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-wide text-white/60">Предварительная стоимость</p>
            <p id="calculator-result" className="mt-2 font-display text-4xl font-bold text-gold-soft sm:text-5xl">
              от {formatPrice(total)} ₽
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {includedInPrice.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contacts"
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-center font-semibold text-navy-deep transition-colors hover:bg-gold-dark hover:text-white"
          >
            Получить точный расчёт
          </a>
        </div>
      </div>
    </section>
  );
}
