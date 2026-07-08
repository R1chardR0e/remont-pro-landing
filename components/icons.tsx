export type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3l7 3v5.5c0 4.6-3 8.4-7 9.5-4-1.1-7-4.9-7-9.5V6l7-3z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconReceipt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 3.5h12v17l-2.5-1.5-2 1.5-1.5-1.5-2 1.5-2-1.5L6 20.5v-17z" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5" />
    </svg>
  );
}

export function IconCrew({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="9" cy="8" r="2.6" />
      <path d="M4 19c0-2.9 2.2-5 5-5s5 2.1 5 5" />
      <circle cx="17" cy="9" r="2.1" />
      <path d="M14.7 14.3c2.3.4 3.8 2.2 3.8 4.7" />
    </svg>
  );
}

export function IconReport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8 14.5l2.5-3 2.3 2 3.2-4.5" />
    </svg>
  );
}

export function IconContract({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 3.5h8l3 3v13.5H7v-16.5z" />
      <path d="M15 3.5v3h3" />
      <path d="M9.5 12.5h5M9.5 15.5h5" />
      <path d="M9.5 9.5h2.5" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconStar({ className, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    >
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5z" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5.5 4.5h3l1.5 4-2 1.5a11 11 0 006 6l1.5-2 4 1.5v3c0 1-1 1.8-2 1.6-8-1.4-13.6-7-15-15-.2-1 .6-2 1.6-2z" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 1113 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconChevronLeft({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4.5 12h15M13.5 5.5L20 12l-6.5 6.5" />
    </svg>
  );
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.5A9.4 9.4 0 003.4 16l-1.2 5.5 5.6-1.5A9.4 9.4 0 1012 2.5zm5.5 13.3c-.2.6-1.3 1.2-1.9 1.3-.5.1-1.1.1-1.8-.1a15 15 0 01-5.6-4c-1.6-1.9-1.9-2.7-1.9-3.5 0-.9.6-1.7 1-2 .3-.3.6-.4.9-.4h.6c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.4 0 .7.5.9 1.2 1.7 2 2.2.3.2.5.3.7.1l.7-.6c.2-.2.4-.2.6-.1l1.9 1c.2.1.4.2.4.4.1.3.1.9-.1 1.4z" />
    </svg>
  );
}

export function IconTelegram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21 4.5L3.6 11.3c-1 .4-1 1.6.1 1.9l4.2 1.3 1.6 5c.2.7 1.1.9 1.6.4l2.4-2.3 4.4 3.3c.7.5 1.7.1 1.9-.7l3-16c.2-1-.8-1.8-1.8-1.5zm-3.4 3.2l-7.6 6.9c-.2.2-.3.5-.3.8l.3 2.5-1.2-3.9c-.1-.4 0-.8.4-1l8.2-5.5c.2-.1.4.1.2.2z" />
    </svg>
  );
}

export function IconVk({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3.5 5c-.3 1.7-.2 9.4 6.7 12.8 5 2.4 8.5 1.3 9.3.9.5-.2.6-.9.5-1.3-.2-1-1.4-2.8-2.7-3.9-.4-.3-.5-.6-.3-1 .2-.4 1.7-2.4 2-3.2.2-.5 0-.9-.6-.9h-2.1c-.4 0-.6.2-.8.6-.6 1.4-1.8 3.2-2.5 3.2-.4 0-.6-.3-.6-1V9c0-.6-.2-.9-.7-.9H8.9c-.3 0-.5.2-.5.5 0 .6.9.7.9 2.3v2.4c0 .7-.1.9-.4.9-.8 0-2.4-1.9-3.4-4.2-.2-.5-.4-.7-.9-.7H2.5c-.6 0-.7.3-.7.6z" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function IconRuler({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="8.5" width="17" height="7" rx="1.5" transform="rotate(-8 12 12)" />
      <path d="M7.6 9.6l.6 2M11.4 9l.6 2M15.2 8.4l.6 2" />
    </svg>
  );
}

export function IconPaintRoller({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="4" y="4.5" width="13" height="5.5" rx="1.3" />
      <path d="M9 10v3.5h3V19" />
      <rect x="9.5" y="13" width="5" height="3.2" rx="0.8" />
    </svg>
  );
}

export function IconSliders({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 6h9M17 6h3M4 12h3M9 12h11M4 18h13M20 18h0" />
      <circle cx="11.5" cy="6" r="1.8" fill="currentColor" />
      <circle cx="6.5" cy="12" r="1.8" fill="currentColor" />
      <circle cx="15.5" cy="18" r="1.8" fill="currentColor" />
    </svg>
  );
}

export const whyUsIconMap = {
  shield: IconShield,
  clock: IconClock,
  receipt: IconReceipt,
  crew: IconCrew,
  report: IconReport,
  contract: IconContract,
};
