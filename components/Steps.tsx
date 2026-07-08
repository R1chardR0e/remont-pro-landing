import { steps } from "@/lib/data";

export function Steps() {
  return (
    <section id="steps" className="wrap py-16 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Этапы работ</h2>
        <p className="mt-3 text-ink-soft">Прозрачный процесс от заявки до сдачи готового объекта</p>
      </div>

      <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        <div
          className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block"
          aria-hidden
        />
        {steps.map((step) => (
          <li key={step.number} className="relative flex flex-col items-center text-center">
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-gold-soft">
              {step.number}
            </span>
            <h3 className="mt-4 font-display font-bold text-navy">{step.title}</h3>
            <p className="mt-1.5 text-sm text-ink-soft">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
