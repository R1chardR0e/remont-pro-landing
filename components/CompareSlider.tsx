"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const MIN = 4;
const MAX = 96;

/**
 * Интерактивное сравнение «до/после»: базовый слой — фото «после»,
 * поверх — фото «до», обрезанное по clip-path. Вертикальный ползунок
 * перетаскивается мышью/пальцем и управляется с клавиатуры.
 */
export function CompareSlider({
  before,
  after,
  alt,
  sizes,
}: {
  before: string;
  after: string;
  alt: string;
  sizes: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(MAX, Math.max(MIN, next)));
  }, []);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.buttons !== 1) return;
    updateFromClientX(e.clientX);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const step = 5;
    if (e.key === "ArrowLeft") {
      setPos((p) => Math.max(MIN, p - step));
    } else if (e.key === "ArrowRight") {
      setPos((p) => Math.min(MAX, p + step));
    } else if (e.key === "Home") {
      setPos(MIN);
    } else if (e.key === "End") {
      setPos(MAX);
    } else {
      return;
    }
    e.preventDefault();
  }

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden"
    >
      <Image
        src={after}
        alt={`${alt} — после ремонта`}
        fill
        sizes={sizes}
        draggable={false}
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before}
          alt={`${alt} — до ремонта`}
          fill
          sizes={sizes}
          draggable={false}
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy/85 px-2.5 py-1 text-xs font-semibold text-white">
        До
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-navy-deep">
        После
      </span>

      {/* линия-разделитель с ручкой */}
      <div
        className="absolute inset-y-0 -translate-x-1/2"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <div className="mx-auto h-full w-0.5 bg-white shadow-[0_0_8px_rgb(0_0_0/0.45)]" />
      </div>
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Сравнение до и после ремонта: ${alt}`}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={Math.round(pos)}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lift outline-offset-2"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M8.5 7.5L4 12l4.5 4.5M15.5 7.5L20 12l-4.5 4.5" />
        </svg>
      </div>
    </div>
  );
}
