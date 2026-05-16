import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const SSG_EXCLUDED = new Set(["/admin/products", "/design-system", "/*"]);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Bundle CommonJS deps that only ship named exports via ESM-interop into
  // the SSR build so `import { HelmetProvider } from 'react-helmet-async'`
  // works during static rendering in Node.
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  // vite-react-ssg reads this block. `mock: true` provides jsdom-backed
  // `window`/`document`/`localStorage` during static rendering so client code
  // doesn't blow up in Node. Admin & design-system routes are filtered out
  // so they stay CSR-only.
  ssgOptions: {
    script: "async",
    formatting: "none",
    dirStyle: "nested",
    mock: true,
    includedRoutes: (paths: string[]) => paths.filter((p: string) => !SSG_EXCLUDED.has(p)),
  },
}));
