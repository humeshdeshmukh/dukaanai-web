import { featureTranslations, siteTranslations } from "./translations";

export const site = {
  name: "Dukaan AI",
  shortName: "Dukaan AI",
  alternateName: "Dukaan AI App",
  title: "Dukaan AI | Smart Khata & Voice Billing for Indian Shops",
  description:
    "Dukaan AI is an AI business assistant for kirana stores. Manage smart khata, voice billing, bill scanning, and orders with ease in 24 Indian languages.",
  keywords: [
    "Dukaan AI", "kirana store management app", "smart khata app", "voice billing app", "bill scanner app", "udhaar management", "retail management software India"
  ],
  url: "https://dukaanai.co.in",
  domain: "dukaanai.co.in",
  locale: "en_IN",
  language: "en-IN",
  themeColor: "#195534",
  socialImage: "/images/hero-premium.jpeg",
  category: "BusinessApplication",
  playStoreId: "com.dukaan.ai",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.dukaan.ai",
  businessEmail: "dukaanai.business@gmail.com"
};

export interface FeatureItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  benefits?: { title: string; text: string }[];
  faqs?: { question: string; answer: string }[];
}

const baseFeatures: FeatureItem[] = [
  { slug: "bookkeeping", title: "Dukaan AI Daily Bookkeeping", description: "Track daily sales and profit margins.", image: "/images/bookkeeping.png", badge: "Profit Tracking" },
  { slug: "smart-khata", title: "Dukaan AI Smart Khata", description: "Securely manage udhaar and payments.", image: "/images/smart-khata.png", badge: "Udhaar Manager" },
  { slug: "voice-billing", title: "Dukaan AI Voice Billing", description: "Generate bills by just speaking.", image: "/images/voice-billing.png", badge: "Voice Power" },
  { slug: "bill-verification", title: "Dukaan AI Bill Scanner", description: "Extract items from wholesaler bills.", image: "/images/bill-verification.png", badge: "AI Scanner" },
  { slug: "orders-management", title: "Dukaan AI Order Manager", description: "Plan stock and send WhatsApp orders.", image: "/images/orders-management.png", badge: "Order Ready" },
  { slug: "scan-list", title: "Dukaan AI Scan List", description: "Digitize handwritten parchis instantly.", image: "/images/scan-list.png", badge: "Digital List" }
];

export function getFeatures(lang: string): FeatureItem[] {
  const trans = featureTranslations[lang] || featureTranslations.en;
  return baseFeatures.map(f => ({
    ...f,
    title: trans[f.slug]?.title || f.title,
    badge: trans[f.slug]?.badge || f.badge,
    description: trans[f.slug]?.description || f.description,
    // Add default benefits/faqs from EN if not in translation object yet
    benefits: [
      { title: "Easy to use", text: "Designed for Indian shopkeepers with simple interfaces." },
      { title: "24 Languages", text: "Works in your local language seamlessly." }
    ],
    faqs: [
      { question: `How does it work?`, answer: `You can use this feature directly from the Dukaan AI mobile app.` }
    ]
  }));
}

export function getHighlights(lang: string) {
  return siteTranslations[lang]?.highlights || siteTranslations.en.highlights;
}

export function getBenefits(lang: string) {
  return siteTranslations[lang]?.benefits || siteTranslations.en.benefits;
}

export function getFaqs(lang: string) {
  return siteTranslations[lang]?.faqs || siteTranslations.en.faqs;
}
