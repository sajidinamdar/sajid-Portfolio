import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData.jsx';

const Skills = () => {
    const { skills } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <motion.div
                    className="skills-grid-compact"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-icon-card"
                            style={{ '--skill-color': skill.color }}
                            variants={itemVariants}
                        >
                            <div className="skill-icon-wrapper">
                                {skill.icon}
                            </div>
                            <span className="skill-label">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
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

                @media (max-width: 350px) {
                    .skills-grid-compact {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 15px;
                    }
                    .skill-icon-card {
                        width: 100px;
                        height: 100px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
