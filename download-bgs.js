const https = require('https');
const fs = require('fs');

const images = [
  { name: 'kitchen.webp', url: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=50&fm=webp', title: 'Kitchen Appliances' },
  { name: 'chargers.webp', url: 'https://images.unsplash.com/photo-1609081524933-2dd479a941ea?w=600&q=50&fm=webp', title: 'Chargers & Power Banks' },
  { name: 'networking.webp', url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=50&fm=webp', title: 'Networking' },
  { name: 'storage.webp', url: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&q=50&fm=webp', title: 'Storage Devices' }
];

let html = fs.readFileSync('collection.html', 'utf8');

let completed = 0;

images.forEach(img => {
  const file = fs.createWriteStream(img.name);
  https.get(img.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${img.name}`);
      
      // Update HTML
      // We need to find the specific card. We can use a regex to match the empty bg div before the title.
      // Example target:
      // <div class="collection-card-bg"></div>
      // <div class="collection-card-overlay"></div>
      // <div class="collection-card-content">
      //   <h3 class="collection-card-title"><span class="material-icons" style="vertical-align: middle; margin-right: 8px;">...</span>TITLE</h3>
      
      const regex = new RegExp(`(<div class="collection-card-bg"(?: style="[^"]*")?></div>\\s*<div class="collection-card-overlay"[^>]*></div>\\s*<div class="collection-card-content">\\s*<h3 class="collection-card-title">.*?${img.title}</h3>)`);
      
      html = html.replace(regex, `<div class="collection-card-bg" style="background-image: url('${img.name}');"></div>\n        <div class="collection-card-overlay"></div>\n        <div class="collection-card-content">\n          <h3 class="collection-card-title"><span class="material-icons" style="vertical-align: middle; margin-right: 8px;">icon</span>${img.title}</h3>`);
      
      completed++;
      if (completed === images.length) {
          // Restore original icons instead of the hardcoded 'icon' text from the naive replace above
          let finalHtml = fs.readFileSync('collection.html', 'utf8');
          images.forEach(i => {
              const r2 = new RegExp(`(<div class="collection-card-bg"(?: style="[^"]*")?></div>\\s*<div class="collection-card-overlay"[^>]*></div>\\s*<div class="collection-card-content">\\s*<h3 class="collection-card-title">(.*?)${i.title}</h3>)`);
              finalHtml = finalHtml.replace(r2, `<div class="collection-card-bg" style="background-image: url('${i.name}');"></div>\n        <div class="collection-card-overlay"></div>\n        <div class="collection-card-content">\n          <h3 class="collection-card-title">$2${i.title}</h3>`);
          });
          
          fs.writeFileSync('collection.html', finalHtml, 'utf8');
          console.log('HTML updated successfully!');
          
          // Print sizes
          images.forEach(i => {
             const stats = fs.statSync(i.name);
             console.log(`${i.name}: ${Math.round(stats.size/1024)} KB`);
          });
      }
    });
  }).on('error', err => {
    fs.unlink(img.name);
    console.error(`Error downloading ${img.name}: ${err.message}`);
  });
});
