const fs = require('fs');
let content = fs.readFileSync('c:/Users/Admin/Desktop/Demo/collection.html', 'utf8');

const map = {
  '⌚ Smart Watches & Wearables': '⌚ Smart Watches & Wearables',
  'ðŸ   Home Appliances': '🏠 Home Appliances',
  'ðŸ ³ Kitchen Appliances': '🍳 Kitchen Appliances',
  '💡 Smart Home Devices': '💡 Smart Home Devices',
  'ðŸ–±ï¸  Computer Accessories': '🖱️ Computer Accessories',
  'ðŸ”‹ Chargers & Power Banks': '🔋 Chargers & Power Banks',
  'ðŸŒ  Networking': '🌐 Networking',
  'ðŸ’¾ Storage Devices': '💾 Storage Devices',
  'ðŸ–¨ï¸  Printers & Office': '🖨️ Printers & Office',
  'ðŸ’° Budget Picks': '💰 Budget Picks',
  'ðŸŽ  Gift Collection': '🎁 Gift Collection',
  'ðŸŽ‰ Festival Offers': '🎉 Festival Offers',
  "âš¡ Today's Deals": "⚡ Today's Deals",
  "ðŸ”¥ Trending Products": "🔥 Trending Products",
  "â­  Best Sellers": "⭐ Best Sellers",
  "ðŸ†• New Arrivals": "🆕 New Arrivals",
  "ðŸ † Top Rated Products": "🏆 Top Rated Products",
  "? Smart Watches": "⌚ Smart Watches"
};

for (const [garbled, emoji] of Object.entries(map)) {
  content = content.replace(garbled, emoji);
}

content = content.replace(/>\? Smart Watches & Wearables</g, '>⌚ Smart Watches & Wearables<');
content = content.replace(/>\?\? Smartphones Collection</g, '>📱 Smartphones Collection<');
content = content.replace(/>\?\? Laptops & Computers</g, '>💻 Laptops & Computers<');
content = content.replace(/>\?\? Audio & Headphones</g, '>🎧 Audio & Headphones<');
content = content.replace(/>\?\? Smart TVs & Entertainment</g, '>📺 Smart TVs & Entertainment<');
content = content.replace(/>\?\? Gaming Collection</g, '>🎮 Gaming Collection<');

content = content.replace(/<h3 class="collection-card-title">[^<]+Home Appliances<\/h3>/g, '<h3 class="collection-card-title">🏠 Home Appliances</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Kitchen Appliances<\/h3>/g, '<h3 class="collection-card-title">🍳 Kitchen Appliances</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Computer Accessories<\/h3>/g, '<h3 class="collection-card-title">🖱️ Computer Accessories</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Chargers & Power Banks<\/h3>/g, '<h3 class="collection-card-title">🔋 Chargers & Power Banks</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Networking<\/h3>/g, '<h3 class="collection-card-title">🌐 Networking</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Storage Devices<\/h3>/g, '<h3 class="collection-card-title">💾 Storage Devices</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Printers & Office<\/h3>/g, '<h3 class="collection-card-title">🖨️ Printers & Office</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Budget Picks<\/h3>/g, '<h3 class="collection-card-title">💰 Budget Picks</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Gift Collection<\/h3>/g, '<h3 class="collection-card-title">🎁 Gift Collection</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Festival Offers<\/h3>/g, '<h3 class="collection-card-title">🎉 Festival Offers</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Today's Deals<\/h3>/g, '<h3 class="collection-card-title">⚡ Today\'s Deals</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Trending Products<\/h3>/g, '<h3 class="collection-card-title">🔥 Trending Products</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Best Sellers<\/h3>/g, '<h3 class="collection-card-title">⭐ Best Sellers</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+New Arrivals<\/h3>/g, '<h3 class="collection-card-title">🆕 New Arrivals</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Top Rated Products<\/h3>/g, '<h3 class="collection-card-title">🏆 Top Rated Products</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Smartphones Collection<\/h3>/g, '<h3 class="collection-card-title">📱 Smartphones Collection</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Laptops & Computers<\/h3>/g, '<h3 class="collection-card-title">💻 Laptops & Computers</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Audio & Headphones<\/h3>/g, '<h3 class="collection-card-title">🎧 Audio & Headphones</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Smart Watches & Wearables<\/h3>/g, '<h3 class="collection-card-title">⌚ Smart Watches & Wearables</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Smart TVs & Entertainment<\/h3>/g, '<h3 class="collection-card-title">📺 Smart TVs & Entertainment</h3>');
content = content.replace(/<h3 class="collection-card-title">[^<]+Gaming Collection<\/h3>/g, '<h3 class="collection-card-title">🎮 Gaming Collection</h3>');

fs.writeFileSync('c:/Users/Admin/Desktop/Demo/collection.html', content, 'utf8');
console.log('Fixed collection.html');
