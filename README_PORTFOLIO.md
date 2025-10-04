# 🎮 Adarsh P. Thomson - Portfolio Website  
**A themed portfolio with Star Wars, DC Comics & Gaming elements**

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://adarsh-p-thomson.github.io/Adarsh-P-Thomson/)

## 🚀 Live Website

Visit the portfolio at: **https://adarsh-p-thomson.github.io/Adarsh-P-Thomson/**

---

## ✨ Features

### 🎨 Creative Design Elements
- **Star Wars**: Hyperspace jump transition animation
- **DC Comics**: Dark heroic aesthetic with glitch text effects  
- **Gaming**: Kratos axe flying animation, neon UI elements

### 🎯 Interactive Components
- Animated hero section with typing effect
- Hyperspace transition between pages
- Kratos axe animation (randomly triggers)
- Star field animated background
- Smooth scroll animations
- Responsive mobile-first design
- Konami Code easter egg (try it!)

### 📄 Portfolio Sections
1. **Home Page**
   - Hero introduction
   - About me
   - Skills arsenal
   - Books I love
   - Games I play
   - Quick overview
   - Contact links

2. **Projects Page**
   - Full projects showcase
   - Certificates & achievements  
   - Freelance work portfolio

---

## 🛠️ Quick Start

### Option 1: Edit Content (Easy!)

All portfolio content is in `data.js`. Just edit this file to update:
- Personal information
- Projects
- Certificates
- Freelance work
- Favorite books & games
- Skills

See [PORTFOLIO_README.md](PORTFOLIO_README.md) for detailed editing instructions.

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/Adarsh-P-Thomson/Adarsh-P-Thomson.git
cd Adarsh-P-Thomson

# Start a local server
python3 -m http.server 8000
# OR
npx serve

# Open browser
open http://localhost:8000
```

---

## 📦 Deployment to GitHub Pages

### Automatic Deployment

The repository is configured for automatic deployment. Any push to `main` branch will trigger deployment.

### Manual Setup (if needed)

1. Go to repository **Settings** → **Pages**
2. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click "Save"
4. Wait a few minutes for deployment

Your site will be live at: `https://[username].github.io/[repository-name]/`

---

## 📝 File Structure

```
portfolio/
├── index.html          # Main homepage
├── projects.html       # Projects & work page
├── styles.css          # All styling & animations
├── script.js           # JavaScript functionality
├── data.js            # ⭐ EDIT THIS for content
├── .github/
│   └── workflows/
│       └── pages.yml   # GitHub Pages deployment
├── README.md           # This file
└── PORTFOLIO_README.md # Detailed editing guide
```

---

## ⚡ Tech Stack

- **Pure HTML5, CSS3, JavaScript** (No frameworks needed!)
- **GitHub Pages** for hosting
- **Font Awesome** for icons
- **Custom animations** for effects

---

## 🎨 Customization

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #00d4ff;      /* Main accent (Star Wars blue) */
    --secondary: #e94560;    /* DC accent (red) */
    --accent: #00ff41;       /* Gaming green */
    --dark: #0a0a0f;         /* Background */
}
```

### Adding More Animations

Check `styles.css` for animation keyframes:
- `@keyframes hyperspace` - Page transitions
- `@keyframes axeThrow` - Axe animation
- `@keyframes glitch-anim` - Text glitch effect

### Modifying Layouts

All layouts use CSS Grid and Flexbox for responsiveness.  
Breakpoints are at `968px`, `768px`, and `480px`.

---

## 🎮 Easter Eggs

1. **Konami Code**: `↑ ↑ ↓ ↓ ← → ← → B A`
2. **Kratos Axe**: Randomly appears on scroll and hover
3. **Hyperspace Jump**: Click "Explore More" or project links
4. **Console Messages**: Open browser DevTools

---

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork it for your own use
- Suggest improvements via issues
- Share creative ideas

---

## 📄 License

Free to use as a template! Just update the content with your own information.

---

## 🙏 Acknowledgments

Inspired by:
- **Star Wars** hyperspace animations
- **DC Comics** dark heroic aesthetic  
- **God of War** (Kratos axe)
- **Retro gaming** UI elements

---

## 📧 Contact

- **LinkedIn**: [Adarsh P. Thomson](https://www.linkedin.com/in/adarsh-p-thomson-81990b259/)
- **GitHub**: [@Adarsh-P-Thomson](https://github.com/Adarsh-P-Thomson)

---

### 🌟 If you like this portfolio, give it a star!

*"May the Force be with you, and the code be ever in your favor."*
