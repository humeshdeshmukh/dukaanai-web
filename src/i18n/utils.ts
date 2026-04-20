import { ui, defaultLang } from "./ui";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    const translations = ui[lang] || ui[defaultLang];
    return translations[key] || ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
