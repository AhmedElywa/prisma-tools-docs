#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function checkFileExists(filePath, description) {
  const fullPath = path.join(__dirname, "..", filePath);
  const exists = fs.existsSync(fullPath);

  if (exists) {
    const stats = fs.statSync(fullPath);
    console.log(
      `✅ ${description}: ${filePath} (${(stats.size / 1024).toFixed(1)}KB)`
    );
  } else {
    console.log(`❌ ${description}: ${filePath} - Missing!`);
  }

  return exists;
}

function verifyBranding() {
  console.log("🔍 Verifying PalJS Branding Assets...\n");

  console.log("📁 Core Branding Assets:");
  checkFileExists("public/paljs-icon-square.svg", "Square Icon SVG");
  checkFileExists("public/paljs-icon-square.png", "Square Icon PNG");
  checkFileExists("public/paljs-wordmark.svg", "Wordmark SVG");
  checkFileExists("public/paljs-wordmark.png", "Wordmark PNG");

  console.log("\n🌐 Web Configuration:");
  checkFileExists("public/manifest.json", "Web App Manifest");
  checkFileExists("public/browserconfig.xml", "Browser Config");

  console.log("\n🎯 Favicons:");
  checkFileExists("app/favicon.ico", "App Favicon ICO");
  checkFileExists("public/favicon.svg", "SVG Favicon");
  checkFileExists("public/favicon-16x16.png", "16x16 Favicon");
  checkFileExists("public/favicon-32x32.png", "32x32 Favicon");
  checkFileExists("public/apple-touch-icon.png", "Apple Touch Icon");

  console.log("\n📱 PWA Icons:");
  const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];
  iconSizes.forEach((size) => {
    checkFileExists(
      `public/icons/icon-${size}x${size}.png`,
      `${size}x${size} Icon`
    );
  });

  console.log("\n📈 Dynamic OG Images:");
  checkFileExists("app/opengraph-image.tsx", "Open Graph Image Generator");
  checkFileExists("app/twitter-image.tsx", "Twitter Image Generator");

  console.log("\n⚙️ Metadata Configuration:");
  checkFileExists("lib/metadata.ts", "Metadata Configuration");
  checkFileExists("app/layout.tsx", "Root Layout");

  console.log("\n📋 Documentation:");
  checkFileExists("public/BRANDING.md", "Branding Guidelines");

  console.log("\n🛠️ Build Scripts:");
  checkFileExists("scripts/generate-icons.js", "Icon Generator");
  checkFileExists("scripts/create-favicon.js", "Favicon Creator");

  console.log("\n🎉 Branding verification complete!");
  console.log("\n💡 Next steps:");
  console.log("   1. Run `npm run dev` to test the website");
  console.log("   2. Check browser dev tools for meta tags");
  console.log("   3. Test PWA installability");
  console.log("   4. Verify social media previews");
}

if (require.main === module) {
  verifyBranding();
}

module.exports = { verifyBranding, checkFileExists };
