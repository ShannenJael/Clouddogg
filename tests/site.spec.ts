import { test, expect } from "@playwright/test";
import { articles } from "../lib/site-data";

const routes = ["/", "/about", "/services", "/contact", "/training", "/portfolio",
  "/insights", "/tablet-apps", "/privacy", "/terms", "/cookies",
  ...articles.map(({ slug }) => `/insights/${slug}`)];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("cd_cookie_consent", "declined"));
});

for (const route of routes) {
  test(`${route} loads with working assets, links, and responsive layout`, async ({ page, request }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator("main h1")).toBeVisible();
    await expect(page).toHaveTitle(/CloudDogg/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
    for (const img of await page.locator("img").all()) {
      await img.evaluate(element => element.scrollIntoView({ behavior: "instant" }));
      await expect.poll(() => img.evaluate(element => element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0),
        { message: `Image failed: ${await img.getAttribute("src")}`, timeout: 15_000 }).toBe(true);
    }
    const links = await page.locator("a[href]").evaluateAll(anchors => anchors
      .map(anchor => anchor.getAttribute("href") || "").filter(href => href.startsWith("/") || href.startsWith("#")));
    for (const href of new Set(links)) {
      const url = new URL(href, page.url());
      expect(routes, `Unknown internal route: ${href}`).toContain(url.pathname);
      if (url.pathname === route && url.hash) {
        await expect(page.locator(`[id="${decodeURIComponent(url.hash.slice(1))}"]`)).toHaveCount(1);
      }
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
    const media = await page.locator("video source").evaluateAll(sources => sources.map(source => source.getAttribute("src")!));
    for (const src of media) expect((await request.get(src)).status(), src).toBe(200);
    expect(errors).toEqual([]);
  });
}

test("main navigation follows links and marks the active page", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const toggle = page.getByRole("button", { name: "Toggle navigation" });
  if (await toggle.isVisible()) await toggle.click();
  await page.getByRole("navigation").getByRole("link", { name: "Services", exact: true }).click();
  await expect(page).toHaveURL(/\/services$/);
  if (await toggle.isVisible()) {
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.click();
  }
  await expect(page.getByRole("navigation").getByRole("link", { name: "Services", exact: true }))
    .toHaveAttribute("aria-current", "page");
  if (await toggle.isVisible()) {
    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(await page.locator("body").evaluate(element => element.style.overflow)).toBe("");
  }
});

test("missing pages and articles return 404", async ({ page }) => {
  for (const path of ["/missing-page", "/insights/missing-article"]) {
    expect((await page.goto(path, { waitUntil: "domcontentloaded" }))?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  }
});
