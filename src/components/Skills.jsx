import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData.jsx';

const Skills = () => {
    const { skills } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <section id="skills" className="skills-modern">
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="section-header">
                    <h2 className="section-title-gradient">My Skills</h2>
                    <div className="section-divider"></div>
                </div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-module luminous-aura"
                            style={{ '--skill-accent': skill.color }}
                            variants={itemVariants}
                        >

                            <div className="skill-icon-box">
                                {skill.icon}
                            </div>

                            <span className="skill-name">{skill.name}</span>

                            <div className="module-glow"></div>
                            <div className="corner-accent"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                .skills-modern {
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
                    mask-image: radial-gradient(circle at center, black, transparent 80%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; }


                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
                    gap: 20px;
                    justify-items: center;
                }

                /* SKILL MODULE CARD */
                .skill-module {
                    width: 140px;
                    height: 160px;
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: default;
                    overflow: hidden;
                    box-shadow: var(--glass-glow);
                }

                .skill-module:hover {
                    transform: translateY(-10px) scale(1.03);
                    border-color: var(--glass-border-hover);
                    background: rgba(30, 41, 59, 0.7);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }


                .skill-icon-box {
                    font-size: 3.2rem;
                    color: #fff;
                    transition: all 0.4s ease;
                    z-index: 2;
                }

                .skill-module:hover .skill-icon-box {
                    color: var(--skill-accent);
                    transform: scale(1.1);
                    filter: drop-shadow(0 0 15px var(--skill-accent));
                }

                .skill-name {
                    margin-top: 15px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #94a3b8;
                    transition: 0.3s;
                    text-align: center;
                    z-index: 2;
                }

                .skill-module:hover .skill-name {
                    color: #fff;
                }

                .module-glow {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, var(--skill-accent), transparent 70%);
                    opacity: 0;
                    transition: 0.4s;
                    pointer-events: none;
                }

                .skill-module:hover .module-glow {
                    opacity: 0.1;
                }

                .corner-accent {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 20px;
                    height: 20px;
                    background: linear-gradient(135deg, transparent 50%, var(--skill-accent) 50%);
                    opacity: 0.2;
                    transition: 0.3s;
                }

                .skill-module:hover .corner-accent {
                    opacity: 0.6;
                    width: 25px;
                    height: 25px;
                }

                @media (max-width: 768px) {
                    .skills-modern { padding: 60px 0; }
                    .glitch-text { font-size: 2.5rem; }
                    .skills-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px; }
                    .skill-module { width: 120px; height: 140px; border-radius: 16px; }
                    .skill-icon-box { font-size: 2.5rem; }
                    .skill-name { font-size: 0.8rem; margin-top: 10px; }
                }

                @media (max-width: 480px) {
                    .glitch-text { font-size: 2.2rem; }
                    .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
                    .skill-module { width: 100%; height: 130px; }
                }

                @media (max-width: 360px) {
                    .skills-grid { gap: 10px; }
                    .skill-module { height: 120px; }
                }
            `}</style>
        </section>
    );
};

export default Skills;
