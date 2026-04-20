export const featureTranslations: Record<string, any> = {
  en: {
    bookkeeping: { 
      title: "Dukaan AI Daily Bookkeeping", 
      badge: "Financial Control", 
      description: "Take control of your store's finances. Track daily sales, automate profit calculations, and monitor your business health with AI insights.",
      benefits: [
        { title: "Real-time Sales Log", text: "Record every transaction as it happens and see your daily total instantly." },
        { title: "Profit Margin Analytics", text: "Automatically calculate profit for every item and identify your best-sellers." },
        { title: "Smart Expense Tracker", text: "Log shop expenses like rent, electricity, and salaries in the same app." },
        { title: "GST & Tax Ready", text: "Generate simplified summaries that help you prepare for tax filings easily." },
        { title: "Multi-device Sync", text: "Access your shop records from multiple phones securely in real-time." },
        { title: "Automated Daily Backups", text: "Never lose a single record; your data is backed up to the cloud every day." }
      ],
      faqs: [
        { question: "Can I record UPI, Cash, and Card separately?", answer: "Yes, you can categorize sales by payment mode for accurate daily reconciliation." },
        { question: "How does the AI calculate profit?", answer: "The AI uses your purchase price and selling price to give you exact margin insights." },
        { question: "Can I generate monthly reports?", answer: "Yes, you can generate and export professional PDF or Excel reports for any period." },
        { question: "Is my financial data safe?", answer: "Absolutely. We use bank-grade encryption to ensure only you can access your records." },
        { question: "Can I manage multiple shops?", answer: "Yes, Dukaan AI allows you to switch between multiple business profiles easily." },
        { question: "Does it work without internet?", answer: "Yes, record your sales offline; they will sync automatically when you go online." }
      ]
    },
    "smart-khata": { 
      title: "Dukaan AI Smart Khata", 
      badge: "Credit Management", 
      description: "Ditch the paper registers. Manage customer credit (udhaar) and payments (jama) with a 100% secure, automated digital ledger.",
      benefits: [
        { title: "Auto-Reminders on WhatsApp", text: "Send payment links and balance reminders to customers with a single tap." },
        { title: "Personal Payment Portal", text: "Customers get a unique link to see their balance and pay you directly via UPI." },
        { title: "10x Faster Search", text: "Find any customer by name or phone number in seconds instead of flipping pages." },
        { title: "Photo Proof & Attachments", text: "Attach photos of signed slips or physical bills to every khata entry." },
        { title: "Fraud-Free Ledger", text: "Transparent digital records shared with customers prevent manual entry disputes." },
        { title: "Bulk Payment Entry", text: "Record payments for multiple customers at once during peak evening hours." }
      ],
      faqs: [
        { question: "How do I send WhatsApp reminders?", answer: "Simply open the customer profile and tap 'Send Reminder' to share a professional message." },
        { question: "Can I see a customer's payment history?", answer: "Yes, every customer has a detailed statement showing every baki and jama entry." },
        { question: "What if a customer disputes a bill?", answer: "You can attach a photo of the original bill to the entry for instant verification." },
        { question: "Is there a limit on the number of customers?", answer: "No, you can manage thousands of customer accounts without any performance lag." },
        { question: "Can I add interest to delayed payments?", answer: "Yes, you can enable automatic interest calculation for long-overdue credit." },
        { question: "How do I move from a paper register to Dukaan AI?", answer: "You can start by entering the 'Opening Balance' for each customer in seconds." }
      ]
    },
    "voice-billing": { 
      title: "Dukaan AI Voice Billing", 
      badge: "Hands-Free Speed", 
      description: "Experience the future of retail. Generate bills just by speaking. No more searching for items or manual typing at the counter.",
      benefits: [
        { title: "Hinglish Support", text: "The AI understands 'Chini 2 kilo' or 'Half liter milk' just as naturally as you speak." },
        { title: "Hands-Free Counter", text: "Keep serving and packing while your voice builds the digital bill on the phone." },
        { title: "Auto Unit Conversion", text: "AI handles kg, grams, lit, packets, and pieces automatically to calculate price." },
        { title: "Inventory Aware", text: "The billing system alerts you if an item you are calling out is low in stock." },
        { title: "Instant Digital Invoice", text: "Generate a professional GST or estimate bill to share on WhatsApp instantly." },
        { title: "Voice Discounting", text: "Just say '5 rupee discount' or '10 percent off' and the AI applies it to the total." }
      ],
      faqs: [
        { question: "Does it understand regional accents?", answer: "Yes, our voice AI is trained on 24 Indian languages and various local accents." },
        { question: "What if I misspeak an item?", answer: "You can easily edit and correct any voice entry before finalizing the bill." },
        { question: "Do I need a high-speed internet connection?", answer: "The voice engine is optimized to work even on slow 2G/3G networks or offline." },
        { question: "Can it handle bulk heavy billing?", answer: "Yes, it is designed for maximum speed during peak rush hours at kirana counters." },
        { question: "Does it work with Bluetooth mics?", answer: "Yes, it supports all wired and wireless microphones for even better accuracy." },
        { question: "Can I print the voice-generated bills?", answer: "Yes, the app connects to thermal printers for instant physical receipt printing." }
      ]
    },
    "bill-verification": { 
      title: "Dukaan AI Bill Scanner", 
      badge: "AI Bill Reader", 
      description: "Scan purchase bills from wholesalers and suppliers instantly. Our AI extracts records so you never have to type again.",
      benefits: [
        { title: "Instant OCR Extraction", text: "Automatically pull item names, quantities, and prices from printed invoices." },
        { title: "Supplier Price Tracking", text: "Dukaan AI tracks if a supplier has increased the price of an item since your last order." },
        { title: "Auto Inventory Injection", text: "Scanning a purchase bill automatically adds those items to your current stock levels." },
        { title: "GST Slab Detection", text: "The AI correctly identifies 5%, 12%, and 18% GST items from the bill." },
        { title: "Original Bill Vault", text: "Keep a high-quality digital scan of your physical bills for future supplier disputes." },
        { title: "Error Correction Prompting", text: "The AI highlights any unclear text or mismatch for your quick review." }
      ],
      faqs: [
        { question: "Can it read handwritten bills?", answer: "It is optimized for printed invoices but can read clear handwriting as well." },
        { question: "What if the bill is folded or crumpled?", answer: "Our AI is built to handle shadows and folds for high-accuracy extraction." },
        { question: "Is there a limit on scanning?", answer: "No, you can scan as many wholesale and purchase bills as your business needs." },
        { question: "How long does it take to scan?", answer: "A typical bill is processed and ready for your review in under 3 seconds." },
        { question: "Does it store all my bills?", answer: "Yes, all scanned bills are stored securely in your 'Digital File Cabinet'." },
        { question: "Can I export supplier records?", answer: "Yes, you can view and export detailed supplier-wise purchase summaries." }
      ]
    },
    "orders-management": { 
      title: "Dukaan AI Order Manager", 
      badge: "Stock Manager", 
      description: "Plan your stock and generate wholesale orders in seconds. Share professional orders on WhatsApp with one tap.",
      benefits: [
        { title: "Stock-Out Prevention", text: "The AI predicts which items will run out soon based on your sales trends." },
        { title: "Professional WhatsApp Orders", text: "Send clean, structured PDF or text orders to your wholesalers instantly." },
        { title: "Price Negotiation History", text: "View past purchase prices while creating a new order to help you negotiate better." },
        { title: "Supplier Wise Catalogs", text: "Group items by supplier so you can prepare all your weekly orders in one go." },
        { title: "Order Status Tracking", text: "Mark orders as 'Sent', 'Received', or 'Pending' to keep your stock flow organized." },
        { title: "Reorder Reminders", text: "Get auto-notified when your essentials (Sugar, Tea, Soap) fall below safe levels." }
      ],
      faqs: [
        { question: "How do I create a new order?", answer: "Just select the items or use your voice to call out what you need to restock." },
        { question: "Can I share orders via other apps?", answer: "Yes, you can share the order via WhatsApp, Telegram, or Email easily." },
        { question: "Does it help with seasonality?", answer: "Yes, the AI suggests higher stock levels for festivals and seasonal demand." },
        { question: "Can I add new suppliers?", answer: "Yes, you can manage an unlimited number of supplier contacts and catalogs." },
        { question: "Does it show previous order prices?", answer: "Yes, you can see your last purchase price right next to each item in the order." },
        { question: "Can I create recurring orders?", answer: "Yes, you can save 'Standard Weekly Lists' for items you buy every week." }
      ]
    },
    "scan-list": { 
      title: "Dukaan AI Parchi Scanner", 
      badge: "List-to-Digital", 
      description: "Never lose a customer's handwritten list again. Digitally scan handwritten parchis into professional bills or orders.",
      benefits: [
        { title: "Handwriting-to-Bill", text: "The AI recognizes various Indian handwriting styles to convert parchis to digital carts." },
        { title: "Recurring List Saving", text: "Regular customers often have the same list; save scanned parchis for future use." },
        { title: "Zero Data Entry", text: "Stop typing every item from a customer's paper list manually at the billing counter." },
        { title: "Smart Price Matching", text: "Scanned items are automatically matched with your shop's price menu." },
        { title: "Multi-page Scanning", text: "Handle long grocery lists by scanning multiple pages into a single digital record." },
        { title: "Quantities Recognition", text: "AI extracts '2 kg', '100 gm', or '5 pieces' accurately from handwritten notes." }
      ],
      faqs: [
        { question: "What if the handwriting is very messy?", answer: "The AI will match the closest item and allow you to verify before billing." },
        { question: "Can I use it for wholesale parchis?", answer: "Yes, it works effectively for both customer lists and supplier notes." },
        { question: "Does it require internet?", answer: "The scanning works offline, ensuring no delay during busy shop hours." },
        { question: "Can I add items to the scanned list?", answer: "Yes, you can manually add or remove items after the scan is complete." },
        { question: "Does it save the original photo?", answer: "Yes, you can always refer back to the original parchi photo if needed." },
        { question: "How fast is the conversion?", answer: "It takes about 1-2 seconds to convert a handwritten list into a digital bill." }
      ]
    }
  },
  hi: {
    bookkeeping: { 
      title: "Dukaan AI डेली बुककीपिंग", 
      badge: "फाइनेंशियल कंट्रोल", 
      description: "अपनी दुकान के फाइनेंस पर नियंत्रण रखें। दैनिक बिक्री ट्रैक करें, लाभ की गणना करें, और AI अंतर्दृष्टि के साथ अपने बिज़नेस की निगरानी करें।",
      benefits: [
        { title: "रियल-टाइम सेल्स लॉग", text: "लेन-देन होते ही उसे रिकॉर्ड करें और अपना दैनिक कुल तुरंत देखें।" },
        { title: "प्रॉफिट मार्जिन एनालिटिक्स", text: "हर आइटम के लिए लाभ की गणना करें और अपनी सबसे ज्यादा बिकने वाली वस्तुओं की पहचान करें।" },
        { title: "स्मार्ट खर्च ट्रैकर", text: "एक ही ऐप में किराया, बिजली और वेतन जैसे दुकान के खर्चों को दर्ज करें।" },
        { title: "GST और टैक्स रेडी", text: "सरल सारांश जनरेट करें जो आपको टैक्स फाइलिंग आसानी से तैयार करने में मदद करते हैं।" },
        { title: "मल्टी-डिवाइस सिंक", text: "सुरक्षित रूप से रीयल-टाइम में कई फोन से अपने स्टोर रिकॉर्ड एक्सेस करें।" },
        { title: "ऑटोमेटेड डेली बैकअप", text: "एक भी रिकॉर्ड कभी न खोएं; आपका डेटा हर दिन क्लाउड पर बैकअप होता है।" }
      ],
      faqs: [
        { question: "क्या मैं UPI, नकद और कार्ड को अलग से रिकॉर्ड कर सकता हूँ?", answer: "हाँ, आप सटीक मिलान के लिए भुगतान मोड द्वारा बिक्री को वर्गीकृत कर सकते हैं।" },
        { question: "AI लाभ की गणना कैसे करता है?", answer: "AI आपके खरीद मूल्य और बिक्री मूल्य का उपयोग करके आपको सटीक मार्जिन अंतर्दृष्टि देता है।" },
        { question: "क्या मैं मासिक रिपोर्ट जनरेट कर सकता हूँ?", answer: "हाँ, आप किसी भी अवधि के लिए प्रोफेशनल PDF या एक्सेल रिपोर्ट जनरेट और एक्सपोर्ट कर सकते हैं।" },
        { question: "क्या मेरा डेटा सुरक्षित है?", answer: "बिल्कुल। हम यह सुनिश्चित करने के लिए बैंक-ग्रेड एन्क्रिप्शन का उपयोग करते हैं कि केवल आप ही अपने रिकॉर्ड एक्सेस कर सकें।" },
        { question: "क्या मैं कई दुकानें मैनेज कर सकता हूँ?", answer: "हाँ, Dukaan AI आपको कई बिज़नेस प्रोफाइल के बीच आसानी से स्विच करने की अनुमति देता है।" },
        { question: "क्या यह बिना इंटरनेट के काम करता है?", answer: "हाँ, ऑफ़लाइन बिक्री रिकॉर्ड करें; ऑनलाइन होने पर वे अपने आप सिंक हो जाएंगे।" }
      ]
    },
    "smart-khata": { 
      title: "Dukaan AI स्मार्ट खाता", 
      badge: "क्रेडिट मैनेजमेंट", 
      description: "कागज के रजिस्टर छोड़ें। 100% सुरक्षित, स्वचालित डिजिटल लेज़र के साथ कस्टमर क्रेडिट (उधार) और भुगतान (जमा) प्रबंधित करें।",
      benefits: [
        { title: "व्हाट्सएप पर ऑटो-रिमाइंडर", text: "एक टैप से व्हाट्सएप पर ग्राहकों को भुगतान लिंक और बकाया रिमाइंडर भेजें।" },
        { title: "पर्सनल पेमेंट पोर्टल", text: "ग्राहकों को उनका बैलेंस देखने और आपको सीधे UPI के माध्यम से भुगतान करने के लिए एक लिंक मिलता है।" },
        { title: "10 गुना तेज़ खोज", text: "पन्ने पलटने के बजाय सेकंडों में नाम या फोन नंबर से किसी भी ग्राहक को खोजें।" },
        { title: "फोटो प्रूफ और अटैचमेंट", text: "हर खाता प्रविष्टि के साथ हस्ताक्षरित पर्चियों या भौतिक बिलों के फोटो संलग्न करें।" },
        { title: "विवाद मुक्त लेज़र", text: "ग्राहकों के साथ साझा किए गए पारदर्शी डिजिटल रिकॉर्ड मैन्युअल गलती के विवादों को रोकते हैं।" },
        { title: "थोक भुगतान प्रविष्टि", text: "शाम के व्यस्त घंटों के दौरान एक साथ कई ग्राहकों के लिए भुगतान रिकॉर्ड करें।" }
      ],
      faqs: [
        { question: "मैं व्हाट्सएप रिमाइंडर कैसे भेजूं?", answer: "बस कस्टमर प्रोफाइल खोलें और प्रोफेशनल मैसेज भेजने के लिए 'रिमाइंडर भेजें' पर टैप करें।" },
        { question: "क्या मैं ग्राहक का भुगतान इतिहास देख सकता हूँ?", answer: "हाँ, हर ग्राहक के पास एक विस्तृत स्टेटमेंट है जिसमें हर 'बाकी' और 'जमा' प्रविष्टि दिखाई देती है।" },
        { question: "यदि ग्राहक किसी बिल पर विवाद करता है तो क्या होगा?", answer: "आप त्वरित सत्यापन के लिए प्रविष्टि में मूल बिल का फोटो संलग्न कर सकते हैं।" },
        { question: "क्या ग्राहकों की संख्या पर कोई सीमा है?", answer: "नहीं, आप बिना किसी देरी के हजारों ग्राहक खातों को मैनेज कर सकते हैं।" },
        { question: "क्या मैं देरी से भुगतान पर ब्याज जोड़ सकता हूँ?", answer: "हाँ, आप पुराने उधार के लिए स्वचालित ब्याज गणना सक्षम कर सकते हैं।" },
        { question: "मैं कागज के रजिस्टर से Dukaan AI पर कैसे शिफ्ट होऊं?", answer: "आप प्रत्येक ग्राहक के लिए सेकंडों में 'ओपनिंग बैलेंस' दर्ज करके शुरू कर सकते हैं।" }
      ]
    },
    "voice-billing": { 
      title: "Dukaan AI वॉयस बिलिंग", 
      badge: "हैंड्स-फ्री स्पीड", 
      description: "रिटेल के भविष्य का अनुभव करें। बस बोलकर बिल जनरेट करें। काउंटर पर आइटम खोजने या टाइप करने की कोई ज़रूरत नहीं है।",
      benefits: [
        { title: "हिंग्लिश सपोर्ट", text: "AI 'चीनी 2 किलो' या 'आधा लीटर दूध' को उतनी ही सहजता से समझता है जितना आप बोलते हैं।" },
        { title: "हैंड्स-फ्री काउंटर", text: "ग्राहक की सेवा और पैकिंग जारी रखें जबकि आपकी आवाज़ फोन पर डिजिटल बिल तैयार करती है।" },
        { title: "ऑटो यूनिट कन्वर्जन", text: "मूल्य की गणना करने के लिए AI स्वचालित रूप से किलो, ग्राम, लीटर, पैकेट और पीस को हैंडल करता है।" },
        { title: "इन्वेंट्री अलर्ट", text: "यदि आप जिस आइटम का नाम ले रहे हैं उसका स्टॉक कम है, तो बिलिंग सिस्टम आपको सचेत करता है।" },
        { title: "इंस्टेंट डिजिटल इनवॉइस", text: "व्हाट्सएप पर तुरंत साझा करने के लिए प्रोफेशनल GST या अनुमानित बिल जनरेट करें।" },
        { title: "वॉयस डिस्काउंटिंग", text: "बस '5 रुपये की छूट' या '10 प्रतिशत की छूट' कहें और AI उसे कुल योग पर लागू कर देता है।" }
      ],
      faqs: [
        { question: "क्या यह क्षेत्रीय लहजे को समझता है?", answer: "हाँ, हमारा वॉयस AI 24 भारतीय भाषाओं और विभिन्न स्थानीय लहजों पर प्रशिक्षित है।" },
        { question: "अगर मैं किसी आइटम का नाम गलत बोल दूं तो?", answer: "बिल फाइनल करने से पहले आप किसी भी वॉयस एंट्री को आसानी से एडिट कर सकते हैं।" },
        { question: "क्या मुझे हाई-स्पीड इंटरनेट चाहिए?", answer: "वॉयस इंजन धीमे 2G/3G नेटवर्क पर भी काम करने के लिए ऑप्टिमाइज्ड है।" },
        { question: "क्या यह अधिक भीड़ में बिलिंग कर सकता है?", answer: "हाँ, यह किराना काउंटरों पर भीड़ के समय अधिकतम गति के लिए डिज़ाइन किया गया है।" },
        { question: "क्या यह ब्लूटूथ माइक के साथ काम करता है?", answer: "हाँ, यह बेहतर सटीकता के लिए सभी वायर्ड और वायरलेस माइक्रोफोन को सपोर्ट करता है।" },
        { question: "क्या मैं वॉयस जनरेटेड बिलों को प्रिंट कर सकता हूँ?", answer: "हाँ, ऐप रसीद प्रिंटिंग के लिए थर्मल प्रिंटर से कनेक्ट हो जाता है।" }
      ]
    },
    "bill-verification": { 
      title: "Dukaan AI होलसेलर बिल स्कैनर", 
      badge: "AI बिल रीडर", 
      description: "होलसेलर्स से खरीद बिल तुरंत स्कैन करें। हमारा AI रिकॉर्ड निकालता है ताकि आपको फिर से टाइप न करना पड़े।",
      benefits: [
        { title: "इंस्टेंट OCR एक्सट्रैक्शन", text: "छपे हुए इनवॉइस से आइटम का नाम, मात्रा और कीमतें स्वचालित रूप से निकालें।" },
        { title: "सप्लायर प्राइस ट्रैकिंग", text: "Dukaan AI ट्रैक करता है कि सप्लायर ने आपके पिछले ऑर्डर के बाद कीमत बढ़ाई है या नहीं।" },
        { title: "ऑटो इन्वेंट्री इंजेक्शन", text: "खरीद बिल स्कैन करने से वे आइटम आपके वर्तमान स्टॉक में अपने आप जुड़ जाते हैं।" },
        { title: "GST स्लैब डिटेक्शन", text: "AI बिल से 5%, 12% और 18% GST आइटमों की सही पहचान करता है।" },
        { title: "ओरिजिनल बिल वॉल्ट", text: "भविष्य के सप्लायर विवादों के लिए अपने भौतिक बिलों का हाई-क्वालिटी डिजिटल स्कैन रखें।" },
        { title: "एरर करेक्शन प्रॉम्प्टिंग", text: "AI आपकी त्वरित समीक्षा के लिए किसी भी अस्पष्ट टेक्स्ट को हाईलाइट करता है।" }
      ],
      faqs: [
        { question: "क्या यह हाथ से लिखे बिल पढ़ सकता है?", answer: "यह प्रिंटेड बिलों पर बेस्ट काम करता है लेकिन स्पष्ट लिखावट भी पढ़ सकता है।" },
        { question: "अगर बिल मुड़ा हुआ है तो क्या होगा?", answer: "हमारा AI हाई-एक्यूरेसी के लिए परछाईं और सिलवटों को हैंडल करने के लिए बनाया गया है।" },
        { question: "क्या स्कैनिंग पर कोई सीमा है?", answer: "नहीं, आप बिज़नेस की ज़रूरत के अनुसार जितने चाहें उतने खरीद बिल स्कैन कर सकते हैं।" },
        { question: "स्कैन करने में कितना समय लगता है?", answer: "एक सामान्य बिल 3 सेकंड से कम समय में प्रोसेस होकर रिव्यू के लिए तैयार हो जाता।" },
        { question: "क्या यह मेरे सभी बिलों को सेव करता है?", answer: "हाँ, सभी स्कैन किए गए बिल आपके 'डिजिटल फाइल कैबिनेट' में सुरक्षित रूप से सेव होते हैं।" },
        { question: "क्या मैं सप्लायर रिकॉर्ड एक्सपोर्ट कर सकता हूँ?", answer: "हाँ, आप सप्लायर-वार खरीद सारांश देख और एक्सपोर्ट कर सकते हैं।" }
      ]
    },
    "orders-management": { 
      title: "Dukaan AI सप्लायर ऑर्डर मैनेजर", 
      badge: "स्टॉक मैनेजर", 
      description: "सेकंडों में अपना स्टॉक प्लान करें और होलसेल ऑर्डर जनरेट करें। व्हाट्सएप पर प्रोफेशनल ऑर्डर साझा करें।",
      benefits: [
        { title: "स्टॉक आउट प्रिवेंशन", text: "AI आपके बिक्री रुझानों के आधार पर भविष्यवाणी करता है कि कौन से आइटम जल्द ही खत्म होने वाले हैं।" },
        { title: "प्रोफेशनल व्हाट्सएप ऑर्डर", text: "अपने होलसेलर्स को तुरंत संरचित PDF या टेक्स्ट ऑर्डर भेजें।" },
        { title: "प्राइस नेगोशिएशन इतिहास", text: "बेहतर बातचीत करने के लिए नया ऑर्डर बनाते समय पिछला खरीद मूल्य देखें।" },
        { title: "सप्लायर वार कैटलॉग", text: "सप्लायर द्वारा आइटमों को ग्रुप करें ताकि आप अपने साप्ताहिक ऑर्डर एक साथ तैयार कर सकें।" },
        { title: "ऑर्डर स्टेटस ट्रैकिंग", text: "ऑर्डर को 'भेजा गया', 'प्राप्त' या 'पेंडिंग' के रूप में मार्क करें।" },
        { title: "रीऑर्डर रिमाइंडर", text: "जब आपकी ज़रूरी चीज़ें (चीनी, चाय, साबुन) सुरक्षित स्तर से नीचे गिरें तो सूचना प्राप्त करें।" }
      ],
      faqs: [
        { question: "मैं नया ऑर्डर कैसे बनाऊं?", answer: "बस आइटम चुनें या यह बताने के लिए अपनी आवाज़ का उपयोग करें कि आपको क्या स्टॉक करना है।" },
        { question: "क्या मैं अन्य ऐप के माध्यम से ऑर्डर साझा कर सकता हूँ?", answer: "हाँ, आप व्हाट्सएप, टेलीग्राम या ईमेल के माध्यम से आसानी से साझा कर सकते हैं।" },
        { question: "क्या यह सीज़नल डिमांड में मदद करता है?", answer: "हाँ, AI त्योहारों और मौसमी मांग के लिए उच्च स्टॉक स्तर का सुझाव देता है।" },
        { question: "क्या मैं नए सप्लायर जोड़ सकता हूँ?", answer: "हाँ, आप असीमित सप्लायर कांटेक्ट और कैटलॉग मैनेज कर सकते हैं।" },
        { question: "क्या यह पिछले ऑर्डर की कीमतें दिखाता है?", answer: "हाँ, आप ऑर्डर में प्रत्येक आइटम के ठीक बगल में अपनी पिछली खरीद कीमत देख सकते।" },
        { question: "क्या मैं रिकरिंग ऑर्डर बना सकता हूँ?", answer: "हाँ, आप उन वस्तुओं के लिए 'मानक साप्ताहिक लिस्ट' सहेज सकते हैं जिन्हें आप हर हफ्ते खरीदते हैं।" }
      ]
    },
    "scan-list": { 
      title: "Dukaan AI पर्ची स्कैनर", 
      badge: "लिस्ट-टू-डिजिटल", 
      description: "किसी कस्टमर की हाथ से लिखी लिस्ट कभी न भूलें। हस्तलिखित पर्चियों को डिजिटल बिल या ऑर्डर में स्कैन करें।",
      benefits: [
        { title: "लिखावट-से-बिल", text: "AI पर्चियों को डिजिटल कार्ट में बदलने के लिए विभिन्न भारतीय लिखावट शैलियों को पहचानता है।" },
        { title: "रिकरिंग लिस्ट सेविंग", text: "नियमित ग्राहकों की अक्सर एक ही लिस्ट होती है; भविष्य के उपयोग के लिए स्कैन की गई पर्चियां सहेजें।" },
        { title: "जीरो डेटा एंट्री", text: "बिलिंग काउंटर पर ग्राहक की कागजी लिस्ट से हर आइटम को मैन्युअल रूप से टाइप करना बंद करें।" },
        { title: "स्मार्ट प्राइस मैचिंग", text: "स्कैन किए गए आइटम स्वचालित रूप से आपकी दुकान के मूल्य मेनू के साथ मिलान किए जाते हैं।" },
        { title: "मल्टी-पेज स्कैनिंग", text: "एक ही डिजिटल रिकॉर्ड में कई पन्ने स्कैन करके लंबी किराने की लिस्ट को हैंडल करें।" },
        { title: "मात्रा की पहचान", text: "AI हस्तलिखित नोटों से '2 किलो', '100 ग्राम' या '5 नग' को सटीक रूप से निकालता है।" }
      ],
      faqs: [
        { question: "अगर लिखावट बहुत खराब है तो क्या होगा?", answer: "AI निकटतम आइटम का मिलान करेगा और आपको बिलिंग से पहले सत्यापित करने देगा।" },
        { question: "क्या मैं इसे होलसेल पर्चियों के लिए उपयोग कर सकता हूँ?", answer: "हाँ, यह कस्टमर लिस्ट और सप्लायर नोट्स दोनों के लिए प्रभावी ढंग से काम करता है।" },
        { question: "क्या इसमें इंटरनेट की ज़रूरत है?", answer: "स्कैनिंग ऑफ़लाइन काम करती है, जिससे व्यस्त दुकान के समय में कोई देरी नहीं होती है।" },
        { question: "क्या मैं स्कैन की गई लिस्ट में आइटम जोड़ सकता हूँ?", answer: "हाँ, स्कैन पूरा होने के बाद आप मैन्युअल रूप से आइटम जोड़ या हटा सकते हैं।" },
        { question: "क्या यह मूल फोटो सेव करता है?", answer: "हाँ, ज़रूरत पड़ने पर आप हमेशा मूल पर्ची फोटो को देख सकते हैं।" },
        { question: "कन्वर्जन कितना तेज़ है?", answer: "हाथ से लिखी लिस्ट को डिजिटल बिल में बदलने में लगभग 1-2 सेकंड का समय लगता है।" }
      ]
    }
  }
};

