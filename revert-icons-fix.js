const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Admin\\Desktop\\Demo';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove FontAwesome link
  content = content.replace(/  <link rel="stylesheet" href="https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/6.4.0\/css\/all.min.css">\n/g, '');
  content = content.replace(/<link rel="stylesheet" href="https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/6.4.0\/css\/all.min.css">/g, '');

  // 2. Featured Categories
  content = content.replace(/<i class="fas fa-mobile-alt"><\/i> Smartphones/g, '📱 Smartphones');
  content = content.replace(/<i class="fas fa-laptop"><\/i> Laptops/g, '💻 Laptops');
  content = content.replace(/<i class="fas fa-clock"><\/i> Smart Watches/g, '⌚ Smart Watches');
  content = content.replace(/<i class="fas fa-headphones"><\/i> Earbuds &amp; Headphones/g, '🎧 Earbuds &amp; Headphones');
  content = content.replace(/<i class="fas fa-headphones"><\/i> Earbuds & Headphones/g, '🎧 Earbuds & Headphones');
  content = content.replace(/<i class="fas fa-tv"><\/i> TVs/g, '📺 TVs');
  content = content.replace(/<i class="fas fa-home"><\/i> Home Appliances/g, '🏠 Home Appliances');
  content = content.replace(/<i class="fas fa-gamepad"><\/i> Gaming Accessories/g, '🎮 Gaming Accessories');
  content = content.replace(/<i class="fas fa-keyboard"><\/i> Computer Accessories/g, '⌨️ Computer Accessories');

  // 3. Why Choose Us (use precise replacements)
  content = content.replace(/<i class="fas fa-check-circle"><\/i><\/div><h3 style="font-size: 1.2rem;">Genuine Products<\/h3>/g, '✔️</div><h3 style="font-size: 1.2rem;">Genuine Products</h3>');
  content = content.replace(/<i class="fas fa-shipping-fast"><\/i><\/div><h3 style="font-size: 1.2rem;">Fast Delivery<\/h3>/g, '🚚</div><h3 style="font-size: 1.2rem;">Fast Delivery</h3>');
  content = content.replace(/<i class="fas fa-lock"><\/i><\/div><h3 style="font-size: 1.2rem;">Secure Payments<\/h3>/g, '🔒</div><h3 style="font-size: 1.2rem;">Secure Payments</h3>');
  content = content.replace(/<i class="fas fa-undo"><\/i><\/div><h3 style="font-size: 1.2rem;">Easy Returns<\/h3>/g, '🔄</div><h3 style="font-size: 1.2rem;">Easy Returns</h3>');
  content = content.replace(/<i class="fas fa-shield-alt"><\/i><\/div><h3 style="font-size: 1.2rem;">Warranty Support<\/h3>/g, '🛡️</div><h3 style="font-size: 1.2rem;">Warranty Support</h3>');

  // 4. Features (Free Shipping etc.)
  content = content.replace(/<div class="feature-icon"><i class="fas fa-truck"><\/i><\/div>\s*<h3>Free Shipping<\/h3>/g, '<div class="feature-icon">🚚</div>\n        <h3>Free Shipping</h3>');
  content = content.replace(/<div class="feature-icon"><i class="fas fa-headset"><\/i><\/div>\s*<h3>24\/7 Customer Support<\/h3>/g, '<div class="feature-icon">🎧</div>\n        <h3>24/7 Customer Support</h3>');
  content = content.replace(/<div class="feature-icon"><i class="fas fa-credit-card"><\/i><\/div>\s*<h3>EMI Options<\/h3>/g, '<div class="feature-icon">💳</div>\n        <h3>EMI Options</h3>');
  content = content.replace(/<div class="feature-icon"><i class="fas fa-tools"><\/i><\/div>\s*<h3>Installation Support<\/h3>/g, '<div class="feature-icon">🛠️</div>\n        <h3>Installation Support</h3>');

  // 5. Footer Contact Info
  content = content.replace(/<i class="fas fa-map-marker-alt"><\/i> 123 Innovation Drive/g, '📍 123 Innovation Drive');
  content = content.replace(/<i class="fas fa-envelope"><\/i> support@technocy.com/g, '✉️ support@technocy.com');
  content = content.replace(/<i class="fas fa-phone"><\/i> \+1 \(555\) 123-4567/g, '📞 +1 (555) 123-4567');

  // 6. Top Nav Links
  content = content.replace(/<i class="fas fa-home"><\/i> Home/g, 'Home');
  content = content.replace(/<i class="fas fa-shopping-bag"><\/i> Shop/g, 'Shop');
  content = content.replace(/<i class="fas fa-layer-group"><\/i> Collection/g, 'Collection');
  content = content.replace(/<i class="fas fa-envelope"><\/i> Contact/g, 'Contact');
  content = content.replace(/<i class="fas fa-user"><\/i> Login/g, 'Login');

  // 7. Nav Icons (right side)
  content = content.replace(/<div class="nav-icon"><i class="fas fa-search"><\/i><\/div>/g, '<div class="nav-icon">🔍</div>');
  content = content.replace(/<div class="nav-icon"><i class="fas fa-shopping-cart"><\/i><\/div>/g, '<div class="nav-icon">🛒</div>');
  content = content.replace(/<div class="mobile-menu-btn"><i class="fas fa-bars"><\/i><\/div>/g, '<div class="mobile-menu-btn">☰</div>');
  
  // 8. Admin / Customer Sidebars
  content = content.replace(/<i class="fas fa-chart-pie"><\/i> Dashboard/g, '📊 Dashboard');
  content = content.replace(/<i class="fas fa-box-open"><\/i> Orders/g, '📦 Orders');
  content = content.replace(/<i class="fas fa-tag"><\/i> Products/g, '🏷️ Products');
  content = content.replace(/<i class="fas fa-users"><\/i> Customers/g, '👥 Customers');
  content = content.replace(/<i class="fas fa-chart-line"><\/i> Analytics/g, '📈 Analytics');
  content = content.replace(/<i class="fas fa-cog"><\/i> Settings/g, '⚙️ Settings');
  
  content = content.replace(/<i class="fas fa-user-circle"><\/i> My Account/g, '👤 My Account');
  content = content.replace(/<i class="fas fa-box"><\/i> Order History/g, '📦 Order History');
  content = content.replace(/<i class="fas fa-heart"><\/i> Wishlist/g, '❤️ Wishlist');
  content = content.replace(/<i class="fas fa-map-marker-alt"><\/i> Saved Addresses/g, '📍 Saved Addresses');
  content = content.replace(/<i class="fas fa-credit-card"><\/i> Payment Methods/g, '💳 Payment Methods');
  content = content.replace(/<i class="fas fa-cog"><\/i> Account Settings/g, '⚙️ Account Settings');
  
  content = content.replace(/<i class="fas fa-sign-out-alt"><\/i> Logout/g, '🚪 Logout');

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Icons reverted back to emojis successfully!");
