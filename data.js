// ============================================
// PORTFOLIO DATA - EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================

const portfolioData = {
    // Personal Information
    personal: {
        name: "Adarsh P. Thomson",
        title: "Computer Science Student & Problem Solver",
        tagline: "Building impactful solutions through code",
        bio: "I'm a Computer Science student with a deep passion for solving complex problems and building impactful solutions. I thrive on technical challenges that require creative thinking—whether it's designing secure systems, training deep learning models, or architecting full-stack applications from the ground up.",
        bio2: "Beyond coding, I'm driven by leadership and innovation. I believe in fostering collaboration, empowering teams, and creating environments where ideas can flourish.",
        email: "your.email@example.com",
        linkedin: "https://www.linkedin.com/in/adarsh-p-thomson-81990b259/",
        github: "https://github.com/Adarsh-P-Thomson",
        profileImage: "https://github.com/user-attachments/assets/b2bbe889-f87d-4098-90b4-a0eac73dc19d"
    },

    // Projects Section
    projects: [
        {
            title: "AI Deep Learning Project",
            description: "Training deep learning models for complex problem solving",
            technologies: ["Python", "TensorFlow", "Neural Networks"],
            link: "#",
            featured: true
        },
        {
            title: "Secure System Design",
            description: "Architecting secure and scalable systems",
            technologies: ["Security", "Architecture", "Cloud"],
            link: "#",
            featured: true
        },
        {
            title: "Full-Stack Application",
            description: "End-to-end application development from ideation to deployment",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#",
            featured: true
        }
        // Add more projects here following the same format
    ],

    // Certificates Section
    certificates: [
        {
            title: "Cloud Computing Certification",
            issuer: "AWS/Azure/GCP",
            date: "2024",
            link: "#"
        },
        {
            title: "AI & Machine Learning",
            issuer: "Coursera/edX",
            date: "2023",
            link: "#"
        }
        // Add more certificates here
    ],

    // Freelance Work Section
    freelanceWork: [
        {
            title: "Web Development Project",
            client: "Client Name",
            description: "Full-stack web application development",
            duration: "3 months",
            technologies: ["React", "Node.js"]
        },
        {
            title: "System Architecture Consulting",
            client: "Client Name",
            description: "Designed scalable cloud architecture",
            duration: "2 months",
            technologies: ["AWS", "Microservices"]
        }
        // Add more freelance work here
    ],

    // Books I Love
    books: [
        {
            title: "The Art of War",
            author: "Sun Tzu",
            cover: "https://images-na.ssl-images-amazon.com/images/I/61ZGflXCjlL._AC_UL600_SR600,600_.jpg",
            quote: "Strategy and tactics for life and leadership"
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            cover: "https://images-na.ssl-images-amazon.com/images/I/71f1bP3H6BL._AC_UL600_SR600,600_.jpg",
            quote: "A brief history of humankind"
        },
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51E2055ZGUL._AC_UL600_SR600,600_.jpg",
            quote: "Writing code that matters"
        }
        // Add more books here
    ],

    // Games I Love
    games: [
        {
            title: "Need for Speed: Most Wanted (2005)",
            platform: "PC/Console",
            genre: "Racing",
            cover: "https://upload.wikimedia.org/wikipedia/en/3/3d/NFSMostWantedBox.jpg",
            description: "The ultimate street racing experience"
        },
        {
            title: "Far Cry Series",
            platform: "PC/Console",
            genre: "FPS/Adventure",
            cover: "https://upload.wikimedia.org/wikipedia/en/4/44/Far_Cry_3_PAL_box_art.jpg",
            description: "Open-world action adventure"
        },
        {
            title: "God of War",
            platform: "PlayStation",
            genre: "Action/Adventure",
            cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
            description: "Epic Norse mythology adventure"
        },
        {
            title: "The Witcher 3",
            platform: "PC/Console",
            genre: "RPG",
            cover: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
            description: "Immersive fantasy RPG"
        }
        // Add more games here
    ],

    // Skills
    skills: {
        languages: ["Python", "JavaScript", "Java", "C++"],
        frameworks: ["React", "Node.js", "TensorFlow", "Django"],
        tools: ["Git", "Docker", "AWS", "MongoDB"],
        interests: ["AI/ML", "Cloud Computing", "System Design", "Web Development"]
    }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
