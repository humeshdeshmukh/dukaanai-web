import { en } from "./locales/en";

// The full list of 24 supported Indian languages for the UI display
// Even though the source content is consolidated to English, we maintain the panel
// to reflect the reach and future localization potential of Dukaan AI.
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
  or: "ଓଡ଼િଆ",
  as: "অসমীয়",
  mai: "मैथिಲಿ",
  sat: "संताली",
  ks: "کٲشُر",
  doi: "डोगरी",
  sd: "سنڌि",
  kok: "कोंಕণী",
  mni: "মণিপুরি",
  ne: "नेपाली",
  sa: "संस्कृतम्",
  brx: "बोडो",
};

export const languageCodes = Object.keys(languages);
export const defaultLang = "en";

// Virtual Registry: Only English is imported as a physical file.
// All other regional codes dynamically bridge to English content.
export const ui: Record<string, any> = {
  en,
};

// Unified Translation Registry for Site and Features
export const siteTranslations: Record<string, any> = {};
export const featureTranslations: Record<string, any> = {};

languageCodes.forEach((lang) => {
  // Bridge mechanism: Everything now bridges to English (en).
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
