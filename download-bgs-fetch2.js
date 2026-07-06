const fs = require('fs');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const images = [
  { name: 'kitchen.webp', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=50&fm=webp', title: 'Kitchen Appliances' },
  { name: 'chargers.webp', url: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&q=50&fm=webp', title: 'Chargers & Power Banks' },
  { name: 'networking.webp', url: '', title: 'Networking' }, // already downloaded
  { name: 'storage.webp', url: '', title: 'Storage Devices' } // already downloaded
];

async function downloadImages() {
  for (const img of images) {
    if (!img.url) continue;
    console.log(`Downloading ${img.url}`);
    const res = await fetch(img.url);
    if (!res.ok) {
        console.error(`Failed to fetch ${img.url}: ${res.status} ${res.statusText}`);
        continue;
    }
    const fileStream = fs.createWriteStream(img.name);
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
    
    const stats = fs.statSync(img.name);
    console.log(`${img.name} saved. Size: ${Math.round(stats.size/1024)} KB`);
  }
  
  // Update HTML
  let html = fs.readFileSync('collection.html', 'utf8');
  images.forEach(i => {
      // Restore original icons
      const regex = new RegExp(`(<div class="collection-card-bg"(?: style="[^"]*")?></div>\\s*<div class="collection-card-overlay"[^>]*></div>\\s*<div class="collection-card-content">\\s*<h3 class="collection-card-title">(.*?)${i.title}</h3>)`);
      html = html.replace(regex, `<div class="collection-card-bg" style="background-image: url('${i.name}');"></div>\n        <div class="collection-card-overlay"></div>\n        <div class="collection-card-content">\n          <h3 class="collection-card-title">$2${i.title}</h3>`);
  });
  
  fs.writeFileSync('collection.html', html, 'utf8');
  console.log('HTML updated successfully!');
}

downloadImages().catch(console.error);
