# Finance For Her Website

A modern, responsive, and animated website for the Finance For Her NGO built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

Finance For Her empowers rural and low-income women through financial literacy education. This website showcases:

- **Hero Section** - Compelling introduction with animated background
- **Stats** - Key metrics and impact numbers
- **Purpose/Vision** - Mission statement and core values
- **Curriculum** - Two-session financial literacy program overview
- **Learning Resources** - Interactive guides and presentations
- **Timeline** - Organization growth from 2023-2025
- **Media Recognition** - Press coverage and articles
- **Photo Gallery** - Workshop and event images
- **Team** - Meet the people behind the mission
- **Contact** - Easy way to get in touch

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Basic knowledge of React and TypeScript

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with branding
│   ├── Stats.tsx            # Impact metrics
│   ├── Purpose.tsx          # Mission & vision
│   ├── Curriculum.tsx       # Educational program overview
│   ├── Guides.tsx           # Learning resources grid
│   ├── Timeline.tsx         # Organization timeline
│   ├── MediaRecognition.tsx # Press coverage strip
│   ├── Gallery.tsx          # Photo grid with lightbox
│   ├── Team.tsx             # Team member profiles
│   ├── Contact.tsx          # Contact form & info
│   └── Footer.tsx           # Site footer
├── data/
│   ├── stats.ts             # Impact statistics
│   ├── curriculum.ts        # Session topics
│   ├── guides.ts            # Learning resources
│   ├── timeline.ts          # Timeline milestones
│   ├── articles.ts          # Media articles
│   ├── team.ts              # Team members
│   └── gallery.ts           # Gallery images
├── App.tsx                  # Main app component
├── App.css                  # App-specific styles
├── index.css               # Global styles
└── main.tsx                # Entry point
```

## 🎨 Styling & Customization

### Theme Colors

All colors are defined in `tailwind.config.ts`:

- **Navy**: `#25324B` - Primary text and backgrounds
- **Lavender**: `#D8A8E2` - Secondary accent
- **Lavender Light**: `#F2C8F2` - Light backgrounds
- **Green Light**: `#CDE6C1` - Tertiary accent
- **Soft Off-White**: `#FAFAF8` - Subtle backgrounds

### Updating Colors

Edit `tailwind.config.ts` to modify theme colors:

```typescript
colors: {
  navy: '#25324B',
  'lavender-light': '#F2C8F2',
  'lavender': '#D8A8E2',
  'green-light': '#CDE6C1',
  'soft-off-white': '#FAFAF8',
}
```

## 📝 Managing Content

### Edit Statistics

Update `/src/data/stats.ts`:

```typescript
export const stats = [
  {
    id: 1,
    number: '1500+',
    label: 'Women Reached',
    description: 'Across 4 states and counting',
    color: 'bg-lavender-light',
  },
  // Add more stats...
]
```

### Update Curriculum

Edit `/src/data/curriculum.ts`:

```typescript
export const curriculum = {
  session1: {
    title: 'Session 1: Foundations of Finance',
    color: 'bg-lavender',
    topics: [
      'Basic Terminology',
      'Needs & Wants',
      // Add topics...
    ],
  },
  // ...
}
```

### Manage Learning Guides

Edit `/src/data/guides.ts`:

```typescript
export const guides = [
  {
    id: 1,
    title: 'Future Wealth Planning & Awareness',
    description: 'Learn how to build long-term wealth...',
    link: 'https://docs.google.com/presentation/d/...', // Embed link here
    icon: '📊',
  },
  // Add more guides...
]
```

### Update Timeline

Edit `/src/data/timeline.ts`:

```typescript
export const timeline = [
  {
    id: 1,
    year: '2023',
    title: 'Founder Year',
    location: 'Hyderabad',
    highlights: [
      'NGO established',
      // Add highlights...
    ],
    image: '/images/timeline/2023.jpg', // Add image path
  },
  // ...
]
```

### Manage Media Articles

Edit `/src/data/articles.ts`:

```typescript
export const articles = [
  {
    id: 1,
    title: 'Article Title',
    summary: 'Brief summary...',
    link: 'https://...',
    source: 'Publication Name',
  },
  // Add more articles...
]
```

### Update Team Members

Edit `/src/data/team.ts`:

```typescript
export const teamMembers = [
  {
    id: 1,
    name: 'Member Name',
    role: 'Position',
    quote: 'Inspirational quote...',
    image: '/images/team/member-1.jpg',
    color: 'bg-lavender-light',
  },
  // Add more members...
]
```

### Manage Gallery

Edit `/src/data/gallery.ts`:

```typescript
export const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/workshop-1.jpg',
    alt: 'Workshop description',
  },
  // Add more images...
]
```

## 🖼️ Adding Images

Place images in the `/public/images/` directory:

```
public/images/
├── logo-round.png           # Site logo (used in header/footer)
├── gallery/
│   ├── workshop-1.jpg
│   ├── workshop-2.jpg
│   └── ...
├── team/
│   ├── member-1.jpg
│   ├── member-2.jpg
│   └── ...
└── timeline/
    ├── 2023.jpg
    ├── 2024.jpg
    └── 2025.jpg
```

**Note:** Currently, images are placeholders (emoji icons). Replace the emoji with actual image paths when assets are available.

## 🎬 Animations

The site uses **Framer Motion** for smooth animations:

- Fade-in on page load
- Slide animations for sections
- Hover effects on cards
- Scroll-triggered animations
- Animated background shapes

All animations are optimized for performance and accessibility.

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully across devices.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Smooth scrolling behavior

## 🔗 Links & Resources

### External Links

- **Google Slides Guide**: https://docs.google.com/presentation/d/1w8vLcpUHDKGLmkGID-d3NS0J8X-8SOsSX7-N8NkIZcE/edit
- **Press Articles**: Links in `/src/data/articles.ts`
- **Social Media**: Instagram @finance_forher

### Contact Information

- **Email**: hello@financeforher.org
- **Instagram**: @finance_forher
- **LinkedIn**: finance-for-her

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Deployment Options

- **Vercel** (recommended): `vercel`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Configure `vite.config.ts`
- **Traditional Hosting**: Upload `dist/` contents

## 🛠️ Development

### Available Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Adding New Sections

1. Create component in `/src/components/ComponentName.tsx`
2. Add data file in `/src/data/` if needed
3. Import and use in `App.tsx`
4. Style with Tailwind CSS classes
5. Add animations with Framer Motion

## 📊 Performance

- Lazy-loaded images
- Code splitting
- Optimized animations
- Minimal dependencies
- Production-ready build output

## 🤝 Contributing

To contribute:

1. Update relevant data files
2. Create feature branches
3. Test responsive design
4. Ensure animations are smooth
5. Submit pull requests

## 📄 License

© 2025 Finance For Her. All rights reserved.

## 📞 Support

For questions or issues, contact: hello@financeforher.org

---

**Last Updated**: December 2025

**Built with**: React 18, TypeScript, Tailwind CSS, Framer Motion, Vite
