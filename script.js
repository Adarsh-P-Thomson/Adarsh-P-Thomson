// ============================================
// PORTFOLIO JAVASCRIPT - Interactive Features
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    // Load data into pages
    loadPersonalData();
    loadSkills();
    loadBooksAndGames();
    loadProjects();
    loadCertificates();
    loadFreelance();
    
    // Initialize animations and interactions
    initializeNavigation();
    initializeTypingEffect();
    initializeHyperspaceTransition();
    initializeKratosAxe();
    initializeScrollAnimations();
}

// ============================================
// DATA LOADING FUNCTIONS
// ============================================

function loadPersonalData() {
    if (typeof portfolioData === 'undefined') return;
    
    const { personal } = portfolioData;
    
    // Update profile image
    const profileImage = document.getElementById('profile-image');
    if (profileImage) {
        profileImage.src = personal.profileImage;
        profileImage.alt = personal.name;
    }
    
    // Update bio text
    const bioText1 = document.getElementById('bio-text-1');
    const bioText2 = document.getElementById('bio-text-2');
    if (bioText1) bioText1.textContent = personal.bio;
    if (bioText2) bioText2.textContent = personal.bio2;
    
    // Update contact links
    const linkedinLink = document.getElementById('linkedin-link');
    const githubLink = document.getElementById('github-link');
    const emailLink = document.getElementById('email-link');
    
    if (linkedinLink) linkedinLink.href = personal.linkedin;
    if (githubLink) githubLink.href = personal.github;
    if (emailLink) emailLink.href = `mailto:${personal.email}`;
}

function loadSkills() {
    if (typeof portfolioData === 'undefined') return;
    
    const { skills } = portfolioData;
    
    // Load languages
    const languagesList = document.getElementById('languages-list');
    if (languagesList && skills.languages) {
        languagesList.innerHTML = skills.languages
            .map(lang => `<span class="skill-item">${lang}</span>`)
            .join('');
    }
    
    // Load frameworks
    const frameworksList = document.getElementById('frameworks-list');
    if (frameworksList && skills.frameworks) {
        frameworksList.innerHTML = skills.frameworks
            .map(fw => `<span class="skill-item">${fw}</span>`)
            .join('');
    }
    
    // Load tools
    const toolsList = document.getElementById('tools-list');
    if (toolsList && skills.tools) {
        toolsList.innerHTML = skills.tools
            .map(tool => `<span class="skill-item">${tool}</span>`)
            .join('');
    }
    
    // Load interests
    const interestsList = document.getElementById('interests-list');
    if (interestsList && skills.interests) {
        interestsList.innerHTML = skills.interests
            .map(interest => `<span class="skill-item">${interest}</span>`)
            .join('');
    }
}

function loadBooksAndGames() {
    if (typeof portfolioData === 'undefined') return;
    
    const { books, games } = portfolioData;
    
    // Load books
    const booksGrid = document.getElementById('books-grid');
    if (booksGrid && books) {
        booksGrid.innerHTML = books.map(book => `
            <div class="book-card">
                <img src="${book.cover}" alt="${book.title}" class="book-cover" 
                     onerror="this.src='https://via.placeholder.com/200x280/0f3460/00d4ff?text=${encodeURIComponent(book.title)}'">
                <div class="book-info">
                    <h4>${book.title}</h4>
                    <p class="author">${book.author}</p>
                    <p class="quote">"${book.quote}"</p>
                </div>
            </div>
        `).join('');
    }
    
    // Load games
    const gamesGrid = document.getElementById('games-grid');
    if (gamesGrid && games) {
        gamesGrid.innerHTML = games.map(game => `
            <div class="game-card">
                <img src="${game.cover}" alt="${game.title}" class="game-cover"
                     onerror="this.src='https://via.placeholder.com/200x280/1a1a2e/00ff41?text=${encodeURIComponent(game.title)}'">
                <div class="game-info">
                    <h4>${game.title}</h4>
                    <p class="platform">${game.platform}</p>
                    <span class="genre">${game.genre}</span>
                    <p class="description">${game.description}</p>
                </div>
            </div>
        `).join('');
    }
}

