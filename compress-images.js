const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'public');

async function compressImages() {
  try {
    // Find all image files
    const files = [];

    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (/\.(png|jpg|jpeg|webp)$/i.test(item)) {
          files.push(fullPath);
        }
      });
    }

    walkDir(imageDir);

    console.log(`Found ${files.length} images to compress...\n`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const stats = fs.statSync(file);
      const originalSize = stats.size / 1024; // KB

      try {
        // Convert to WebP for better compression, or compress in place
        const isWebP = ext === '.webp';
        const outputFile = isWebP ? file : path.join(path.dirname(file), path.basename(file, ext) + '.webp');

        await sharp(file)
          .webp({ quality: 75 })
          .toFile(outputFile + '.tmp');

        const newStats = fs.statSync(outputFile + '.tmp');
        const newSize = newStats.size / 1024;
        const saved = ((1 - newSize / originalSize) * 100).toFixed(1);

        // Delete original if converting format
        if (!isWebP && outputFile !== file) {
          fs.renameSync(outputFile + '.tmp', outputFile);
          fs.unlinkSync(file);
          console.log(`✓ ${path.basename(file).padEnd(50)} ${originalSize.toFixed(1).padStart(8)} KB → ${path.basename(outputFile)} ${newSize.toFixed(1).padStart(8)} KB (${saved}% saved)`);
        } else {
          fs.renameSync(outputFile + '.tmp', file);
          console.log(`✓ ${path.basename(file).padEnd(50)} ${originalSize.toFixed(1).padStart(8)} KB → ${newSize.toFixed(1).padStart(8)} KB (${saved}% saved)`);
        }
      } catch (err) {
        console.error(`✗ Error processing ${file}: ${err.message}`);
      }
    }

    console.log('\nImage compression completed!');
  } catch (err) {
    console.error('Error:', err);
  }
}

compressImages();
