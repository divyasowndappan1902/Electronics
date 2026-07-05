const fs = require('fs');

const content = fs.readFileSync('shop.html', 'utf8');

const newSidebar = `    <aside class="shop-sidebar">
      <h2 style="margin-bottom: 2rem; font-size: 1.5rem;">Categories</h2>
      
      <div class="category-group">
        <div class="category-title">📱 Mobile & Smart Devices</div>
        <ul class="category-list">
          <li><a href="#">Smartphones</a></li>
          <li><a href="#">Feature Phones</a></li>
          <li><a href="#">Tablets</a></li>
          <li><a href="#">Smart Watches</a></li>
          <li><a href="#">Fitness Bands</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">💻 Computers & Laptops</div>
        <ul class="category-list">
          <li><a href="#">Laptops</a></li>
          <li><a href="#">Desktop PCs</a></li>
          <li><a href="#">Monitors</a></li>
          <li><a href="#">Keyboards</a></li>
          <li><a href="#">Mouse</a></li>
          <li><a href="#">Webcams</a></li>
          <li><a href="#">Printers</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🎧 Audio</div>
        <ul class="category-list">
          <li><a href="#">Wireless Earbuds</a></li>
          <li><a href="#">Bluetooth Headphones</a></li>
          <li><a href="#">Wired Headphones</a></li>
          <li><a href="#">Bluetooth Speakers</a></li>
          <li><a href="#">Soundbars</a></li>
          <li><a href="#">Home Theater Systems</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">📺 TV & Entertainment</div>
        <ul class="category-list">
          <li><a href="#">Smart TVs</a></li>
          <li><a href="#">Android TVs</a></li>
          <li><a href="#">Streaming Devices</a></li>
          <li><a href="#">TV Accessories</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🏠 Home Appliances</div>
        <ul class="category-list">
          <li><a href="#">Refrigerators</a></li>
          <li><a href="#">Washing Machines</a></li>
          <li><a href="#">Air Conditioners</a></li>
          <li><a href="#">Microwave Ovens</a></li>
          <li><a href="#">Air Fryers</a></li>
          <li><a href="#">Vacuum Cleaners</a></li>
          <li><a href="#">Water Purifiers</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🍳 Kitchen Appliances</div>
        <ul class="category-list">
          <li><a href="#">Mixer Grinders</a></li>
          <li><a href="#">Electric Kettles</a></li>
          <li><a href="#">Induction Cooktops</a></li>
          <li><a href="#">Rice Cookers</a></li>
          <li><a href="#">Toasters</a></li>
          <li><a href="#">Coffee Makers</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🎮 Gaming</div>
        <ul class="category-list">
          <li><a href="#">Gaming Laptops</a></li>
          <li><a href="#">Gaming Monitors</a></li>
          <li><a href="#">Gaming Keyboards</a></li>
          <li><a href="#">Gaming Mouse</a></li>
          <li><a href="#">Gaming Headsets</a></li>
          <li><a href="#">Game Controllers</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🔋 Accessories</div>
        <ul class="category-list">
          <li><a href="#">Power Banks</a></li>
          <li><a href="#">Mobile Chargers</a></li>
          <li><a href="#">Fast Chargers</a></li>
          <li><a href="#">USB Cables</a></li>
          <li><a href="#">HDMI Cables</a></li>
          <li><a href="#">Memory Cards</a></li>
          <li><a href="#">USB Flash Drives</a></li>
          <li><a href="#">Laptop Bags</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">📷 Cameras</div>
        <ul class="category-list">
          <li><a href="#">DSLR Cameras</a></li>
          <li><a href="#">Mirrorless Cameras</a></li>
          <li><a href="#">Action Cameras</a></li>
          <li><a href="#">Security Cameras</a></li>
          <li><a href="#">CCTV Systems</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🏡 Smart Home</div>
        <ul class="category-list">
          <li><a href="#">Smart Bulbs</a></li>
          <li><a href="#">Smart Plugs</a></li>
          <li><a href="#">Smart Door Locks</a></li>
          <li><a href="#">Wi-Fi Routers</a></li>
          <li><a href="#">Smart Security Devices</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🔥 Shop Sections</div>
        <ul class="category-list">
          <li><a href="#new-arrivals">New Arrivals</a></li>
          <li><a href="#best-sellers">Best Sellers</a></li>
          <li><a href="#top-rated">Top Rated Products</a></li>
          <li><a href="#trending">Trending Products</a></li>
          <li><a href="#featured">Featured Products</a></li>
          <li><a href="#todays-deals">Today's Deals</a></li>
          <li><a href="#clearance">Clearance Sale</a></li>
          <li><a href="#premium">Premium Collection</a></li>
        </ul>
      </div>

      <div style="margin-top: 2rem;">
        <p style="margin: 0; color: var(--text-light);">Showing latest results</p>
        <div style="margin-top: 0.5rem;">
          <label style="margin-right: 0.5rem; font-weight: 500;">Sort by:</label>
          <select style="padding: 0.5rem; border-radius: 8px; border: 1px solid #ccc; width: 100%;">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>
    </aside>

    <main>
`;

// Find where aside starts and where Section 1 starts
const asideStart = content.indexOf('<aside class="shop-sidebar">');
const section1Start = content.indexOf('      <!-- Section 1: New Arrivals -->');

if (asideStart !== -1 && section1Start !== -1) {
  const newContent = content.substring(0, asideStart) + newSidebar + content.substring(section1Start);
  fs.writeFileSync('shop.html', newContent, 'utf8');
  console.log('Successfully updated shop.html');
} else {
  console.log('Could not find anchor points in shop.html');
}