// Site-wide translations for Highlights, Benefits, FAQs
export const siteTranslations: Record<string, any> = {
  en: {
    highlights: [
      { name: "Voice-first shop management", type: "What makes Dukaan AI different", description: "Use your voice to bill products and search sales naturally." },
      { name: "Made for Indian businesses", type: "Built for local retailers", description: "Designed for kirana stores with simple flows and large actions." },
      { name: "24 Indian languages", type: "Language support", description: "Support for Hindi, Marathi, Bengali, Tamil, Telugu, Hinglish, and more." },
      { name: "Offline ready", type: "Reliable daily use", description: "Works even when internet connectivity is weak or unavailable." },
      { name: "WhatsApp-enabled", type: "Faster collections", description: "Share reminders and orders quickly on WhatsApp." },
      { name: "Secure data", type: "Privacy and trust", description: "Your store records stay protected with secure handling." }
    ],
    benefits: [
      { title: "Smart khata tracking", text: "Record udhaar and payments instantly." },
      { title: "AI bill scanner", text: "Capture purchase bills automatically." },
      { title: "Business insights", text: "Understand earnings clearly." },
      { title: "Professional orders", text: "Prepare supplier orders on WhatsApp." }
    ],
    faqs: [
      { question: "What is Dukaan AI?", answer: "Dukaan AI is a shop assistant for billing, khata, and orders." },
      { question: "Languages supported?", answer: "We support 24 Indian languages." },
      { question: "Is it secure?", answer: "Yes, your data is protected." },
      { question: "Offline useful?", answer: "Yes, most features work without internet." }
    ],
    about: {
      description: "Dukaan AI is more than a digital register. It is a business assistant designed to help local stores handle billing, udhaar, purchase records, orders, and decision-making through simple voice-first workflows.",
      f1_desc: "Built around real daily store workflows, not generic accounting screens.",
      f2_desc: "Business data is handled with privacy and trust in mind.",
      f3_desc: "Designed for Indian business owners who want to work in their own language.",
      f4_desc: "Save time on credit follow-up, bills, and supplier orders every day."
    },
    deploy: {
      description: "Dukaan AI helps local businesses digitize records, manage customer credit, scan bills, and work faster with voice-powered tools designed for India.",
      f1_title: "Works the way shop owners work",
      f1_desc: "Speak items, record dues, scan purchase bills, and manage supplier orders without complex software training.",
      f2_title: "Made for India",
      f2_desc: "Voice support in 24 Indian languages, offline-ready usage, and WhatsApp-friendly workflows make Dukaan AI practical for real businesses."
    },
    footer: {
      desc: "Business tools for billing, credit management, and store operations. Contact our team or visit the Play Store to learn more about Dukaan AI."
    }
  },
  hi: {
    highlights: [
      { name: "वॉयस-फर्स्ट शॉप मैनेजमेंट", type: "Dukaan AI को क्या अलग बनाता है", description: "उत्पादों का बिल बनाने और बिक्री को स्वाभाविक रूप से खोजने के लिए अपनी आवाज़ का उपयोग करें।" },
      { name: "भारतीय व्यवसायों के लिए निर्मित", type: "स्थानीय खुदरा विक्रेताओं के लिए निर्मित", description: "किराना स्टोर के लिए सरल प्रवाह और बड़े कार्यों के साथ डिज़ाइन किया गया।" },
      { name: "24 भारतीय भाषाएं", type: "भाषा समर्थन", description: "हिंदी, मराठी, बंगाली, तमिल, तेलुगु, हिंग्लिश और अन्य के लिए समर्थन।" },
      { name: "ऑफ़लाइन तैयार", type: "विश्वसनीय दैनिक उपयोग", description: "इंटरनेट कनेक्टिविटी कमजोर या अनुपलब्ध होने पर भी काम करता है।" },
      { name: "व्हाट्सएप-सक्षम", type: "तेज़ संग्रह", description: "व्हाट्सएप पर रिमाइंडर और ऑर्डर तुरंत साझा करें।" },
      { name: "सुरक्षित डेटा", type: "गोपनीयता और विश्वास", description: "आपके स्टोर रिकॉर्ड सुरक्षित हैंडलिंग के साथ सुरक्षित रहते हैं।" }
    ],
    benefits: [
      { title: "स्मार्ट खाता ट्रैकिंग", text: "उधार और भुगतान तुरंत रिकॉर्ड करें।" },
      { title: "AI बिल स्कैनर", text: "खरीद बिल स्वचालित रूप से कैप्चर करें।्" },
      { title: "बिज़नेस अंतर्दृष्टि", text: "कमाई को स्पष्ट रूप से समझें।" },
      { title: "प्रोफेशनल ऑर्डर", text: "व्हाट्सएप पर सप्लायर ऑर्डर तैयार करें।" }
    ],
    faqs: [
      { question: "Dukaan AI क्या है?", answer: "Dukaan AI बिलिंग, खाता और ऑर्डर के लिए एक दुकान सहायक है।" },
      { question: "कितनी भाषाएं?", answer: "हम 24 भारतीय भाषाओं का समर्थन करते हैं।" },
      { question: "क्या यह सुरक्षित है?", answer: "हां, आपका डेटा पूरी तरह सुरक्षित है।" },
      { question: "इंटरनेट चाहिए?", answer: "नहीं, अधिकांश काम बिना इंटरनेट के हो जाता है।" }
    ],
    about: {
      description: "Dukaan AI सिर्फ एक डिजिटल रजिस्टर नहीं है। यह एक बिज़नेस सहायक है जिसे स्थानीय दुकानों की बिलिंग, उधार, खरीद रिकॉर्ड, ऑर्डर और निर्णय लेने में मदद करने के लिए सरल वॉयस-फर्स्ट वर्कफ़्लो के माध्यम से डिज़ाइन किया गया है।",
      f1_desc: "वास्तविक दैनिक स्टोर वर्कफ़्लो के आसपास बनाया गया है, न कि जेनेरिक अकाउंटिंग स्क्रीन पर।",
      f2_desc: "बिज़नेस डेटा को गोपनीयता और भरोसे को ध्यान में रखकर हैंडल किया जाता है।",
      f3_desc: "उन भारतीय बिज़नेस मालिकों के लिए डिज़ाइन किया गया है जो अपनी भाषा में काम करना चाहते हैं।",
      f4_desc: "क्रेडिट फॉलो-अप, बिल और सप्लायर ऑर्डर पर हर दिन समय बचाएं।"
    },
    deploy: {
      description: "Dukaan AI स्थानीय बिज़नेस को रिकॉर्ड डिजिटाइज़ करने, कस्टमर क्रेडिट मैनेज करने, बिल स्कैन करने और भारत के लिए डिज़ाइन किए गए वॉयस-पावर्ड टूल्स के साथ तेज़ी से काम करने में मदद करता है।",
      f1_title: "दुकान मालिकों के काम करने के तरीके पर आधारित",
      f1_desc: "बिना किसी जटिल सॉफ्टवेयर ट्रेनिंग के आइटम बोलें, बकाया रिकॉर्ड करें, खरीद बिल स्कैन करें और सप्लायर ऑर्डर मैनेज करें।",
      f2_title: "भारत के लिए निर्मित",
      f2_desc: "24 भारतीय भाषाओं में वॉयस सपोर्ट, ऑफ़लाइन उपयोग और व्हाट्सएप-फ्रेंडली वर्कफ़्लो Dukaan AI को वास्तविक बिज़नेस के लिए व्यावहारिक बनाते हैं।"
    },
    footer: {
      desc: "बिलिंग, क्रेडिट मैनेजमेंट और स्टोर संचालन के लिए बिज़नेस टूल्स। हमारी टीम से संपर्क करें या Dukaan AI के बारे में अधिक जानने के लिए Play Store पर जाएं।"
    }
  }
};

// Comprehensive 24-Language Saturation Matrix
const allCodes = ["en", "hi", "mr", "bn", "ta", "te", "gu", "kn", "pa", "ml", "ur", "or", "as", "mai", "sat", "ks", "doi", "sd", "kok", "mni", "ne", "sa", "brx", "hinglish"];

allCodes.forEach(code => {
  if (!featureTranslations[code]) {
    featureTranslations[code] = featureTranslations.hi; 
  }
  
  if (!siteTranslations[code]) {
    siteTranslations[code] = siteTranslations.hi;
  }
});
