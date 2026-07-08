"use client";

import { useState } from "react";
import { navItems } from "@/lib/data";
import { IconMenu, IconClose } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur">
      <div className="wrap flex min-h-[72px] items-center justify-between gap-3 py-3">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="СтройГарант — на главную"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-soft">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11.5L12 5l8 6.5" />
              <path d="M6 10.5V19h12v-8.5" />
              <path d="M10 19v-5h4v5" />
            </svg>
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block whitespace-nowrap font-display text-lg font-bold text-navy">СтройГарант</span>
            <span className="block whitespace-nowrap text-[11px] uppercase tracking-wide text-ink-soft">Ремонт под ключ</span>
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden min-[1180px]:block">
          <ul className="flex items-center justify-center gap-3 text-sm font-semibold text-ink-soft">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="whitespace-nowrap transition-colors hover:text-navy">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 min-[1180px]:flex">
          <a href="tel:+74951234567" className="whitespace-nowrap text-sm font-bold tabular-nums text-navy">
            +7 (495) 123-45-67
          </a>
          <a
            href="#contacts"
            className="whitespace-nowrap rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-navy-deep shadow-soft transition-colors hover:bg-gold-dark hover:text-white"
          >
            Получить смету
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-navy min-[1180px]:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper min-[1180px]:hidden">
          <nav aria-label="Мобильная навигация" className="wrap py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2.5 font-medium text-ink hover:bg-gold-soft/60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
              <a href="tel:+74951234567" className="font-semibold text-navy">
                +7 (495) 123-45-67
              </a>
              <a
                href="#contacts"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gold px-5 py-2.5 text-center font-semibold text-navy-deep"
              >
                Получить смету
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
