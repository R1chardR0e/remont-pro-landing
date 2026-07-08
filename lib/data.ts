export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Преимущества", href: "#why" },
  { label: "Пакеты ремонта", href: "#packages" },
  { label: "Этапы работ", href: "#steps" },
  { label: "Наши работы", href: "#works" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export const heroStats = [
  { value: "12 лет", label: "на рынке ремонта" },
  { value: "640+", label: "сданных объектов" },
  { value: "97%", label: "клиентов рекомендуют нас" },
  { value: "от 9 дней", label: "срок косметического ремонта" },
];

export const heroFeatures = [
  "Работаем по договору",
  "Фиксированная смета",
  "Гарантия до 5 лет",
];

export interface WhyUsItem {
  icon: "shield" | "clock" | "receipt" | "crew" | "report" | "contract";
  title: string;
  text: string;
}

export const whyUsItems: WhyUsItem[] = [
  {
    icon: "shield",
    title: "Гарантия до 5 лет",
    text: "Официальная гарантия на все виды работ, закреплённая в договоре.",
  },
  {
    icon: "clock",
    title: "Точно в срок",
    text: "Фиксируем даты в графике и платим неустойку за каждый день просрочки.",
  },
  {
    icon: "receipt",
    title: "Фиксированная смета",
    text: "Цена не меняется после подписания договора — никаких доплат «по факту».",
  },
  {
    icon: "crew",
    title: "Свои бригады",
    text: "Работаем без субподрядчиков, на объекте — авторский надзор прораба.",
  },
  {
    icon: "report",
    title: "Прозрачная отчётность",
    text: "Фото- и видеоотчёты по каждому этапу доступны в личном кабинете.",
  },
  {
    icon: "contract",
    title: "Работаем по договору",
    text: "Официальное оформление, чеки и закрывающие документы на каждом этапе.",
  },
];

export interface BeforeAfterItem {
  id: string;
  title: string;
  meta: string;
  before: string;
  after: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "kitchen",
    title: "Кухня",
    meta: "Капитальный ремонт · 14 м²",
    before: "/images/ba-kitchen-before.png",
    after: "/images/ba-kitchen-after.jpg",
  },
  {
    id: "bathroom",
    title: "Ванная комната",
    meta: "Премиум ремонт · 6 м²",
    before: "/images/ba-bathroom-before.png",
    after: "/images/ba-bathroom-after.jpg",
  },
  {
    id: "living",
    title: "Гостиная",
    meta: "Капитальный ремонт · 22 м²",
    before: "/images/ba-living-before.png",
    after: "/images/ba-living-after.jpg",
  },
  {
    id: "bedroom",
    title: "Спальня",
    meta: "Премиум ремонт · 16 м²",
    before: "/images/ba-bedroom-before.png",
    after: "/images/ba-bedroom-after.jpg",
  },
];

export interface Package {
  id: "cosmetic" | "capital" | "premium";
  title: string;
  priceFrom: number;
  term: string;
  popular?: boolean;
  image: string;
  imageAlt: string;
  features: string[];
}

export const packages: Package[] = [
  {
    id: "cosmetic",
    title: "Косметический",
    priceFrom: 3900,
    term: "от 12 дней",
    image: "/images/pkg-cosmetic.jpg",
    imageAlt: "Светлая гостиная после косметического ремонта",
    features: [
      "Покраска стен и потолков",
      "Замена напольного покрытия",
      "Косметическая отделка санузла",
      "Установка розеток и выключателей",
      "Уборка после ремонта",
    ],
  },
  {
    id: "capital",
    title: "Капитальный",
    priceFrom: 7800,
    term: "от 25 дней",
    popular: true,
    image: "/images/pkg-capital.jpg",
    imageAlt: "Кухня с белыми фасадами после капитального ремонта",
    features: [
      "Демонтаж и перепланировка",
      "Черновые и чистовые работы",
      "Полная замена коммуникаций",
      "Дизайн-проект в подарок",
      "Авторский надзор прораба",
      "Уборка после ремонта",
    ],
  },
  {
    id: "premium",
    title: "Премиум",
    priceFrom: 13500,
    term: "от 35 дней",
    image: "/images/pkg-premium.jpg",
    imageAlt: "Просторная гостиная-кухня после премиального ремонта",
    features: [
      "Индивидуальный дизайн-проект",
      "Премиальные материалы и техника",
      "Умный дом под ключ",
      "Авторский надзор архитектора",
      "Расширенная гарантия 5 лет",
      "Клининг и текстиль в подарок",
    ],
  },
];

