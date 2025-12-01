# Finance For Her Website - Visual Hierarchy & Features

## 📱 Site Structure

The website follows a single-page scroll design with the following sections in order:

### 1. **Header** (Sticky Navigation)
- Logo + Branding
- Navigation links to all sections
- Mobile hamburger menu
- Contact button

### 2. **Hero Section**
- Large headline: "Empowering Rural & Low-Income Women Through Financial Literacy"
- Tagline: "Over 1,500 beneficiaries across Telangana, Andhra Pradesh, Delhi & Kolkata"
- CTA buttons: "Explore Our Work" + "Get Involved"
- Animated logo placeholder (emoji-based currently)
- Quick stats grid (1500+, 25+, 4 states)
- Animated background shapes

### 3. **Impact Stats Section**
- 4 large stat cards with:
  - Big number (1500+, 25+, 30+, 4)
  - Label (Women Reached, Sessions Conducted, etc.)
  - Description
  - Color-coded backgrounds
- Hover animations
- Scroll-triggered entrance

### 4. **Purpose & Vision Section**
- Mission quote in blockquote style
- Three purpose blocks:
  - Breaking Stigma (🔥)
  - Building Independence (🌱)
  - Empowering Communities (💪)
- Gradient backgrounds
- Hover lift effect

### 5. **Curriculum Section**
- Two colored session blocks side-by-side
- Session 1: "Foundations of Finance" (Lavender)
  - 8 topics with checkmarks
  - Topics include: Basic Terminology, Budgeting, Savings, etc.
- Session 2: "Banking & Smart Borrowing" (Green)
  - 8 topics including: Bank Accounts, Loans, Interest, etc.
- Responsive 2-column grid

### 6. **Learning Resources (Guides)**
- 4-card grid layout
- Cards for:
  1. Future Wealth Planning & Awareness (📊)
  2. Budgeting Made Simple (💰)
  3. Understanding Borrowing + Loans (🏦)
  4. Building Better Saving Habits (🎯)
- Each card has:
  - Icon at top
  - Title
  - Description
  - "View Guide" button
- Hover animations with shadow lift

### 7. **Timeline Section**
- Vertical timeline with animated line
- 3 milestone years: 2023, 2024, 2025
- Each timeline entry has:
  - Year badge
  - Title
  - Highlights list
  - Image placeholder with emoji
- Alternating left-right layout
- Timeline dots at milestones

### 8. **Media Recognition Section**
- Dark navy background
- "As Seen In" media logos grid (4 columns)
- Article cards below with:
  - Publication name
  - Article title
  - Summary
  - "Read More" link
  - Newspaper icon

### 9. **Photo Gallery**
- 3-column responsive grid
- Image placeholders with emoji
- Hover effects with zoom and overlay
- Light box modal on click
- "Follow us on Instagram" CTA at bottom
- Smooth animations

### 10. **Team Section**
- 4-column grid (responsive)
- Each team card:
  - Avatar placeholder (emoji)
  - Name
  - Role
  - Inspirational quote
  - Color-coded background
- Hover lift animations

### 11. **Contact Section**
- Dark navy background
- Two-column layout:
  - Left: Contact info (email, Instagram, location)
  - Right: Contact form
- Form fields: Name, Email, Message
- Success notification on submit
- Interactive hover states

### 12. **Footer**
- Dark navy background
- 4-column grid:
  - Brand & mission
  - Quick navigation links
  - Resource links
  - Social media links
- Bottom divider with copyright
- Year auto-updates

---

## 🎨 Design System

### Colors Used

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | #25324B | Primary text, dark backgrounds, headers |
| Lavender | #D8A8E2 | Accents, buttons, highlights |
| Lavender Light | #F2C8F2 | Backgrounds, cards, light accents |
| Green Light | #CDE6C1 | Accents, card backgrounds, CTAs |
| Blue Light | #E3F2FD | Secondary background tint |
| Pink Light | #FCE4EC | Secondary background tint |
| Soft Off-White | #FAFAF8 | Subtle backgrounds |
| White | #FFFFFF | Main background |
| Slate | Various | Supporting text colors |

