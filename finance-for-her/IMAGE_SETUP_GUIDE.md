# Image Setup Guide - Finance For Her Website

## ✅ Images Already in Place

Your images are located at: `/Users/dhruvasammeta/Downloads/finance/public/images/`

**Current images available:**
- `logo-round.png` - Main logo (use across site)
- `img-1.jpg` through `img-14.jpg` - Photos for gallery & team
- `hero-collage.jpg` - Hero section background

---

## 📍 Where Images Are Used in the Code

### 1. **Logo (logo-round.png)**
   - **Location in code:** `src/components/Hero.tsx` (line 55 & 82)
   - **Current reference:** `/images/logo-round.png`
   - **How to update manually:**
     ```tsx
     // Line 55 - Small logo in header
     <img src="/images/logo-round.png" alt="Finance For Her" className="w-8 h-8 rounded-full" />
     
     // Line 82 - Large logo in hero section
     <motion.img
       src="/images/logo-round.png"
       alt="Finance For Her Logo"
       className="w-full max-w-sm drop-shadow-lg"
     />
     ```

### 2. **Gallery Images (img-1.jpg to img-14.jpg)**
   - **Location in code:** `src/data/gallery.ts`
   - **Current setup:** Uses images img-1 through img-14
   - **How to update manually:**
     ```typescript
     // src/data/gallery.ts
     export const galleryImages = [
       { id: 1, src: '/images/img-1.jpg', alt: 'Workshop Session' },
       { id: 2, src: '/images/img-2.jpg', alt: 'Training Program' },
       // ... continue for img-3 through img-14
     ]
     ```

### 3. **Team Member Photos**
   - **Location in code:** `src/data/team.ts`
   - **Current references:** img-10, img-11, img-12, img-13
   - **How to update manually:**
     ```typescript
     // src/data/team.ts
     const teamMembers = [
       {
         id: 1,
         name: "Team Member",
         role: "Founder",
         image: '/images/img-10.jpg',
         // ... other properties
       },
       // ... more team members using img-11, img-12, img-13
     ]
     ```

### 4. **Timeline Images**
   - **Location in code:** `src/data/timeline.ts`
   - **Current references:** img-2, img-5, img-6
   - **How to update manually:**
     ```typescript
     // src/data/timeline.ts
     const timelineData = [
       {
         id: 1,
         year: 2023,
         image: '/images/img-2.jpg',
         // ... other properties
       },
       {
         id: 2,
         year: 2024,
         image: '/images/img-5.jpg',
         // ... other properties
       },
       {
         id: 3,
         year: 2025,
         image: '/images/img-6.jpg',
         // ... other properties
       }
     ]
     ```

---

## 🔧 Manual File Updates (If Needed)

### Step 1: Update Hero.tsx
**File:** `/Users/dhruvasammeta/Downloads/finance/src/components/Hero.tsx`

Find line 55 and change:
```tsx
<img src="/logo.svg" alt="Finance For Her" className="w-8 h-8" />
```

To:
```tsx
<img src="/images/logo-round.png" alt="Finance For Her" className="w-8 h-8 rounded-full" />
```

Find line 82 and change:
```tsx
src="/logo.svg"
```

To:
```tsx
src="/images/logo-round.png"
```

### Step 2: Verify Data Files Point to Correct Images

**Check:** `/src/data/gallery.ts` - uses `/images/img-1.jpg` through `/images/img-14.jpg`
**Check:** `/src/data/team.ts` - uses `/images/img-10.jpg`, `img-11.jpg`, `img-12.jpg`, `img-13.jpg`
**Check:** `/src/data/timeline.ts` - uses `/images/img-2.jpg`, `img-5.jpg`, `img-6.jpg`

### Step 3: Header Logo (Optional)

If you want to add logo to Header component, edit:
**File:** `/Users/dhruvasammeta/Downloads/finance/src/components/Header.tsx`

Add to the header brand section:
```tsx
<img src="/images/logo-round.png" alt="Finance For Her" className="h-8 w-8 rounded-full" />
<span className="ml-2 text-xl font-bold text-navy">Finance For Her</span>
```

### Step 4: Favicon Setup

**File:** `/Users/dhruvasammeta/Downloads/finance/index.html`

Add to `<head>` section:
```html
<link rel="icon" type="image/png" href="/images/logo-round.png" />
```

---

## 📋 Image File Paths Reference

| Component | File Path | Images Used |
|-----------|-----------|-------------|
| Hero | `src/components/Hero.tsx` | logo-round.png |
| Gallery | `src/components/Gallery.tsx` | img-1 through img-14 |
| Team | `src/components/Team.tsx` | img-10, img-11, img-12, img-13 |
| Timeline | `src/components/Timeline.tsx` | img-2, img-5, img-6 |
| Header | `src/components/Header.tsx` | logo-round.png (optional) |
| Footer | `src/components/Footer.tsx` | logo-round.png (optional) |

---

## 🖼️ How to Replace Images Manually

If you want to replace any image:

1. **Backup old image:** `cp /public/images/old-image.jpg /public/images/old-image.jpg.bak`
2. **Add new image:** Copy new image to `/public/images/` with the same filename
3. **Rebuild:** `npm run build`
4. **Test:** `npm run dev` and visit `http://localhost:5173`

---

## ✨ Image Optimization Tips

- Keep images under 500KB for best performance
- Use JPG for photos (better compression)
- Use PNG for logos (transparency support)
- Resize large images (max 1920px width)
- Test on mobile devices

---

## 🚀 To Apply Changes

After manual updates, run:
```bash
npm run build
npm run preview
```

Then visit `http://localhost:4173` to verify production build.

