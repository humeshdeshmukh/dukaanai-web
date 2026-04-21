import { en } from "./locales/en";
import { hi } from "./locales/hi";
import { mr } from "./locales/mr";
import { bn } from "./locales/bn";
import { ta } from "./locales/ta";
import { te } from "./locales/te";
import { gu } from "./locales/gu";
import { kn } from "./locales/kn";
import { pa } from "./locales/pa";
import { ml } from "./locales/ml";
import { ur } from "./locales/ur";
import { or } from "./locales/or";
import { as } from "./locales/as";
import { mai } from "./locales/mai";
import { doi } from "./locales/doi";
import { sd } from "./locales/sd";
import { kok } from "./locales/kok";
import { ne } from "./locales/ne";
import { sa } from "./locales/sa";
import { hinglish } from "./locales/hinglish";

// The list of supported and translated Indian languages for the UI display
export const languages: Record<string, string> = {
  en: "English",
  hi: "हिन्दी",
  mr: "मराठी",
  hinglish: "Hinglish",
  bn: "বাংলা",
  ta: "தமிழ்",
  te: "తెలుగు",
  gu: "ગુજરાતી",
  kn: "ಕನ್ನಡ",
  pa: "ਪੰਜਾਬੀ",
  ml: "മലയാളം",
  ur: "اردو",
  or: "ଓଡ଼ିଆ",
  as: "অসমীয়",
  mai: "मैथिली",
  doi: "डोगरी",
  sd: "سنڌि",
  kok: "कोंಕণী",
  ne: "नेपाली",
  sa: "संस्कृतम्",
};

export const languageCodes = Object.keys(languages);
export const defaultLang = "en";

// Registry of physically translated files.
export const ui: Record<string, any> = {
  en,
  hi,
  mr,
  bn,
  ta,
  te,
  gu,
  kn,
  pa,
  ml,
  ur,
  or,
  as,
  mai,
  doi,
  sd,
  kok,
  ne,
  sa,
  hinglish
};

// Unified Translation Registry for Site and Features
export const siteTranslations: Record<string, any> = {};
export const featureTranslations: Record<string, any> = {};

languageCodes.forEach((lang) => {
  // Bridge mechanism: Fallback to English (en) if a translation is missing
  const locale = ui[lang] || ui.en;

  // Map feature-specific content
  featureTranslations[lang] = locale.features_data;

  // Map site-wide global content back to the engine
  siteTranslations[lang] = {
    highlights: locale.site_highlights || ui.en.site_highlights,
    benefits: locale.site_benefits || ui.en.site_benefits,
    faqs: locale.site_faqs || ui.en.site_faqs,
  };
});
