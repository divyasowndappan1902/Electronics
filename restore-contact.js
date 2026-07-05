const fs = require('fs');
let content = fs.readFileSync('c:/Users/Admin/Desktop/Demo/contact.html', 'utf8');

// Replace using regex or include the invisible characters
content = content.replace(/ðŸ“\x8D/g, '📍');
content = content.replace(/âœ‰ï¸\x8F/g, '✉️');
content = content.replace(/ðŸ\x90¦/g, '🐦');
content = content.replace(/â–¶ï¸\x8F/g, '▶️');
content = content.replace(/ðŸ›¡ï¸\x8F/g, '🛡️');
content = content.replace(/â†©ï¸\x8F/g, '↩️');
content = content.replace(/ðŸ’¬/g, '💬');

fs.writeFileSync('c:/Users/Admin/Desktop/Demo/contact.html', content, 'utf8');
console.log('Fixed contact.html again');
