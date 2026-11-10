import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  // These brand assets intentionally use their original URLs on every host.
  { rules: { "@next/next/no-img-element": "off" } },
  globalIgnores([".next/**", ".netlify/**", ".cache/**", "playwright-report/**", "test-results/**", "next-env.d.ts"]),
]);
