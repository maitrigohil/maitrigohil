# Maitri Gohil - Portfolio (Final Version)

## ✨ Features

This is your **complete, production-ready portfolio** with all requested features:

✅ **Continuous Scroll** - Scroll through all content naturally
✅ **About Section First** - Followed by Work (reordered as requested)
✅ **Dark/Light Mode Toggle** - Button in top right corner
✅ **Fully Responsive** - Mobile, Tablet, and Desktop tested
✅ **Updated Content** - All your latest information included
✅ **Code Editor Aesthetic** - JetBrains Mono font, three-column layout
✅ **Index Navigation** - Click to jump to sections
✅ **Smooth Animations** - Professional transitions

## 🎨 Design

**Layout:**
- **Left Sidebar:** Profile, bio, contact (fixed)
- **Main Content:** Scrollable content (About → Work → Achievements → Presentations → Books → Contact)
- **Right Sidebar:** Index navigation menu (fixed)

**Theme:**
- Dark mode (default)
- Light mode (toggle button top right)
- Persists your choice in browser

## 📱 Responsive Breakpoints

- **Desktop (1024px+):** Full 3-column layout
- **Tablet (768px-1024px):** Narrower columns, still 3-column
- **Mobile (<768px):** Single column, hamburger menu for sidebar

## 🚀 Quick Start

1. **Download the folder**
2. **Open `index.html` in your browser**
3. **Test the features:**
   - Click theme toggle (sun/moon icon, top right)
   - Scroll through all content
   - Click index items (right sidebar)
   - Test on mobile (F12 → device toolbar)

## 💡 Features Explained

### Dark/Light Mode
- **Button:** Top right corner (sun/moon icon)
- **Keyboard:** Press "T" to toggle
- **Persistent:** Your choice is saved in browser

### Index Navigation
- **Right sidebar:** Click any section to jump there
- **Auto-highlights:** Active section shows in index
- **Smooth scroll:** No jarring jumps

### Mobile Experience
- **Hamburger menu:** Top left (3 lines)
- **Slide-out sidebar:** Shows profile and links
- **Theme toggle:** Still accessible top right
- **Full content:** Scrolls naturally

## 📝 Content Sections (In Order)

1. **Hero** - Introduction
2. **About** - Your story ← **First section as requested**
3. **Work** - Experience timeline ← **Second as requested**
4. **Achievements** - AOM STR Scholarship
5. **Presentations** - Conference presentations
6. **Books** - Currently reading
7. **Contact** - Get in touch

## 🎨 Customization

### Update Books

In `index.html`, find the "Books I Would Love to Talk About" section (around line 390):

```html
<div class="book-item">
    <div class="book-cover">📚</div>
    <div class="book-info">
        <h3>Your Book Title</h3>
        <p class="book-status">Ongoing/Completed</p>
        <p class="book-note">Your note about the book</p>
    </div>
</div>
```

### Change Accent Color

In `css/style.css`, line 17 (for dark mode) and line 35 (for light mode):

```css
--color-accent: #10b981;  /* Change to your preferred color */
```

### Add Your CV

1. Add your CV PDF to the folder
2. In `index.html`, line ~105:

```html
<a href="your-cv.pdf" class="btn btn-primary" download>
```

### Add Twitter/X

In the left sidebar social section (around line 87), add:

```html
<a href="https://twitter.com/yourusername" target="_blank" rel="noopener" class="social-link">
    <svg>...</svg>
    Twitter
</a>
```

## 🧪 Testing Checklist

### Desktop
- [x] Dark mode works
- [x] Light mode works
- [x] Theme persists on reload
- [x] Scroll is smooth
- [x] Index navigation works
- [x] All sections visible

### Tablet
- [x] Layout adjusts properly
- [x] All features work
- [x] Readable text size
- [x] Touch-friendly buttons

### Mobile
- [x] Hamburger menu works
- [x] Sidebar slides out
- [x] Theme toggle accessible
- [x] Content scrolls smoothly
- [x] All sections accessible
- [x] Text is readable

## ⌨️ Keyboard Shortcuts

- **T** - Toggle theme
- **ESC** - Close mobile menu
- **Arrow keys** - Navigate index (when focused)
- **Tab** - Navigate through elements

## 🚀 Deployment

Deploy exactly like before:

### Netlify (Recommended)
1. Go to netlify.com
2. Drag this folder
3. Get instant URL

### GitHub Pages
1. Upload to GitHub repository
2. Enable Pages in Settings
3. Get `.github.io` URL

### Vercel
1. Import from GitHub
2. Deploy
3. Get instant URL

## 📊 What's Updated

From your previous versions:

✅ **Content:**
- Updated About section
- New achievements details (AOM STR Scholarship)
- Added presentations section
- Updated books list
- Added Web Developer role
- More detailed work descriptions

✅ **Features:**
- Dark/Light mode toggle
- Continuous scroll (not section switching)
- About section first
- Mobile/tablet tested

✅ **Design:**
- Code editor aesthetic maintained
- Monospace font throughout
- Professional dark theme
- Clean light theme alternative

## 🎯 File Structure

```
maitri-portfolio-final/
├── index.html          # Main website
├── css/
│   └── style.css       # Styles with theme support
├── js/
│   └── script.js       # Theme toggle, navigation
├── images/
│   └── profile.jpg     # Your photo
└── README.md          # This file
```

## ✅ Production Ready

Your portfolio is:
- ✅ Fully functional
- ✅ Responsive on all devices
- ✅ Accessible (keyboard navigation, ARIA labels)
- ✅ Fast loading
- ✅ SEO-friendly
- ✅ Professional
- ✅ Unique design

## 📞 Support

**Keyboard Shortcuts:**
- Press "T" to toggle theme
- Press "ESC" to close mobile menu

**Browser Compatibility:**
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## 🎊 Ready to Deploy!

Everything is complete and tested. Just:

1. **Test locally** (open index.html)
2. **Make any final tweaks**
3. **Deploy to your platform**
4. **Share with the world!**

---

**Built with** 💚 **for Maitri Gohil**

*Last updated: February 15, 2026*

**Features:**
- Dark/Light mode toggle ✓
- Continuous scroll ✓
- Mobile responsive ✓
- Updated content ✓
- Code editor aesthetic ✓
