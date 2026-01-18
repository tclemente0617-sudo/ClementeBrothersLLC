# Favicon Generation Instructions

## Quick Setup

A simple SVG favicon (`favicon.svg`) has been created with the "CB" initials. Modern browsers support SVG favicons directly.

## To generate all favicon formats:

### Option 1: Using online tools (Recommended)
1. Visit https://realfavicongenerator.net/
2. Upload your logo image (assets/logo.png) or use the favicon.svg
3. Download the generated favicon package
4. Extract and place these files in the root directory:
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png

### Option 2: Using ImageMagick (Command line)
```bash
# Convert SVG to PNG sizes
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png

# Create .ico file from PNG
convert favicon-32x32.png favicon-16x16.png favicon.ico
```

### Option 3: Using your logo
If you have a logo image in the assets/ folder, use that instead of the SVG for better quality:
```bash
convert assets/logo.png -resize 16x16 favicon-16x16.png
convert assets/logo.png -resize 32x32 favicon-32x32.png
convert assets/logo.png -resize 180x180 apple-touch-icon.png
```

## Files needed for complete favicon support:
- ✅ favicon.svg (created)
- ⏳ favicon.ico (16x16, 32x32 combined)
- ⏳ favicon-16x16.png
- ⏳ favicon-32x32.png
- ⏳ apple-touch-icon.png (180x180)
- ⏳ android-chrome-192x192.png (optional)
- ⏳ android-chrome-512x512.png (optional)

The HTML already includes references to these files, so once generated, place them in the root directory.
