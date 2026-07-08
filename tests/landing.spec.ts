import { test, expect, type Page } from "@playwright/test";

async function waitForHydration(page: Page) {
  await page.waitForFunction(() => {
    const el = document.getElementById("field-name");
    if (!el) return false;
    return Object.keys(el).some(
      (key) => key.startsWith("__reactProps") || key.startsWith("__reactFiber"),
    );
  });
}

test.describe("Лендинг СтройГарант", () => {
  test("страница открывается: заголовок, h1 и все секции на месте", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/СтройГарант/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Ремонт квартир и домов");
    for (const id of ["calculator", "why", "works", "packages", "steps", "reviews", "contacts"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
    await expect(page.locator("#why article")).toHaveCount(6);
    await expect(page.locator("#packages article")).toHaveCount(3);
  });

  test("в консоли нет ошибок при прокрутке всей страницы", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto("/");
    await waitForHydration(page);
    await page.mouse.wheel(0, 20000);
    await page.waitForTimeout(500);
    expect(errors).toEqual([]);
  });

  test("все якорные ссылки ведут на существующие секции", async ({ page }) => {
    await page.goto("/");
    const broken = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
        .map((a) => a.getAttribute("href")!)
        .filter((href) => href.length > 1 && !document.getElementById(href.slice(1))),
    );
    expect(broken).toEqual([]);
  });

  test("навигация в шапке прокручивает к секции", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page.getByRole("navigation", { name: "Основная навигация" }).getByText("Пакеты ремонта").click();
    await expect(page).toHaveURL(/#packages$/);
    await expect
      .poll(async () => page.locator("#packages").evaluate((el) => Math.abs(el.getBoundingClientRect().top)))
      .toBeLessThan(200);
  });

  test("мобильное меню открывается и закрывается бургером", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const menu = page.locator("#mobile-menu");
    await expect(menu).toHaveCount(0);
    await page.getByRole("button", { name: "Открыть меню" }).click();
    await expect(menu).toBeVisible();
    await page.getByRole("button", { name: "Закрыть меню" }).click();
    await expect(menu).toHaveCount(0);
  });

  test("калькулятор пересчитывает стоимость при изменении параметров", async ({ page }) => {
    await page.goto("/");
    const result = page.locator("#calculator-result");
    const initial = await result.textContent();

    await page.locator("#field-area").fill("100");
    await page.locator("#field-renovation-type").selectOption("premium");
    await expect(result).toHaveText("от 1 350 000 ₽");
    expect(await result.textContent()).not.toBe(initial);

    await page.locator("#field-option-design").check();
    await expect(result).toHaveText("от 1 430 000 ₽");
  });

  test("карточки пакетов ведут к блоку контактов", async ({ page }) => {
    await page.goto("/");
    await page.locator("#packages").getByRole("link", { name: "Выбрать пакет" }).first().click();
    await expect(page).toHaveURL(/#contacts$/);
  });

  test("пустая форма заявки показывает ошибки валидации", async ({ page }) => {
    await page.goto("/");
    await waitForHydration(page);
    await page.locator("#contacts").scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Отправить заявку" }).click();
    await expect(page.locator("#error-name")).toBeVisible();
    await expect(page.locator("#error-phone")).toBeVisible();
    await expect(page.locator("#field-name")).toBeFocused();
  });

  test("валидная форма отправляется и показывает подтверждение", async ({ page }) => {
    await page.goto("/");
    await waitForHydration(page);
    await page.locator("#contacts").scrollIntoViewIfNeeded();
    await page.locator("#field-name").fill("Иван Иванов");
    await page.locator("#field-phone").fill("+7 (999) 123-45-67");
    await page.getByRole("button", { name: "Отправить заявку" }).click();
    await expect(page.getByText("Заявка отправлена")).toBeVisible();
  });

  test("слайдер до/после двигается перетаскиванием и с клавиатуры", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await waitForHydration(page);
    const handle = page.locator('#works [role="slider"]').first();
    await handle.scrollIntoViewIfNeeded();
    const start = Number(await handle.getAttribute("aria-valuenow"));

    // перетаскивание мышью вправо
    const box = (await handle.boundingBox())!;
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + 80, box.y + box.height / 2, { steps: 5 });
    await page.mouse.up();
    const afterDrag = Number(await handle.getAttribute("aria-valuenow"));
    expect(afterDrag).toBeGreaterThan(start);

    // управление с клавиатуры
    await handle.focus();
    await page.keyboard.press("ArrowLeft");
    const afterKey = Number(await handle.getAttribute("aria-valuenow"));
    expect(afterKey).toBeLessThan(afterDrag);
  });

  test("галерея до/после прокручивается стрелками", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    const track = page.locator("#works .snap-x");
    const before = await track.evaluate((el) => el.scrollLeft);
    await page.getByRole("button", { name: "Следующие работы" }).click();
    await page.waitForTimeout(500);
    const after = await track.evaluate((el) => el.scrollLeft);
    expect(after).toBeGreaterThan(before);
  });

  test("быстрые ссылки на WhatsApp и Telegram присутствуют", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('a[href^="https://wa.me/"]').first()).toBeAttached();
    await expect(page.locator('a[href^="https://t.me/"]').first()).toBeAttached();
  });
});
