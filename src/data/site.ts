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
  {
    slug: "bookkeeping",
    title: "Dukaan AI Daily Bookkeeping",
    description: "Take control of your store's finances. Track daily sales, automate profit calculations, and monitor your business health with AI insights.",
    image: "/images/bookkeeping.png",
    badge: "Financial Control",
    benefits: [
      { title: "Automated Profit Tracking", text: "Dukaan AI automatically calculates your daily profit margins based on your sales and purchase records, so you always know your earnings." },
      { title: "Visual Business Insights", text: "See your shop's performance through simple, easy-to-read charts that show sales trends over weeks and months." },
      { title: "Expense Management", text: "Keep a clean record of all store expenses like electricity, rent, and staff salaries in one unified dashboard." },
      { title: "Digital Cashbook", text: "Replace manual cash-counting errors with a precise digital cashbook that tracks every rupee coming in and going out." }
    ],
    faqs: [
      { question: "How does Dukaan AI calculate my profits?", answer: "It compares your selling price with the purchase price from your wholesale bills to give you an accurate margin for every item sold." },
      { question: "Can I generate monthly reports?", answer: "Yes, you can generate and download monthly PDF reports to review your business performance or share with your CA." },
      { question: "Is my data safe if I lose my phone?", answer: "All your records are backed up to our secure cloud servers every time you connect to the internet, so you can restore them on a new device." },
      { question: "Do I need an accountant to use this?", answer: "No, Dukaan AI is designed for shopkeepers. There is no complex accounting terminology—just simple, clear numbers." }
    ]
  },
  {
    slug: "smart-khata",
    title: "Dukaan AI Smart Khata",
    description: "Ditch the paper registers. Manage customer credit (udhaar) and payments (jama) with a 100% secure, automated digital ledger.",
    image: "/images/smart-khata.png",
    badge: "Credit Management",
    benefits: [
      { title: "3x Faster Collections", text: "Send automatic payment reminders with customized balance details on WhatsApp to recover your money 3 times faster." },
      { title: "One-Tap Entry", text: "Record any 'Baki' or 'Jama' transaction in less than 2 seconds, keeping your line moving during busy hours." },
      { title: "Transaction History", text: "Maintain a complete, life-long history for every customer. No more disputes about old balances or forgotten payments." },
      { title: "PDF Summary Reports", text: "Generate professional account statements for any customer and share them directly via WhatsApp or email." }
    ],
    faqs: [
      { question: "Will my customers get messages for every entry?", answer: "You can choose to send a WhatsApp notification manually or set up automatic reminders for pending balances." },
      { question: "How many customers can I add?", answer: "There is no limit. You can manage 10 or 10,000 customers with equal ease in Dukaan AI Smart Khata." },
      { question: "Can I record partial payments?", answer: "Yes, the app handles partial payments perfectly, automatically updating the remaining balance for the customer." },
      { question: "Does it work for group accounts?", answer: "You can create separate profiles for different members of the same family to keep things organized. " }
    ]
  },
  {
    slug: "voice-billing",
    title: "Dukaan AI Voice Billing",
    description: "Experience the future of retail. Generate bills just by speaking. No more searching for items or manual typing at the counter.",
    image: "/images/voice-billing.png",
    badge: "Hands-Free Speed",
    benefits: [
      { title: "Natural Language Billing", text: "Just say '2 sugar, 5 Lux soap'—and the app adds them to the bill instantly. It's as simple as talking to a person." },
      { title: "24 Language Support", text: "The voice AI understands Hindi, Marathi, Tamil, Hinglish, and 20 other Indian languages with high accuracy." },
      { title: "Focus on Customers", text: "Stop staring at your screen. Use your voice to build bills while you continue talking to your customers face-to-face." },
      { title: "Automatic Price Fetching", text: "The app remembers the prices of your items, so you only need to speak the quantity. It calculates the total instantly." }
    ],
    faqs: [
      { question: "What if there is noise in my shop?", answer: "Our AI is specially trained for noisy Indian markets. It focuses on your voice and ignores background chatter." },
      { question: "Does it understand Hinglish?", answer: "Yes! You can speak in mixed languages like '1 packet doodh and 2 sabun', and it will work perfectly." },
      { question: "How fast is the billing process?", answer: "Voice billing is up to 5 times faster than manual typing or searching through a long product list." },
      { question: "Do I need a separate microphone?", answer: "No, the standard microphone on your Android phone is more than enough for high-speed voice billing." }
    ]
  },
  {
    slug: "bill-verification",
    title: "Dukaan AI Wholesaler Bill Scanner",
    description: "Scan purchase bills from wholesalers and suppliers instantly. Our AI extracts records so you never have to type again.",
    image: "/images/bill-verification.png",
    badge: "AI Bill Reader",
    benefits: [
      { title: "Zero Typing Entry", text: "Point your camera at a printed wholesaler bill. AI reads the items, quantities, and prices, and adds them to your stock instantly." },
      { title: "Purchase Price Tracking", text: "Spot price hikes immediately. Dukaan AI flags if a wholesaler is charging you more than the last time for the same item." },
      { title: "Automatic Stock Update", text: "Scanning a bill automatically updates your inventory levels, ensuring your bookkeeping is always 100% accurate." },
      { title: "Digital Record Keeping", text: "Store a digital photo of every physical bill for tax purposes and future reference. No more lost papers." }
    ],
    faqs: [
      { question: "Does it work with handwritten bills?", answer: "It is optimized for printed computer bills, but it can read clear handwriting from common wholesale parchis." },
      { question: "What items can it extract?", answer: "It extracts item names, unit prices, total quantities, and the final bill amount automatically." },
      { question: "Is there a limit on scans?", answer: "No, you can scan as many bills as you want. There are no hidden costs per scan." },
      { question: "Can I export these bills?", answer: "Yes, you can export your entire purchase history as an Excel file for your business records." }
    ]
  },
  {
    slug: "orders-management",
    title: "Dukaan AI Supplier Order Manager",
    description: "Plan your stock and generate wholesale orders in seconds. Share professional orders on WhatsApp with one tap.",
    image: "/images/orders-management.png",
    badge: "Stock Manager",
    benefits: [
      { title: "Stock-Out Predictions", text: "AI analyzes your sales patterns and warns you when popular items like milk or sugar are about to finish." },
      { title: "Professional PDF Orders", text: "Convert your order lists into clean, professional PDFs that look great and build trust with your wholesalers." },
      { title: "One-Tap WhatsApp Sharing", text: "Don't call every supplier. Send your complete order list directly to their WhatsApp with a single button." },
      { title: "Order History", text: "Keep track of what you ordered and when. Easily verify if the wholesaler delivered the correct quantity." }
    ],
    faqs: [
      { question: "How does it know which items are low?", answer: "By tracking your daily sales and scanned purchase bills, it calculates your current inventory in real-time." },
      { question: "Can I manage multiple suppliers?", answer: "Yes, you can save different suppliers and link specific items to them for faster ordering." },
      { question: "Is there a template for orders?", answer: "Dukaan AI comes with pre-built professional templates that include your shop name and order details." },
      { question: "Can I order via voice?", answer: "Yes! Just like billing, you can dictate your order list using our voice-to-order feature." }
    ]
  },
  {
    slug: "scan-list",
    title: "Dukaan AI Parchi Scanner",
    description: "Never lose a customer's handwritten list again. Digitally scan handwritten parchis into professional bills or orders.",
    image: "/images/scan-list.png",
    badge: "List-to-Digital",
    benefits: [
      { title: "Instant Digitization", text: "Convert any handwritten note or parchi into a clean digital list that you can use for billing or ordering." },
      { title: "Smart Recognition", text: "Our AI is trained on typical Indian shop handwriting, making it easy to digitize even messy notes." },
      { title: "Error Prevention", text: "Digital lists help you ensure you don't miss any item from a customer's long handwritten list." },
      { title: "Customer Link", text: "Attach a scanned parchi to a specific customer's khata profile for future reference and trust building." }
    ],
    faqs: [
      { question: "Can it read Hindi handwriting?", answer: "Yes, the AI is optimized for both English and common Hindi script used in shop parchis." },
      { question: "Does it need a high-end camera?", answer: "No, a standard smartphone camera is sufficient. Just ensure there is enough light when taking the photo." },
      { question: "Can I edit the list after scanning?", answer: "Always! You can review the digitized list and make any corrections or additions manually." },
      { question: "Where are these scans saved?", answer: "They are stored in your app's local database and synced to your secure cloud account." }
    ]
  }
];

