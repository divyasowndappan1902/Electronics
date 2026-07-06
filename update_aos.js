const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const htmlFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

const oldSelector = "'.product-card, .section-title, .hero, .flash-sale-banner, .brands-marquee, .feature-card, .blog-post'";
const newSelector = "'.product-card, .section-title, .hero, .flash-sale-banner, .brands-marquee, .feature-card, .blog-post, .split-left, .split-right, .login-glass-card, .auth-form, .stat-card, .dashboard-card, .chart-container, .contact-info, .contact-form, .faq-item, .collection-card, .cart-item, .order-card, .address-card, .payment-card, .shop-sidebar, .shop-main, .account-sidebar, .account-content, .settings-section, .error-content'";

let count = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(oldSelector)) {
    content = content.replace(oldSelector, newSelector);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log(`Updated selectors in ${file}`);
  }
});

console.log(`Total files updated: ${count}`);
