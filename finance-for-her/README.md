
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```


1. **Header** - Sticky navigation with logo and mobile menu
2. **Hero** - Compelling headline, tagline, CTA buttons, animated background
3. **Stats** - 4 impact metric cards with animations
4. **Purpose** - Mission quotes and core values
5. **Curriculum** - Two-session financial literacy program overview
6. **Guides** - 4-card grid of learning resources with external links
7. **Timeline** - Vertical scrolling timeline (2023-2025) with milestones
8. **Media** - Press coverage and media recognition
9. **Gallery** - 3-column photo grid with lightbox modal
10. **Team** - Team member profile cards
11. **Contact** - Contact form and multiple contact methods
12. **Footer** - Links, social media, copyright

## Design System:

### Theme Colors
- **Navy** `#25324B` - Primary text, dark backgrounds
- **Lavender** `#D8A8E2` - Accents, buttons
- **Lavender Light** `#F2C8F2` - Light backgrounds
- **Green Light** `#CDE6C1` - Secondary accents
- **Soft Off-White** `#FAFAF8` - Subtle backgrounds

### Typography
- **Font**: Inter (from Google Fonts)
- **Headings**: Bold 700-800
- **Body**: Regular 400-500
- **Smooth antialiasing**: Applied globally

## 📁 Project Structure

```
src/
├── components/              # 13 React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Purpose.tsx
│   ├── Curriculum.tsx
│   ├── Guides.tsx
│   ├── Timeline.tsx
│   ├── MediaRecognition.tsx
│   ├── Gallery.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── About.tsx (placeholder)
├── data/                    # Content data files
│   ├── stats.ts
│   ├── curriculum.ts
│   ├── guides.ts
│   ├── timeline.ts
│   ├── articles.ts
│   ├── team.ts
│   └── gallery.ts
├── App.tsx                  # Main app component
├── App.css                  # App-specific styles
├── index.css               # Global styles
└── main.tsx                # Entry point
```

## 🚀 Deployment

### Vercel 


- **QUICKSTART.md** - 5-minute setup guide
- **README_DETAILED.md** - Complete customization guide
- **VISUAL_GUIDE.md** - Design system and structure reference


- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Build Tool**: Vite 5
## Current build stats:
  ```
> finance_for_her@0.1.0 build
> vite build

The CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
vite v5.4.21 building for production...
✓ 342 modules transformed.
dist/index.html                   0.50 kB │ gzip:  0.32 kB
dist/assets/index-DaKUqz-A.css   27.65 kB │ gzip:  5.33 kB
dist/assets/index-B8ZO124T.js   289.91 kB │ gzip: 91.03 kB
✓ built in 2.12s
```
## 📝 License
- **MIT**
Finance For Her. All rights reserved.

