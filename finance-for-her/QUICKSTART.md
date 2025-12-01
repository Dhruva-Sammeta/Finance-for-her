# Finance For Her Website - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation & Running

```bash
# 1. Navigate to project directory
cd /Users/dhruvasammeta/Downloads/finance

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:5173
```

The dev server will auto-reload as you make changes.

---

## 📦 Build for Production

```bash
# Generate optimized production build
npm run build

# Preview the production build locally
npm run preview

# Build output will be in ./dist/ directory
```

---

## 🎯 What You Have

A complete, production-ready website with:

✅ **12 Sections** - All content areas pre-built  
✅ **Animations** - Smooth Framer Motion effects  
✅ **Responsive** - Mobile, tablet, desktop optimized  
✅ **Fast** - Vite-powered, minimal dependencies  
✅ **Customizable** - Data files for easy updates  
✅ **Professional** - Modern design system  
✅ **Accessible** - Semantic HTML, keyboard nav  

---

## 📝 Quick Edits

### Update Contact Email
**File**: `src/components/Contact.tsx`
```typescript
href="mailto:YOUR_EMAIL@example.com"
```

### Update Social Links
**File**: `src/components/Footer.tsx`
```typescript
{ icon: '📱', href: 'https://your-instagram-url', label: 'Instagram' },
```

### Change Statistics
**File**: `src/data/stats.ts`
```typescript
{ number: 'YOUR_NUMBER', label: 'Your Label', ... }
```

### Update Team Members
**File**: `src/data/team.ts`
```typescript
{ name: 'Your Name', role: 'Your Role', quote: 'Your Quote', ... }
```

### Add Articles
**File**: `src/data/articles.ts`
```typescript
{ title: 'Article Title', link: 'URL', source: 'Source', ... }
```

---

## 🖼️ Adding Images

1. Create folders in `/public/images/`:
   - `/public/images/gallery/` - Gallery photos
   - `/public/images/team/` - Team photos
   - `/public/images/timeline/` - Timeline photos

2. Update data files with image paths:
   ```typescript
   image: '/images/gallery/workshop-1.jpg'
   ```

3. Replace emoji placeholders with image references

---

## 🔧 Customization Examples

### Change Theme Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  navy: '#YOUR_COLOR',
  lavender: '#YOUR_COLOR',
  'green-light': '#YOUR_COLOR',
}
```

### Add New Section

1. Create `src/components/YourSection.tsx`
2. Create data file `src/data/yourdata.ts`
3. Import in `src/App.tsx`
4. Add to JSX in App

### Modify Animations

Each component uses Framer Motion. Example:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

---

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build: `npm run build`
2. Drag `dist/` folder to [netlify.app](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Update `vite.config.ts`
2. Build: `npm run build`
3. Push `dist/` to `gh-pages` branch

### Traditional Hosting

1. Run `npm run build`
2. Upload `dist/` contents to your server
3. Ensure server routes to `index.html`

---

## 🔍 Project Structure

```
finance/
├── src/
│   ├── components/        # 13 React components
│   ├── data/             # Content data files
│   ├── App.tsx           # Main app
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── public/
│   ├── images/          # Add your images here
│   └── robots.txt
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind theme
├── vite.config.ts       # Vite config
├── tsconfig.json        # TypeScript config
└── README_DETAILED.md   # Full documentation
```

---

## 🎨 Design System Quick Reference

| Element | Color | Usage |
|---------|-------|-------|
| Primary Buttons | Lavender Gradient | CTAs, "View Guide", etc. |
| Secondary Buttons | Green Light | "Contact", secondary actions |
| Backgrounds | White/Soft Off-White | Main areas |
| Accents | Lavender Light | Card backgrounds, highlights |
| Text | Navy | All body text, headings |
| Hover Effects | Lighter shades | Interactive states |

---

## 📊 Performance Tips

1. **Lazy Load Images**: Already configured
2. **Optimize Images**: Use tools like TinyPNG before uploading
3. **Minimize Dependencies**: Already done (only Framer Motion added)
4. **Caching**: Vite handles this in production

---

## 🆘 Troubleshooting

### Dev server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Missing dependencies
```bash
npm install
```

### Build errors
- Check TypeScript errors: `npm run build`
- Ensure all imports are correct
- Check console for specific errors

### Images not showing
- Verify path is `/images/...` not `images/...`
- Check file extension matches
- Ensure file exists in `/public/images/`

---

## 📚 Additional Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

---

## 💡 Pro Tips

1. **Git Integration**: Initialize git for version control
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Environment Variables**: Create `.env` for sensitive data
   ```
   VITE_API_URL=https://api.example.com
   ```

3. **CI/CD**: Use GitHub Actions for automated deployments

4. **SEO**: Add meta tags to `index.html`
   ```html
   <meta name="description" content="Finance For Her...">
   ```

5. **Analytics**: Add tracking code to `main.tsx`

---

## 📧 Support & Updates

**Website**: financeforher.org (when deployed)  
**Email**: hello@financeforher.org  
**Instagram**: @finance_forher  
**LinkedIn**: finance-for-her  

---

**Happy coding! 🎉**

For detailed documentation, see `README_DETAILED.md`
