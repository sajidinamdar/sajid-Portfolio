const About = () => {
    return (
        <section id="about" className="about-section" aria-labelledby="about-heading">
            <div className="container">
                <h2 id="about-heading" className="about-heading">About Me</h2>

                <div className="about-layout">
                    <div className="about-content-card">
                        <div className="accent-bar"></div>
                        <div className="content-text">
                            <p className="about-paragraph intro">
                                Hello! I'm <strong className="highlight">Sajid Inamdar</strong>, a passionate cybersecurity enthusiast and Python developer.
                                My journey into tech began with a simple curiosity: <em>how do systems break?</em> This question led me down a path of discovery,
                                learning not just how to exploit vulnerabilities, but more importantly, how to secure them.
                            </p>

                            <p className="about-paragraph">
                                I specialize in <strong className="highlight">Ethical Hacking</strong>, <strong className="highlight">Network Security</strong>,
                                and <strong className="highlight">Backend Development</strong>. My technical toolkit includes building secure APIs
                                with <strong className="highlight">FastAPI</strong>, automating security workflows with <strong className="highlight">Python</strong>,
                                and conducting penetration testing using <strong className="highlight">Kali Linux</strong>.
                            </p>

                            <p className="about-paragraph">
                                When I'm not coding or hacking ethically, you'll find me solving <strong className="highlight">CTF challenges</strong> on TryHackMe,
                                exploring the latest <strong className="highlight">vulnerability disclosures</strong>, or contributing to open-source security projects.
                            </p>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div className="stat-info">
                                <h3>TryHackMe</h3>
                                <p>Top 5% Global Rank</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fab fa-github"></i>
                            </div>
                            <div className="stat-info">
                                <h3>GitHub</h3>
                                <p>15+ Projects</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="stat-info">
                                <h3>Skills</h3>
                                <p>Full Stack Security</p>
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
                    transition: all 0.3s ease;
                }

                .stat-card:hover {
                    background: rgba(30, 41, 59, 0.3);
                    border-color: rgba(0, 243, 255, 0.2);
                    transform: translateX(4px);
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
