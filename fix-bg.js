const fs = require('fs');
let text = fs.readFileSync('collection.html', 'utf8');

text = text.replace(
  `<div class="collection-card-bg" style="background-image: url('https://images.unsplash.com/photo-1609081524933-2dd479a941ea?w=600&q=80');"></div>`,
  `<div class="collection-card-bg"></div>`
);

text = text.replace(
  `<div class="collection-card-bg" style="background-image: url('https://images.unsplash.com/photo-1544131590-b1975e53de2b?w=600&q=80');"></div>`,
  `<div class="collection-card-bg"></div>`
);

text = text.replace(
  `<div class="collection-card-bg" style="background-image: url('https://images.unsplash.com/photo-1597847959082-f8abda3a6954?w=600&q=80');"></div>`,
  `<div class="collection-card-bg"></div>`
);

text = text.replace(
  `<div class="collection-card-bg" style="background-image: url('https://images.unsplash.com/photo-1550009158-9effb619a635?w=600&q=80'); filter: grayscale(100%) contrast(1.2);"></div>`,
  `<div class="collection-card-bg"></div>`
);

fs.writeFileSync('collection.html', text, 'utf8');
console.log('Done!');
