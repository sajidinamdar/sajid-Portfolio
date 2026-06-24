import { useState } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';

const Skills = () => {
    const { skills } = portfolioData;
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Dynamic unique categories list
    const categories = ["All", ...new Set(skills.map(s => s.category))];

    // Filter skills based on state
    const filteredSkills = selectedCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    // Helper to bold technical keywords in description dynamically
    const formatSkillDesc = (text) => {
        const keywords = [
            "OWASP Top 10", "HTTP/S requests", "REST API", "host discovery", 
            "port scanning", "network traffic", "reconnaissance", "directory fuzzing", 
            "Kali Linux", "Git", "Python", "Vulnerability Assessment and Penetration Testing",
            "vulnerability assessments", "Proxy and Repeater", "protocol behaviors",
            "OSINT", "automation", "security evaluations", "version control",
            "reconnaissance scanners", "scripting utilities", "API Security", "endpoints"
        ];
        let formatted = text;
        keywords.forEach(keyword => {
            const regex = new RegExp(`(${keyword})`, 'gi');
            formatted = formatted.replace(regex, '<strong>$1</strong>');
        });
        return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
    };

    return (
        <section id="skills" className="skills-modern">
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="skills-corner-header">
                    <h2 className="corner-title">./display_skills.sh</h2>
                    <div className="corner-bar"></div>
                </div>

                {/* Filter Tab System */}
                <div className="skills-filter-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            <span className="tab-bracket">[</span>
                            <span className="tab-name">{cat === "All" ? "ALL" : cat.toUpperCase()}</span>
                            <span className="tab-bracket">]</span>
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-module luminous-aura"
                            style={{ '--skill-accent': skill.color }}
                        >
                            <div className="skill-card-header">
                                <div className="skill-icon-box">
                                    {skill.icon}
                                </div>
                                <span className="skill-name">{skill.name}</span>
                            </div>

                            <p className="skill-description">
                                {formatSkillDesc(skill.desc)}
                            </p>

                            <div className="module-glow"></div>
                            <div className="card-top-accent"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .skills-modern {
                    padding: var(--section-padding) 0;
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
                    background-size: 40px 40px;
                    mask-image: radial-gradient(circle at center, black, transparent 80%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; }

                /* CORNER HEADER STYLES */
                .skills-corner-header {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 40px;
                    text-align: left;
                }

                .corner-title {
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

                .corner-bar {
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--accent-2), transparent);
                    box-shadow: 0 0 15px var(--accent-2);
                }

                /* CYBER FILTER TABS */
                .skills-filter-tabs {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                    margin-bottom: 45px;
                }

                .filter-btn {
                    background: transparent;
                    border: none;
                    color: #64748b; /* dim gray */
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    transition: all 0.3s ease;
                }

                .filter-btn .tab-bracket {
                    color: transparent;
                    transition: all 0.3s ease;
                    font-family: 'Courier New', monospace;
                }

                .filter-btn:hover, .filter-btn.active {
                    color: #38bdf8; /* cyber cyan */
                }

                .filter-btn:hover .tab-bracket, .filter-btn.active .tab-bracket {
                    color: #2563eb; /* cobalt brackets */
                }

                .filter-btn.active {
                    text-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 24px;
                }

                /* HIGH-TECH SKILL CARD */
                .skill-module {
                    background: var(--bg-card);
                    border: 1px solid rgba(37, 99, 235, 0.15);
                    border-radius: 12px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: default;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }

                .skill-module:hover {
                    transform: translateY(-5px);
                    border-color: var(--skill-accent);
                    box-shadow: 0 12px 30px color-mix(in srgb, var(--skill-accent) 20%, transparent), 0 4px 10px rgba(0, 0, 0, 0.3);
                }

                .skill-card-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    z-index: 2;
                }

                .skill-icon-box {
                    font-size: 2.2rem;
                    color: #64748b;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .skill-module:hover .skill-icon-box {
                    color: var(--skill-accent);
                    filter: drop-shadow(0 0 12px var(--skill-accent));
                    transform: scale(1.15) rotate(3deg);
                    animation: icon-pulse 1.2s infinite alternate;
                }

                @keyframes icon-pulse {
                    0% { transform: scale(1.15) rotate(3deg); filter: drop-shadow(0 0 12px var(--skill-accent)); }
                    100% { transform: scale(1.22) rotate(-3deg); filter: drop-shadow(0 0 20px var(--skill-accent)); }
                }

                .skill-name {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #fff;
                    transition: 0.3s;
                }

                .skill-module:hover .skill-name {
                    color: var(--skill-accent);
                }

                .skill-description {
                    font-size: 0.88rem;
                    line-height: 1.6;
                    color: #94a3b8; /* slate-300 styled */
                    z-index: 2;
                    margin: 0;
                    font-family: 'Outfit', sans-serif;
                }

                .skill-description strong {
                    color: #ffffff;
                    font-weight: 700;
                }

                .module-glow {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, var(--skill-accent), transparent 70%);
                    opacity: 0;
                    transition: 0.3s;
                    pointer-events: none;
                }

                .skill-module:hover .module-glow {
                    opacity: 0.08;
                }

                .card-top-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background: var(--skill-accent);
                    transition: 0.3s ease;
                }

                .skill-module:hover .card-top-accent {
                    width: 100%;
                }

                @media (max-width: 968px) {
                    .skills-modern { padding: 60px 0; }
                    .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
                    .skills-filter-tabs { gap: 8px; }
                }

                @media (max-width: 768px) {
                    .skills-grid { grid-template-columns: 1fr; gap: 15px; }
                    .skill-module { padding: 20px; }
                    .skills-filter-tabs { gap: 8px; justify-content: center; }
                    .filter-btn { font-size: 0.72rem; letter-spacing: 1px; }
                }

                @media (max-width: 480px) {
                    .skills-modern { padding: 40px 0; }
                    .skill-module { padding: 16px; }
                    .skill-name { font-size: 1rem; }
                    .skill-description { font-size: 0.82rem; }
                    .skill-icon-box { font-size: 1.8rem; }
                    .filter-btn { font-size: 0.65rem; padding: 4px 8px; }
                }
            `}</style>
        </section>
    );
};

export default Skills;
