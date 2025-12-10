// 1. Set Copyright Year Automatically
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Mobile Navigation Toggle logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 3. Scroll Reveal Animation
const observerOptions = {
    threshold: 0.2 // Trigger when 20% of element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe all elements with class 'fade-in'
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
