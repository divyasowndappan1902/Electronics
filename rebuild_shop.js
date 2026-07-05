const fs = require('fs');

const html = \<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shop - Electronic Store</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <a href="index.html" class="logo"><img src="logo.webp" alt="STACKLY Logo" class="logo-img"></a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="shop.html" class="active">Shop</a></li>
      <li><a href="collection.html">Collection</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="login.html">Login</a></li>
    </ul>
    <div class="nav-icons">
      <div class="nav-icon">??</div>
      <div class="nav-icon">??</div>
      <div class="mobile-menu-btn">?</div>
    </div>
  </nav>

  <div class="container">
    <!-- Hero Section -->
    <section class="shop-hero">
      <nav aria-label="Breadcrumb" class="breadcrumbs">
          <ol>
              <li><a href="index.html"><span class="material-icons">home</span> Home</a></li>
              <li class="separator"><span class="material-icons">chevron_right</span></li>
              <li><span class="active"><span class="material-icons" style="font-size:1rem;vertical-align:middle;margin-right:4px;">storefront</span>Shop</span></li>
          </ol>
      </nav>
      <h1 class="shop-title">Shop our <span class="text-gradient">Products</span></h1>
    </section>

    <!-- Controls -->
    <section class="shop-controls">
      <h1 class="shop-title" id="shopTitle" style="font-size:1.8rem;">All Products <span class="result-count" id="resultCount">(0 Results)</span></h1>
      <div class="sort-wrapper">
          <label for="sortSelect">Sort by:</label>
          <select id="sortSelect">
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="newest">Newest</option>
              <option value="rating">Top Rated</option>
          </select>
      </div>
    </section>

    <div class="filter-chips" id="filterChips"></div>

    <!-- Shop Container -->
    <div class="shop-container">
      <aside class="filter-sidebar">
          <h3 class="sidebar-title">Filters <button class="clear-all-btn" id="clearAllBtn">Clear All</button></h3>
          
          <div class="filter-section">
              <h4>Categories <span class="toggle-icon material-icons" data-target="categories">expand_more</span></h4>
              <ul id="categories">
                  <li><label><input type="checkbox" value="phones" data-type="category"> Phones</label></li>
                  <li><label><input type="checkbox" value="laptops" data-type="category"> Laptops</label></li>
                  <li><label><input type="checkbox" value="audio" data-type="category"> Audio</label></li>
                  <li><label><input type="checkbox" value="gaming" data-type="category"> Gaming</label></li>
                  <li><label><input type="checkbox" value="wearables" data-type="category"> Wearables</label></li>
                  <li><label><input type="checkbox" value="cameras" data-type="category"> Cameras</label></li>
              </ul>
          </div>

          <div class="filter-section">
              <h4>Price Range</h4>
              <div class="price-inputs">
                  <input type="number" id="minPrice" placeholder="Min" min="0" max="5000">
                  <span>-</span>
                  <input type="number" id="maxPrice" placeholder="Max" min="0" max="5000">
                  <button class="apply-price-btn" id="applyPriceBtn">Apply</button>
              </div>
          </div>
      </aside>

      <main class="shop-main">
          <div class="product-grid" id="productGrid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
              <!-- Dynamically populated via JS -->
          </div>
          <div class="no-results" id="noResults">
              <h3>No Products Found</h3>
              <p>Try adjusting your filters to see more results.</p>
              <button class="btn" id="clearFiltersBtn">Clear Filters</button>
          </div>
          <nav class="pagination" id="pagination"></nav>
      </main>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-col">
          <a href="index.html" class="logo"><img src="logo.webp" alt="STACKLY Logo" class="logo-img"></a>
          <p style="margin-top: 1rem;">The ultimate electronics store experience.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="collection.html">Collection</a></li>
            <li><a href="login.html">Login</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2026 Technocy Electronics. All rights reserved.
      </div>
    </div>
  </footer>

  <script>
      const products = [
          { id: 1, img: "studio-speaker.webp", title: "Studio Speaker", price: 299, category: "audio", rating: 4.8 },
          { id: 2, img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&q=80", title: "Pro Camera", price: 1299, category: "cameras", rating: 4.9 },
          { id: 3, img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&q=80", title: "X Phone", price: 999, category: "phones", rating: 4.7 },
          { id: 4, img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80", title: "Fitness Band", price: 99, category: "wearables", rating: 4.3 },
          { id: 5, img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&q=80", title: "Pro Controller", price: 69, category: "gaming", rating: 4.5 },
          { id: 6, img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80", title: "Sport Watch", price: 199, category: "wearables", rating: 4.6 },
          { id: 7, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", title: "Premium Headphones", price: 296, category: "audio", rating: 4.8 },
          { id: 8, img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", title: "RGB Keyboard", price: 79, category: "gaming", rating: 4.4 },
          { id: 9, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80", title: "Creator Pro Laptop", price: 2499, category: "laptops", rating: 4.9 },
          { id: 10, img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80", title: "VR Headset", price: 399, category: "gaming", rating: 4.5 },
          { id: 11, img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&q=80", title: "Vlog Camera", price: 899, category: "cameras", rating: 4.6 }
      ];

      let filterState = {
          categories: [],
          minPrice: 0,
          maxPrice: Infinity,
          sort: 'price-asc',
          page: 1,
          perPage: 9
      };

      const elements = {
          productGrid: document.getElementById('productGrid'),
          noResults: document.getElementById('noResults'),
          filterChips: document.getElementById('filterChips'),
          resultCount: document.getElementById('resultCount'),
          sortSelect: document.getElementById('sortSelect'),
          clearAllBtn: document.getElementById('clearAllBtn'),
          clearFiltersBtn: document.getElementById('clearFiltersBtn'),
          applyPriceBtn: document.getElementById('applyPriceBtn'),
          minPrice: document.getElementById('minPrice'),
          maxPrice: document.getElementById('maxPrice'),
          pagination: document.getElementById('pagination')
      };

      function matchesFilters(product) {
          return (!filterState.categories.length || filterState.categories.includes(product.category)) &&
                 product.price >= filterState.minPrice &&
                 product.price <= filterState.maxPrice;
      }

      function sortProducts(a, b) {
          const multiplier = filterState.sort === 'price-desc' ? -1 : 1;
          if (filterState.sort === 'price-asc' || filterState.sort === 'price-desc') {
              return multiplier * (a.price - b.price);
          } else if (filterState.sort === 'newest') {
              return b.id - a.id;
          } else if (filterState.sort === 'rating') {
              return b.rating - a.rating;
          }
          return 0;
      }

      function applyFilters() {
          let filtered = products.filter(matchesFilters).sort(sortProducts);

          const totalPages = Math.ceil(filtered.length / filterState.perPage);
          filterState.page = Math.min(filterState.page, totalPages || 1);

          const start = (filterState.page - 1) * filterState.perPage;
          const end = start + filterState.perPage;
          const paginated = filtered.slice(start, end);

          renderProducts(paginated);
          renderChips();
          renderPagination(totalPages, filtered.length);
          updateCount(filtered.length);

          elements.noResults.style.display = paginated.length === 0 ? 'block' : 'none';
          elements.productGrid.style.display = paginated.length === 0 ? 'none' : 'grid';
      }

      function renderProducts(products) {
          elements.productGrid.innerHTML = products.map(product => \
          <div class="product-card">
              <div class="product-img-wrapper">
                  <img src="\" alt="\">
              </div>
              <div class="product-info">
                  <div style="color:#f59e0b; margin-bottom:5px; font-size:0.9rem;">
                      \\
                  </div>
                  <h3 class="product-title">\</h3>
                  <div class="product-price">$\</div>
              </div>
              <div style="padding: 0 1.5rem 1.5rem;">
                  <button class="btn" style="width: 100%;">Add to Cart</button>
              </div>
          </div>
          \).join('');
      }

      function renderChips() {
          const chips = [];
          filterState.categories.forEach(cat => chips.push(\Category: \\));
          if (filterState.minPrice > 0 || filterState.maxPrice < Infinity) {
              chips.push(\Price: $\ - $\\);
          }

          elements.filterChips.innerHTML = chips.map(chip => \
          <div class="filter-chip">
              \
              <button class="remove-chip material-icons" data-chip="\">close</button>
          </div>
          \).join('') || '';
      }

      function renderPagination(totalPages) {
          if (totalPages <= 1) {
              elements.pagination.innerHTML = '';
              return;
          }
          let html = '';
          for (let i = 1; i <= totalPages; i++) {
              html += \<button class="\" onclick="window.shopApp.changePage(\)">\</button>\;
          }
          elements.pagination.innerHTML = html;
      }

      function updateCount(count) {
          elements.resultCount.textContent = \(\ Results)\;
      }

      document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
          cb.addEventListener('change', (e) => {
              const value = e.target.value;
              const index = filterState.categories.indexOf(value);
              if (index > -1) {
                  filterState.categories.splice(index, 1);
              } else {
                  filterState.categories.push(value);
              }
              applyFilters();
          });
      });

      document.querySelectorAll('.toggle-icon').forEach(icon => {
          icon.addEventListener('click', (e) => {
              const target = e.target.dataset.target;
              const ul = document.getElementById(target);
              ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
              e.target.classList.toggle('rotated');
          });
      });

      elements.sortSelect.addEventListener('change', (e) => {
          filterState.sort = e.target.value;
          applyFilters();
      });

      function resetFilters() {
          filterState.categories = [];
          filterState.minPrice = 0;
          filterState.maxPrice = Infinity;
          document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
          elements.minPrice.value = '';
          elements.maxPrice.value = '';
          applyFilters();
      }

      elements.clearAllBtn.addEventListener('click', resetFilters);
      elements.clearFiltersBtn.addEventListener('click', resetFilters);

      elements.applyPriceBtn.addEventListener('click', () => {
          filterState.minPrice = parseInt(elements.minPrice.value) || 0;
          filterState.maxPrice = parseInt(elements.maxPrice.value) || Infinity;
          applyFilters();
      });

      elements.filterChips.addEventListener('click', (e) => {
          if (e.target.classList.contains('remove-chip')) {
              // Simplified reset for MVP
              resetFilters();
          }
      });

      window.shopApp = {
          changePage: (page) => {
              filterState.page = page;
              applyFilters();
          }
      };

      applyFilters();
  </script>
</body>
</html>\;

fs.writeFileSync('shop.html', html);
console.log('shop.html recreated');
