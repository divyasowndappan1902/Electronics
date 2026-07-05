const sharp = require('sharp');

async function convert() {
  const files = [
    { in: 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5ef7f5e3-83c0-40ef-99e8-1c5b3444ebf4\\rgb_keyboard_1783085070012.png', out: 'rgb-keyboard.webp' },
    { in: 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5ef7f5e3-83c0-40ef-99e8-1c5b3444ebf4\\vr_headset_1783085090627.png', out: 'vr-headset.webp' }
  ];

  for (let file of files) {
    try {
      await sharp(file.in)
        .resize(800)
        .webp({ quality: 60 })
        .toFile(file.out);
      console.log(`Converted ${file.out}`);
    } catch (e) {
      console.error(e);
    }
  }
}
convert();
