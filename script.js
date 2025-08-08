// Loading Screen Animation
let progress = 0;
const loadingPercentage = document.getElementById('loadingPercentage');
const loadingProgress = document.getElementById('loadingProgress');
const loadingScreen = document.getElementById('loadingScreen');
const loadingInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;

    loadingPercentage.textContent = Math.floor(progress) + '%';
    loadingProgress.style.width = progress + '%';

    if (progress >= 100) {
        clearInterval(loadingInterval);
        setTimeout(() => {
            loadingScreen.classList.add('hide');
        }, 500);
    }
}, 100);

// Custom Cursor
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
function updateCursor() {
    cursor.style.left = mouseX - 10 + 'px';
    cursor.style.top = mouseY - 10 + 'px';
    requestAnimationFrame(updateCursor);
}
updateCursor();

// Cursor hover effect
const hoverElements = document.querySelectorAll('a, button, .skill-category');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);
document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.querySelector('.floating-shapes').style.transform = `translateY(${rate}px)`;
});

// Hide loading screen after content loads
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!loadingScreen.classList.contains('hide')) {
            loadingScreen.classList.add('hide');
        }
    }, 2000);
});