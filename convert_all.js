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
    } else if (stat.isFile() && /\.(png|jpg|jpeg|svg|webp)$/i.test(file)) {
      await convertToWebp(fullPath);
    }
  }
}

async function convertToWebp(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  
  const LIMIT = 70 * 1024; // 70 KB
  
  // Special case if the file already has .webp in its name (like logo1.webp)
  let newFileName = baseName.endsWith('.webp') ? baseName : baseName + '.webp';
  const newFilePath = path.join(dir, newFileName);
  const tempFilePath = newFilePath + '.tmp';

  try {
    const currentSize = fs.statSync(filePath).size;
    if (ext.toLowerCase() === '.webp' && currentSize <= LIMIT) {
      console.log(`Skipped ${filePath} - Already webp and under 70KB (${Math.round(currentSize/1024)}KB)`);
      return;
    }

    const inputBuffer = fs.readFileSync(filePath);
    const metadata = await sharp(inputBuffer).metadata();
    let resizeWidth = metadata.width;
    let quality = 80;
    let size = Infinity;

    while (size > LIMIT && quality > 10) {
      let sharpInstance = sharp(inputBuffer);
      
      if (resizeWidth && resizeWidth < metadata.width) {
        sharpInstance = sharpInstance.resize(Math.round(resizeWidth));
      }

      await sharpInstance.webp({ quality }).toFile(tempFilePath);
      
      size = fs.statSync(tempFilePath).size;
      
      if (size > LIMIT) {
        quality -= 10;
        if (quality <= 30) {
           resizeWidth *= 0.8; // scale down dimensions if quality drops too much
        }
      }
    }

    if (fs.existsSync(newFilePath) && newFilePath !== filePath) {
      fs.unlinkSync(newFilePath);
    }
    fs.renameSync(tempFilePath, newFilePath);
    
    console.log(`Processed ${filePath} -> ${newFilePath} - Size: ${Math.round(size/1024)}KB`);
    
    // Now replace occurrences in source files if it was a new format conversion
    if (filePath !== newFilePath) {
      updateReferences(path.basename(filePath), newFileName);
      fs.unlinkSync(filePath);
      console.log(`Deleted original: ${filePath}`);
    }
    
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
    if (fs.existsSync(tempFilePath)) {
      try { fs.unlinkSync(tempFilePath); } catch (_) {}
    }
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
