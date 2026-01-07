import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', id: 'home', path: '/', isRoute: false },
        { name: 'About', id: 'about', path: '/about', isRoute: true },
        { name: 'Skills', id: 'skills', path: '#skills', isRoute: false },
        { name: 'Certifications', id: 'certifications', path: '#certifications', isRoute: false },
        { name: 'Projects', id: 'projects', path: '/projects', isRoute: true },
        { name: 'Blogs', id: 'blogs', path: '/blogs', isRoute: true },
        { name: 'Contact', id: 'contact', path: '#contact', isRoute: false }
    ];

    // Handle scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 72;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
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
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    href={link.path}
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (location.pathname !== '/') {
                                            window.location.href = `/${link.path}`;
                                        } else {
                                            scrollToSection(link.id);
                                        }
                                    }}
                                    aria-current={activeSection === link.id ? 'page' : undefined}
                                >
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Follow Me Button */}
                <a
                    href="https://www.youtube.com/@sajid-inamdar"
                    target="_blank"
                    rel="noreferrer"
                    className="hire-btn"
                    aria-label="Follow me on YouTube"
                >
                    Follow Me
                </a>

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
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    href={link.path}
                                    className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (location.pathname !== '/') {
                                            window.location.href = `/${link.path}`;
                                        } else {
                                            scrollToSection(link.id);
                                        }
                                        setIsOpen(false);
                                    }}
                                    aria-current={activeSection === link.id ? 'page' : undefined}
                                >
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://www.youtube.com/@sajid-inamdar"
                            target="_blank"
                            rel="noreferrer"
                            className="mobile-hire-btn"
                        >
                            Follow Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
