export const site = {
  name: "Dukaan AI",
  shortName: "Dukaan AI",
  alternateName: "Dukaan AI App",
  title: "Dukaan AI | Smart Khata & Voice Billing for Indian Shops",
  description:
    "Dukaan AI is an AI business assistant for kirana stores. Manage smart khata, voice billing, bill scanning, and orders with ease in 24 Indian languages.",
  keywords: [
    "Dukaan AI",
    "kirana store management app",
    "smart khata app",
    "voice billing app",
    "bill scanner app",
    "udhaar management app",
    "retail management software India",
    "shop billing app",
    "inventory and order management app",
    "small business app India"
  ],
  url: "https://dukaanai.co.in",
  domain: "dukaanai.co.in",
  locale: "en_IN",
  language: "en-IN",
  themeColor: "#195534",
  socialImage: "/images/hero-premium.jpeg",
  category: "BusinessApplication",
  playStoreId: "com.dukaan.ai",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.dukaan.ai",
  businessEmail: "dukaanai.business@gmail.com"
};

export const features = [
  {
    slug: "bookkeeping",
    title: "Dukaan AI Bookkeeping",
    description:
      "Track daily sales, profits, margins, and business performance with simple charts and AI-powered insights.",
    image: "/images/bookkeeping.png",
    badge: "Profit Tracking"
  },
  {
    slug: "smart-khata",
    title: "Dukaan AI Smart Khata",
    description:
      "Replace your paper bahi khata with a secure digital ledger for customer credit, payments, and balance tracking.",
    image: "/images/smart-khata.png",
    badge: "Udhaar Management"
  },
  {
    slug: "voice-billing",
    title: "Dukaan AI Voice Billing",
    description:
      "Create bills by speaking item names and quantities in natural language across 24 Indian languages.",
    image: "/images/voice-billing.png",
    badge: "Voice Powered"
  },
  {
    slug: "bill-verification",
    title: "Dukaan AI Bill Scanner",
    description:
      "Scan wholesaler bills with your camera and let AI extract items, prices, and records automatically.",
    image: "/images/bill-verification.png",
    badge: "AI Scanner"
  },
  {
    slug: "orders-management",
    title: "Dukaan AI Order Manager",
    description:
      "Generate professional supplier orders, manage stock smarter, and share orders on WhatsApp in one tap.",
    image: "/images/orders-management.png",
    badge: "Stock Planning"
  },
  {
    slug: "scan-list",
    title: "Dukaan AI Scan List",
    description:
      "Convert handwritten notes into digital lists instantly so you never miss items during ordering or stock updates.",
    image: "/images/scan-list.png",
    badge: "List Digitization"
  }
];

export type FeatureItem = (typeof features)[number];

export const highlights = [
  {
    name: "Voice-first shop management",
    type: "What makes Dukaan AI different",
    description:
      "Use your voice to bill products and search sales naturally, and manage your khata ledger digitally with a few taps."
  },
  {
    name: "Made for Indian businesses",
    type: "Built for local retailers",
    description:
      "Designed for kirana stores, wholesalers, and small businesses with simple flows and large, clear actions."
  },
  {
    name: "24 Indian languages",
    type: "Language support",
    description:
      "Support for Hindi, Marathi, Gujarati, Tamil, Bengali, Telugu, Hinglish, and many more regional languages."
  },
  {
    name: "Offline ready",
    type: "Reliable daily use",
    description:
      "Important billing and record workflows keep working even when internet connectivity is weak or unavailable."
  },
  {
    name: "WhatsApp-enabled workflows",
    type: "Faster collections and orders",
    description:
      "Share reminders and supplier orders quickly on WhatsApp to save time and improve follow-up."
  },
  {
    name: "Secure business data",
    type: "Privacy and trust",
    description:
      "Your store records stay protected with secure handling designed for day-to-day business use."
  }
];

export type HighlightItem = (typeof highlights)[number];

export const benefits = [
  {
    title: "Smart khata and credit tracking",
    text: "Record udhaar and payments instantly, check who owes you, and maintain a cleaner customer ledger than a paper register."
  },
  {
    title: "AI bill scanner and verification",
    text: "Capture purchase bills and automatically save item-level data without manual entry."
  },
  {
    title: "Business insights and sales trends",
    text: "Understand earnings, profit trends, demand patterns, and stock movement with clear AI-supported insights."
  },
  {
    title: "Professional order management",
    text: "Prepare supplier orders faster, share them on WhatsApp, and reduce ordering mistakes."
  }
];

export const faqs = [
  {
    question: "What is Dukaan AI used for?",
    answer:
      "Dukaan AI helps kirana stores, wholesalers, and small businesses handle billing, smart khata, bill verification, bookkeeping, and order management from one Android app."
  },
  {
    question: "Does Dukaan AI support Indian languages?",
    answer:
      "Yes. Dukaan AI supports workflows across 24 Indian languages, including Hindi, English, Hinglish, and other regional languages for everyday shop use."
  },
  {
    question: "Can Dukaan AI help with customer credit and udhaar tracking?",
    answer:
      "Yes. Dukaan AI includes smart khata features to record udhaar, track payments, and manage customer credit in a digital ledger."
  },
  {
    question: "Is Dukaan AI available on Google Play Store?",
    answer:
      "Yes. Dukaan AI is available as an Android app on the Google Play Store through the official listing for com.dukaan.ai."
  }
];
