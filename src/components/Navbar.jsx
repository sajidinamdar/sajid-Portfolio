import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Certifications', id: 'certifications' },
        { name: 'Projects', id: 'projects' },
        { name: 'Blogs', id: 'blogs' },
        { name: 'Contact', id: 'contact' }
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

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled
            setScrolled(window.scrollY > 20);

            // Determine active section
            const sections = navLinks.map(link => link.id);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo" onClick={() => scrollToSection('home')}>
                    <span className="logo-text">Sajid Inamdar</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.id);
                                }}
                                aria-current={activeSection === link.id ? 'page' : undefined}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hire Me Button */}
                <a
                    href="https://www.linkedin.com/in/inamdarsajid"
                    target="_blank"
                    rel="noreferrer"
                    className="hire-btn"
                    aria-label="Contact me to hire"
                >
                    Hire Me
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
                            <a
                                href={`#${link.id}`}
                                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.id);
                                }}
                                aria-current={activeSection === link.id ? 'page' : undefined}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://www.linkedin.com/in/inamdarsajid"
                            target="_blank"
                            rel="noreferrer"
                            className="mobile-hire-btn"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
