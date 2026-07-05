
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
          { id: 11, img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&q=80", title: "Vlog Camera", price: 899, category: "cameras", rating: 4.6 },
          { id: 12, img: "smartphone_flagship.webp", title: "Flagship Smartphone", price: 1099, category: "phones", rating: 4.9 },
          { id: 13, img: "smartphone_foldable.webp", title: "Foldable Smartphone", price: 1499, category: "phones", rating: 4.8 },
          { id: 14, img: "smartphone_gaming.webp", title: "Gaming Smartphone", price: 899, category: "phones", rating: 4.7 },
          { id: 15, img: "smartphone_budget.webp", title: "Budget Smartphone", price: 299, category: "phones", rating: 4.2 },
          { id: 16, img: "smartphone_rugged.webp", title: "Rugged Smartphone", price: 499, category: "phones", rating: 4.5 }
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
          elements.productGrid.innerHTML = products.map(product => \`
          <div class="product-card">
              <div class="product-img-wrapper">
                  <img src="\${product.img}" alt="\${product.title}">
              </div>
              <div class="product-info">
                  <div style="color:#f59e0b; margin-bottom:5px; font-size:0.9rem;">
                      \${'â˜…'.repeat(Math.round(product.rating))}\${'â˜†'.repeat(5-Math.round(product.rating))}
                  </div>
                  <h3 class="product-title">\${product.title}</h3>
                  <div class="product-price">$\${product.price.toLocaleString()}</div>
              </div>
              <div style="padding: 0 1.5rem 1.5rem;">
                  <button class="btn" style="width: 100%;">Add to Cart</button>
              </div>
          </div>
          \`).join('');
      }

      function renderChips() {
          const chips = [];
          filterState.categories.forEach(cat => chips.push(\`Category: \${cat}\`));
          if (filterState.minPrice > 0 || filterState.maxPrice < Infinity) {
              chips.push(\`Price: $\${filterState.minPrice} - $\${filterState.maxPrice === Infinity ? 'Any' : filterState.maxPrice}\`);
          }

          elements.filterChips.innerHTML = chips.map(chip => \`
          <div class="filter-chip">
              \${chip}
              <button class="remove-chip material-icons" data-chip="\${chip}">close</button>
          </div>
          \`).join('') || '';
      }

      function renderPagination(totalPages) {
          if (totalPages <= 1) {
              elements.pagination.innerHTML = '';
              return;
          }
          let html = '';
          for (let i = 1; i <= totalPages; i++) {
              html += \`<button class="\${i === filterState.page ? 'active' : ''}" onclick="window.shopApp.changePage(\${i})">\${i}</button>\`;
          }
          elements.pagination.innerHTML = html;
      }

      function updateCount(count) {
          elements.resultCount.textContent = \`(\${count} Results)\`;
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
  
