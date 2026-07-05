const fs = require('fs');
const path = require('path');

const replacements = {
  "🔍": '<i class="fas fa-search"></i>',
  "🛒": '<i class="fas fa-shopping-cart"></i>',
  "☰": '<i class="fas fa-bars"></i>',
  "📱": '<i class="fas fa-mobile-alt"></i>',
  "💻": '<i class="fas fa-laptop"></i>',
  "⌚": '<i class="fas fa-clock"></i>',
  "🎧": '<i class="fas fa-headphones"></i>',
  "📺": '<i class="fas fa-tv"></i>',
  "🏠": '<i class="fas fa-home"></i>',
  "🎮": '<i class="fas fa-gamepad"></i>',
  "⌨️": '<i class="fas fa-keyboard"></i>',
  "🛍️": '<i class="fas fa-shopping-bag"></i>',
  "💬": '<i class="fas fa-comment"></i>',
  "✖": '<i class="fas fa-times"></i>',
  "🚧": '<i class="fas fa-tools"></i>',
  "📊": '<i class="fas fa-chart-pie"></i>',
  "📦": '<i class="fas fa-box-open"></i>',
  "🏷️": '<i class="fas fa-tag"></i>',
  "👥": '<i class="fas fa-users"></i>',
  "📈": '<i class="fas fa-chart-line"></i>',
  "⚙️": '<i class="fas fa-cog"></i>',
  "🚪": '<i class="fas fa-sign-out-alt"></i>',
  "👤": '<i class="fas fa-user-circle"></i>',
  "❤️": '<i class="fas fa-heart"></i>',
  "📍": '<i class="fas fa-map-marker-alt"></i>',
  "💳": '<i class="fas fa-credit-card"></i>',
  "🔔": '<i class="fas fa-bell"></i>',
  "✔️": '<i class="fas fa-check"></i>',
  "💰": '<i class="fas fa-dollar-sign"></i>',
  "⭐": '<i class="fas fa-star"></i>',
  "🚚": '<i class="fas fa-truck"></i>',
  "🛡️": '<i class="fas fa-shield-alt"></i>',
  "↩️": '<i class="fas fa-undo"></i>',
  "📞": '<i class="fas fa-phone"></i>',
  "✉️": '<i class="fas fa-envelope"></i>',
  "🚀": '<i class="fas fa-rocket"></i>',
  "✓": '<i class="fas fa-check"></i>',
  "✕": '<i class="fas fa-times"></i>'
};

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  for (const [emoji, icon] of Object.entries(replacements)) {
    // Escape emoji for regex or just use split.join for global replace
    content = content.split(emoji).join(icon);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Replaced all emojis with FontAwesome icons.');
