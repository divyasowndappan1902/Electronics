$htmlFiles = Get-ChildItem -Path "c:\Users\Admin\Desktop\Demo" -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw

    # 1. Remove FontAwesome link
    $content = $content -replace '  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n', ''

    # 2. Featured Categories
    $content = $content -replace '<i class="fas fa-mobile-alt"></i> Smartphones', '📱 Smartphones'
    $content = $content -replace '<i class="fas fa-laptop"></i> Laptops', '💻 Laptops'
    $content = $content -replace '<i class="fas fa-clock"></i> Smart Watches', '⌚ Smart Watches'
    $content = $content -replace '<i class="fas fa-headphones"></i> Earbuds &amp; Headphones', '🎧 Earbuds &amp; Headphones'
    $content = $content -replace '<i class="fas fa-headphones"></i> Earbuds & Headphones', '🎧 Earbuds & Headphones'
    $content = $content -replace '<i class="fas fa-tv"></i> TVs', '📺 TVs'
    $content = $content -replace '<i class="fas fa-home"></i> Home Appliances', '🏠 Home Appliances'
    $content = $content -replace '<i class="fas fa-gamepad"></i> Gaming Accessories', '🎮 Gaming Accessories'
    $content = $content -replace '<i class="fas fa-keyboard"></i> Computer Accessories', '⌨️ Computer Accessories'

    # 3. Why Choose Us
    $content = $content -replace '<i class="fas fa-check-circle"></i>', '✔️'
    $content = $content -replace '<i class="fas fa-shipping-fast"></i>', '🚚'
    $content = $content -replace '<i class="fas fa-lock"></i>', '🔒'
    $content = $content -replace '<i class="fas fa-undo"></i>', '🔄'
    $content = $content -replace '<i class="fas fa-shield-alt"></i>', '🛡️'

    # 4. Features (Free Shipping etc.)
    $content = $content -replace '<i class="fas fa-truck"></i>', '🚚'
    $content = $content -replace '<i class="fas fa-headset"></i>', '🎧'
    $content = $content -replace '<i class="fas fa-credit-card"></i>', '💳'
    $content = $content -replace '<i class="fas fa-tools"></i>', '🛠️'

    # 5. Footer Contact Info
    $content = $content -replace '<i class="fas fa-map-marker-alt"></i> 123 Innovation Drive', '📍 123 Innovation Drive'
    $content = $content -replace '<i class="fas fa-envelope"></i> support@technocy.com', '✉️ support@technocy.com'
    $content = $content -replace '<i class="fas fa-phone"></i> \+1 \(555\) 123-4567', '📞 +1 (555) 123-4567'

    # 6. Top Nav Links
    $content = $content -replace '<i class="fas fa-home"></i> Home', 'Home'
    $content = $content -replace '<i class="fas fa-shopping-bag"></i> Shop', 'Shop'
    $content = $content -replace '<i class="fas fa-layer-group"></i> Collection', 'Collection'
    $content = $content -replace '<i class="fas fa-envelope"></i> Contact', 'Contact'
    $content = $content -replace '<i class="fas fa-user"></i> Login', 'Login'

    # 7. Nav Icons (right side)
    $content = $content -replace '<i class="fas fa-search"></i>', '🔍'
    $content = $content -replace '<i class="fas fa-shopping-cart"></i>', '🛒'
    $content = $content -replace '<i class="fas fa-bars"></i>', '☰'
    
    # 8. Admin / Customer Sidebars
    $content = $content -replace '<i class="fas fa-chart-pie"></i> Dashboard', '📊 Dashboard'
    $content = $content -replace '<i class="fas fa-box-open"></i> Orders', '📦 Orders'
    $content = $content -replace '<i class="fas fa-tag"></i> Products', '🏷️ Products'
    $content = $content -replace '<i class="fas fa-users"></i> Customers', '👥 Customers'
    $content = $content -replace '<i class="fas fa-chart-line"></i> Analytics', '📈 Analytics'
    $content = $content -replace '<i class="fas fa-cog"></i> Settings', '⚙️ Settings'
    
    $content = $content -replace '<i class="fas fa-user-circle"></i> My Account', '👤 My Account'
    $content = $content -replace '<i class="fas fa-box"></i> Order History', '📦 Order History'
    $content = $content -replace '<i class="fas fa-heart"></i> Wishlist', '❤️ Wishlist'
    $content = $content -replace '<i class="fas fa-map-marker-alt"></i> Saved Addresses', '📍 Saved Addresses'
    $content = $content -replace '<i class="fas fa-credit-card"></i> Payment Methods', '💳 Payment Methods'
    $content = $content -replace '<i class="fas fa-cog"></i> Account Settings', '⚙️ Account Settings'
    
    $content = $content -replace '<i class="fas fa-sign-out-alt"></i> Logout', '🚪 Logout'

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
echo "Icons reverted back to emojis successfully!"
