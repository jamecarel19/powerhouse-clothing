const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

async function convertHEICFiles() {
  const imagesDir = path.join(__dirname, '../public/images');
  const files = fs.readdirSync(imagesDir);

  console.log('🔄 Converting HEIC files to JPG...\n');

  for (const file of files) {
    if (file.toLowerCase().endsWith('.heic')) {
      const inputPath = path.join(imagesDir, file);
      const outputName = file.replace(/\.heic$/i, '.jpg');
      const outputPath = path.join(imagesDir, outputName);

      // Skip if JPG already exists
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Skipping ${file} (${outputName} already exists)`);
        continue;
      }

      try {
        console.log(`📸 Converting ${file} → ${outputName}...`);
        
        const inputBuffer = fs.readFileSync(inputPath);
        const outputBuffer = await convert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.92
        });

        fs.writeFileSync(outputPath, Buffer.from(outputBuffer));
        console.log(`✅ Successfully converted ${file} → ${outputName}\n`);
      } catch (error) {
        console.error(`❌ Error converting ${file}:`, error.message);
      }
    }
  }

  console.log('✨ Conversion complete!');
}

convertHEICFiles().catch(console.error);
