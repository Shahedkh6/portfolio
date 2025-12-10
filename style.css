/* --- CSS Variables (Dark Green & Off-White Palette) --- */
:root {
    /* Main Colors */
    --primary-green: #06402B;     /* The specific Dark Green requested */
    --accent-gold: #C8A951;       /* A Matte Gold for the 'K' to contrast Green */
    
    /* Backgrounds */
    --bg-off-white: #FAF9F6;      /* Warm Off-White for main background */
    --bg-secondary: #EBECE8;      /* Slightly darker grey-green for sections */
    --white: #ffffff;             /* Pure white for cards */
    
    /* Text */
    --text-dark: #1A2620;         /* Very dark green-black for text */
    --text-light: #6A7A70;        /* Muted green-grey for subtitles */
    
    /* UI Elements */
    --shadow: 0 10px 30px rgba(6, 64, 43, 0.08); /* Greenish shadow */
    --transition: all 0.3s ease;
}

/* --- Global Reset --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
    background-color: var(--bg-off-white);
    overflow-x: hidden;
}

h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    color: var(--primary-green);
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 80px 0;
}

/* Utility Classes for Backgrounds */
.bg-secondary { background-color: var(--bg-secondary); }
.bg-dark { background-color: var(--primary-green); color: var(--bg-off-white); }
.text-white { color: var(--bg-off-white); }

/* Highlighting Logic */
.highlight { 
    color: var(--accent-gold); 
}

/* --- Buttons --- */
.btn-primary, .btn-secondary {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 600;
    transition: var(--transition);
    cursor: pointer;
}

/* Primary Button: Dark Green */
.btn-primary {
    background-color: var(--primary-green);
    color: var(--white);
    border: 2px solid var(--primary-green);
}

/* In the dark footer/contact section, we need to invert the button */
#contact .btn-primary {
    background-color: var(--accent-gold);
    border-color: var(--accent-gold);
    color: var(--primary-green);
}

.btn-primary:hover {
    background-color: transparent;
    color: var(--primary-green);
}

#contact .btn-primary:hover {
    background-color: transparent;
    color: var(--white);
    border-color: var(--white);
}

/* Secondary Button: Outline */
.btn-secondary {
    background-color: transparent;
    border: 2px solid var(--primary-green);
    color: var(--primary-green);
    margin-left: 10px;
}

.btn-secondary:hover {
    background-color: var(--primary-green);
    color: var(--white);
}

/* --- Navbar --- */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(250, 249, 246, 0.95); /* Off-white glass effect */
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    padding: 15px 0;
}

.nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* LOGO STYLING */
.logo {
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: var(--primary-green); /* Sh. is Green */
}

.nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-links a {
    font-weight: 500;
    color: var(--text-dark);
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--accent-gold);
}

.hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary-green);
}

/* --- Hero Section --- */
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    /* Subtle gradient for off-white theme */
    background: linear-gradient(135deg, var(--bg-off-white) 0%, #E8EBE9 100%);
}

.hero-content {
    z-index: 2;
    max-width: 700px;
}

.hero-section h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 20px;
    color: var(--primary-green);
}

.tagline {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: var(--text-light);
}

/* --- Section Titles --- */
.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    position: relative;
    color: var(--primary-green);
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-gold);
    margin: 10px auto 0;
    border-radius: 2px;
}

/* In Dark sections, title needs to be white/gold */
.bg-dark .section-title {
    color: var(--white);
}

/* --- About Section --- */
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.badge {
    background: rgba(6, 64, 43, 0.08); /* Very light green */
    color: var(--primary-green);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid rgba(6, 64, 43, 0.1);
}

/* --- Projects Section --- */
.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.card {
    background: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 1px solid rgba(0,0,0,0.03);
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(6, 64, 43, 0.15);
}

.card-image {
    height: 200px;
    background-color: #F0F2F1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-icon {
    font-size: 4rem;
    color: var(--primary-green);
    opacity: 0.4;
}

.card-content {
    padding: 25px;
}

.card-content h3 {
    margin-bottom: 10px;
    font-size: 1.25rem;
    color: var(--primary-green);
}

.card-content p {
    font-size: 0.95rem;
    color: var(--text-light);
    margin-bottom: 20px;
}

.tags span {
    font-size: 0.8rem;
    background: var(--bg-off-white);
    padding: 4px 10px;
    border-radius: 4px;
    margin-right: 5px;
    color: var(--primary-green);
    border: 1px solid #ddd;
}

/* --- Volunteering --- */
.vol-grid {
    display: grid;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.vol-card {
    display: flex;
    align-items: flex-start;
    background: var(--white);
    padding: 20px;
    border-radius: 12px;
    box-shadow: var(--shadow);
    border-left: 5px solid var(--accent-gold); /* Gold accent for vol cards */
}

.vol-icon {
    background: #F4F6F5;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-green);
    margin-right: 20px;
    flex-shrink: 0;
}

/* --- Contact Section --- */
.contact-container {
    max-width: 600px;
    text-align: center;
}

.contact-subtitle {
    color: #cbd5d0;
    margin-bottom: 40px;
}

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    border: none;
    border-radius: 8px;
    font-family: inherit;
    background: rgba(255, 255, 255, 0.1);
    color: var(--white);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-form input::placeholder, .contact-form textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.contact-form input:focus, .contact-form textarea:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: var(--accent-gold);
}

.full-width {
    width: 100%;
}

.social-links {
    margin-top: 40px;
}

.social-links a {
    color: var(--white);
    font-size: 1.5rem;
    margin: 0 15px;
    transition: var(--transition);
}

.social-links a:hover {
    color: var(--accent-gold);
}

/* --- Footer --- */
footer {
    background: #04291b; /* Slightly darker than primary green */
    color: #889990;
    text-align: center;
    padding: 20px 0;
    font-size: 0.9rem;
}

/* --- Animations --- */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

/* --- Mobile Responsiveness --- */
@media (max-width: 768px) {
    .hero-section h1 { font-size: 2.5rem; }
    .nav-links {
        display: none;
        position: absolute;
        top: 60px;
        right: 0;
        background: var(--bg-off-white);
        width: 100%;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    }
    
    .nav-links.active { display: flex; }
    
    .hamburger { display: block; }
    
    .about-grid { grid-template-columns: 1fr; }
}
