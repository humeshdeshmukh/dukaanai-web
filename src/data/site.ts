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

export const features = {
  en: [
    {
      slug: "bookkeeping",
      title: "Dukaan AI Bookkeeping",
      description: "Track daily sales, profits, margins, and business performance with simple charts and AI-powered insights.",
      image: "/images/bookkeeping.png",
      badge: "Profit Tracking"
    },
    {
      slug: "smart-khata",
      title: "Dukaan AI Smart Khata",
      description: "Replace your paper bahi khata with a secure digital ledger for customer credit, payments, and balance tracking.",
      image: "/images/smart-khata.png",
      badge: "Udhaar Management"
    },
    {
      slug: "voice-billing",
      title: "Dukaan AI Voice Billing",
      description: "Create bills by speaking item names and quantities in natural language across 24 Indian languages.",
      image: "/images/voice-billing.png",
      badge: "Voice Powered"
    },
    {
      slug: "bill-verification",
      title: "Dukaan AI Bill Scanner",
      description: "Scan wholesaler bills with your camera and let AI extract items, prices, and records automatically.",
      image: "/images/bill-verification.png",
      badge: "AI Scanner"
    },
    {
      slug: "orders-management",
      title: "Dukaan AI Order Manager",
      description: "Generate professional supplier orders, manage stock smarter, and share orders on WhatsApp in one tap.",
      image: "/images/orders-management.png",
      badge: "Stock Planning"
    },
    {
      slug: "scan-list",
      title: "Dukaan AI Scan List",
      description: "Convert handwritten notes into digital lists instantly so you never miss items during ordering or stock updates.",
      image: "/images/scan-list.png",
      badge: "List Digitization"
    }
  ],
  hi: [
    {
      slug: "bookkeeping",
      title: "Dukaan AI बुककीपिंग",
      description: "सरल चार्ट और AI-संचालित अंतर्दृष्टि के साथ दैनिक बिक्री, लाभ और व्यावसायिक प्रदर्शन को ट्रैक करें।",
      image: "/images/bookkeeping.png",
      badge: "प्रॉफिट ट्रेकिंग"
    },
    {
      slug: "smart-khata",
      title: "Dukaan AI स्मार्ट खाता",
      description: "कस्टमर क्रेडिट और बैलेंस ट्रैकिंग के लिए अपने कागज़ के बही खाते को सुरक्षित डिजिटल लेज़र से बदलें।",
      image: "/images/smart-khata.png",
      badge: "उधार मैनेजमेंट"
    }
    // More to follow...
  ],
  mr: [
    {
      slug: "bookkeeping",
      title: "Dukaan AI बुककीपिंग",
      description: "सोप्या चार्ट आणि AI-द्वारे दैनिक विक्री, नफा आणि व्यवसाय कामगिरीचा मागोवा घ्या.",
      image: "/images/bookkeeping.png",
      badge: "नफा ट्रॅकिंग"
    },
    {
      slug: "smart-khata",
      title: "Dukaan AI स्मार्ट खाते",
      description: "तुमच्या कागदी वही खात्याऐवजी सुरक्षित डिजिटल लेजर वापरा आणि उधारीचा मागोवा घ्या.",
      image: "/images/smart-khata.png",
      badge: "उधारी व्यवस्थापन"
    }
  ]
};

export function getFeatures(lang: string) {
  return (features as any)[lang] || features.en;
}

export type FeatureItem = (typeof features.en)[number];

export const highlights = {
  en: [
    {
      name: "Voice-first shop management",
      type: "What makes Dukaan AI different",
      description: "Use your voice to bill products and search sales naturally, and manage your khata ledger digitally with a few taps."
    },
    {
      name: "Made for Indian businesses",
      type: "Built for local retailers",
      description: "Designed for kirana stores, wholesalers, and small businesses with simple flows and large, clear actions."
    }
  ],
  hi: [
    {
      name: "वॉयस-फर्स्ट शॉप मैनेजमेंट",
      type: "Dukaan AI क्यों अलग है",
      description: "प्रोडक्ट्स का बिल बनाने और सेल्स सर्च करने के लिए अपनी आवाज़ का इस्तेमाल करें, और डिजिटल तरीके से खता मैनेज करें।"
    },
    {
      name: "भारतीय व्यवसायों के लिए",
      type: "स्थानीय रिटेलर्स के लिए निर्मित",
      description: "किराना स्टोर और छोटे व्यवसायों के लिए सरल फ्लो और स्पष्ट बड़े बटनों के साथ डिज़ाइन किया गया।"
    }
  ],
  mr: [
    {
      name: "व्हॉइस-फर्स्ट शॉप मॅनेजमेंट",
      type: "Dukaan AI वेगळे का आहे",
      description: "उत्पादनांचे बिल करण्यासाठी आणि विक्री शोधण्यासाठी तुमच्या आवाजाचा वापर करा आणि स्मार्ट खाते डिजिटल पद्धतीने व्यवस्थापित करा."
    },
    {
      name: "भारतीय व्यवसायांसाठी",
      type: "स्थानिक किरणा दुकानांसाठी बनवलेले",
      description: "किराणा दुकाने आणि छोट्या व्यवसायांसाठी सोप्या प्रवाहाने आणि स्पष्ट कृतींसह डिझाइन केलेले."
    }
  ]
};

export function getHighlights(lang: string) {
  return (highlights as any)[lang] || highlights.en;
}

export const benefits = {
  en: [
    {
      title: "Smart khata and credit tracking",
      text: "Record udhaar and payments instantly, check who owes you, and maintain a cleaner customer ledger."
    }
  ],
  hi: [
    {
      title: "स्मार्ट खाता और उधार ट्रैकिंग",
      text: "उधार और भुगतान तुरंत रिकॉर्ड करें, और अपने ग्राहकों का डिजिटल लेज़र मैनेज करें।"
    }
  ],
  mr: [
    {
      title: "स्मार्ट खाते आणि उधारी ट्रॅकिंग",
      text: "उधारी आणि पेमेंट त्वरित रेकॉर्ड करा आणि ग्राहकांचे डिजिटल लेजर व्यवस्थापित करा."
    }
  ]
};

export function getBenefits(lang: string) {
  return (benefits as any)[lang] || benefits.en;
}

export const faqs = {
  en: [
    {
      question: "What is Dukaan AI used for?",
      answer: "Dukaan AI helps kirana stores and small businesses handle billing, smart khata, and order management."
    }
  ],
  hi: [
    {
      question: "Dukaan AI किस काम आता है?",
      answer: "Dukaan AI किराना स्टोर और छोटे व्यवसायों को बिलिंग, स्मार्ट खाता और ऑर्डर मैनेज करने में मदद करता है।"
    }
  ],
  mr: [
    {
      question: "Dukaan AI कशासाठी वापरले जाते?",
      answer: "Dukaan AI किराणा दुकाने आणि छोट्या व्यवसायांना बिलिंग, स्मार्ट खाते आणि ऑर्डर व्यवस्थापित करण्यात मदत करते."
    }
  ]
};

export function getFaqs(lang: string) {
  return (faqs as any)[lang] || faqs.en;
}
