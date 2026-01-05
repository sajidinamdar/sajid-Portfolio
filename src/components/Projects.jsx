export default function Projects() {
    const projects = [
        {
            title: 'FastAPI Backend Project',
            desc: 'Full-stack backend API built with FastAPI, featuring authentication, database integration, and RESTful endpoints.',
            link: 'https://github.com/sajidinamdar/my-fastapi-project-',
            tech: ['FastAPI', 'Python', 'REST API']
        },
        {
            title: 'Harisetu',
            desc: 'Agricultural technology platform designed to connect farmers with consumers and optimize farm management.',
            link: 'https://github.com/sajidinamdar/Harisetu',
            tech: ['Python', 'Web Development', 'Database']
        },
        {
            title: 'Python Chatbot',
            desc: 'AI-powered chatbot application with natural language processing capabilities for automated conversations.',
            link: 'https://github.com/sajidinamdar/Python-chatbot',
            tech: ['Python', 'NLP', 'AI']
        },
        {
            title: 'File Shortener',
            desc: 'Utility tool for optimizing and managing file path structures in complex directory systems.',
            link: 'https://github.com/sajidinamdar/File-Shortener',
            tech: ['Python', 'File Management', 'Automation']
        },
        {
            title: 'SMTP API Service',
            desc: 'Email service API built with SMTP protocol for sending automated emails and notifications.',
            link: 'https://github.com/sajidinamdar/smtplib-API',
            tech: ['Python', 'SMTP', 'API']
        },
        {
            title: 'FastAPI Authentication',
            desc: 'Complete authentication system with signup and login functionality using FastAPI framework.',
            link: 'https://github.com/sajidinamdar/fastapi_signup',
            tech: ['FastAPI', 'Authentication', 'Security']
        },
        {
            title: 'Weather API',
            desc: 'Weather information service API that fetches and displays real-time weather data.',
            link: 'https://github.com/sajidinamdar/Weather_api',
            tech: ['Python', 'API', 'Weather Data']
        },
        {
            title: 'WebSocket Application',
            desc: 'Real-time communication application using WebSocket protocol for instant data exchange.',
            link: 'https://github.com/sajidinamdar/Websocket',
            tech: ['WebSocket', 'Python', 'Real-time']
        }
    ]

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>

                <div className="project-grid">
                    {projects.map((p, i) => (
                        <article key={i} className="project-card">
                            <div className="card-left-accent"></div>

                            <div className="card-body">
                                <div className="card-header">
                                    <h3 className="project-title">{p.title}</h3>
                                    <a href={p.link} target="_blank" className="github-link" title="View on GitHub" rel="noreferrer" aria-label={`View ${p.title} on GitHub`}>
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>

                                <p className="project-desc">{p.desc}</p>

                                <div className="tech-tags">
                                    {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="view-all-container">
                    <a href="https://github.com/sajidinamdar?tab=repositories" target="_blank" className="view-all-btn" rel="noreferrer">
                        View All Repositories
                    </a>
                </div>
            </div>

            <style>{`
                .projects-section {
                    padding: var(--section-padding) 0;
                }

                .project-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                }

                /* Compact Card Design with Left Accent */
                .project-card {
                    background: rgba(30, 41, 59, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                    padding: 0;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    min-height: 180px;
                }

                .card-left-accent {
                    width: 4px;
                    background: linear-gradient(180deg, var(--neon-cyan), var(--accent));
                    flex-shrink: 0;
                    opacity: 0.5;
                    transition: all 0.3s ease;
                }

                .project-card:hover .card-left-accent {
                    opacity: 1;
                    box-shadow: 0 0 20px var(--neon-cyan);
                }

                .project-card:hover {
                    transform: translateX(4px);
                    border-color: rgba(0, 243, 255, 0.2);
                    background: rgba(30, 41, 59, 0.4);
                    box-shadow: -4px 0 24px rgba(0, 243, 255, 0.1);
                }

                .card-body {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    flex: 1;
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 12px;
                }

                .project-title {
                    font-size: 1.2rem;
                    color: #fff;
                    font-weight: 600;
                    line-height: 1.3;
                    margin: 0;
                }

                .github-link {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-secondary);
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .github-link i {
                    font-size: 1rem;
                }

                .github-link:hover {
                    background: var(--neon-cyan);
                    color: #000;
                    border-color: var(--neon-cyan);
                    transform: scale(1.1);
                }

                .project-desc {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }

                .tech-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-top: auto;
                }

                .tech-tag {
                    font-size: 0.7rem;
                    background: transparent;
                    color: var(--neon-cyan);
                    padding: 4px 12px;
                    border-radius: 6px;
                    border: 1px solid rgba(0, 243, 255, 0.3);
                    font-weight: 500;
                    letter-spacing: 0.3px;
                    transition: all 0.3s ease;
                }

                .tech-tag:hover {
                    background: rgba(0, 243, 255, 0.1);
                    border-color: var(--neon-cyan);
                }
                
                .view-all-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 48px;
                }

                .view-all-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 36px;
                    background: transparent;
                    border: 2px solid var(--neon-cyan);
                    color: var(--neon-cyan);
                    font-weight: 600;
                    font-size: 0.95rem;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    letter-spacing: 0.5px;
                    text-decoration: none;
                }

                .view-all-btn:hover {
                    background: var(--neon-cyan);
                    color: #000;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0, 243, 255, 0.3);
                }
                
                @media (max-width: 768px) {
                    .project-grid {
                        grid-template-columns: 1fr;
                        gap: 12px;
                    }

                    .project-card {
                        min-height: auto;
                    }

                    .card-body {
                        padding: 15px;
                    }

                    .project-title {
                        font-size: 1.1rem;
                    }

                    .github-link {
                        width: 28px;
                        height: 28px;
                    }

                    .view-all-container {
                        margin-top: 20px;
                    }
                }
            `}</style>
        </section>
    )
}
