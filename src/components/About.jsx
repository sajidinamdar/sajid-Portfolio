import { useEffect, useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';

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
    const { stats } = portfolioData;

    // Extract targets from stats array
    const tryhackmeTarget = parseInt(stats[0].value.replace(/\D/g, '')) || 5;
    const githubTarget = parseInt(stats[1].value.replace(/\D/g, '')) || 15;
    const skillsTarget = parseInt(stats[2].value.replace(/\D/g, '')) || 12;

    const tryhackmeCount = useCounter(tryhackmeTarget, 1500, isVisible);
    const githubCount = useCounter(githubTarget, 1500, isVisible);
    const skillsCount = useCounter(skillsTarget, 1500, isVisible);

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
        <section id="about" className="about-modern" ref={sectionRef}>
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="section-header">
                    <h2 className="section-title-gradient">About Me</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="about-layout">
                    {/* SYSTEM PROFILE MODULE */}
                    <div className="profile-module luminous-aura">
                        <div className="module-body">
                            <div className="dossier-content">
                                <div className="profile-text">
                                    <p className="p-text intro">
                                        Hi, I'm <strong className="highlight">Sajid Inamdar</strong>. I study <strong className="highlight">Cybersecurity</strong> and develop with <strong className="highlight">Python</strong>. I live in Sangamner, Maharashtra.
                                    </p>

                                    <p className="p-text">
                                        I love ethical hacking, network security, and building secure apps. I am currently a student, and I practice every day on <strong className="highlight">TryHackMe</strong> and other security platforms. My goal is to work as a professional security expert.
                                    </p>

                                    <p className="p-text">
                                        I have experience with <strong className="highlight">Linux, networking</strong>, and security tools. I enjoy finding new ways to solve technical problems and keeping systems safe.
                                    </p>

                                    <p className="p-text">
                                        This is my portfolio where I share my work, certificates, and skills with the world.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="module-footer">
                            <div className="security-status"></div>
                            <div className="scan-line"></div>
                        </div>
                    </div>

                    {/* DATA BLOCKS (STATS) */}
                    <div className="data-blocks">
                        <div className={`data-block luminous-aura ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
                            <div className="block-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="block-details">
                                <span className="block-title">TryHackMe Rank</span>
                                <div className="block-value-row">
                                    <span className="block-value">Top {tryhackmeCount}%</span>
                                    <span className="unit">GLOBAL</span>
                                </div>
                            </div>
                            <div className="block-glow"></div>
                        </div>

                        <div className={`data-block luminous-aura ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
                            <div className="block-icon">
                                <i className="fab fa-github"></i>
                            </div>
                            <div className="block-details">
                                <span className="block-title">Codestbase</span>
                                <div className="block-value-row">
                                    <span className="block-value">{githubCount}+</span>
                                    <span className="unit">REPOS</span>
                                </div>
                            </div>
                            <div className="block-glow"></div>
                        </div>

                        <div className={`data-block ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
                            <div className="block-icon">
                                <i className="fas fa-microchip"></i>
                            </div>
                            <div className="block-details">
                                <span className="block-title">Tech Stack</span>
                                <div className="block-value-row">
                                    <span className="block-value">{skillsCount}+</span>
                                    <span className="unit">SKILLS</span>
                                </div>
                            </div>
                            <div className="block-glow"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-modern {
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
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black, transparent 80%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; }

                .section-head { text-align: center; margin-bottom: 30px; }

                .glitch-text {
                    font-size: clamp(2.2rem, 8vw, 3.5rem);
                    font-weight: 800;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .sub-header {
                    color: #94a3b8;
                    font-size: clamp(0.9rem, 3vw, 1.1rem);
                    margin-top: 15px;
                }

                .about-layout {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: clamp(24px, 4vw, 40px);
                    align-items: start;
                }

                /* PROFILE MODULE */
                .profile-module {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: 24px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    width: 100%;
                    box-shadow: var(--glass-glow);
                }

                .profile-module:hover {
                    border-color: var(--glass-border-hover);
                    box-shadow: 0 0 50px rgba(56, 189, 248, 0.15);
                    transform: translateY(-5px);
                }


                .module-body { 
                    padding: clamp(20px, 5vw, 40px);
                    flex-grow: 1;
                }
                .p-text { font-size: clamp(0.95rem, 2.5vw, 1.1rem); line-height: 1.8; color: #94a3b8; margin-bottom: 25px; }
                .p-text:last-child { margin-bottom: 0; }
                .p-text.intro { font-size: clamp(1.1rem, 3vw, 1.25rem); color: #e2e8f0; }
                .highlight { color: #38bdf8; font-weight: 700; }

                .module-footer {
                    padding: 15px 25px;
                    background: rgba(0, 0, 0, 0.2);
                    position: relative;
                }


                .scan-line {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #38bdf8;
                    transition: 0.6s ease;
                }

                .profile-module:hover .scan-line { width: 100%; box-shadow: 0 0 10px #38bdf8; }

                /* DATA BLOCKS */
                .data-blocks { display: flex; flex-direction: column; gap: 20px; }

                .data-block {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: 20px;
                    padding: 25px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: var(--glass-glow);
                    opacity: 0;
                    transform: translateX(30px);
                }

                .data-block.animate-in {
                    opacity: 1;
                    transform: translateX(0);
                    transition: opacity 0.6s, transform 0.6s;
                }

                .data-block:hover {
                    border-color: var(--glass-border-hover);
                    transform: scale(1.03);
                    background: rgba(30, 41, 59, 0.7);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }

                .block-icon {
                    width: 54px;
                    height: 54px;
                    background: rgba(56, 189, 248, 0.1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #38bdf8;
                    font-size: 1.6rem;
                    flex-shrink: 0;
                    transition: 0.3s;
                }

                .data-block:hover .block-icon {
                    background: #38bdf8;
                    color: var(--bg-dark);
                    box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
                }

                .block-details { flex-grow: 1; }
                .block-title { font-size: 0.85rem; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
                .block-value-row { display: flex; align-items: baseline; gap: 8px; margin-top: 5px; }
                .block-value { font-size: 2.2rem; font-weight: 800; color: #fff; font-family: 'Outfit', sans-serif; }
                .unit { font-size: 0.75rem; color: #38bdf8; font-weight: 700; }

                .block-glow {
                    position: absolute;
                    bottom: -20px;
                    right: -20px;
                    width: 60px;
                    height: 60px;
                    background: #38bdf8;
                    filter: blur(40px);
                    opacity: 0;
                    transition: 0.4s;
                }

                .data-block:hover .block-glow { opacity: 0.2; }

                /* RESPONSIVENESS */
                @media (max-width: 1024px) {
                    .about-layout { grid-template-columns: 1fr; gap: 30px; }
                    .data-blocks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
                    .data-block { transform: translateY(30px) !important; padding: 20px; gap: 15px; }
                    .data-block.animate-in { transform: translateY(0) !important; }
                    .block-value { font-size: 1.8rem; }
                }

                @media (max-width: 768px) {
                    .about-modern { padding: 60px 0; }
                    .data-blocks { grid-template-columns: 1fr; }
                    .block-value { font-size: 2rem; }
                    .profile-module { border-radius: 20px; }
                }

                @media (max-width: 480px) {
                    .section-head { margin-bottom: 40px; }
                }

                @media (max-width: 350px) {
                    .module-body { padding: 15px; }
                    .data-block { padding: 15px; }
                }
            `}</style>
        </section>
    );
};

export default About;
