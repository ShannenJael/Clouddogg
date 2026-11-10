# CloudDogg

Next.js website for CloudDogg, deployed at https://clouddogg.com.

## Local development

Use Node.js 22 or later.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Copy `.env.example` to `.env.local` and configure SMTP to test mail delivery outside the automated test suite. Never commit credentials.

Manrope and Space Grotesk are bundled in `app/fonts` with their Open Font Licenses, so builds do not need access to Google Fonts.

## Checks

```bash
npm run lint
npm run build
npm run typecheck
npx playwright install chromium firefox webkit
npm run test:e2e
```

Playwright starts the production build on port 3100 and a loopback-only test mailbox on ports 3131 and 3132. It covers all public pages and articles in Chromium, Firefox, WebKit, iPad, and Android viewports, including links, images, video sources, navigation, form validation and retries, cookie preferences, 404s, API validation, and SMTP delivery. Test email stays in the local mailbox and is never sent externally.

Use `npm run test:report` to view the HTML report. GitHub Actions runs the same checks and retains the report for seven days.

To test an existing deployment in PowerShell:

```powershell
$env:PLAYWRIGHT_BASE_URL = "https://clouddogg.com"
npm run test:e2e
```

Local SMTP integration tests are skipped for external URLs. Browser form submissions use mocked responses; API validation submits only invalid requests. Production testing does not generate real inquiries or subscription requests.

## Mail delivery

Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` in the server environment. Port 465 uses implicit TLS; port 587 negotiates STARTTLS. Contact messages go to `service@clouddogg.com` with the visitor as Reply-To.

Newsletter requests are delivered to the same inbox for manual subscription management. They do not automatically enroll the visitor in a marketing service. The UI confirms receipt only after SMTP accepts the request. Missing configuration or delivery failures return an error and preserve the visitor's input.

## Docker

Copy `.env.example` to `.env`, fill in SMTP settings, then run:

```bash
docker compose up --build -d
```

Open http://localhost:8084. The image uses Next.js standalone output and runs as a non-root user. Compose passes SMTP values from `.env` or the shell into the running container.

## Production hosting

The existing Netlify project is `lucky-lamington-e14775` (site ID `2c6e2459-a831-4333-a349-92cdf95a5a4a`), serving https://clouddogg.com. Its build uses Node.js 22, `npm run build`, and the Next.js adapter for server routes.

After the checks pass, link the existing site and deploy both static assets and server functions:

```bash
netlify link --id 2c6e2459-a831-4333-a349-92cdf95a5a4a
netlify deploy --build --prod
```

Keep production SMTP settings in Netlify's production environment. GitHub source is at https://github.com/ShannenJael/Clouddogg; a GitHub push alone is not a production deployment for this Netlify project.
