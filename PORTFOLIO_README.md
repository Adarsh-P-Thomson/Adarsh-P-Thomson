# 🚀 Adarsh P. Thomson - Portfolio Website

A creative, themed portfolio website featuring **Star Wars**, **DC Comics**, and **Gaming** design elements with interactive animations and transitions.

## 🌟 Features

### Design Themes
- **Star Wars**: Hyperspace jump transition animation, space background with twinkling stars
- **DC Comics**: Dark, heroic color scheme with glitch effects
- **Gaming**: Interactive elements, Kratos axe flying animation, neon accents

### Interactive Elements
- ⚡ Hyperspace transition when navigating between pages
- ⚔️ Kratos axe flying animation (triggers randomly on scroll and hover)
- ✨ Glitch text effects
- 🌌 Animated star field background
- ⌨️ Typing animation for hero subtitle
- 📱 Fully responsive design
- 🎮 Easter egg: Konami Code (try it!)

### Sections
- **Home Page** (`index.html`)
  - Hero section with animated introduction
  - About me section
  - Skills showcase
  - Books I love (interactive cards)
  - Games I love (interactive cards)
  - Quick preview of projects, certificates, and freelance work
  - Contact section with social links

- **Projects Page** (`projects.html`)
  - Detailed project showcase
  - Certificates & achievements
  - Freelance work portfolio

## 🎨 How to Edit Your Portfolio

All content can be easily edited through the `data.js` file. No need to touch HTML or CSS!

### 1. Personal Information

Edit the `personal` object in `data.js`:

```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your Tagline",
    bio: "Your first bio paragraph...",
    bio2: "Your second bio paragraph...",
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    profileImage: "URL to your profile image"
}
```

### 2. Adding Projects

Add new projects to the `projects` array:

```javascript
projects: [
    {
        title: "Project Name",
        description: "Project description",
        technologies: ["Tech1", "Tech2", "Tech3"],
        link: "https://project-link.com", // or "#" if no link
        featured: true // optional
    }
    // Add more projects...
]
```

### 3. Adding Certificates

Add certificates to the `certificates` array:

```javascript
certificates: [
    {
        title: "Certificate Name",
        issuer: "Issuing Organization",
        date: "2024",
        link: "#" // or certificate link
    }
]
```

### 4. Adding Freelance Work

Add freelance projects to the `freelanceWork` array:

```javascript
freelanceWork: [
    {
        title: "Project Title",
        client: "Client Name",
        description: "What you did",
        duration: "3 months",
        technologies: ["Tech1", "Tech2"]
    }
]
```

### 5. Adding Favorite Books

Add books to the `books` array:

```javascript
books: [
    {
        title: "Book Title",
        author: "Author Name",
        cover: "URL to book cover image",
        quote: "A quote about the book"
    }
]
```

### 6. Adding Favorite Games

Add games to the `games` array:

```javascript
games: [
    {
        title: "Game Title",
        platform: "PC/Console/Mobile",
        genre: "Genre",
        cover: "URL to game cover",
        description: "Why you love it"
    }
]
```

### 7. Updating Skills

Edit the `skills` object:

```javascript
skills: {
    languages: ["Python", "JavaScript", "Java"],
    frameworks: ["React", "Node.js", "TensorFlow"],
    tools: ["Git", "Docker", "AWS"],
    interests: ["AI/ML", "Cloud Computing"]
}
```

## 🚀 Deployment to GitHub Pages

Your portfolio is configured to be hosted on GitHub Pages!

### Steps to Deploy:

1. **Push all files to your repository**
   - Make sure `index.html`, `projects.html`, `styles.css`, `script.js`, and `data.js` are in the root directory

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select the main branch
   - Click "Save"

3. **Access your site**
   - Your portfolio will be available at: `https://Adarsh-P-Thomson.github.io/Adarsh-P-Thomson/`
   - It may take a few minutes to deploy

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## 📁 File Structure

```
portfolio/
├── index.html          # Main homepage
├── projects.html       # Projects & work page
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── data.js             # EDIT THIS: Your portfolio content
└── README.md           # This file
```

## 🎮 Easter Eggs

- Try the **Konami Code** on your keyboard: ↑ ↑ ↓ ↓ ← → ← → B A
- Watch for the **Kratos axe** flying across the screen
- Click on "Explore More" or navigation links to see the **hyperspace transition**

## 🛠️ Customization Tips

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #00d4ff;      /* Main accent color */
    --secondary: #e94560;    /* Secondary accent */
    --accent: #00ff41;       /* Gaming accent */
    --dark: #0a0a0f;         /* Background dark */
}
```

### Adding More Animations

The portfolio uses CSS animations. Check `styles.css` for existing animations like:
- `hyperspace` - Page transition
- `axeThrow` - Axe flying animation
- `glitch-anim` - Text glitch effect
- `move-twink-back` - Star twinkling

### Performance Tips

- Optimize images before uploading (use compressed versions)
- Use WebP format for better performance
- Keep image sizes reasonable (profile: ~500KB, covers: ~200KB)

## 🎨 Design Credits

Inspired by:
- Star Wars hyperspace effects
- DC Comics dark aesthetic
- Classic gaming UI elements
- Cyberpunk neon themes

## 📝 License

Feel free to use this template for your own portfolio! Just remember to update all personal information.

## 💡 Need Help?

If you need to make advanced customizations:
1. HTML structure is in `index.html` and `projects.html`
2. All styles are in `styles.css`
3. JavaScript functionality is in `script.js`
4. Content data is in `data.js` (easiest to edit!)

## 🌟 Show Your Support

If you like this portfolio template:
- ⭐ Star this repository
- 🔗 Share it with others
- 🎨 Customize it and make it your own!

---

**Built with passion, code, and a lot of caffeine ☕**

*"May the Force be with you, and the code be ever in your favor."*
