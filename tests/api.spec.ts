import { test, expect } from "@playwright/test";

test.describe("API request validation", () => {
  for (const endpoint of ["contact", "newsletter"]) {
    for (const body of ["{", "null", "[]", '"text"', '{"email":123}', '{"email":["test@example.com"]}']) {
      test(`${endpoint} rejects malformed request ${body}`, async ({ request }) => {
        const response = await request.post(`/api/${endpoint}`, { data: Buffer.from(body), headers: { "Content-Type": "application/json" } });
        expect(response.status()).toBe(400);
        expect((await response.json()).success).toBe(false);
      });
    }
  }
  test("contact rejects invalid email and whitespace-only names", async ({ request }) => {
    for (const data of [
      { first_name: "Test", last_name: "Visitor", email: "bad-email", message: "Test message" },
      { first_name: "  ", last_name: "Visitor", email: "test@example.com", message: "Test message" },
      { first_name: "Test", last_name: "Visitor", email: "test@example.com", message: "  " },
    ]) expect((await request.post("/api/contact", { data })).status()).toBe(400);
  });
});
