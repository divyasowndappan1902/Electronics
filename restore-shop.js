const fs = require('fs');

let content = fs.readFileSync('c:/Users/Admin/Desktop/Demo/shop.html', 'utf8');

const replacement = `<li><a href="#">Android TVs</a></li>
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
          <li><a href="#">Toasters & Coffee Makers</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🎮 Gaming</div>
        <ul class="category-list">
          <li><a href="#">Gaming Laptops & Monitors</a></li>
          <li><a href="#">Gaming Keyboards & Mouse</a></li>
          <li><a href="#">Gaming Headsets</a></li>
          <li><a href="#">Game Controllers</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🔋 Accessories</div>
        <ul class="category-list">
          <li><a href="#">Power Banks</a></li>
          <li><a href="#">Chargers & Cables</a></li>
          <li><a href="#">Memory Cards & USB</a></li>
          <li><a href="#">Laptop Bags</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">📷 Cameras</div>
        <ul class="category-list">
          <li><a href="#">DSLR & Mirrorless</a></li>
          <li><a href="#">Action Cameras</a></li>
          <li><a href="#">Security & CCTV</a></li>
        </ul>
      </div>

      <div class="category-group">
        <div class="category-title">🏡 Smart Home</div>
        <ul class="category-list">
          <li><a href="#">Smart Bulbs & Plugs</a></li>
          <li><a href="#">Smart Door Locks</a></li>
          <li><a href="#">Wi-Fi Routers</a></li>
          <li><a href="#">Smart Security Dev</a></li>
        </ul>
      </div>
    </aside>

    <!-- Main Content Area: Shop Sections -->
    <main class="shop-main">
      
      <!-- Top Filters Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; background: var(--bg-secondary); padding: 1rem 2rem; border-radius: 12px;">`;

content = content.replace('<li><a href="#">Android TVs</a></li>', replacement);

fs.writeFileSync('c:/Users/Admin/Desktop/Demo/shop.html', content, 'utf8');
console.log('Fixed shop.html');
