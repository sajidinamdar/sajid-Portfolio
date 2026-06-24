import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();


    const navLinks = [
        { name: 'Home', id: 'home', path: '/', icon: 'fas fa-home' },
        { name: 'About', id: 'about', path: '/about', icon: 'fas fa-user' },
        { name: 'Skills', id: 'skills', path: '/skills', icon: 'fas fa-code' },
        { name: 'Certifications', id: 'certifications', path: '/certifications', icon: 'fas fa-certificate' },
        { name: 'Projects', id: 'projects', path: '/projects', icon: 'fas fa-briefcase' },
        { name: 'Blogs', id: 'blogs', path: '/blogs', icon: 'fas fa-blog' },
        { name: 'Contact', id: 'contact', path: '/contact', icon: 'fas fa-envelope' }
    ];

    // Handle scroll to section
    const scrollToSection = (sectionId) => {
        // Find if the link is a route-based link
        const targetLink = navLinks.find(l => l.id === sectionId);

        // Update URL immediately on click
        const newPath = sectionId === 'home' ? '/' : `/${sectionId}`;
        if (window.location.pathname !== newPath) {
            window.history.pushState(null, '', newPath);
            window.dispatchEvent(new Event('sectionChange'));
        }

        // If not on home page or the link is not part of home page, navigate
        if (location.pathname !== '/' && location.pathname !== '/home') {
            navigate(targetLink ? targetLink.path : '/');
        } else {
            // On home page, just scroll to the actual section element
            const element = document.getElementById(sectionId === 'home' ? 'home' : sectionId);
            if (element) {
                const navHeight = 72;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            } else if (targetLink) {
                // Fallback if element not found on home page for some reason
                navigate(targetLink.path);
            }
        }
        setIsOpen(false);
    };

    // Track scroll-dependent UI (scrolled state, progress)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const progress = (documentHeight - windowHeight) > 0
                ? (window.scrollY / (documentHeight - windowHeight)) * 100
                : 0;
            setScrollProgress(Math.min(progress, 100));
        };

        const handleSectionChange = () => {
            const path = window.location.pathname.substring(1) || 'home';
            setActiveSection(path);
        };

        handleScroll();
        handleSectionChange();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('popstate', handleSectionChange);
        window.addEventListener('sectionChange', handleSectionChange);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', handleSectionChange);
            window.removeEventListener('sectionChange', handleSectionChange);
        };
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 968 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isOpen]);

    return (
        <>
            {/* Scroll Progress Indicator */}
            <div
                className="scroll-progress"
                style={{
                    position: 'fixed',
                    top: '72px',
                    left: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--neon-cyan), var(--accent))',
                    width: `${scrollProgress}%`,
                    zIndex: 999,
                    transition: 'width 0.1s ease-out',
                    boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)'
                }}
            />
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
                {/* Animated Glowing Bottom Border */}
                <div className="navbar-glow-border" />

                <div className="nav-container">
                    {/* Cyber Logo */}
                    <Link to="/" className="nav-logo" onClick={() => {
                        if (location.pathname === '/') {
                            scrollToSection('home');
                        }
                    }}>
                        <span className="logo-shield-icon">
                            <i className="fas fa-shield-alt"></i>
                        </span>
                        <span className="logo-text-cyber">
                            <span className="logo-user">sajid</span>
                            <span className="logo-at">@</span>
                            <span className="logo-host">root</span>
                            <span className="logo-colon">:~</span>
                            <span className="logo-hash">#</span>
                            <span className="logo-cursor">_</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(link.id)}
                                    aria-current={activeSection === link.id ? 'page' : undefined}
                                >
                                    <i className={link.icon}></i>
                                    <span>{link.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* System Status Indicator */}
                    <div className="system-status-indicator">
                        <span className="status-dot"></span>
                        <span className="status-text">SECURE_NODE</span>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`hamburger ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    className={`mobile-nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(link.id)}
                                    aria-current={activeSection === link.id ? 'page' : undefined}
                                >
                                    <i className={link.icon}></i>
                                    <span>{link.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile System Status */}
                    <div className="mobile-system-status">
                        <span className="status-dot"></span>
                        <span className="status-text">SECURE_NODE // ONLINE</span>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;
