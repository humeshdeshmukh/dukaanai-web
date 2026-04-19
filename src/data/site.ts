export const site = {
  name: "Dukaan AI",
  title: "Dukaan AI | Smart Khata, Voice Billing & Bill Scanner for Indian Businesses",
  description:
    "Dukaan AI is an AI-powered business assistant for kirana stores, wholesalers, and small businesses with voice billing, smart khata, bill scanning, order management, and business insights.",
  url: "https://dukaanai.co.in",
  domain: "dukaanai.co.in",
  playStoreId: "com.dukaan.ai",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.dukaan.ai",
  businessEmail: "dukaanai.business@gmail.com"
};

export const features = [
  {
    title: "Daily Bookkeeping",
    description:
      "Track daily sales, profits, margins, and business performance with simple charts and AI-powered insights.",
    image: "/images/bookkeeping.png",
    badge: "Profit Tracking"
  },
  {
    title: "Smart Khata",
    description:
      "Replace your paper bahi khata with a secure digital ledger for customer credit, payments, and balance tracking.",
    image: "/images/smart-khata.png",
    badge: "Udhaar Management"
  },
  {
    title: "Voice Billing",
    description:
      "Create bills by speaking item names and quantities in natural language across 24 Indian languages.",
    image: "/images/voice-billing.png",
    badge: "Voice Powered"
  },
  {
    title: "Bill Verification",
    description:
      "Scan wholesaler bills with your camera and let AI extract items, prices, and records automatically.",
    image: "/images/bill-verification.png",
    badge: "AI Scanner"
  },
  {
    title: "Orders Management",
    description:
      "Generate professional supplier orders, manage stock smarter, and share orders on WhatsApp in one tap.",
    image: "/images/orders-management.png",
    badge: "Stock Planning"
  },
  {
    title: "Scan List",
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
      "Use your voice to bill products, record khata entries, search sales, and ask business questions naturally."
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
