import fs from 'fs';
import path from 'path';

// Change this if you want to target a specific folder, e.g., './src'
const TARGET_DIR = './src'; 

function lowercaseFiles(dir) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // It's a folder: don't rename it, just look inside it
      lowercaseFiles(fullPath);
    } else if (stat.isFile()) {
      // It's a file: convert only the filename to lowercase
      const lowercaseName = item.toLowerCase();
      
      if (item !== lowercaseName) {
        const newPath = path.join(dir, lowercaseName);
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed: ${fullPath} ➡️ ${newPath}`);
      }
    }
  });
}

console.log('Starting file renaming process...');
lowercaseFiles(TARGET_DIR);
console.log('Finished renaming files!');