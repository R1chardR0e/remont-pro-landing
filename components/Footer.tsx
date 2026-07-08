import { IconInstagram, IconMail, IconMapPin, IconPhone, IconTelegram, IconVk } from "@/components/icons";

const serviceLinks = [
  { label: "Косметический ремонт", href: "#packages" },
  { label: "Капитальный ремонт", href: "#packages" },
  { label: "Ремонт под ключ", href: "#packages" },
  { label: "Дизайн-проект", href: "#calculator" },
];

const infoLinks = [
  { label: "Преимущества", href: "#why" },
  { label: "Этапы работ", href: "#steps" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Наши работы", href: "#works" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-navy-deep">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11.5L12 5l8 6.5" />
                <path d="M6 10.5V19h12v-8.5" />
                <path d="M10 19v-5h4v5" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-white">СтройГарант</span>
              <span className="block text-[11px] uppercase tracking-wide text-white/50">Ремонт под ключ</span>
            </span>
          </a>
          <p className="mt-4 text-sm">
            Делаем качественный ремонт квартир и домов под ключ: от косметического обновления до
            авторского дизайн-проекта.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" aria-label="VK" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <IconVk className="h-4 w-4" />
            </a>
            <a href="https://t.me/stroygarant" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <IconTelegram className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <IconInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Услуги">
          <h3 className="font-display font-bold text-white">Услуги</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Информация">
          <h3 className="font-display font-bold text-white">Информация</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {infoLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display font-bold text-white">Контакты</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+74951234567" className="transition-colors hover:text-white">+7 (495) 123-45-67</a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:info@stroygarant.ru" className="transition-colors hover:text-white">info@stroygarant.ru</a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Москва, ул. Строителей, 15</span>
            </li>
            <li className="pl-7 text-white/50">Пн–Вс: 9:00 – 20:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="wrap flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} СтройГарант. Все права защищены.</p>
          <p>ИП Иванов И.И. · ОГРНИП 000000000000000</p>
        </div>
      </div>
    </footer>
  );
}
