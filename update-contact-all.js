const fs = require('fs');

// We first restore the contact.html from Demo to be safe
fs.copyFileSync('c:/Users/Admin/Desktop/Demo/contact.html', 'c:/Users/Admin/Desktop/Electronics/contact.html');

let html = fs.readFileSync('contact.html', 'utf8');

// Add FontAwesome CDN if not present
if (!html.includes('cdnjs.cloudflare.com/ajax/libs/font-awesome')) {
    html = html.replace('</head>', '  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n</head>');
}

// 1. Fix Paragraph Text Visibility
html = html.replace(
    `<p style="font-size: 1.2rem; opacity: 0.9;">We're here to help and answer any question you might have.</p>`,
    `<p style="font-size: 1.2rem; opacity: 0.9; color: white;">We're here to help and answer any question you might have.</p>`
);

// 2. FontAwesome switch (from previous task)
// Store Info Cards
html = html.replace(
    '<span class="material-icons" style="font-size: inherit;">location_on</span>',
    '<i class="fas fa-location-dot" style="font-size: inherit;"></i>'
);
html = html.replace(
    '<span class="material-icons" style="font-size: inherit;">phone</span>',
    '<i class="fas fa-phone" style="font-size: inherit;"></i>'
);
html = html.replace(
    '<span class="material-icons" style="font-size: inherit;">email</span>',
    '<i class="fas fa-envelope" style="font-size: inherit;"></i>'
);

// Our Promise to You
html = html.replace(
    '<span class="material-icons" style="font-size: inherit;">security</span>',
    '<i class="fas fa-shield-halved" style="font-size: inherit;"></i>'
);
html = html.replace(
    '<span class="material-icons" style="font-size: inherit;">replay</span>',
    '<i class="fas fa-rotate-left" style="font-size: inherit;"></i>'
);
html = html.replace(
    '<span class="material-icons" style="font-size: inherit;">chat</span>',
    '<i class="fas fa-message" style="font-size: inherit;"></i>'
);

// Footer Social Icons
html = html.replace(
    '<span class="material-icons" style="font-size: 1.2rem;">camera_alt</span>',
    '<i class="fab fa-instagram" style="font-size: 1.2rem;"></i>'
);
html = html.replace(
    '<span class="material-icons" style="font-size: 1.2rem;">facebook</span>',
    '<i class="fab fa-facebook-f" style="font-size: 1.2rem;"></i>'
);
html = html.replace(
    '<span class="material-icons" style="font-size: 1.2rem;">smart_display</span>',
    '<i class="fab fa-youtube" style="font-size: 1.2rem;"></i>'
);

// Footer Contact Links
html = html.replace(
    '<span class="material-icons" style="color: #ef4444; margin-right: 8px;">location_on</span>',
    '<i class="fas fa-location-dot" style="color: #ef4444; margin-right: 8px;"></i>'
);
html = html.replace(
    '<span class="material-icons" style="color: #ef4444; margin-right: 8px;">phone</span>',
    '<i class="fas fa-phone" style="color: #ef4444; margin-right: 8px;"></i>'
);
html = html.replace(
    '<span class="material-icons" style="color: #ef4444; margin-right: 8px;">email</span>',
    '<i class="fas fa-envelope" style="color: #ef4444; margin-right: 8px;"></i>'
);

fs.writeFileSync('contact.html', html, 'utf8');
console.log('contact.html fully fixed');
