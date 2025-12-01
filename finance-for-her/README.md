# Finance For Her — Production-Ready Website

A modern, fully responsive, animation-enhanced website for the Finance For Her NGO. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

✅ **Complete** - All 12 sections fully built and styled  
✅ **Responsive** - Mobile-first design, works on all devices  
✅ **Animated** - Smooth Framer Motion animations throughout  
✅ **Fast** - Vite-powered, minimal dependencies, optimized  
✅ **Customizable** - Easy-to-manage data files  
✅ **Professional** - Modern design system with brand colors  
✅ **Accessible** - Semantic HTML, keyboard navigation  
✅ **Production Ready** - Deploy immediately  

## 🚀 Quick Start

### Prerequisites
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

## 📋 Site Sections

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

## 🎨 Design System

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

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Drag `dist/` folder to [netlify.app](https://app.netlify.com/drop)

### GitHub Pages
```bash
npm run build
# Deploy dist/ to gh-pages branch
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ contents to your server
```

## 📚 Documentation

- **QUICKSTART.md** - 5-minute setup guide
- **README_DETAILED.md** - Complete customization guide
- **VISUAL_GUIDE.md** - Design system and structure reference

## 🎬 Animations

Uses **Framer Motion** for:
- Fade-in on page load
- Scroll-triggered animations
- Hover effects on cards
- Animated background shapes
- Smooth transitions (0.3-0.6s)

## 📱 Responsive Design

- **Mobile** < 640px
- **Tablet** 640px - 1024px
- **Desktop** > 1024px

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Build Tool**: Vite 5

## 📝 License

© 2025 Finance For Her. All rights reserved.

## 📧 Contact

**Email**: hello@financeforher.org  
**Instagram**: @finance_forher  
**LinkedIn**: finance-for-her  

---

**Ready to deploy!** 🚀

For detailed instructions, see **QUICKSTART.md** or **README_DETAILED.md**.
