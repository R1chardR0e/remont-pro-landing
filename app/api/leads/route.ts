import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  objectType?: unknown;
  comment?: unknown;
};

let cachedAdminChatId: string | null = null;

function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function telegramRequest<T>(method: string, body?: Record<string, unknown>): Promise<T> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    throw new Error("TELEGRAM_BOT_TOKEN is not configured");
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: body ? "POST" : "GET",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  const data = (await response.json()) as T & { ok?: boolean; description?: string };
  if (!response.ok || data.ok === false) {
    throw new Error(data.description || `Telegram API error: ${response.status}`);
  }

  return data;
}

async function resolveAdminChatId() {
  if (process.env.TELEGRAM_ADMIN_CHAT_ID) return process.env.TELEGRAM_ADMIN_CHAT_ID;
  if (cachedAdminChatId) return cachedAdminChatId;

  const data = await telegramRequest<{
    ok: boolean;
    result: Array<{
      update_id: number;
      message?: {
        text?: string;
        chat?: { id?: number | string };
        from?: { is_bot?: boolean };
      };
    }>;
  }>("getUpdates?limit=100&allowed_updates=%5B%22message%22%5D");

  const firstStart = data.result
    .filter((update) => {
      const text = update.message?.text?.trim() || "";
      return text.startsWith("/start") && update.message?.chat?.id && !update.message?.from?.is_bot;
    })
    .sort((a, b) => a.update_id - b.update_id)[0];

  const chatId = firstStart?.message?.chat?.id;
  if (!chatId) return null;

  cachedAdminChatId = String(chatId);
  return cachedAdminChatId;
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ message: "Некорректный формат заявки" }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const phone = clean(payload.phone, 80);
  const objectType = clean(payload.objectType, 120) || "Не указан";
  const comment = clean(payload.comment, 1200);

  if (name.length < 2 || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ message: "Проверьте имя и телефон" }, { status: 400 });
  }

  try {
    const chatId = await resolveAdminChatId();
    if (!chatId) {
      return NextResponse.json(
        { message: "Администратор ещё не запустил Telegram-бота" },
        { status: 503 },
      );
    }

    const createdAt = new Intl.DateTimeFormat("ru-RU", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Europe/Moscow",
    }).format(new Date());

    const text = [
      "<b>Новая заявка с сайта СтройГарант</b>",
      "",
      `<b>Имя:</b> ${escapeHtml(name)}`,
      `<b>Телефон:</b> ${escapeHtml(phone)}`,
      `<b>Тип объекта:</b> ${escapeHtml(objectType)}`,
      comment ? `<b>Комментарий:</b> ${escapeHtml(comment)}` : "<b>Комментарий:</b> не указан",
      "",
      `<b>Время:</b> ${escapeHtml(createdAt)} МСК`,
    ].join("\n");

    await telegramRequest("sendMessage", {
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Не удалось отправить заявку. Попробуйте позже." },
      { status: 500 },
    );
  }
}
