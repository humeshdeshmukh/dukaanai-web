import { featureTranslations, siteTranslations } from "./translations";

export const site = {
  name: "Dukaan AI",
  shortName: "Dukaan AI",
  alternateName: [
    "Dukaan AI", "Dukaan AI Billing App", "दुकान AI खाता ऐप",
    "Dukaan App", "दुकान ऐप", "किराना बिलिंग ऐप", "Kirana AI App",
    "Kirana Billing App", "Voice Khata App", "Free Khata App India"
  ],
  title: "#1 Free Voice Billing & Khata App for Kirana Store | Dukaan AI India",
  description:
    "Dukaan AI — India's #1 free voice billing app for kirana stores. Manage udhaar khata, GST invoices & inventory in 24 Indian languages. 100% offline. Better than Khatabook & Vyapar. Download free on Android.",
  keywords: [
    "kirana shop billing software hindi",
    "retail billing app india",
    "dukan khata app download",
    "voice billing for small business india",
    "easy business accounting app hindi",
    "best hindi billing software kirana",
    "free retail inventory management india",
    "shop bill book app download",
    "wholesale billing solution india",
    "AI billing for indian shops",
    "voice billing app kirana store",
    "AI billing app for small shop India",
    "offline khata app kirana",
    "khata app for kirana store",
    "free udhaar khata app Android",
    "GST billing app kirana store free",
    "digital bahi khata app India",
    "best khata app India 2026",
    "kirana store billing software",
    "inventory management app kirana",
    "khatabook alternative for kirana store",
    "vyapar alternative free android",
    "okCredit alternative India",
    "mybillbook alternative free",
    "dukaan billing app download",
    "free udhaar app without internet",
    "voice kirana app hindi",
    "kirana shop management app ai",
    "bahi khata app android free",
    "best billing app small shop india 2026",
    "chhoti dukaan billing app",
    "GST invoice free kirana app",
    "udhar bahi khata app for shop",
    "free GST billing software small business india",
    "kirana store management software free",
    "Dukaan AI"
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

export interface HighlightItem {
  name: string;
  type?: string;
  description: string;
}

export function getHighlights(lang: string): HighlightItem[] {
  return siteTranslations[lang]?.highlights || siteTranslations.en.highlights;
}

export function getBenefits(lang: string) {
  return siteTranslations[lang]?.benefits || siteTranslations.en.benefits;
}

export function getFaqs(lang: string) {
  return siteTranslations[lang]?.faqs || siteTranslations.en.faqs;
}

