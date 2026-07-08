"use client";

import { useRef, useState, type FormEvent } from "react";
import { IconMapPin, IconPhone, IconMail, IconTelegram, IconWhatsApp } from "@/components/icons";

const OBJECT_TYPES = ["Квартира", "Дом", "Офис / коммерция"];

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [objectType, setObjectType] = useState(OBJECT_TYPES[0]);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError("");

    const nextErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) nextErrors.name = "Укажите имя";
    if (phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Укажите корректный телефон";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.name) nameRef.current?.focus();
      else phoneRef.current?.focus();
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, objectType, comment }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(data?.message || "Не удалось отправить заявку");
      }

      setSent(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте позже.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacts" className="wrap py-16 lg:py-24">
      <div className="grid gap-6 overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-[1fr_1.1fr]">
        <div className="p-8 sm:p-10 lg:p-12">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Оставьте заявку и получите скидку 10%
          </h2>
          <p className="mt-3 text-white/70">Ответим в течение 15 минут в рабочее время</p>

          <ul className="mt-8 flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3">
              <IconPhone className="h-5 w-5 shrink-0 text-gold" />
              <a href="tel:+74951234567" className="font-medium">+7 (495) 123-45-67</a>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="h-5 w-5 shrink-0 text-gold" />
              <a href="mailto:info@stroygarant.ru" className="font-medium">info@stroygarant.ru</a>
            </li>
            <li className="flex items-center gap-3">
              <IconMapPin className="h-5 w-5 shrink-0 text-gold" />
              <span className="font-medium">Москва, ул. Строителей, 15</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/20"
            >
              <IconWhatsApp className="h-5 w-5 text-[#3ccb63]" /> WhatsApp
            </a>
            <a
              href="https://t.me/stroygarant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/20"
            >
              <IconTelegram className="h-5 w-5 text-[#4ba3e3]" /> Telegram
            </a>
          </div>
        </div>

        <div className="bg-navy-soft p-8 sm:p-10 lg:p-12">
          {sent ? (
            <div role="status" className="flex h-full flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy-deep">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">Заявка отправлена</h3>
              <p className="mt-2 text-white/70">Мы свяжемся с вами в течение 15 минут</p>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="field-name" className="mb-1.5 block text-sm font-medium text-white/80">
                  Ваше имя
                </label>
                <input
                  id="field-name"
                  ref={nameRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold"
                  placeholder="Иван Иванов"
                />
                {errors.name && (
                  <p id="error-name" className="mt-1 text-sm text-red-300">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="field-phone" className="mb-1.5 block text-sm font-medium text-white/80">
                  Телефон
                </label>
                <input
                  id="field-phone"
                  ref={phoneRef}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "error-phone" : undefined}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold"
                  placeholder="+7 (___) ___-__-__"
                />
                {errors.phone && (
                  <p id="error-phone" className="mt-1 text-sm text-red-300">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="field-object" className="mb-1.5 block text-sm font-medium text-white/80">
                  Тип объекта
                </label>
                <select
                  id="field-object"
                  value={objectType}
                  onChange={(e) => setObjectType(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-gold"
                >
                  {OBJECT_TYPES.map((o) => (
                    <option key={o} value={o} className="text-ink">
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="field-comment" className="mb-1.5 block text-sm font-medium text-white/80">
                  Комментарий
                </label>
                <textarea
                  id="field-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={2}
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold"
                  placeholder="Расскажите о вашем проекте (необязательно)"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-1 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy-deep transition-colors hover:bg-gold-dark hover:text-white"
              >
                {submitting ? "Отправляем..." : "Отправить заявку"}
              </button>
              {submitError && (
                <p role="alert" className="text-center text-sm text-red-300">
                  {submitError}
                </p>
              )}
              <p className="text-center text-xs text-white/50">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
