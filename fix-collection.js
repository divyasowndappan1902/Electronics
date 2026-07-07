const fs = require('fs');
let c = fs.readFileSync('collection.html', 'utf8');

const mangled = `        <div class="collection-card-content">
          <h3 class="collection-card-title"><span class="material-icons" style="vertical-align: middle; margin-right: 8px;">print</span>Printers & Office</h3>
          <span class="collection-card-btn" onclick="window.location.href='404.html'">View Collection →</span>
          <h3 class="collection-card-title"><span class="material-icons" style="vertical-align: middle; margin-right: 8px;">card_giftcard</span>Gift Collection</h3>
          <span class="collection-card-btn" onclick="window.location.href='404.html'">View Collection →</span>
        </div>`;

const fixed = `        <div class="collection-card-content">
          <h3 class="collection-card-title"><span class="material-icons" style="vertical-align: middle; margin-right: 8px;">print</span>Printers & Office</h3>
          <span class="collection-card-btn" onclick="window.location.href='404.html'">View Collection →</span>
        </div>
      </a>
    </div>

    <h2 class="collection-section-title">Curated & Promotional Collections</h2>
    <div class="collections-hub">
      <a href="404.html" class="collection-card">
        <div class="collection-card-bg" style="background-image: url('premium_collection.webp');"></div>
        <div class="collection-card-overlay" style="background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4));"></div>
        <div class="collection-card-content">
          <h3 class="collection-card-title" style="color: #d4af37; font-family: serif; letter-spacing: 2px;">💎 Premium Collection</h3>
          <span class="collection-card-btn" style="border-color: #d4af37; color: #d4af37;" onclick="window.location.href='404.html'">Exclusive Access →</span>
        </div>
      </a>
      <a href="404.html" class="collection-card">
        <div class="collection-card-bg" style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80');"></div>
        <div class="collection-card-overlay"></div>
        <div class="collection-card-content">
          <h3 class="collection-card-title"><span class="material-icons" style="vertical-align: middle; margin-right: 8px;">savings</span>Budget Picks</h3>
          <span class="collection-card-btn" onclick="window.location.href='404.html'">Under ₹10,000 →</span>
        </div>
      </a>
      <a href="404.html" class="collection-card">
        <div class="collection-card-bg" style="background-image: url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80');"></div>
        <div class="collection-card-overlay"></div>
        <div class="collection-card-content">
          <h3 class="collection-card-title"><span class="material-icons" style="vertical-align: middle; margin-right: 8px;">card_giftcard</span>Gift Collection</h3>
          <span class="collection-card-btn" onclick="window.location.href='404.html'">View Collection →</span>
        </div>`;

if (c.includes(mangled)) {
    c = c.replace(mangled, fixed);
    fs.writeFileSync('collection.html', c, 'utf8');
    console.log('Fixed collection.html');
} else {
    console.log('Mangled string not found');
}
