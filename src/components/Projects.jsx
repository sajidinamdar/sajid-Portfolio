import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';

const projectDetails = {
    'VAPT Report: Shell Access on Metasploitable 2': {
        severity: 'CRITICAL',
        statusText: '[ STATUS: EXPLOITED ]',
        statusType: 'green',
        scope: 'CVE-2011-2523 (vsftpd), CVE-2007-2447 (Samba trans2open)',
        remediationDetail: 'Immediately disable vsftpd v2.3.4 backdoor payload, upgrade Samba service, block outdated legacy ports (21, 139, 445) from external traffic, and deploy host-level firewall filtering rules.'
    },
    'Network Scanning Assessment & Host Identification': {
        severity: 'MEDIUM',
        statusText: '[ STATUS: COMPLETED ]',
        statusType: 'green',
        scope: 'Insecure Plaintext Transmissions (Unencrypted Handshakes)',
        remediationDetail: 'Enforce SSH/TLS encryption for all shell management sessions, block external ICMP ping requests, and configure active IDS/IPS alerts for port-scanning sequences.'
    },
    'OSINT Reconnaissance Report: wscubetech.com': {
        severity: 'LOW',
        statusText: '[ STATUS: AUDITED ]',
        statusType: 'cyan',
        scope: 'Exposed Corporate Subdomains & Directory Listings',
        remediationDetail: 'Enforce Strict-Transport-Security (HSTS) headers, hide web server version banners, and update robots.txt to prevent search engine indexing of internal configuration directories.'
    },
    'Credential Exposure Risk Analysis': {
        severity: 'HIGH',
        statusText: '[ SEVERITY: HIGH ]',
        statusType: 'red',
        scope: 'Leaked MD5/SHA1 Hashes & Plaintext Credentials',
        remediationDetail: 'Implement robust password hashing algorithms (bcrypt/Argon2), enforce strict MFA on corporate access portals, and monitor public leak databases for staff credential exposures.'
    }
};