### Typography

- **Font**: Inter (from Google Fonts)
- **Headings**: Bold (700-800 weight)
- **Body**: Regular (400-500 weight)
- **Sizes**: 
  - H1: 48px (desktop), 32px (mobile)
  - H2: 36px (desktop), 28px (mobile)
  - H3: 24px
  - Body: 16px
  - Small: 14px

### Spacing

- **Sections**: 64px-96px vertical padding
- **Cards**: 24px padding
- **Gap between items**: 16px-32px
- **Max width**: 80rem (1280px)

### Shadows

- **Soft**: `0 4px 12px rgba(0,0,0,0.08)`
- **Medium**: `0 8px 24px rgba(0,0,0,0.12)`
- **Large**: `0 12px 32px rgba(0,0,0,0.15)`

### Border Radius

- **Cards**: 12px (xl)
- **Buttons**: 8px (lg)
- **Circular**: 50% (for avatars, logos)

---

## 🎬 Animation Principles

### Entrance Animations
- Sections fade in as user scrolls
- Staggered animations for elements within sections
- Duration: 0.6s ease-out

### Interaction Animations
- Buttons scale slightly on hover (1.02x)
- Cards lift slightly on hover (y: -8px)
- Smooth transitions (0.3s)

### Scroll Animations
- Triggered when element enters viewport
- No animation on exit (runs once)
- Uses `whileInView` from Framer Motion

### Background Animations
- Hero section has animated gradient shapes
- Subtle floating motion (8-10s duration)
- Infinite loop with ease-in-out

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: 1024px+ (lg)

### Layout Changes

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Header | Hamburger menu | Hamburger | Full nav |
| Hero | 1 column | 1 column | 2 columns |
| Stats | 2 cols | 2 cols | 4 cols |
| Curriculum | 1 col | 1 col | 2 cols |
| Guides | 1 col | 2 cols | 4 cols |
| Timeline | Full | Full | Alternating |
| Gallery | 2 cols | 3 cols | 3 cols |
| Team | 1 col | 2 cols | 4 cols |
| Contact | 1 col | 1 col | 2 cols |
| Footer | Stacked | 2 cols | 4 cols |

---

## 🔗 Navigation Structure

All sections have scroll anchors:

- `#home` - Hero
- `#stats` - Stats
- `#about` - Purpose/Vision
- `#curriculum` - Curriculum
- `#guides` - Learning Resources
- `#timeline` - Timeline
- `#media` - Media Recognition
- `#gallery` - Gallery
- `#team` - Team
- `#contact` - Contact

---

## 🖼️ Placeholder Strategy

Currently using emoji icons as placeholders:

| Section | Placeholder |
|---------|------------|
| Logo | 💰 |
| Team Photos | 👤 |
| Gallery Images | 📸 |
| Timeline Images | 🏢 / 🤝 / 🚀 |
| Guide Icons | 📊 / 💰 / 🏦 / 🎯 |
| Contact Icons | 📧 / 📱 / 📍 |
| Media Section | 📰 |

**To replace placeholders:**
1. Add actual images to `/public/images/`
2. Update data files with image paths
3. Remove emoji content from components

---

## ✨ Key Features

✅ **Fully Responsive** - Mobile-first design  
✅ **Smooth Animations** - Framer Motion for elegance  
✅ **Fast Performance** - Optimized images, minimal deps  
✅ **Accessibility** - Semantic HTML, keyboard nav  
✅ **SEO Ready** - Proper heading structure  
✅ **Dark Mode Safe** - Uses explicit colors  
✅ **Customizable** - Easy data file updates  
✅ **Production Ready** - Compiled and optimized  

---

**Last Updated**: December 2025
