# Images Folder

Place your clothing images here. The lookbook will automatically use them with beautiful motion effects.

## How to Add Images

1. **Copy your images** to `public/images/` folder (Next.js serves files from `public/`)

2. **Supported Formats:**
   - ✅ **HEIC** - Automatically converted to JPG (run `npm run convert-heic`)
   - ✅ JPG/JPEG
   - ✅ PNG
   - ✅ WebP

3. **Name your images** as:
   - `image-1.HEIC` or `image-1.jpg`
   - `image-2.HEIC` or `image-2.jpg`
   - `image-3.HEIC` or `image-3.jpg`
   - etc.

4. **Convert HEIC files** (if using HEIC format):
   ```bash
   npm run convert-heic
   ```
   This automatically converts all HEIC files in `public/images/` to JPG format.

5. **Or update the image paths** in `app/components/lookbook.tsx` to match your file names

## Image Recommendations
- **Resolution**: 1200x1600px or higher for best quality
- **Aspect Ratio**: Portrait (3:4) works best for clothing
- **File Size**: Optimize images before uploading (keep under 2MB each for HEIC, under 500KB for JPG)

## Motion Effects Included
- ✅ Parallax scrolling effects (images move at different speeds)
- ✅ Smooth zoom animations on hover
- ✅ Cinematic motion effects based on scroll position
- ✅ Dynamic color overlays
- ✅ Staggered entrance animations
- ✅ Graceful handling of missing images with placeholders

## Quick Start
1. Add your HEIC/JPG images to `public/images/`
2. Run `npm run convert-heic` if using HEIC files
3. Refresh your browser - images will appear with motion effects!
