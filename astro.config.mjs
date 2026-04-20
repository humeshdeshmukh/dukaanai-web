import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://dukaanai.co.in",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["gtag", "dataLayer.push"]
      }
    })
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