export interface Step {
  number: string;
  title: string;
  text: string;
}

export const steps: Step[] = [
  { number: "01", title: "Заявка", text: "Оставляете заявку на сайте или по телефону" },
  { number: "02", title: "Замер", text: "Выезд специалиста и бесплатная консультация" },
  { number: "03", title: "Смета и договор", text: "Фиксируем цену, сроки и объём работ" },
  { number: "04", title: "Ремонт по графику", text: "Работаем по плану с фотоотчётами" },
  { number: "05", title: "Сдача объекта", text: "Приёмка, устранение замечаний, гарантия" },
];

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  meta: string;
  avatar: string;
  thumbs: string[];
}

export const testimonials: Testimonial[] = [
  {
    name: "Александр Петров",
    rating: 5,
    text: "Сделали капитальный ремонт двухкомнатной квартиры за 4 недели. Смета не изменилась ни на рубль, все сроки из графика соблюдены.",
    meta: "Капитальный ремонт · 58 м²",
    avatar: "/images/avatar-1.jpg",
    thumbs: ["/images/ba-kitchen-after.jpg", "/images/ba-living-after.jpg", "/images/ba-bathroom-after.jpg"],
  },
  {
    name: "Мария Иванова",
    rating: 5,
    text: "Очень довольна результатом. Прораб присылал фотоотчёт каждый день, все вопросы решались быстро и без нервов.",
    meta: "Косметический ремонт · 42 м²",
    avatar: "/images/avatar-2.jpg",
    thumbs: ["/images/ba-living-after.jpg", "/images/pkg-cosmetic.jpg", "/images/ba-bedroom-after.jpg"],
  },
  {
    name: "Дмитрий Соколов",
    rating: 5,
    text: "Заказывали ремонт дома под ключ с дизайн-проектом. Результат превзошёл ожидания, качество отделки на высоте.",
    meta: "Премиум ремонт · 140 м²",
    avatar: "/images/avatar-3.jpg",
    thumbs: ["/images/pkg-premium.jpg", "/images/ba-bedroom-after.jpg", "/images/ba-bathroom-after.jpg"],
  },
  {
    name: "Елена Кузнецова",
    rating: 4,
    text: "Хорошая команда, аккуратно работали даже в жилой квартире по соседству. Небольшая задержка была компенсирована по договору.",
    meta: "Капитальный ремонт · 34 м²",
    avatar: "/images/avatar-4.jpg",
    thumbs: ["/images/pkg-capital.jpg", "/images/ba-kitchen-after.jpg", "/images/ba-living-after.jpg"],
  },
];

export interface ObjectTypeOption {
  id: string;
  label: string;
  multiplier: number;
}

export const objectTypes: ObjectTypeOption[] = [
  { id: "flat", label: "Квартира", multiplier: 1 },
  { id: "house", label: "Дом", multiplier: 1.15 },
  { id: "office", label: "Офис / коммерция", multiplier: 1.1 },
];

export interface RenovationTypeOption {
  id: string;
  label: string;
  pricePerM2: number;
}

export const renovationTypes: RenovationTypeOption[] = [
  { id: "cosmetic", label: "Косметический", pricePerM2: 3900 },
  { id: "capital", label: "Капитальный", pricePerM2: 7800 },
  { id: "premium", label: "Премиум", pricePerM2: 13500 },
];

export interface CalculatorOption {
  id: string;
  label: string;
  pricePerM2: number;
}

export const calculatorOptions: CalculatorOption[] = [
  { id: "design", label: "Дизайн-проект", pricePerM2: 800 },
  { id: "plumbing", label: "Замена сантехники", pricePerM2: 500 },
  { id: "electric", label: "Электромонтаж люкс", pricePerM2: 650 },
];

export const includedInPrice = [
  "Материалы для черновых работ",
  "Работа бригады и прораба",
  "Вывоз строительного мусора",
  "Фиксация цены в договоре",
];