export default function Projects() {
    const { projects } = portfolioData;
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProject]);

    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const getSeverityClass = (severity) => {
        return severity ? severity.toLowerCase() : 'medium';
    };

    return (
        <section id="projects" className="projects-modern">
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="projects-corner-header">
                    <h2 className="corner-title">ls -la ./labs</h2>
                    <div className="corner-bar"></div>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => {
                        const details = projectDetails[project.title];
                        return (
                            <article 
                                key={index} 
                                className="project-card" 
                                onClick={() => openProject(project)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="card-inner">
                                    <div className="card-top-meta">
                                        <span className="task-id">#TASK-0{index + 1}</span>
                                        <span className={`status-badge-cyber ${details?.statusType || 'green'}`}>
                                            {details?.statusText || '[ STATUS: COMPLETED ]'}
                                        </span>
                                    </div>

                                    <div className="card-header">
                                        <span className="domain-badge">
                                            <i className="fas fa-terminal"></i> {project.domain ? project.domain.toUpperCase() : 'SECURITY'}
                                        </span>
                                        <h3 className="project-title">{project.title}</h3>
                                    </div>

                                    <div className="card-body">
                                        <p className="project-desc">{project.desc}</p>
                                        
                                        {project.remediation && (
                                            <div className="project-remediation">
                                                <span className="remediation-label">
                                                    <i className="fas fa-shield-alt"></i> REMEDIATION PATCH:
                                                </span>
                                                <p className="remediation-text">{project.remediation}</p>
                                            </div>
                                        )}
                                        
                                        {project.tech && project.tech.length > 0 && (
                                            <div className="tech-stack">
                                                {project.tech.map(tag => (
                                                    <span key={tag} className="tech-badge">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="card-footer">
                                        <div className="cyber-footer-links">
                                            <a 
                                                href="https://github.com/sajidinamdar/Cybersecurity-Projects" 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="cyber-btn-link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span className="btn-bracket">[</span>
                                                <span className="btn-label"><i className="fab fa-github"></i> VIEW REPORT</span>
                                                <span className="btn-bracket">]</span>
                                            </a>
                                            <a 
                                                href="https://github.com/sajidinamdar/Cybersecurity-Projects" 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="cyber-btn-link secondary"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span className="btn-bracket">[</span>
                                                <span className="btn-label"><i className="fas fa-code"></i> CODE</span>
                                                <span className="btn-bracket">]</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-scanner-glow"></div>
                            </article>
                        );
                    })}
                </div>
            </div>

            {selectedProject && (
                <div className="secure-project-modal" onClick={closeModal}>
                    <div className="project-modal-container" onClick={e => e.stopPropagation()}>
                        <div className="project-modal-header">
                            <div className="project-modal-info">
                                <i className="fas fa-shield-alt"></i>
                                <span>VAPT_ANALYSIS_REPORT.log</span>
                            </div>
                            <button className="project-close-button" onClick={closeModal} title="Close">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="project-modal-body">
                            <div className="project-report-title-row">
                                <span className={`severity-badge ${getSeverityClass(projectDetails[selectedProject.title]?.severity)}`}>
                                    {projectDetails[selectedProject.title]?.severity || 'MEDIUM'} SEVERITY
                                </span>
                                <h3 className="project-report-title">{selectedProject.title}</h3>
                            </div>

                            <div className="project-report-grid">
                                <div className="report-item">
                                    <span className="report-label">TARGET SCOPE / CVE</span>
                                    <span className="report-value font-mono">{projectDetails[selectedProject.title]?.scope || 'N/A'}</span>
                                </div>
                                <div className="report-item">
                                    <span className="report-label">VULNERABILITY DESCRIPTION</span>
                                    <p className="report-desc-text">{selectedProject.desc}</p>
                                </div>
                                <div className="report-item">
                                    <span className="report-label">REMEDIATION & PATCHING STRATEGY</span>
                                    <p className="report-remediation-text">
                                        {projectDetails[selectedProject.title]?.remediationDetail || selectedProject.remediation}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="project-modal-footer">
                            <a 
                                href="https://github.com/sajidinamdar/Cybersecurity-Projects" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="modal-repo-btn"
                            >
                                <i className="fab fa-github"></i> VIEW FULL REPORT REPOSITORY
                            </a>
                            <button className="modal-close-btn" onClick={closeModal}>CLOSE</button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .projects-modern {
                    padding: 80px 0;
                    position: relative;
                    overflow: hidden;
                    background-color: var(--bg-dark);
                }

                .cyber-grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(37, 99, 235, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37, 99, 235, 0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black, transparent 90%);
                    pointer-events: none;
                }

                .relative-z { 
                    position: relative; 
                    z-index: 10; 
                }

                /* CORNER HEADER STYLES */
                .projects-corner-header {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 40px;
                    text-align: left;
                }

                .projects-corner-header .corner-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(1.6rem, 5vw, 2.6rem);
                    font-weight: 800;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    background: linear-gradient(90deg, #fff 40%, var(--accent-2) 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    position: relative;
                    margin-bottom: 8px;
                }

                .projects-corner-header .corner-bar {
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--accent-2), transparent);
                    box-shadow: 0 0 15px var(--accent-2);
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    margin-top: 40px;
                }

                /* PROJECT CARD */
                .project-card {
                    position: relative;
                    background: var(--bg-card);
                    border: 1px solid rgba(37, 99, 235, 0.15);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                }

                .project-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(56, 189, 248, 0.45);
                    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25), 0 0 20px rgba(56, 189, 248, 0.2);
                }

                .card-inner {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    min-height: 300px;
                    justify-content: space-between;
                    position: relative;
                    z-index: 2;
                }

                /* CARD TOP META */
                .card-top-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                    font-family: 'Courier New', monospace;
                    font-size: 0.8rem;
                }

                .task-id {
                    color: #64748b;
                    font-weight: 700;
                    letter-spacing: 1px;
                }

                .status-badge-cyber {
                    font-weight: 800;
                    font-size: 0.72rem;
                    letter-spacing: 1px;
                }

                .status-badge-cyber.green {
                    color: #10b981;
                    text-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
                }

                .status-badge-cyber.cyan {
                    color: #38bdf8;
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
                }

                .status-badge-cyber.red {
                    color: #ef4444;
                    text-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
                }

                .card-header {
                    margin-bottom: 12px;
                }

                .domain-badge {
                    font-family: 'Courier New', monospace;
                    font-size: 0.7rem;
                    color: #38bdf8;
                    font-weight: 700;
                    letter-spacing: 1px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 10px;
                    background: rgba(56, 189, 248, 0.08);
                    padding: 4px 10px;
                    border-radius: 4px;
                    border: 1px solid rgba(56, 189, 248, 0.15);
                }

                .project-title {
                    font-size: 1.35rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                    line-height: 1.4;
                    letter-spacing: -0.3px;
                }

                .card-body {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 15px;
                }

                .project-desc {
                    font-size: 0.9rem;
                    line-height: 1.6;
                    color: #cbd5e1;
                    margin: 0;
                }

                .project-remediation {
                    margin: 15px 0;
                    padding: 12px 16px;
                    background: #090d16; /* very dark blackish gray */
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-left: 4px solid #10b981; /* thick solid green left border */
                    border-radius: 4px 8px 8px 4px; /* subtle rounded corners, but straight left edge */
                    transition: all 0.3s ease;
                }

                .project-card:hover .project-remediation {
                    border-left-color: #38bdf8; /* dynamic shift to cyan on card hover */
                    background: #02040a;
                    border-color: rgba(56, 189, 248, 0.1);
                }

                .remediation-label {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-family: 'Courier New', monospace;
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: #38bdf8;
                    margin-bottom: 6px;
                    letter-spacing: 1px;
                }

                .remediation-text {
                    font-size: 0.82rem;
                    line-height: 1.5;
                    color: #cbd5e1;
                    margin: 0;
                }

                .tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 10px;
                }

                .tech-badge {
                    font-size: 0.7rem;
                    font-family: 'Courier New', monospace;
                    font-weight: 700;
                    color: #38bdf8; /* cyber cyan */
                    padding: 4px 10px;
                    background: rgba(56, 189, 248, 0.05);
                    border: 1px solid rgba(56, 189, 248, 0.25);
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    letter-spacing: 0.5px;
                }

                .tech-badge:nth-child(even) {
                    color: #10b981; /* bright green */
                    background: rgba(16, 185, 129, 0.05);
                    border-color: rgba(16, 185, 129, 0.25);
                }

                .project-card:hover .tech-badge {
                    color: #38bdf8;
                    border-color: rgba(56, 189, 248, 0.55);
                    background: rgba(56, 189, 248, 0.08);
                    box-shadow: 0 0 8px rgba(56, 189, 248, 0.1);
                }

                .project-card:hover .tech-badge:nth-child(even) {
                    color: #10b981;
                    border-color: rgba(16, 185, 129, 0.55);
                    background: rgba(16, 185, 129, 0.08);
                    box-shadow: 0 0 8px rgba(16, 185, 129, 0.1);
                }

                .card-footer {
                    margin-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 15px;
                }

                .cyber-footer-links {
                    display: flex;
                    gap: 15px;
                    align-items: center;
                }

                .cyber-btn-link {
                    display: inline-flex;
                    align-items: center;
                    text-decoration: none;
                    font-size: 0.78rem;
                    font-weight: 700;
                    color: #38bdf8;
                    transition: all 0.3s ease;
                    font-family: 'Courier New', monospace;
                }

                .cyber-btn-link.secondary {
                    color: #10b981;
                }

                .cyber-btn-link .btn-bracket {
                    color: rgba(56, 189, 248, 0.3);
                    transition: all 0.3s ease;
                }

                .cyber-btn-link.secondary .btn-bracket {
                    color: rgba(16, 185, 129, 0.3);
                }

                .cyber-btn-link .btn-label {
                    padding: 0 4px;
                    transition: all 0.3s ease;
                }

                .cyber-btn-link:hover .btn-bracket {
                    color: #38bdf8;
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
                }

                .cyber-btn-link.secondary:hover .btn-bracket {
                    color: #10b981;
                    text-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
                }

                .cyber-btn-link:hover .btn-label {
                    color: #fff;
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
                    transform: scale(1.05);
                }

                .cyber-btn-link.secondary:hover .btn-label {
                    color: #fff;
                    text-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
                    transform: scale(1.05);
                }

                /* CARD CORNER SCANNER EFFECT */
                .card-scanner-glow {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 100% 100%, rgba(56, 189, 248, 0.05) 0%, transparent 60%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                .project-card:hover .card-scanner-glow {
                    opacity: 1;
                }

                @media (max-width: 968px) {
                    .projects-modern { padding: 60px 0; }
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }
                }

                @media (max-width: 480px) {
                    .projects-modern {
                        padding: 40px 0;
                    }
                    .card-inner {
                        padding: 20px;
                    }
                    .project-title {
                        font-size: 1.15rem;
                        word-break: break-word;
                    }
                    .project-card-meta {
                        flex-wrap: wrap;
                        gap: 8px;
                    }
                    .cyber-btn-link {
                        font-size: 0.7rem;
                        padding: 6px 10px;
                    }
                    .remediation-patch {
                        word-break: break-word;
                    }
                    .severity-badge {
                        font-size: 0.6rem;
                    }
                }


                /* SECURE PROJECT MODAL */
                .secure-project-modal {
                    position: fixed;
                    inset: 0;
                    z-index: 2000;
                    background: rgba(10, 25, 47, 0.95);
                    backdrop-filter: blur(10px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .project-modal-container {
                    background: #0f172a;
                    width: 100%;
                    max-width: 750px;
                    border: 1px solid rgba(37, 99, 235, 0.25);
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.1);
                    display: flex;
                    flex-direction: column;
                    animation: modalFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes modalFadeIn {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .project-modal-header {
                    padding: 18px 25px;
                    background: rgba(15, 23, 42, 0.8);
                    border-bottom: 1px solid rgba(37, 99, 235, 0.15);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .project-modal-info {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #38bdf8;
                    font-family: 'Courier New', monospace;
                    font-size: 0.75rem;
                    font-weight: 700;
                }

                .project-close-button {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .project-close-button:hover {
                    color: #ef4444;
                }

                .project-modal-body {
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                    max-height: 65vh;
                    overflow-y: auto;
                }

                .project-report-title-row {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .severity-badge {
                    display: inline-block;
                    align-self: flex-start;
                    padding: 4px 12px;
                    font-size: 0.65rem;
                    font-weight: 800;
                    border-radius: 4px;
                    letter-spacing: 1px;
                }

                .severity-badge.critical { background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); }
                .severity-badge.high { background: rgba(249, 115, 22, 0.15); color: #f97316; border: 1px solid rgba(249, 115, 22, 0.3); }
                .severity-badge.medium { background: rgba(234, 179, 8, 0.15); color: #eab308; border: 1px solid rgba(234, 179, 8, 0.3); }
                .severity-badge.low { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }

                .project-report-title {
                    font-size: 1.6rem;
                    color: #fff;
                    margin: 0;
                    font-family: 'Outfit', sans-serif;
                }

                .project-report-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .report-item {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .report-label {
                    font-family: 'Courier New', monospace;
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: #64748b;
                    letter-spacing: 1px;
                }

                .report-value.font-mono {
                    font-family: 'Courier New', monospace;
                    font-size: 0.85rem;
                    color: #38bdf8;
                }

                .report-desc-text {
                    font-size: 0.92rem;
                    color: #cbd5e1;
                    line-height: 1.6;
                    margin: 0;
                }

                .report-remediation-text {
                    font-size: 0.92rem;
                    color: #10b981;
                    background: rgba(16, 185, 129, 0.05);
                    border: 1px solid rgba(16, 185, 129, 0.15);
                    padding: 15px;
                    border-radius: 8px;
                    line-height: 1.6;
                    margin: 0;
                }

                .project-modal-footer {
                    padding: 20px 30px;
                    background: rgba(15, 23, 42, 0.5);
                    border-top: 1px solid rgba(37, 99, 235, 0.12);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .modal-repo-btn {
                    color: #38bdf8;
                    text-decoration: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: 0.3s;
                }

                .modal-repo-btn:hover {
                    color: #fff;
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
                }

                .modal-close-btn {
                    background: #ef4444;
                    color: #fff;
                    border: none;
                    padding: 10px 25px;
                    border-radius: 8px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .modal-close-btn:hover {
                    background: #dc2626;
                    transform: scale(1.03);
                }

                @media (max-width: 640px) {
                    .project-modal-container { width: 95%; }
                    .project-modal-body { padding: 20px; }
                    .project-report-title { font-size: 1.3rem; }
                    .project-modal-footer { padding: 15px 20px; }
                    .modal-close-btn { padding: 8px 18px; font-size: 0.85rem; }
                }
            `}</style>
        </section>
    );
}
