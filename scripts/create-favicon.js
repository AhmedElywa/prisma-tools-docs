#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');

async function createFavicon() {
  console.log('🎨 Creating favicon.ico from PalJS branding...');

  const sourceImagePath = path.join(__dirname, '..', 'public', 'paljs-icon-square.png');
  const faviconPath = path.join(__dirname, '..', 'app', 'favicon.ico');

  if (!fs.existsSync(sourceImagePath)) {
    console.error('❌ Source image not found: paljs-icon-square.png');
    return;
  }

  try {
    // Create a 32x32 PNG version for favicon.ico
    // Most modern browsers will accept PNG in ICO format
    const faviconBuffer = await sharp(sourceImagePath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    fs.writeFileSync(faviconPath, faviconBuffer);
    console.log('✅ Created new favicon.ico (32x32 PNG format)');

    // Also create a 16x16 version as favicon-16x16.png for reference
    const favicon16Buffer = await sharp(sourceImagePath)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon-16x16.png'), favicon16Buffer);
    console.log('✅ Created favicon-16x16.png');

    // Create 32x32 version
    const favicon32Buffer = await sharp(sourceImagePath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon-32x32.png'), favicon32Buffer);
    console.log('✅ Created favicon-32x32.png');
  } catch (error) {
    console.error('❌ Error creating favicon:', error);
  }
}

if (require.main === module) {
  createFavicon().catch(console.error);
}

module.exports = { createFavicon };
