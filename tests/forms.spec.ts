import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
  if (!testInfo.title.startsWith("cookie")) {
    await page.addInitScript(() => localStorage.setItem("cd_cookie_consent", "declined"));
  }
});

test("contact rejects empty and invalid fields before sending", async ({ page }) => {
  let requests = 0;
  await page.route("**/api/contact", route => { requests++; return route.fulfill({ json: { success: true } }); });
  await page.goto("/contact", { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.locator("#first_name:invalid")).toHaveCount(1);
  expect(requests).toBe(0);
  await page.getByLabel("First Name").fill("Test");
  await page.getByLabel("Last Name").fill("Visitor");
  await page.getByLabel("Email Address", { exact: false }).first().fill("invalid-email");
  await page.getByLabel("How can CloudDogg help?").fill("A test inquiry.");
  await page.getByRole("button", { name: "Send message" }).click();
  expect(requests).toBe(0);
});

test("contact handles failures, retry, and success accessibly", async ({ page }) => {
  let attempts = 0;
  await page.route("**/api/contact", route => {
    attempts++;
    return route.fulfill({ status: attempts === 1 ? 503 : 200,
      json: attempts === 1 ? { success: false, message: "Please try again." } : { success: true } });
  });
  await page.goto("/contact", { waitUntil: "domcontentloaded" });
  await page.getByLabel("First Name").fill("Test");
  await page.getByLabel("Last Name").fill("Visitor");
  await page.locator("#email").fill("test@example.com");
  await page.getByLabel("How can CloudDogg help?").fill("A test inquiry.");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("status")).toContainText("Please try again.");
  await expect(page.locator("#email")).toHaveValue("test@example.com");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("status")).toContainText("CloudDogg will reply");
  await expect(page.locator("#email")).toHaveValue("");
});

for (const location of ["footer", "insights", "home"]) {
  test(`${location} newsletter shows failure and allows retry`, async ({ page }) => {
    let attempts = 0;
    await page.route("**/api/newsletter", route => {
      expect(route.request().postDataJSON()).toEqual({ email: "test@example.com" });
      attempts++;
      return route.fulfill({ status: attempts === 1 ? 503 : 200,
        json: attempts === 1 ? { success: false, message: "Subscriptions are temporarily unavailable." } : { success: true } });
    });
    await page.goto(location === "insights" ? "/insights" : "/", { waitUntil: "domcontentloaded" });
    const form = page.locator(location === "footer" ? ".footer-newsletter" : ".newsletter-form");
    await form.getByRole("textbox").fill("test@example.com");
    await form.getByRole("button", { name: "Subscribe" }).click();
    const status = location === "footer" ? page.locator("footer").getByRole("status") : form.getByRole("status");
    await expect(status).toContainText("Subscriptions are temporarily unavailable.");
    await expect(form.getByRole("textbox")).toHaveValue("test@example.com");
    await form.getByRole("button", { name: "Subscribe" }).click();
    await expect(status).toContainText("Subscription request received");
    await expect(form.getByRole("textbox")).toHaveValue("");
  });
}

for (const [button, consent] of [["Accept cookies", "accepted"], ["Decline", "declined"]]) {
  test(`cookie choice ${consent} survives a reload`, async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const dialog = page.getByRole("dialog", { name: "Cookie consent" });
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: button, exact: true }).click();
    await expect(dialog).toBeHidden();
    expect(await page.evaluate(() => localStorage.getItem("cd_cookie_consent"))).toBe(consent);
    // A fresh page reads the stored preference without this page's init scripts.
    await page.context().newPage().then(async freshPage => {
      await freshPage.goto("/", { waitUntil: "domcontentloaded" });
      expect(await freshPage.evaluate(() => localStorage.getItem("cd_cookie_consent"))).toBe(consent);
      await expect(freshPage.getByRole("dialog", { name: "Cookie consent" })).toBeHidden();
      await freshPage.close();
    });
  });
}

test("cookie banner still works when browser storage is blocked", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", { get() { throw new DOMException("Storage blocked", "SecurityError"); } });
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const dialog = page.getByRole("dialog", { name: "Cookie consent" });
  await expect(dialog).toBeVisible();
  await dialog.getByRole("button", { name: "Decline", exact: true }).click();
  await expect(dialog).toBeHidden();
  expect(errors).toEqual([]);
});
