const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Admin\\Desktop\\Demo';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const mojibakeMap = {
  'ðŸ“±': '📱',
  'ðŸ’»': '💻',
  'âŒš': '⌚',
  'ðŸŽ§': '🎧',
  'ðŸ“º': '📺',
  'ðŸ  ': '🏠',
  'ðŸŽ®': '🎮',
  'âŒ¨ï¸ ': '⌨️',
  'ðŸ ³': '🍳',
  'ðŸ“·': '📷',
  'ðŸ“¦': '📦',
  'ðŸ ˇ': '🏷️',
  'ðŸ‘¥': '👥',
  'ðŸ“ˆ': '📈',
  'âš™ï¸ ': '⚙️',
  'â ¤ï¸ ': '❤️',
  'ðŸ“ ': '📍',
  'ðŸ’³': '💳',
  'ðŸšª': '🚪',
  'â†’': '→',
  'âœ”ï¸ ': '✔️',
  'ðŸšš': '🚚',
  'ðŸ”’': '🔒',
  'ðŸ”„': '🔄',
  'ðŸ›¡ï¸ ': '🛡️',
  'âœ‰ï¸ ': '✉️',
  'ðŸ“ž': '📞',
  'ðŸ› ï¸ ': '🛍️',
  'ðŸ“š': '📚',
  'ðŸ‘¤': '👤',
  'ðŸ” ': '🔍',
  'ðŸ›’': '🛒',
  'â˜°': '☰',
  'ðŸ“Š': '📊',
  'ðŸ’¡': '💡',
  'ðŸš€': '🚀',
  'ðŸ”§': '🔧',
  'âœ¨': '✨',
  'ðŸ’»': '💻',
  'ðŸ”Š': '🔊',
  'Ã¢Ëœâ€¦': '⭐',
  'Ã°Å¸â€ºÂ\x8DÃ¯Â¸Â\x8F': '🛍️'
};

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let changed = false;
  for (const [garbled, emoji] of Object.entries(mojibakeMap)) {
    // Escape string for regex if needed, or just use split/join
    if (content.includes(garbled)) {
      content = content.split(garbled).join(emoji);
      changed = true;
    }
  }

  // Also fix any leftover HTML entity ampersands from the PowerShell script if any
  if (content.includes('&amp; Headphones')) {
    content = content.replace(/&amp; Headphones/g, '& Headphones');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed mojibake in ${file}`);
  }
}
console.log('Mojibake fixing complete.');
