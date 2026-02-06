import { useState } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const { projects } = portfolioData;

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="projects-modern">
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="section-header">
                    <h2 className="section-title-gradient">My Projects</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <article key={index} className="project-module luminous-aura">

                            <div className="module-body">
                                <div className="tech-stack">
                                    {project.tech.map(tag => (
                                        <span key={tag} className="tech-badge">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                            </div>

                            <div className="module-footer">
                                <a href={project.link} target="_blank" rel="noreferrer" className="view-code-btn">
                                    <i className="fab fa-github"></i> View Code
                                </a>
                                <div className="hover-scan"></div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="action-center">
                    <button className="cyber-action-btn" onClick={() => setShowAll(!showAll)}>
                        <span className="btn-text">{showAll ? 'Show Less' : 'View All Projects'}</span>
                        <div className="btn-glow"></div>
                    </button>

                    <a href="https://github.com/sajidinamdar" target="_blank" rel="noreferrer" className="cyber-action-btn github-alt">
                        <span className="btn-text"><i className="fab fa-github"></i> More on GitHub</span>
                        <div className="btn-glow"></div>
                    </a>
                </div>
            </div>

            <style>{`
                .projects-modern {
                    padding: var(--section-padding) 0;
                    position: relative;
                    overflow: hidden;
                }

                .cyber-grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
                    background-size: 40px 40px;
                    mask-image: radial-gradient(circle at center, black, transparent 90%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; }


                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-bottom: 60px;
                }

                /* PROJECT MODULE CARD */
                .project-module {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    position: relative;
                    box-shadow: var(--glass-glow);
                }

                .project-module:hover {
                    transform: translateY(-8px) scale(1.02);
                    border-color: var(--glass-border-hover);
                    background: rgba(30, 41, 59, 0.7);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }


                .module-body { padding: 35px; flex-grow: 1; }

                .tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 25px;
                }

                .tech-badge {
                    font-size: 0.65rem;
                    color: #94a3b8;
                    padding: 4px 12px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 6px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .project-title {
                    font-size: 1.6rem;
                    color: #fff;
                    margin-bottom: 15px;
                    letter-spacing: -0.5px;
                }

                .project-desc {
                    color: #94a3b8;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .module-footer {
                    padding: 20px 35px;
                    background: rgba(0, 0, 0, 0.2);
                    position: relative;
                }

                .view-code-btn {
                    color: #fff;
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: 0.3s;
                }

                .view-code-btn i { color: #38bdf8; font-size: 1.1rem; }
                .view-code-btn:hover { color: #38bdf8; }

                .hover-scan {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #38bdf8;
                    transition: 0.4s ease;
                }

                .project-module:hover .hover-scan {
                    width: 100%;
                    box-shadow: 0 0 15px #38bdf8;
                }

                .action-center {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .cyber-action-btn {
                    padding: 14px 40px;
                    background: transparent;
                    border: 1px solid rgba(56, 189, 248, 0.2);
                    color: #fff;
                    font-weight: 700;
                    border-radius: 12px;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: 0.3s;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .btn-text { position: relative; z-index: 2; }
                .btn-glow { position: absolute; inset: 0; background: #38bdf8; opacity: 0; transition: 0.3s; }
                
                .cyber-action-btn:hover {
                    color: var(--bg-dark);
                    border-color: #38bdf8;
                    transform: translateY(-3px);
                }
                
                .cyber-action-btn:hover .btn-glow {
                    opacity: 1;
                }

                .github-alt { border-color: rgba(255, 255, 255, 0.1); }
                .github-alt .btn-glow { background: #fff; }

                @media (max-width: 968px) {
                    .glitch-text { font-size: 2.5rem; }
                    .projects-grid { grid-template-columns: 1fr; gap: 24px; }
                    .project-module { max-width: 100%; margin: 0 auto; }
                }

                @media (max-width: 480px) {
                    .projects-modern { padding: 60px 0; }
                    .glitch-text { font-size: 2.2rem; }
                    .module-body { padding: 25px; }
                    .module-footer { padding: 15px 25px; }
                    .project-title { font-size: 1.4rem; }
                    .action-center { gap: 15px; }
                    .cyber-action-btn { width: 100%; justify-content: center; padding: 12px 20px; font-size: 0.8rem; }
                }
            `}</style>
        </section>
    );
}

