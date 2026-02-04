import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiKalilinux, SiGnubash, SiMysql, SiTryhackme, SiPandas, SiNumpy, SiFastapi, SiFlask } from 'react-icons/si';
// Note: Matplotlib icon might not be in all versions of si, using a placeholder if needed or checking build. 
// Assuming SiMatplotlib exists or using a fallback if build fails. Let's try SiPandas, SiNumpy, etc.
// If SiMatplotlib is missing, I'll use FaChartBar as fallback in next step. For now attempting SiNumpy/Pandas. 
// Actually, I'll skip importing SiMatplotlib explicitly if I'm unsure and use a generic or text.
// Wait, I should try to make it look good. 
// Let's use simple logic: Import what we are sure of.
// user list: Python, JavaScript, Bash, SQL, Kali Linux, TryHackMe, pandas, matplotlib, numpy, fastapi, flask, bootstrap, Git, HTML5, CSS3

const Skills = () => {
    const skills = [
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Bash', icon: <SiGnubash />, color: '#4EAA25' },
        { name: 'SQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Kali Linux', icon: <SiKalilinux />, color: '#557C94' },
        { name: 'TryHackMe', icon: <SiTryhackme />, color: '#C51C2C' },
        { name: 'pandas', icon: <SiPandas />, color: '#150458' },
        { name: 'matplotlib', icon: <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Mat</span>, color: '#11557c' }, // Fallback for matplotlib
        { name: 'numpy', icon: <SiNumpy />, color: '#013243' },
        { name: 'fastapi', icon: <SiFastapi />, color: '#009688' },
        { name: 'flask', icon: <SiFlask />, color: '#000000' },
        { name: 'bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid-compact">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-icon-card" style={{ '--skill-color': skill.color }}>
                            <div className="skill-icon-wrapper">
                                {skill.icon}
                            </div>
                            <span className="skill-label">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .skills-section {
                    padding: var(--section-padding) 0;
                }

                .skills-grid-compact {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                    gap: 2rem;
                    justify-items: center;
                }

                .skill-icon-card {
                    width: 120px;
                    height: 120px;
                    background: rgba(30, 41, 59, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: default;
                }

                .skill-icon-card:hover {
                    transform: translateY(-10px) scale(1.08);
                    background: rgba(30, 41, 59, 0.8);
                    border-color: var(--skill-color);
                    box-shadow: 0 15px 40px -10px var(--skill-color);
                }

                .skill-icon-wrapper {
                    font-size: 3rem;
                    color: #fff;
                    transition: 0.3s;
                }

                .skill-icon-card:hover .skill-icon-wrapper {
                    color: var(--skill-color);
                    filter: drop-shadow(0 0 15px var(--skill-color));
                }

                .skill-label {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--text-secondary);
                    transition: 0.3s;
                }

                .skill-icon-card:hover .skill-label {
                    color: #fff;
                }

                @media (max-width: 968px) {
                    .skills-grid-compact {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1rem;
                    }
                    .skill-icon-card {
                        width: 90px;
                        height: 90px;
                        gap: 8px;
                    }
                    .skill-icon-wrapper {
                        font-size: 2rem;
                    }
                    .skill-label {
                        font-size: 0.75rem;
                    }
                }

                @media (max-width: 640px) {
                    .skills-grid-compact {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 10px;
                    }
                    .skill-icon-card {
                        width: 85px;
                        height: 85px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
