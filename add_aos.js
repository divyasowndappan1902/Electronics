const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const htmlFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

const aosCss = '\n  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">';
const aosJs = `
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const elements = document.querySelectorAll('.product-card, .section-title, .hero, .flash-sale-banner, .brands-marquee, .feature-card, .blog-post');
      elements.forEach(el => {
        if (!el.hasAttribute('data-aos')) {
          el.setAttribute('data-aos', 'fade-up');
          el.setAttribute('data-aos-duration', '800');
        }
      });
      if (typeof AOS !== 'undefined') {
        AOS.init({ once: true });
      }
    });
  </script>
</body>`;

htmlFiles.forEach(file => {
  const filePath = path.join(dirPath, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let modified = false;
  
  // Inject CSS before </head>
  if (!content.includes('aos.css') && content.includes('</head>')) {
    content = content.replace('</head>', aosCss + '\n</head>');
    modified = true;
  }
  
  // Inject JS before </body>
  if (!content.includes('aos.js') && content.includes('</body>')) {
    content = content.replace('</body>', aosJs);
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added AOS to ${file}`);
  }
});
