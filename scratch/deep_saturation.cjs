const fs = require('fs');
const path = require('path');

// Languages to fix with Full-Strength Hindi Bridge
const languages = [
  'ml', 'ur', 'or', 'as', 'mai', 'sat', 'ks', 'doi', 'sd', 'kok', 'mni', 'ne', 'sa', 'brx', 'hinglish'
];

const localesDir = path.join(__dirname, '../src/i18n/locales');

// Read the Master Hindi Full-Strength content
const hiContent = fs.readFileSync(path.join(localesDir, 'hi.ts'), 'utf8');

// Extract the object content (everything between 'export const hi = {' and '};')
const match = hiContent.match(/export const hi = \{([\s\S]*)\};/);
if (!match) {
  console.error("Could not find hi object in hi.ts");
  process.exit(1);
}
const hiObjectContent = match[1];

languages.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.ts`);
  
  // Create a new content file that exports the same object but named for the target language
  const newContent = `export const ${lang} = {${hiObjectContent}};`;
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Successfully updated ${lang}.ts with Full-Strength Hindi Bridge.`);
});
