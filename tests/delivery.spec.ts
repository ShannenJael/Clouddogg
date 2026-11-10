import { test, expect } from "@playwright/test";

test.describe("real API and SMTP integration", () => {
  test.describe.configure({ mode: "serial" });
  test.beforeEach(async ({ request }) => {
    test.skip(!!process.env.PLAYWRIGHT_BASE_URL,
      "Mail delivery runs only against the local test mailbox.");
    await request.post("http://127.0.0.1:3132/reset");
    await request.delete("http://127.0.0.1:3132/messages");
  });

  test("contact and newsletter requests reach the inbox before success", async ({ request }) => {
    const contact = await request.post("/api/contact", { data: {
      first_name: " Test ", last_name: " Visitor ", email: "test@example.com", message: "Local delivery test.",
    } });
    expect(contact.status()).toBe(200);
    expect((await contact.json()).success).toBe(true);
    const newsletter = await request.post("/api/newsletter", { data: { email: "subscriber@example.com" } });
    expect(newsletter.status()).toBe(200);
    expect((await newsletter.json()).success).toBe(true);
    const messages = await (await request.get("http://127.0.0.1:3132/messages")).json();
    expect(messages).toHaveLength(2);
    expect(messages[0].recipients).toEqual(["service@clouddogg.com"]);
    expect(messages[0].data).toContain("Name: Test Visitor");
    expect(messages[0].data).toContain("Reply-To: test@example.com");
    expect(messages[1].data).toContain("subscriber@example.com");
  });

  test("SMTP rejection never reports success", async ({ request }) => {
    await request.post("http://127.0.0.1:3132/fail");
    try {
      for (const [path, data] of [
        ["/api/contact", { first_name: "Test", last_name: "Visitor", email: "test@example.com", message: "Test" }],
        ["/api/newsletter", { email: "subscriber@example.com" }],
      ] as const) {
        const response = await request.post(path, { data });
        expect(response.status()).toBe(502);
        expect((await response.json()).success).toBe(false);
      }
    } finally {
      await request.post("http://127.0.0.1:3132/reset");
    }
  });
});