export const features: Record<string, FeatureItem[]> = {
  en: baseFeatures,
};

export function getFeatures(lang: string) {
  return features[lang] || baseFeatures;
}

const baseHighlights = [
  { name: "Voice-first shop management", type: "What makes Dukaan AI different", description: "Use your voice to bill products and search sales naturally." },
  { name: "Made for Indian businesses", type: "Built for local retailers", description: "Designed for kirana stores with simple flows and large actions." },
  { name: "24 Indian languages", type: "Language support", description: "Support for Hindi, Marathi, Bengali, Tamil, Telugu, Hinglish, and more." },
  { name: "Offline ready", type: "Reliable daily use", description: "Works even when internet connectivity is weak or unavailable." },
  { name: "WhatsApp-enabled", type: "Faster collections", description: "Share reminders and orders quickly on WhatsApp." },
  { name: "Secure data", type: "Privacy and trust", description: "Your store records stay protected with secure handling." }
];

export const highlights: Record<string, typeof baseHighlights> = {
  en: baseHighlights,
};

export function getHighlights(lang: string) {
  return highlights[lang] || baseHighlights;
}

const baseBenefits = [
  { title: "Smart khata and credit tracking", text: "Record udhaar and payments instantly." },
  { title: "AI bill scanner", text: "Capture purchase bills and save data automatically." },
  { title: "Business insights", text: "Understand earnings and stock patterns clearly." },
  { title: "Professional orders", text: "Prepare supplier orders faster on WhatsApp." }
];

export const benefits: Record<string, typeof baseBenefits> = {
  en: baseBenefits,
};

export function getBenefits(lang: string) {
  return benefits[lang] || baseBenefits;
}

const baseFaqs = [
  { question: "What is Dukaan AI?", answer: "Dukaan AI is a shop assistant for billing, khata, and orders." },
  { question: "Languages supported?", answer: "We support 24 Indian languages." },
  { question: "Is it secure?", answer: "Yes, your data is protected and stored safely." },
  { question: "Offline useful?", answer: "Yes, most features work without internet." }
];

export const faqs: Record<string, typeof baseFaqs> = {
  en: baseFaqs,
};

export function getFaqs(lang: string) {
  return faqs[lang] || baseFaqs;
}
