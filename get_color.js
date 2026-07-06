const sharp = require('sharp');

async function getColor() {
  const imagePath = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\ed339df7-ac77-4f96-8f5d-c01c678efa02\\media__1783305661315.png';
  try {
    const { data, info } = await sharp(imagePath)
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixelArray = new Uint8ClampedArray(data.buffer);
    let maxRedness = -1;
    let bestColor = null;

    for (let i = 0; i < pixelArray.length; i += info.channels) {
      const r = pixelArray[i];
      const g = pixelArray[i + 1];
      const b = pixelArray[i + 2];

      const redness = r - (g + b) / 2;
      if (redness > maxRedness) {
        maxRedness = redness;
        bestColor = { r, g, b };
      }
    }

    const hex = '#' + ((1 << 24) + (bestColor.r << 16) + (bestColor.g << 8) + bestColor.b).toString(16).slice(1);
    console.log(`Detected color: ${hex}`);
  } catch (err) {
    console.error(err);
  }
}

getColor();
