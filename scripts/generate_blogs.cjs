const fs = require('fs');
const path = require('path');

const languages = [
  "en", "hi", "mr", "bn", "pa", "gu", "ta", "te", "kn", "ml", 
  "or", "as", "mai", "doi", "sd", "kok", "ne", "sa", "ur", "hinglish"
];

const getUltimateGuide = (lang) => `---
title: "The Ultimate Guide to Managing your Kirana Dukaan in 2026"
description: "Learn how to modernize your traditional shop, handle digital payments, manage credit (udhaar), and outcompete major retail chains."
pubDate: "2026-04-20"
image: "/images/hero-overview.png"
author: "Dukaan AI Team"
tags: ["Store Growth", "AI Tools", "Digital India"]
lang: "${lang}"
---

In the heart of every neighborhood, there is a **Dukaan**. It is more than just a place to buy groceries; it is a center of trust, a provider of credit, and the backbone of local communities. However, the retail landscape is changing faster than ever.

With the rise of quick commerce apps and large supermarkets, today’s shopkeepers face a critical choice: **Modernize or get left behind.** This guide explores how you can use simple digital tools and AI to turn your traditional kirana into a high-performance modern business.

## 1. Why Every Dukaan Needs a Digital Brain
For decades, managing a shop meant keeping track of everything in your head or in a dusty notebook (Bahi Khata). While this worked in the past, it creates "invisible losses" today:

- **Forgotten Credit:** Small amounts of udhaar that are never recorded and never paid back.
- **Miscalculated Profits:** Not knowing exactly how much you earned after expenses.

> "AI is not here to replace the shopkeeper; it is here to give the shopkeeper superpowers."

## 2. Mastering "Smart Khata" Management
Your customers trust you, and you trust them. But paper registers are messy. By moving to a **Smart Khata** system, you can record entries in seconds with a few taps and send automatic WhatsApp reminders.

Ready to take the first step? Start by digitizing your khata today and watch your business grow!
`;

const getSmartKhata = (lang) => `---
title: "How Smart Khata Can Save Your Kirana Business Thousands Annually"
description: "Discover why traditional paper registers are costing you more than you think and how switching to a digital credit system can recover lost revenue."
pubDate: "2026-04-21"
image: "/images/smart-khata.png"
author: "Dukaan AI Team"
tags: ["Khata Management", "Profit Growth", "Udhaar Recovery"]
lang: "${lang}"
---

Every small shopkeeper knows the phrase: *"Aaj cash, kal udhaar"*. But in reality, **Udhaar** (Credit) is the lifeblood of the neighborhood kirana store. It builds trust and ensures customers return to you instead of a supermarket.

However, the traditional way of managing this credit is silently draining your profits.

## The Hidden Costs of Paper Registers
1. **Forgotten Entries:** In a rush, it’s easy to forget to write down a ₹20 packet of milk. Over a month, these small misses add up.
2. **The "Awkward" Collection:** Reminding a regular customer to pay their debt can feel uncomfortable. Many shopkeepers avoid it, leading to old debts that never get settled.

## Why "Smart Khata" is the Solution
By switching to a digital **Smart Khata** like the one in **Dukaan AI**, you transform your shop's financial health instantly.

### Zero-Tap Recording
With a digital assistant, recording an entry takes seconds. You can even use **Voice Commands** to say *"Ramesh 500 baki"*.

A digital khata doesn't just "save time"it **recovers money** that was previously disappearing into thin air.
`;

const getQuickCommerce = (lang) => `---
title: "Local Kirana vs Quick Commerce: How to Win in 2026"
description: "Big apps promise 10-minute delivery, but they lack the personal touch and trust of a neighborhood store. Here's how to modernize and stay ahead."
pubDate: "2026-04-21"
image: "/images/hero-premium.jpeg"
author: "Dukaan AI Team"
tags: ["Business Strategy", "Quick Commerce", "Shop Modernization"]
lang: "${lang}"
---

The retail landscape is buzzing with talk of "Quick Commerce"apps that promise to deliver groceries in 10 minutes or less. For many traditional kirana shop owners, this feels like a direct threat. 

But here is a secret: **The local shopkeeper has advantages that big tech companies can never match.** 

## Your Secret Weapons

### 1. The Power of Personal Trust
A computer algorithm doesn't know that Mrs. Sharma prefers a specific brand of tea or that the Gupta family needs extra milk on Sundays. **You do.** This personal relationship is your biggest asset. 

### 2. The Relationship-based Credit (Udhaar)
Quick commerce apps require immediate payment. You provide credit to your trusted neighbors. This "Smart Khata" relationship keeps customers loyal.

## How to Modernize for Speed
To compete with the "10-minute" promise, you need to remove the friction from your own operations. This is where **Dukaan AI** helps:

1. **Digitize the "Parchi"**: Encourage customers to WhatsApp you their list.
2. **Voice Billing**: Generate a bill three times faster than typing.
3. **Smart Inventory**: Track which items are selling fast so you never run out of the neighborhood favorites.

**Make your shop a Modern Kirana with Dukaan AI.**
`;

languages.forEach(lang => {
    const skipOverwrites = ["en", "hi", "mr", "hinglish"];
    
    if (skipOverwrites.includes(lang)) {
        console.log("Skipping manually managed language: " + lang);
        const dir = path.join(__dirname, '../src/content/blog', lang);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        if (!fs.existsSync(path.join(dir, 'local-kirana-vs-quick-commerce.md'))) {
            fs.writeFileSync(path.join(dir, 'local-kirana-vs-quick-commerce.md'), getQuickCommerce(lang));
        }
        if (!fs.existsSync(path.join(dir, 'smart-khata-losses.md'))) {
            fs.writeFileSync(path.join(dir, 'smart-khata-losses.md'), getSmartKhata(lang));
        }
        return;
    }

    const dir = path.join(__dirname, '../src/content/blog', lang);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(path.join(dir, 'ultimate-kirana-guide.md'), getUltimateGuide(lang));
    fs.writeFileSync(path.join(dir, 'smart-khata-losses.md'), getSmartKhata(lang));
    fs.writeFileSync(path.join(dir, 'local-kirana-vs-quick-commerce.md'), getQuickCommerce(lang));
    
    console.log("Generated completed blog posts for language: " + lang);
});
