const fs = require('fs');
const files = ['shop.html', 'collection.html', 'contact.html'];
for (const f of files) {
  const content = fs.readFileSync('c:/Users/Admin/Desktop/Demo/' + f, 'utf8');
  console.log('--- ' + f + ' ---');
  let m = content.match(/<div class="category-title">(.*?)<\/div>/g);
  if (m) m.forEach(x => console.log(x));
  
  m = content.match(/<h3 class="collection-card-title">(.*?)<\/h3>/g);
  if (m) m.forEach(x => console.log(x));

  m = content.match(/<div class="nav-icon">(.*?)<\/div>/g);
  if (m) m.forEach(x => console.log(x));
  
  m = content.match(/<div class="mobile-menu-btn">(.*?)<\/div>/g);
  if (m) m.forEach(x => console.log(x));
  
  m = content.match(/<h2 class="section-title">(.*?)<\/h2>/g);
  if (m) m.forEach(x => console.log(x));
}
