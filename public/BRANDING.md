# PalJS Branding Assets

This directory contains the branding assets for the PalJS website.

## Assets

### Main Logos

- `paljs-icon-square.svg` - Square icon with "PJ" text (512x512)
- `paljs-icon-square.png` - PNG version of the square icon
- `paljs-wordmark.svg` - Logo with wordmark
- `paljs-wordmark.png` - PNG version of the wordmark

### Favicons and Icons

- `favicon.svg` - SVG favicon (32x32)
- `apple-touch-icon.png` - Apple touch icon (180x180)
- `icons/` - Directory containing various icon sizes for PWA support

### Configuration Files

- `manifest.json` - Web app manifest for PWA functionality
- `browserconfig.xml` - Microsoft tile configuration

## Colors

The PalJS brand uses the following colors:

- Primary: `#4F46E5` (Indigo)
- Secondary: `#06B6D4` (Cyan)
- Background: `#ffffff` (White)
- Text: `#ffffff` (White on colored backgrounds)

## Icon Generation

To generate all icon sizes from the base PNG (`paljs-icon-square.png`), run:

```bash
node scripts/generate-icons.js
```

The script uses the high-quality PNG file as the source and creates all necessary icon sizes for:

- PWA support (72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512)
- Apple devices (180x180)
- Various other platforms

**Note:** SVG files (`paljs-icon-square.svg`, `paljs-wordmark.svg`, `favicon.svg`) are kept for component usage and maintain vector quality for scalable designs.

## Usage in Meta Tags

The icons and manifest are automatically included in the website through the metadata configuration in `lib/metadata.ts`. The following meta tags are generated:

- Web manifest reference
- Various icon sizes
- Apple touch icon
- Theme colors
- Open Graph images
- Twitter card images

## Brand Guidelines

### Logo Usage

- Use the square icon for social media profiles and favicons
- Use the wordmark for headers, business cards, and official documents
- Maintain proper contrast and padding around logos
- Don't modify the gradient or text styling

### Color Usage

- The gradient should always go from Indigo (`#4F46E5`) to Cyan (`#06B6D4`)
- Use white text on colored backgrounds for maximum readability
- The theme color for browsers should be set to the primary Indigo (`#4F46E5`)

## File Structure

```
public/
├── paljs-icon-square.svg       # Main square icon
├── paljs-icon-square.png       # PNG version
├── paljs-wordmark.svg          # Wordmark logo
├── paljs-wordmark.png          # PNG wordmark
├── favicon.svg                 # SVG favicon
├── apple-touch-icon.png        # Apple touch icon
├── manifest.json              # PWA manifest
├── browserconfig.xml          # Microsoft tiles
└── icons/                     # Various icon sizes
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```
