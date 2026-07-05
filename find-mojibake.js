const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/[^\x00-\x7F]{2,}/g);
  if (matches) {
    const mojibake = matches.filter(m => m.includes('Ã'));
    if (mojibake.length > 0) {
      console.log(file, Array.from(new Set(mojibake)));
    }
  }
}
