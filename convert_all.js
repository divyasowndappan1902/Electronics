const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dirPath = __dirname;

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
      await processDirectory(fullPath);
    } else if (stat.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
      await convertToWebp(fullPath);
    }
  }
}

async function convertToWebp(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  
  // Special case if the file already has .webp in its name (like logo1.webp)
  let newFileName = baseName.endsWith('.webp') ? baseName : baseName + '.webp';
  const newFilePath = path.join(dir, newFileName);

  let quality = 80;
  let size = Infinity;
  let resizeWidth = null;

  try {
    const metadata = await sharp(filePath).metadata();
    resizeWidth = metadata.width;

    while (size > 100 * 1024 && quality > 10) {
      let sharpInstance = sharp(filePath);
      
      if (resizeWidth && resizeWidth < metadata.width) {
        sharpInstance = sharpInstance.resize(Math.round(resizeWidth));
      }

      await sharpInstance.webp({ quality }).toFile(newFilePath);
      
      size = fs.statSync(newFilePath).size;
      
      if (size > 100 * 1024) {
        quality -= 10;
        if (quality <= 30) {
           resizeWidth *= 0.8; // scale down dimensions if quality drops too much
        }
      }
    }
    console.log(`Converted ${filePath} to ${newFilePath} - Size: ${Math.round(size/1024)}KB`);
    
    // Now replace occurrences in source files
    updateReferences(path.basename(filePath), newFileName);
    
    // Delete the original
    fs.unlinkSync(filePath);
    console.log(`Deleted original: ${filePath}`);
    
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

function updateReferences(oldName, newName) {
  const exts = ['.html', '.css', '.js'];
  
  function replaceInDir(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const fullPath = path.join(directory, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
        replaceInDir(fullPath);
      } else if (stat.isFile() && exts.includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Simple string replace for the filename
        if (content.includes(oldName)) {
          // Replace all occurrences
          const regex = new RegExp(oldName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
          content = content.replace(regex, newName);
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated references in ${fullPath}`);
        }
      }
    }
  }
  replaceInDir(dirPath);
}

processDirectory(dirPath).then(() => {
  console.log('Conversion complete.');
});
