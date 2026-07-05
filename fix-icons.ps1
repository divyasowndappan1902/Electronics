$htmlFiles = Get-ChildItem -Path "c:\Users\Admin\Desktop\Demo" -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw

    # 1. Add FontAwesome back to <head> if not present
    if ($content -notmatch 'font-awesome') {
        $content = $content -replace '</head>', "  <link rel=`"stylesheet`" href=`"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`">`n</head>"
    }
    
    # 2. Featured Categories
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? Smartphones</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-mobile-alt"></i> Smartphones</a>'
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? Laptops</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-laptop"></i> Laptops</a>'
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? Smart Watches</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-clock"></i> Smart Watches</a>'
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? Earbuds &amp; Headphones</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-headphones"></i> Earbuds &amp; Headphones</a>'
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? Earbuds & Headphones</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-headphones"></i> Earbuds & Headphones</a>'
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? TVs</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-tv"></i> TVs</a>'
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? Home Appliances</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-home"></i> Home Appliances</a>'
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? Gaming Accessories</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-gamepad"></i> Gaming Accessories</a>'
    $content = $content -replace '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;">.*? Computer Accessories</a>', '<a href="shop.html" class="btn btn-outline" style="white-space: nowrap; border-radius: 30px;"><i class="fas fa-keyboard"></i> Computer Accessories</a>'
    
    # 3. Why Choose Us
    $content = [regex]::Replace($content, '(?s)<div><div style="font-size: 3rem; margin-bottom: 1rem;">.*?</div><h3 style="font-size: \s*1.2rem;">Genuine Products</h3></div>', '<div><div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-check-circle"></i></div><h3 style="font-size: 1.2rem;">Genuine Products</h3></div>')
    $content = [regex]::Replace($content, '(?s)<div><div style="font-size: 3rem; margin-bottom: 1rem;">.*?</div><h3 style="font-size: \s*1.2rem;">Fast Delivery</h3></div>', '<div><div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-shipping-fast"></i></div><h3 style="font-size: 1.2rem;">Fast Delivery</h3></div>')
    $content = [regex]::Replace($content, '(?s)<div><div style="font-size: 3rem; margin-bottom: 1rem;">.*?</div><h3 style="font-size: \s*1.2rem;">Secure Payments</h3></div>', '<div><div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-lock"></i></div><h3 style="font-size: 1.2rem;">Secure Payments</h3></div>')
    $content = [regex]::Replace($content, '(?s)<div><div style="font-size: 3rem; margin-bottom: 1rem;">.*?</div><h3 style="font-size: \s*1.2rem;">Easy Returns</h3></div>', '<div><div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-undo"></i></div><h3 style="font-size: 1.2rem;">Easy Returns</h3></div>')
    $content = [regex]::Replace($content, '(?s)<div><div style="font-size: 3rem; margin-bottom: 1rem;">.*?</div><h3 style="font-size: \s*1.2rem;">Warranty Support</h3></div>', '<div><div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-shield-alt"></i></div><h3 style="font-size: 1.2rem;">Warranty Support</h3></div>')

    # 4. Features (Free Shipping etc.)
    $content = [regex]::Replace($content, '(?s)<div class="feature-icon">.*?</div>\s*<h3>Free Shipping</h3>', '<div class="feature-icon"><i class="fas fa-truck"></i></div>
        <h3>Free Shipping</h3>')
    $content = [regex]::Replace($content, '(?s)<div class="feature-icon">.*?</div>\s*<h3>24/7 Customer Support</h3>', '<div class="feature-icon"><i class="fas fa-headset"></i></div>
        <h3>24/7 Customer Support</h3>')
    $content = [regex]::Replace($content, '(?s)<div class="feature-icon">.*?</div>\s*<h3>EMI Options</h3>', '<div class="feature-icon"><i class="fas fa-credit-card"></i></div>
        <h3>EMI Options</h3>')
    $content = [regex]::Replace($content, '(?s)<div class="feature-icon">.*?</div>\s*<h3>Installation Support</h3>', '<div class="feature-icon"><i class="fas fa-tools"></i></div>
        <h3>Installation Support</h3>')

    # 5. Footer Contact Info
    $content = [regex]::Replace($content, '(?s)<p style="margin-bottom: 0.2rem;">.*? 123 Innovation Drive, Tech City</p>', '<p style="margin-bottom: 0.2rem;"><i class="fas fa-map-marker-alt"></i> 123 Innovation Drive, Tech City</p>')
    $content = [regex]::Replace($content, '(?s)<p style="margin-bottom: 0.2rem;">.*? support@technocy.com</p>', '<p style="margin-bottom: 0.2rem;"><i class="fas fa-envelope"></i> support@technocy.com</p>')
    $content = [regex]::Replace($content, '(?s)<p style="margin-bottom: 0.2rem;">.*? \+1 \(555\) 123-4567</p>', '<p style="margin-bottom: 0.2rem;"><i class="fas fa-phone"></i> +1 (555) 123-4567</p>')

    # 6. Top Nav Links
    $content = $content -replace '<li><a href="index.html"(.*?)>(<i.*?></i>\s*)?(.*?)\s*Home</a></li>', '<li><a href="index.html"$1><i class="fas fa-home"></i> Home</a></li>'
    $content = $content -replace '<li><a href="shop.html"(.*?)>(<i.*?></i>\s*)?(.*?)\s*Shop</a></li>', '<li><a href="shop.html"$1><i class="fas fa-shopping-bag"></i> Shop</a></li>'
    $content = $content -replace '<li><a href="collection.html"(.*?)>(<i.*?></i>\s*)?(.*?)\s*Collection</a></li>', '<li><a href="collection.html"$1><i class="fas fa-layer-group"></i> Collection</a></li>'
    $content = $content -replace '<li><a href="contact.html"(.*?)>(<i.*?></i>\s*)?(.*?)\s*Contact</a></li>', '<li><a href="contact.html"$1><i class="fas fa-envelope"></i> Contact</a></li>'
    $content = $content -replace '<li><a href="login.html"(.*?)>(<i.*?></i>\s*)?(.*?)\s*Login</a></li>', '<li><a href="login.html"$1><i class="fas fa-user"></i> Login</a></li>'

    # 7. Nav Icons (right side)
    $replacement = '<div class="nav-icons">
      <div class="nav-icon"><i class="fas fa-search"></i></div>
      <div class="nav-icon"><i class="fas fa-shopping-cart"></i></div>
      <div class="mobile-menu-btn"><i class="fas fa-bars"></i></div>
    </div>'
    $content = [regex]::Replace($content, '(?s)<div class="nav-icons">\s*<div class="nav-icon">.*?</div>\s*<div class="nav-icon">.*?</div>\s*<div class="mobile-menu-btn">.*?</div>\s*</div>', $replacement)
    
    # 8. Admin / Customer Sidebars
    $content = $content -replace 'class="active">(.*?)\s*Dashboard</a>', 'class="active"><i class="fas fa-chart-pie"></i> Dashboard</a>'
    $content = $content -replace '<a href="admin-orders.html">(.*?)\s*Orders</a>', '<a href="admin-orders.html"><i class="fas fa-box-open"></i> Orders</a>'
    $content = $content -replace '<a href="admin-products.html">(.*?)\s*Products</a>', '<a href="admin-products.html"><i class="fas fa-tag"></i> Products</a>'
    $content = $content -replace '<a href="admin-customers.html">(.*?)\s*Customers</a>', '<a href="admin-customers.html"><i class="fas fa-users"></i> Customers</a>'
    $content = $content -replace '<a href="admin-analytics.html">(.*?)\s*Analytics</a>', '<a href="admin-analytics.html"><i class="fas fa-chart-line"></i> Analytics</a>'
    $content = $content -replace '<a href="admin-settings.html">(.*?)\s*Settings</a>', '<a href="admin-settings.html"><i class="fas fa-cog"></i> Settings</a>'
    
    $content = $content -replace 'class="active">(.*?)\s*My Account</a>', 'class="active"><i class="fas fa-user-circle"></i> My Account</a>'
    $content = $content -replace '<a href="order-history.html">(.*?)\s*Order History</a>', '<a href="order-history.html"><i class="fas fa-box"></i> Order History</a>'
    $content = $content -replace '<a href="wishlist.html">(.*?)\s*Wishlist</a>', '<a href="wishlist.html"><i class="fas fa-heart"></i> Wishlist</a>'
    $content = $content -replace '<a href="saved-addresses.html">(.*?)\s*Saved Addresses</a>', '<a href="saved-addresses.html"><i class="fas fa-map-marker-alt"></i> Saved Addresses</a>'
    $content = $content -replace '<a href="payment-methods.html">(.*?)\s*Payment Methods</a>', '<a href="payment-methods.html"><i class="fas fa-credit-card"></i> Payment Methods</a>'
    $content = $content -replace '<a href="account-settings.html">(.*?)\s*Account Settings</a>', '<a href="account-settings.html"><i class="fas fa-cog"></i> Account Settings</a>'
    
    $content = [regex]::Replace($content, '(?s)<a href="login.html" style="color: var\(--text-light\); display: flex; align-items: center; gap: 0.5rem; font-weight: 500;">.*?Logout\s*</a>', '<a href="login.html" style="color: var(--text-light); display: flex; align-items: center; gap: 0.5rem; font-weight: 500;"><i class="fas fa-sign-out-alt"></i> Logout</a>')

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
echo "Icons successfully replaced using structure matching!"