function loadProjects() {
    if (typeof portfolioData === 'undefined') return;
    
    const { projects } = portfolioData;
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projectsGrid && projects) {
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p class="description">${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                ${project.link !== '#' ? 
                    `<a href="${project.link}" class="project-link" target="_blank">
                        View Project <i class="fas fa-external-link-alt"></i>
                    </a>` : 
                    '<span class="text-gray">Coming Soon</span>'
                }
            </div>
        `).join('');
    }
}

function loadCertificates() {
    if (typeof portfolioData === 'undefined') return;
    
    const { certificates } = portfolioData;
    const certificatesGrid = document.getElementById('certificates-grid');
    
    if (certificatesGrid && certificates) {
        certificatesGrid.innerHTML = certificates.map(cert => `
            <div class="certificate-card">
                <h3>${cert.title}</h3>
                <p class="issuer">${cert.issuer}</p>
                <p class="certificate-date">${cert.date}</p>
                ${cert.link !== '#' ? 
                    `<a href="${cert.link}" class="certificate-link" target="_blank">
                        View Certificate <i class="fas fa-award"></i>
                    </a>` : 
                    '<span class="text-gray">Certificate Available</span>'
                }
            </div>
        `).join('');
    }
}

function loadFreelance() {
    if (typeof portfolioData === 'undefined') return;
    
    const { freelanceWork } = portfolioData;
    const freelanceGrid = document.getElementById('freelance-grid');
    
    if (freelanceGrid && freelanceWork) {
        freelanceGrid.innerHTML = freelanceWork.map(work => `
            <div class="freelance-card">
                <h3>${work.title}</h3>
                <p class="freelance-client">Client: ${work.client}</p>
                <p class="freelance-duration">Duration: ${work.duration}</p>
                <p class="description">${work.description}</p>
                <div class="tech-stack">
                    ${work.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `).join('');
    }
}

// ============================================
// NAVIGATION
// ============================================

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// TYPING EFFECT
// ============================================

function initializeTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement || typeof portfolioData === 'undefined') return;
    
    const texts = [
        'Computer Science Student',
        'Problem Solver',
        'Full-Stack Developer',
        'AI Enthusiast',
        'System Architect',
        'Innovation Driver'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before new text
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// ============================================
// HYPERSPACE TRANSITION
// ============================================

function initializeHyperspaceTransition() {
    const hyperspaceLinks = document.querySelectorAll('.hyperspace-link');
    const overlay = document.getElementById('hyperspace-overlay');
    
    hyperspaceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            
            // Trigger hyperspace animation
            overlay.classList.add('active');
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1500);
        });
    });
}

// ============================================
// KRATOS AXE ANIMATION
// ============================================

function initializeKratosAxe() {
    const axe = document.getElementById('kratos-axe');
    if (!axe) return;
    
    // Trigger axe throw on page interactions
    let axeTimeout;
    
    function throwAxe() {
        clearTimeout(axeTimeout);
        axe.classList.remove('flying');
        
        // Small delay to reset animation
        setTimeout(() => {
            axe.classList.add('flying');
        }, 100);
        
        // Remove class after animation completes
        setTimeout(() => {
            axe.classList.remove('flying');
        }, 2100);
    }
    
    // Throw axe on scroll (throttled)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (Math.random() > 0.95) { // 5% chance on scroll
                throwAxe();
            }
        }, 200);
    });
    
    // Throw axe when hovering over project cards
    setTimeout(() => {
        const cards = document.querySelectorAll('.project-card, .preview-card, .book-card, .game-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (Math.random() > 0.7) { // 30% chance on hover
                    throwAxe();
                }
            });
        });
    }, 1000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll(`
        .stat-item,
        .skill-category,
        .book-card,
        .game-card,
        .preview-card,
        .project-card,
        .certificate-card,
        .freelance-card
    `);
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || this.classList.contains('hyperspace-link')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add easter eggs
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Trigger multiple axe throws
    const axe = document.getElementById('kratos-axe');
    let count = 0;
    const interval = setInterval(() => {
        axe.classList.add('flying');
        setTimeout(() => {
            axe.classList.remove('flying');
        }, 2100);
        
        count++;
        if (count >= 5) {
            clearInterval(interval);
        }
    }, 500);
    
    // Show message
    console.log('🎮 May the Force be with you, Hero! 🎮');
}

// Console message
console.log('%c🚀 Welcome to the Portfolio! 🚀', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with Star Wars, DC, and Gaming magic ✨', 'color: #e94560; font-size: 14px;');
console.log('%cTry the Konami Code for a surprise! 🎮', 'color: #00ff41; font-size: 12px;');
