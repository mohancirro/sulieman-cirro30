// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// CS/IT Articles Data
const articles = [
    {
        title: "The Future of AI in Web Development",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Exploring how artificial intelligence is revolutionizing web development and user experience.",
        category: "AI"
    },
    {
        title: "Cybersecurity Trends 2024",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        description: "Latest trends and threats in cybersecurity that every developer should know.",
        category: "Security"
    },
    {
        title: "Cloud Computing Best Practices",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
        description: "Essential strategies for effective cloud infrastructure management.",
        category: "Cloud"
    },
    {
        title: "Progressive Web Apps: The Next Generation",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80",
        description: "How PWAs are changing mobile and web application development.",
        category: "Web"
    }
];

// Projects Data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with payment integration and admin dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tags: ["Web", "React", "Node.js"],
        link: "https://mohancirro.github.io/mohamedabas6-167/",
        category: "web"
    },
    {
        title: "AI Chatbot Assistant",
        description: "Intelligent chatbot using natural language processing for customer support.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1211&q=80",
        tags: ["AI", "Python", "NLP"],
        link: "https://mohancirro.github.io/mohamedabas6-167/",
        category: "ai"
    },
    {
        title: "Mobile Health App",
        description: "Health tracking application with real-time monitoring and analytics.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tags: ["Mobile", "React Native", "Firebase"],
        link: "https://mohancirro.github.io/mohamedabas6-167/",
        category: "mobile"
    },
    {
        title: "University Management System",
        description: "Complete system for managing university operations and student data.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tags: ["Web", "MongoDB", "Express"],
        link: "https://mohancirro.github.io/mohamedabas6-167/",
        category: "web"
    },
    {
        title: "Machine Learning Model",
        description: "Predictive analytics model for business forecasting and decision making.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tags: ["AI", "TensorFlow", "Python"],
        link: "https://mohancirro.github.io/mohamedabas6-167/",
        category: "ai"
    },
    {
        title: "Social Media Dashboard",
        description: "Comprehensive dashboard for managing multiple social media accounts.",
        image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
        tags: ["Web", "API", "JavaScript"],
        link: "https://mohancirro.github.io/mohamedabas6-167/",
        category: "web"
    }
];

// Load Articles
function loadArticles() {
    const articlesGrid = document.getElementById('articles-grid');
    articlesGrid.innerHTML = '';
    
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <span class="tag">${article.category}</span>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
            </div>
        `;
        articlesGrid.appendChild(articleCard);
    });
}

// Load Projects
function loadProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">
                    View Project <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Load filtered projects
        const filter = this.getAttribute('data-filter');
        loadProjects(filter);
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Skills Animation on Scroll
const skillBars = document.querySelectorAll('.skill-level');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.width;
        }
    });
}, observerOptions);

skillBars.forEach(bar => observer.observe(bar));

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    loadProjects();
    
    // Add animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add some cool hover effects
document.querySelectorAll('.project-card, .article-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeBackground = document.querySelector('.home-background');
    if (homeBackground) {
        homeBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add floating elements for visual effect
function createFloatingElements() {
    const colors = ['#2563eb', '#7c3aed', '#3b82f6', '#8b5cf6'];
    
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.cssText = `
            position: absolute;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            opacity: ${Math.random() * 0.3 + 0.1};
            border-radius: 50%;
            top: ${Math.random() * 100}vh;
            left: ${Math.random() * 100}vw;
            animation: float ${Math.random() * 20 + 10}s infinite ease-in-out;
            z-index: -1;
        `;
        document.body.appendChild(element);
    }
}

// Add floating animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg); }
        66% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg); }
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    .timeline-item {
        opacity: 0;
        animation: fadeInUp 0.5s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Create floating elements
createFloatingElements();