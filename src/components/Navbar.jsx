import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showSocialModal, setShowSocialModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const socialAccounts = [
        {
            name: 'YouTube',
            icon: 'fab fa-youtube',
            url: 'https://www.youtube.com/@sajidinamdar',
            color: '#FF0000'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/in/sajidinamdar-sec/',
            color: '#0077b5'
        },
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com/sajidinamdar',
            color: '#181717'
        },
        {
            name: 'Medium',
            icon: 'fab fa-medium',
            url: 'https://medium.com/@sajidinamdar',
            color: '#000000'
        },
        {
            name: 'Dev.to',
            icon: 'fab fa-dev',
            url: 'https://dev.to/sajidinamdar',
            color: '#0A0A0A'
        },
        {
            name: 'TryHackMe',
            icon: 'fas fa-flag',
            url: 'https://tryhackme.com/p/Sajidinamdar',
            color: '#C51C2C'
        },
        {
            name: 'Instagram',
            icon: 'fab fa-instagram',
            url: 'https://www.instagram.com/sajidinamdar_',
            color: '#E4405F'
        }
    ];

    const navLinks = [
        { name: 'Home', id: 'home', path: '/', isRoute: false, icon: 'fas fa-home' },
        { name: 'About', id: 'about', path: '/about', isRoute: true, icon: 'fas fa-user' },
        { name: 'Skills', id: 'skills', path: '#skills', isRoute: false, icon: 'fas fa-code' },
        { name: 'Certifications', id: 'certifications', path: '#certifications', isRoute: false, icon: 'fas fa-certificate' },
        { name: 'Projects', id: 'projects', path: '/projects', isRoute: true, icon: 'fas fa-briefcase' },
        { name: 'Blogs', id: 'blogs', path: '/blogs', isRoute: true, icon: 'fas fa-blog' },
        { name: 'Contact', id: 'contact', path: '#contact', isRoute: false, icon: 'fas fa-envelope' }
    ];

    // Handle scroll to section
    const scrollToSection = (sectionId) => {
        // If not on home page, navigate first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation and DOM update, then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const navHeight = 72;
                    const elementPosition = element.offsetTop - navHeight;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            }, 150);
        } else {
            // Already on home page, just scroll
            const element = document.getElementById(sectionId);
            if (element) {
                const navHeight = 72;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
        setIsOpen(false);
    };

    // Track active section based on route or scroll
    useEffect(() => {
        // Set active section based on current route
        const currentPath = location.pathname;
        const currentLink = navLinks.find(link => link.path === currentPath);
        if (currentLink) {
            setActiveSection(currentLink.id);
        } else if (currentPath === '/') {
            setActiveSection('home');
        }

        const handleScroll = () => {
            // Check if scrolled
            setScrolled(window.scrollY > 20);

            // Calculate scroll progress
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
            setScrollProgress(Math.min(progress, 100));

            // Only determine active section if we're on the home page
            if (location.pathname === '/') {
                const sections = navLinks.map(link => link.id);
                const scrollPosition = window.scrollY + 100;

                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sections[i]);
                    if (section && section.offsetTop <= scrollPosition) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

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
                <div className="nav-container">
                    {/* Logo */}
                    <Link to="/" className="nav-logo" onClick={() => {
                        if (location.pathname === '/') {
                            scrollToSection('home');
                        }
                    }}>
                        <span className="logo-text">Sajid Inamdar</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                {link.isRoute ? (
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={activeSection === link.id ? 'page' : undefined}
                                    >
                                        <i className={link.icon}></i>
                                        <span>{link.name}</span>
                                    </Link>
                                ) : (
                                    <a
                                        href={link.path}
                                        className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.id);
                                        }}
                                        aria-current={activeSection === link.id ? 'page' : undefined}
                                    >
                                        <i className={link.icon}></i>
                                        <span>{link.name}</span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Follow Me Button */}
                    <button
                        onClick={() => setShowSocialModal(true)}
                        className="hire-btn"
                        aria-label="Follow me on social media"
                    >
                        Follow Me
                    </button>

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
                                {link.isRoute ? (
                                    <Link
                                        to={link.path}
                                        className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={activeSection === link.id ? 'page' : undefined}
                                    >
                                        <i className={link.icon}></i>
                                        <span>{link.name}</span>
                                    </Link>
                                ) : (
                                    <a
                                        href={link.path}
                                        className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.id);
                                        }}
                                        aria-current={activeSection === link.id ? 'page' : undefined}
                                    >
                                        <i className={link.icon}></i>
                                        <span>{link.name}</span>
                                    </a>
                                )}
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => {
                                    setShowSocialModal(true);
                                    setIsOpen(false);
                                }}
                                className="mobile-hire-btn"
                            >
                                Follow Me
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Social Accounts Modal */}
            {showSocialModal && (
                <div
                    className="social-modal-overlay"
                    onClick={() => setShowSocialModal(false)}
                >
                    <div
                        className="social-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="social-modal-header">
                            <h2>Follow Me</h2>
                            <button
                                className="social-modal-close"
                                onClick={() => setShowSocialModal(false)}
                                aria-label="Close modal"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <p className="social-modal-subtitle">Connect with me on social media</p>
                        <div className="social-modal-grid">
                            {socialAccounts.map((account, index) => (
                                <a
                                    key={index}
                                    href={account.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-modal-item"
                                    style={{ '--social-color': account.color }}
                                    onClick={() => setShowSocialModal(false)}
                                >
                                    <div className="social-modal-icon">
                                        <i className={account.icon}></i>
                                    </div>
                                    <span className="social-modal-name">{account.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
            .social-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(8px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                padding: 20px;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .social-modal-content {
                background: rgba(15, 23, 42, 0.95);
                border: 1px solid rgba(0, 243, 255, 0.2);
                border-radius: 24px;
                padding: 40px;
                max-width: 600px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0, 243, 255, 0.2);
                animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                position: relative;
                scrollbar-width: none; /* Firefox */
                -ms-overflow-style: none;  /* IE and Edge */
            }

            .social-modal-content::-webkit-scrollbar {
                display: none;
            }

            @keyframes slideUp {
                from {
                    transform: translateY(30px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .social-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
            }

            .social-modal-header h2 {
                font-size: 2rem;
                font-weight: 700;
                background: linear-gradient(135deg, var(--neon-cyan), var(--accent));
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                margin: 0;
            }

            .social-modal-close {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: #fff;
                font-size: 1.2rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }

            .social-modal-close:hover {
                background: var(--neon-cyan);
                color: #000;
                transform: rotate(90deg);
                border-color: var(--neon-cyan);
            }

            .social-modal-subtitle {
                color: var(--text-secondary);
                font-size: 1rem;
                margin-bottom: 32px;
                text-align: center;
            }

            .social-modal-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 16px;
            }

            .social-modal-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                padding: 24px 16px;
                background: rgba(30, 41, 59, 0.4);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 16px;
                text-decoration: none;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: pointer;
                position: relative;
                overflow: hidden;
            }

            .social-modal-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, var(--social-color), transparent);
                opacity: 0;
                transition: opacity 0.4s ease;
            }

            .social-modal-item:hover::before {
                opacity: 0.1;
            }

            .social-modal-item:hover {
                transform: translateY(-8px) scale(1.05);
                border-color: var(--social-color);
                background: rgba(30, 41, 59, 0.6);
                box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
            }

            .social-modal-icon {
                width: 56px;
                height: 56px;
                border-radius: 14px;
                background: rgba(255, 255, 255, 0.05);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8rem;
                color: var(--social-color);
                transition: all 0.4s ease;
                position: relative;
                z-index: 1;
            }

            .social-modal-item:hover .social-modal-icon {
                background: var(--social-color);
                color: #fff;
                transform: scale(1.1) rotate(5deg);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            }

            .social-modal-name {
                font-size: 0.95rem;
                font-weight: 600;
                color: #fff;
                transition: color 0.3s ease;
                position: relative;
                z-index: 1;
            }

            .social-modal-item:hover .social-modal-name {
                color: var(--social-color);
            }

            @media (max-width: 640px) {
                .social-modal-content {
                    padding: 24px;
                    max-width: 100%;
                }

                .social-modal-header h2 {
                    font-size: 1.5rem;
                }

                .social-modal-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                }

                .social-modal-item {
                    padding: 20px 12px;
                }

                .social-modal-icon {
                    width: 48px;
                    height: 48px;
                    font-size: 1.5rem;
                }
            }
        `}</style>
        </>
    );
};

export default Navbar;
