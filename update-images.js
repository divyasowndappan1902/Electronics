const fs = require('fs');

const dir = 'c:\\Users\\Admin\\Desktop\\Demo';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacements = [
  { alt: 'Studio Speaker', src: 'studio-speaker.webp' },
  { alt: 'Mini Speaker', src: 'mini-speaker.webp' },
  { alt: 'Smart Assistant', src: 'smart-assistant.webp' }
];

for (const file of files) {
  const filePath = `${dir}\\${file}`;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const { alt, src } of replacements) {
    const regex = new RegExp(`<img\\s+src="[^"]+"\\s+alt="${alt}"`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, `<img src="${src}" alt="${alt}"`);
      changed = true;
    }
    
    // Also try checking if alt and src are in different order, like alt="Studio Speaker" src="..."
    const regex2 = new RegExp(`alt="${alt}"([^>]+)src="[^"]+"`, 'g');
    if (content.match(regex2)) {
      content = content.replace(regex2, `alt="${alt}"$1src="${src}"`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images in ${file}`);
  }
}
console.log('Done.');
