#!/usr/bin/env node

/**
 * Icon Generation Script for PalJS
 *
 * This script generates various icon sizes from the base PNG icon (paljs-icon-square.png).
 * SVG files are kept for component usage.
 *
 * To use this script, you'll need to install dependencies first:
 *
 * npm install sharp
 *
 * Then run: node scripts/generate-icons.js
 */

const fs = require("fs");
const path = require("path");

// Icon sizes needed for the manifest and various platforms
const iconSizes = [
  { size: 72, name: "icon-72x72.png" },
  { size: 96, name: "icon-96x96.png" },
  { size: 128, name: "icon-128x128.png" },
  { size: 144, name: "icon-144x144.png" },
  { size: 152, name: "icon-152x152.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "icon-192x192.png" },
  { size: 384, name: "icon-384x384.png" },
  { size: 512, name: "icon-512x512.png" },
];

// Generate SVG template for different sizes
function generateSVG(size) {
  const fontSize = Math.floor(size * 0.6); // Adjust font size proportionally
  const rectSize = size - 8; // Leave some padding
  const borderRadius = Math.floor(size * 0.08); // Proportional border radius

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="${rectSize}" height="${rectSize}" fill="url(#grad)" rx="${borderRadius}" ry="${borderRadius}"/>
  <text x="50%" y="55%" font-size="${fontSize}" font-family="Arial, sans-serif" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#ffffff">
    PJ
  </text>
</svg>`;
}

async function generateIcons() {
  console.log("🎨 Generating PalJS icons from PNG source...");

  const publicDir = path.join(__dirname, "..", "public");
  const iconsDir = path.join(publicDir, "icons");
  const sourceImagePath = path.join(publicDir, "paljs-icon-square.png");

  // Check if source PNG exists
  if (!fs.existsSync(sourceImagePath)) {
    console.error("❌ Source image not found: paljs-icon-square.png");
    console.log(
      "Please ensure paljs-icon-square.png exists in the public directory"
    );
    return;
  }

  // Ensure icons directory exists
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  try {
    // Try to use sharp if available (better quality)
    const sharp = require("sharp");

    console.log(`📷 Using source image: ${sourceImagePath}`);

    for (const { size, name } of iconSizes) {
      const outputPath =
        name === "apple-touch-icon.png"
          ? path.join(publicDir, name)
          : path.join(iconsDir, name);

      await sharp(sourceImagePath)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
        })
        .png()
        .toFile(outputPath);

      console.log(`✅ Generated ${name} (${size}x${size})`);
    }
  } catch (error) {
    console.log("⚠️  Sharp not available, cannot resize PNG files");
    console.log("💡 To generate PNG files, install sharp: npm install sharp");
    console.error("Error:", error.message);

    // Fallback: generate SVG files as backup
    console.log("🔄 Falling back to SVG generation...");
    for (const { size, name } of iconSizes) {
      const svgContent = generateSVG(size);
      const svgName = name.replace(".png", ".svg");
      const outputPath =
        name === "apple-touch-icon.png"
          ? path.join(publicDir, `apple-touch-icon.svg`)
          : path.join(iconsDir, svgName);

      fs.writeFileSync(outputPath, svgContent);
      console.log(`✅ Generated ${svgName} (${size}x${size}) as fallback`);
    }
  }

  console.log("🎉 Icon generation complete!");
}

// Generate favicon.ico content
function generateFavicoSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect x="1" y="1" width="14" height="14" fill="url(#grad)" rx="2" ry="2"/>
  <text x="50%" y="55%" font-size="9" font-family="Arial, sans-serif" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="#ffffff">
    PJ
  </text>
</svg>`;
}

if (require.main === module) {
  generateIcons().catch(console.error);
}

module.exports = { generateIcons, generateSVG, generateFavicoSVG };
