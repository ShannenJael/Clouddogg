import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.platform === "win32" ? 1 : 3,
  timeout: 60_000,
  reporter: [["list"], ["html", { open: "never" }]],
  use: { baseURL, trace: "retain-on-failure", screenshot: "only-on-failure" },
  projects: [
    { name: "api", testMatch: /(?:api|delivery)\.spec\.ts/ },
    ...[
      { name: "desktop", use: { ...devices["Desktop Chrome"] } },
      { name: "firefox", use: { ...devices["Desktop Firefox"] } },
      { name: "safari", use: { ...devices["Desktop Safari"] } },
      { name: "tablet", use: { ...devices["iPad (gen 7)"] } },
      { name: "mobile", use: { ...devices["Pixel 7"] } },
    ].map(project => ({ ...project, testIgnore: /(?:api|delivery)\.spec\.ts/ })),
  ],
  webServer: process.env.PLAYWRIGHT_BASE_URL ? undefined : [{
    command: "node tests/mail-server.mjs",
    url: "http://127.0.0.1:3132/health",
    reuseExistingServer: false,
  }, {
    command: "node tests/start-server.mjs",
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
    env: { SMTP_HOST: "127.0.0.1", SMTP_PORT: "3131", SMTP_USER: "website@example.test", SMTP_PASS: "local-test-only" },
  }],
});
