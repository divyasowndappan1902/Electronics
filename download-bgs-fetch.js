const fs = require('fs');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const images = [
  { name: 'kitchen.webp', url: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=50&fm=webp', title: 'Kitchen Appliances' },
  { name: 'chargers.webp', url: 'https://images.unsplash.com/photo-1609081524933-2dd479a941ea?w=600&q=50&fm=webp', title: 'Chargers & Power Banks' },
  { name: 'networking.webp', url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=50&fm=webp', title: 'Networking' },
  { name: 'storage.webp', url: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&q=50&fm=webp', title: 'Storage Devices' }
];

async function downloadImages() {
  for (const img of images) {
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
}

downloadImages().catch(console.error);
