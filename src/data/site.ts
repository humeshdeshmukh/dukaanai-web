import { featureTranslations, siteTranslations } from "./translations";

export const site = {
  name: "Dukaan AI",
  shortName: "Dukaan AI",
  alternateName: ["Dukaan AI", "Dukaan AI Billing App", "दुकान AI खाता ऐप"],
  title: "Best Khata App for Kirana Stores in India | Dukaan AI Billing App",
  description:
    "Dukaan AI is India's first voice-powered AI billing and khata app for kirana stores, wholesalers, and small businesses. Create bills using your voice in 24 Indian languages including Hindi, Marathi, Gujarati, Tamil, and Hinglish.",
  keywords: [
    "khata app", "kirana billing app", "udhaar app", "GST billing", "voice billing", "small business app India", "bahi khata digital", "kirana store software", "Dukaan AI", "smart khata", "shop management software"
  ],
  url: "https://dukaanai.co.in",
  domain: "dukaanai.co.in",
  locale: "en_IN",
  language: "en-IN",
  themeColor: "#195534",
  socialImage: "/images/hero-premium.jpeg",
  category: "BusinessApplication",
  subCategory: "Billing & Accounting",
  playStoreId: "com.dukaan.ai",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.dukaan.ai",
  businessEmail: "dukaanai.business@gmail.com",
  version: "2.4",
  ratingValue: "4.5",
  ratingCount: "1000",
  socialLinks: {
    playStore: "https://play.google.com/store/apps/details?id=com.dukaan.ai",
    youtube: "https://www.youtube.com/@DukaanAi-official",
    instagram: "https://www.instagram.com/dukaan_ai/",
    linkedin: "https://www.linkedin.com/company/dukaan-ai/"
  }
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
    benefits: trans[f.slug]?.benefits || [],
    faqs: trans[f.slug]?.faqs || []
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
