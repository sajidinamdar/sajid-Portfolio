import { useEffect, useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';

// Counter animation hook
const useCounter = (target, duration = 2000, isVisible) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrameId = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [target, duration, isVisible]);

    return count;
};

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { stats } = portfolioData;

    // Extract targets from stats array
    const tryhackmeTarget = parseInt(stats[0].value.replace(/\D/g, '')) || 2;
    const labsTarget = parseInt(stats[1].value.replace(/\D/g, '')) || 200;
    const toolsTarget = parseInt(stats[2].value.replace(/\D/g, '')) || 12;

    const tryhackmeCount = useCounter(tryhackmeTarget, 1500, isVisible);
    const labsCount = useCounter(labsTarget, 1500, isVisible);
    const toolsCount = useCounter(toolsTarget, 1500, isVisible);

    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section id="about" className="about-modern" ref={sectionRef}>
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="about-corner-header">
                    <h2 className="corner-title">WHOAMI</h2>
                    <div className="corner-bar"></div>
                </div>

                <div className="about-layout">
                    {/* PROFILE SUMMARY DOSSIER */}
                    <div className="profile-module terminal-window dossier-panel luminous-aura">
                        <div className="terminal-header">
                            <div className="terminal-dots">
                                <span className="dot dot-red"></span>
                                <span className="dot dot-yellow"></span>
                                <span className="dot dot-green"></span>
                            </div>
                            <div className="terminal-title">
                                <i className="fas fa-file-alt"></i> profile_dossier.txt
                            </div>
                            <div className="terminal-status">READONLY</div>
                        </div>
                        <div className="module-body">
                            <p className="dossier-intro">
                                Aspiring Cybersecurity Associate specializing in <strong className="bold-highlight">Vulnerability Assessment and Penetration Testing (VAPT)</strong>.
                            </p>
                            <p className="dossier-text text-dim">
                                Experienced in identifying and exploiting flaws within the OWASP Top 10 framework through simulated lab environments. Practical expertise in network reconnaissance, traffic interception, and identifying web application vulnerabilities with a strong emphasis on generating actionable remediation reports.
                            </p>
                            <p className="dossier-text text-dim">
                                Committed to maintaining system integrity by dissecting protocol behaviors and mitigating unauthorized data leaks. Practicing daily on TryHackMe (Top 2% Globally) and building secure sandbox environments to test legacy system vulnerabilities.
                            </p>
                            
                            {/* Blinking Terminal Prompt */}
                            <div className="terminal-prompt-line">
                                <span className="prompt-user">sajid@security-core</span><span className="prompt-char">:~$</span> <span className="prompt-cursor">█</span>
                            </div>
                        </div>
                    </div>

                    {/* STATS & SYSTEM REGISTRY */}
                    <div className="details-panel">
                        {/* STATS ROW */}
                        <div className="stats-mini-grid">
                            <div className="stat-node">
                                <span className="stat-label">TRYHACKME RANK</span>
                                <span className="stat-value">Top {tryhackmeCount}%</span>
                            </div>
                            <div className="stat-node">
                                <span className="stat-label">SECURITY LABS</span>
                                <span className="stat-value">{labsCount}+</span>
                            </div>
                            <div className="stat-node">
                                <span className="stat-label">SECURITY TOOLS</span>
                                <span className="stat-value">{toolsCount}+</span>
                            </div>
                        </div>

                        {/* SYSTEM REGISTRY TABLE */}
                        <div className="registry-box terminal-window luminous-aura">
                            <div className="terminal-header">
                                <div className="terminal-dots">
                                    <span className="dot dot-red"></span>
                                    <span className="dot dot-yellow"></span>
                                    <span className="dot dot-green"></span>
                                </div>
                                <div className="terminal-title">
                                    <i className="fas fa-terminal"></i> system_registry_metrics.sh
                                </div>
                                <div className="terminal-status">ONLINE</div>
                            </div>
                            <div className="registry-body">
                                <div className="registry-row">
                                    <span className="reg-key">Host ID:</span>
                                    <span className="reg-val highlight">Sajid Inamdar</span>
                                </div>
                                <div className="registry-row">
                                    <span className="reg-key">Operational Role:</span>
                                    <span className="reg-val">VAPT & Penetration Tester</span>
                                </div>
                                <div className="registry-row">
                                    <span className="reg-key">Education Registry:</span>
                                    <span className="reg-val">BCA | University of Mysore (Expected Aug 2027)</span>
                                </div>
                                <div className="registry-row">
                                    <span className="reg-key">Communication Vectors:</span>
                                    <span className="reg-val">English (Prof), Hindi (Bilingual), Marathi (Native)</span>
                                </div>
                                <div className="registry-row">
                                    <span className="reg-key">Target Deployments:</span>
                                    <span className="reg-val highlight">Penetration Tester | AppSec Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-modern {
                    padding: var(--section-padding) 0;
                    position: relative;
                    overflow: hidden;
                    background-color: var(--bg-dark);
                }

                .cyber-grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black, transparent 80%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; }

                .about-layout {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 40px;
                    align-items: start;
                }

                /* CORNER HEADER STYLES */
                .about-corner-header {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 50px;
                    text-align: left;
                }

                /* LINUX TERMINAL THEME WINDOWS */
                .terminal-window {
                    background: rgba(5, 8, 20, 0.85) !important;
                    border: 1px solid rgba(56, 189, 248, 0.25) !important;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.1) !important;
                    border-radius: 12px;
                    overflow: hidden;
                }

                .terminal-header {
                    background: rgba(15, 23, 42, 0.95);
                    padding: 12px 20px;
                    border-bottom: 1px solid rgba(56, 189, 248, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-family: 'Courier New', monospace;
                    font-size: 0.75rem;
                    color: #94a3b8;
                }

                .terminal-dots {
                    display: flex;
                    gap: 6px;
                }

                .terminal-dots .dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    display: inline-block;
                }

                .dot-red { background-color: #ef4444; }
                .dot-yellow { background-color: #f59e0b; }
                .dot-green { background-color: #10b981; }

                .terminal-title {
                    font-weight: 700;
                    letter-spacing: 1px;
                    color: #38bdf8;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'Courier New', monospace;
                }

                .terminal-status {
                    font-size: 0.65rem;
                    color: #10b981;
                    font-weight: 700;
                    background: rgba(16, 185, 129, 0.1);
                    padding: 2px 8px;
                    border-radius: 4px;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }

                .module-body {
                    padding: 30px;
                }

                .dossier-intro {
                    font-size: 1.15rem;
                    line-height: 1.6;
                    color: #fff;
                    margin-bottom: 20px;
                    font-weight: 500;
                }

                .bold-highlight {
                    color: #00ff66; /* Neon Terminal Green */
                    font-weight: 700;
                    text-shadow: 0 0 10px rgba(0, 255, 102, 0.15);
                }

                .dossier-text {
                    font-size: 0.95rem;
                    line-height: 1.8;
                    margin-bottom: 15px;
                }

                .text-dim {
                    color: #64748b; /* Fainter slate grey as requested */
                }

                .dossier-text:last-child {
                    margin-bottom: 0;
                }

                /* Blinking Terminal Prompt */
                .terminal-prompt-line {
                    font-family: 'Courier New', monospace;
                    font-size: 0.95rem;
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    color: #fff;
                }
                .prompt-user {
                    color: #10b981; /* Terminal green */
                }
                .prompt-char {
                    color: #38bdf8; /* Blue */
                }
                .prompt-cursor {
                    animation: blink 1s step-end infinite;
                    color: #10b981; /* Green blinking cursor */
                    margin-left: 5px;
                }

                /* DETAILS PANEL */
                .details-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                /* MINI STATS GRID WITH GLOW */
                .stats-mini-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 15px;
                }

                .stat-node {
                    background: rgba(15, 23, 42, 0.6);
                    border: 1px solid rgba(56, 189, 248, 0.25); /* Faint cyan border */
                    border-radius: 12px;
                    padding: 20px 10px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), 0 0 10px rgba(56, 189, 248, 0.05); /* Faint glow */
                    transition: all 0.3s ease;
                }

                .stat-node:hover {
                    border-color: rgba(56, 189, 248, 0.5);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(56, 189, 248, 0.2); /* Stronger glow on hover */
                    transform: translateY(-3px);
                }

                .stat-label {
                    font-size: 0.6rem;
                    font-weight: 700;
                    color: #64748b;
                    letter-spacing: 1px;
                }

                .stat-value {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #38bdf8;
                    font-family: 'Outfit', sans-serif;
                }

                /* SYSTEM REGISTRY TABLE */
                .registry-body {
                    padding: 20px 25px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    background: rgba(5, 8, 20, 0.7);
                }

                .registry-row {
                    display: grid;
                    grid-template-columns: 140px 1fr;
                    gap: 15px;
                    font-size: 0.85rem;
                    line-height: 1.5;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
                    padding-bottom: 10px;
                }

                .registry-row:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }

                .reg-key {
                    font-family: 'Courier New', monospace;
                    color: #94a3b8; /* gray-slate */
                    font-weight: 700;
                }

                .reg-val {
                    color: #00ff66; /* Terminal green */
                    font-family: 'Courier New', monospace;
                }

                .reg-val.highlight {
                    color: #38bdf8; /* Cyan highlight */
                    font-weight: 600;
                }

                @media (max-width: 1024px) {
                    .about-layout { grid-template-columns: 1fr; gap: 30px; }
                }

                @media (max-width: 768px) {
                    .stats-mini-grid { grid-template-columns: repeat(2, 1fr); }
                    .module-body { padding: 20px; }
                    .registry-body { padding: 15px 20px; }
                    .terminal-header { flex-wrap: wrap; gap: 8px; font-size: 0.65rem; }
                    .terminal-title { font-size: 0.65rem; }
                    .dossier-intro { font-size: 1rem; }
                    .dossier-text { font-size: 0.88rem; }
                }

                @media (max-width: 640px) {
                    .registry-row { grid-template-columns: 1fr; gap: 5px; }
                    .reg-val { word-break: break-word; font-size: 0.8rem; }
                    .reg-key { font-size: 0.75rem; }
                }

                @media (max-width: 480px) {
                    .about-modern { padding: 40px 0; }
                    .module-body { padding: 16px; }
                    .stats-mini-grid { grid-template-columns: 1fr; gap: 10px; }
                    .stat-node { padding: 12px; }
                    .stat-value { font-size: 1.3rem; }
                    .about-corner-header { align-items: center; text-align: center; }
                    .terminal-prompt-line { font-size: 0.8rem; }
                    .registry-body { padding: 12px 15px; }
                }
            `}</style>
        </section>
    );
};

export default About;
