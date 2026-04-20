const fs = require('fs');
const path = require('path');

const langs = ["ml", "ur", "or", "as", "mai", "sat", "ks", "doi", "sd", "kok", "mni", "ne", "sa", "brx"];
// Go up one level from __dirname (which is 'scratch') to reach project root
const hiPath = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'hi.ts');
const hiContent = fs.readFileSync(hiPath, 'utf8');

langs.forEach(lang => {
    const filePath = path.join(__dirname, '..', 'src', 'i18n', 'locales', `${lang}.ts`);
    const newContent = hiContent.replace(/export const hi = \{/, `export const ${lang} = {`);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${lang}.ts with clean Hindi bridge.`);
});

// Specialized Hinglish
const hinglishPath = path.join(__dirname, '..', 'src', 'i18n', 'locales', 'hinglish.ts');
const hinglishContent = hiContent.replace(/export const hi = \{/, `export const hinglish = {`)
    .replace(/"nav.features": "विशेषताएं"/, '"nav.features": "Features"')
    .replace(/"nav.blog": "ब्लॉग"/, '"nav.blog": "Blog"')
    .replace(/"hero.title1": "स्मार्ट खाता, वॉयस बिलिंग"/, '"hero.title1": "Smart Khata, Voice Billing"');
fs.writeFileSync(hinglishPath, hinglishContent, 'utf8');
console.log(`Updated hinglish.ts with specialized content.`);
