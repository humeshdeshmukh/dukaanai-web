import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://dukaanai.co.in",
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: [
      "en", "hi", "mr", "bn", "pa", "gu", "ta", "te", "kn", "ml", 
      "or", "as", "mai", "sat", "ks", "doi", "sd", "kok", "mni", "ne", "sa", "ur", "hinglish"
    ],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "redirect"
    }
  },
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
