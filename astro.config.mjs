import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dukaanai.co.in",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ],
  build: {
    inlineStylesheets: "always"
  },
  vite: {
    server: {
      host: true
    }
  }
});
