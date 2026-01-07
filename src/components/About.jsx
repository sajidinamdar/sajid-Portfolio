import { useEffect, useState, useRef } from 'react';

// Counter animation hook
const useCounter = (target, duration = 2000, isVisible) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [target, duration, isVisible]);

    return count;
};

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    const tryhackmeCount = useCounter(5, 1500, isVisible);
    const githubCount = useCounter(15, 1500, isVisible);
    const skillsCount = useCounter(12, 1500, isVisible);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="about" className="about-section" aria-labelledby="about-heading" ref={sectionRef}>
            <div className="container">
                <h2 id="about-heading" className="about-heading">About Me</h2>

                <div className="about-layout">
                    <div className="about-content-card">
                        <div className="accent-bar"></div>
                        <div className="content-text">
                            <p className="about-paragraph intro">
                                My name is <strong className="highlight">Sajid Inamdar</strong>. I am a <strong className="highlight">Cybersecurity Student and Python Developer from Sangamner, Maharashtra, India</strong>.
                                I am passionate about ethical hacking, network security, and secure backend & API development.
                            </p>

                            <p className="about-paragraph">
                                I am currently a BCA student and I actively practice cybersecurity through platforms like
                                <strong className="highlight"> TryHackMe</strong>, hands-on labs, and real-world security projects.
                                My goal is to become a professional ethical hacker and cybersecurity analyst.
                            </p>

                            <p className="about-paragraph">
                                I have experience working with <strong className="highlight">Python, Linux, networking</strong>, penetration testing tools,
                                and web security testing. I enjoy learning new technologies and applying them to solve real cybersecurity problems.
                            </p>

                            <p className="about-paragraph">
                                This website is my <strong className="highlight">official portfolio</strong> where I showcase my projects, certifications, blogs, and technical skills.
                            </p>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className={`stat-card ${isVisible ? 'animate-stat' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <div className="stat-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div className="stat-info">
                                <h3>TryHackMe</h3>
                                <p className="stat-number">{tryhackmeCount}</p>
                                <p className="stat-label">Top % Global Rank</p>
                            </div>
                        </div>

                        <div className={`stat-card ${isVisible ? 'animate-stat' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div className="stat-icon">
                                <i className="fab fa-github"></i>
                            </div>
                            <div className="stat-info">
                                <h3>GitHub</h3>
                                <p className="stat-number">{githubCount}+</p>
                                <p className="stat-label">Projects</p>
                            </div>
                        </div>

                        <div className={`stat-card ${isVisible ? 'animate-stat' : ''}`} style={{ animationDelay: '0.3s' }}>
                            <div className="stat-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="stat-info">
                                <h3>Skills</h3>
                                <p className="stat-number">{skillsCount}+</p>
                                <p className="stat-label">Technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-section {
                    padding: var(--section-padding) 0;
                }

                .about-heading {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 48px;
                    letter-spacing: -0.5px;
                    text-align: center;
                }

                .about-layout {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 48px;
                    align-items: start;
                }

                /* Content Card with Left Accent */
                .about-content-card {
                    display: flex;
                    gap: 24px;
                    background: rgba(30, 41, 59, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    padding: 0;
                    overflow: hidden;
                }

                .accent-bar {
                    width: 6px;
                    background: linear-gradient(180deg, var(--neon-cyan), var(--accent));
                    flex-shrink: 0;
                    box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
                }

                .content-text {
                    padding: 32px 32px 32px 0;
                }

                .about-paragraph {
                    font-size: 1.05rem;
                    line-height: 1.75;
                    color: var(--text-secondary);
                    margin-bottom: 20px;
                }

                .about-paragraph.intro {
                    font-size: 1.1rem;
                }

                .about-paragraph:last-child {
                    margin-bottom: 0;
                }

                .about-paragraph em {
                    font-style: italic;
                    color: rgba(255, 255, 255, 0.85);
                }

                .highlight {
                    color: var(--neon-cyan);
                    font-weight: 600;
                }

                /* Stats Cards */
                .about-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .stat-card {
                    background: rgba(30, 41, 59, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    opacity: 0;
                    transform: translateY(20px);
                }

                .stat-card.animate-stat {
                    animation: slideUpFade 0.6s ease forwards;
                }

                @keyframes slideUpFade {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .stat-card:hover {
                    background: rgba(30, 41, 59, 0.4);
                    border-color: rgba(0, 243, 255, 0.3);
                    transform: translateX(4px) translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 243, 255, 0.15);
                }

                .stat-icon {
                    width: 48px;
                    height: 48px;
                    background: rgba(0, 243, 255, 0.1);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--neon-cyan);
                    font-size: 1.5rem;
                    flex-shrink: 0;
                }

                .stat-info h3 {
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 600;
                    margin: 0 0 4px 0;
                }

                .stat-info p {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin: 0;
                }

                .stat-number {
                    font-size: 1.8rem !important;
                    font-weight: 700 !important;
                    color: var(--neon-cyan) !important;
                    margin: 4px 0 !important;
                    background: linear-gradient(135deg, var(--neon-cyan), var(--accent));
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .stat-label {
                    font-size: 0.75rem !important;
                    color: var(--text-secondary) !important;
                    margin-top: 2px !important;
                }

                /* Responsive */
                @media (max-width: 968px) {
                    .about-heading {
                        font-size: 2.25rem;
                        margin-bottom: 10px; /* Reduced from 32px */
                    }

                    .about-layout {
                        grid-template-columns: 1fr;
                        gap: 20px; /* Reduced from 32px */
                    }

                    .about-content-card {
                        flex-direction: column;
                    }

                    .accent-bar {
                        width: 100%;
                        height: 4px;
                    }

                    .content-text {
                        padding: var(--spacing-sm); /* More compact padding */
                    }

                    .about-paragraph {
                        font-size: 1rem;
                        margin-bottom: 12px;
                    }

                    .about-paragraph.intro {
                        font-size: 1.05rem;
                    }

                    .about-stats {
                        flex-direction: row;
                        gap: 12px;
                    }

                    .stat-card {
                        flex: 1;
                        flex-direction: column;
                        text-align: center;
                        padding: 12px;
                    }

                    .stat-icon {
                        width: 44px;
                        height: 44px;
                        font-size: 1.3rem;
                    }
                }

                @media (max-width: 640px) {
                    .about-heading {
                        font-size: 2rem;
                    }

                    .about-stats {
                        flex-direction: column;
                    }

                    .stat-card {
                        flex-direction: row;
                        text-align: left;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
