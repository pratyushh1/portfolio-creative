# 📁 Media Folder Structure Guide

This guide explains where to place your videos, photos, and graphic design work in the portfolio.

## 📂 Folder Organization

```
public/
├── videos/           # All video editing work
├── photos/           # All photography work
└── designs/          # All graphic design work
```

---

## 🎬 Videos Folder (`/public/videos/`)

### Structure
```
videos/
├── tech-burner/
│   ├── video-1.mp4
│   ├── video-2.mp4
│   ├── video-3.mp4
│   └── thumbnails/
│       ├── thumb-1.jpg
│       ├── thumb-2.jpg
│       └── thumb-3.jpg
├── overlay-clothing/
│   ├── youtube-longform-1.mp4
│   ├── instagram-reels-1.mp4
│   ├── shorts-1.mp4
│   └── thumbnails/
│       ├── oc-1.jpg
│       ├── oc-2.jpg
│       ├── oc-3.jpg
│       ├── oc-4.jpg
│       ├── oc-5.jpg
│       └── oc-6.jpg
├── open-letter/
│   ├── video-1.mp4
│   ├── video-2.mp4
│   └── thumbnails/
│       ├── thumb-1.jpg
│       └── thumb-2.jpg
└── other-projects/
    ├── brand-1/
    │   ├── video.mp4
    │   └── thumbnail.jpg
    └── brand-2/
        ├── video.mp4
        └── thumbnail.jpg
```

### Best Practices
- **Formats:** MP4 (H.264), WebM
- **Resolution:** 1920x1080 or 1280x720
- **File Size:** Compress for web (under 50MB if possible)
- **Naming:** Use descriptive names like `tech-burner-iphone-review.mp4`
- **Thumbnails:** Always include a thumbnail (JPG, 1280x720px)

### Usage in Code
Videos are displayed on the [video-editing](app/video-editing/page.tsx) page. Update the `projects.ts` file to reference your videos:

```typescript
{
  id: 1,
  title: "Your Video Title",
  client: "Tech Burner",
  videoUrl: "/videos/tech-burner/video-1.mp4",
  thumbnail: "/videos/tech-burner/thumbnails/thumb-1.jpg"
}
```

---

## 📸 Photos Folder (`/public/photos/`)

### Structure
```
photos/
├── portraits/
│   ├── portrait-1.jpg
│   ├── portrait-2.jpg
│   └── portrait-3.jpg
├── products/
│   ├── product-shot-1.jpg
│   ├── product-shot-2.jpg
│   └── product-shot-3.jpg
├── landscapes/
│   ├── landscape-1.jpg
│   └── landscape-2.jpg
└── events/
    ├── event-1.jpg
    ├── event-2.jpg
    └── event-3.jpg
```

### Best Practices
- **Formats:** JPG (preferred), PNG, WebP
- **Resolution:** Max width 1920px
- **File Size:** Optimize/compress (aim for under 500KB)
- **Naming:** `category-descriptive-name.jpg`
- **Quality:** High quality but web-optimized

### Usage in Code
Photos are displayed on the [photography](app/photography/page.tsx) page. Add your photos to the images array:

```typescript
{
  id: 1,
  title: "Portrait Session",
  category: "portraits",
  image: "/photos/portraits/portrait-1.jpg"
}
```

---

## 🎨 Designs Folder (`/public/designs/`)

### Structure
```
designs/
├── branding/
│   ├── logo-design-1.png
│   ├── brand-identity-1.jpg
│   └── brand-guide-1.pdf
├── posters/
│   ├── poster-music-festival.jpg
│   ├── poster-event.jpg
│   └── poster-campaign.jpg
├── social-media/
│   ├── instagram-post-1.jpg
│   ├── instagram-post-2.jpg
│   └── youtube-thumbnail-1.jpg
├── packaging/
│   ├── package-design-1.jpg
│   └── package-mockup-1.jpg
└── ui-ux/
    ├── app-ui-1.jpg
    ├── website-mockup-1.jpg
    └── dashboard-design-1.jpg
```

### Best Practices
- **Formats:** 
  - PNG (with transparency/logos)
  - JPG (mockups/final designs)
  - SVG (vector logos)
- **Resolution:** 1920px max width recommended
- **File Size:** Compress appropriately (under 1MB)
- **Mockups:** Show designs in context when possible
- **Naming:** `category-project-name.extension`

### Usage in Code
Designs are displayed on the [graphic-design](app/graphic-design/page.tsx) page. Add your designs to the designs array:

```typescript
{
  id: 1,
  title: "Brand Identity",
  category: "branding",
  image: "/designs/branding/logo-design-1.png",
  description: "Complete brand identity system",
  year: "2024"
}
```

---

## 🔄 Updating Your Portfolio

### Step 1: Add Your Files
1. Place files in the appropriate folders
2. Follow the naming conventions
3. Ensure files are optimized for web

### Step 2: Update the Code
1. **Videos:** Edit [lib/projects.ts](lib/projects.ts)
2. **Photos:** Edit [app/photography/page.tsx](app/photography/page.tsx)
3. **Designs:** Edit [app/graphic-design/page.tsx](app/graphic-design/page.tsx)

### Step 3: Test Locally
```bash
npm run dev
```
Visit `http://localhost:3000` to preview changes

---

## 🛠️ Optimization Tips

### For Videos
```bash
# Compress with ffmpeg
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow output.mp4
```

### For Images
- Use tools like:
  - **TinyPNG** (online)
  - **ImageOptim** (Mac)
  - **Squoosh** (Google, web-based)
- Aim for 70-80% quality
- Convert to WebP for best performance

### Performance
- Keep total folder size reasonable (under 500MB combined)
- Use lazy loading (already implemented in code)
- Consider hosting large files on external services (Vimeo, YouTube, Cloudinary)

---

## 📝 Quick Reference

| Content Type | Folder | Recommended Format | Max Size |
|-------------|--------|-------------------|----------|
| Videos | `/public/videos/` | MP4 (H.264) | 50MB |
| Photos | `/public/photos/` | JPG, WebP | 500KB |
| Designs | `/public/designs/` | PNG, JPG | 1MB |
| Thumbnails | `/public/*/thumbnails/` | JPG | 200KB |

---

## 🆘 Need Help?

If you need to update the portfolio structure or add more features:
1. Check the component files in `/components`
2. Review page files in `/app`
3. See [README.md](../README.md) for development instructions

---

**Last Updated:** January 2026  
**Version:** 1.0
