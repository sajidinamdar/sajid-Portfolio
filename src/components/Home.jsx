import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Home() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    function handleMouseJustify(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }

    return (
        <section id="home" className="section home-section">
            <div className="container">
                <div className="hero-layout">
                    <div className="hero-text-content">
                        <span className="greeting">HELLO, I'M</span>
                        <h1 className="hero-name">Sajid Inamdar</h1>
                        <h2 className="hero-role">Python Developer | Cybersecurity Student | Secure Web Developer</h2>
                        <p className="hero-subtext">
                            Building Secure APIs • Backend Development • Ethical Hacking • Network Security
                        </p>
                        <div className="hero-cta">
                            <Link to="#projects" className="btn btn-primary" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <i className="fas fa-layer-group"></i> View Projects
                            </Link>
                            <a href="https://www.linkedin.com/in/sajidinamdar-sec/" target="_blank" className="btn btn-outline" rel="noreferrer">
                                <i className="fab fa-linkedin-in"></i> Connect Me
                            </a>
                        </div>
                    </div>
                    <div className="hero-image-content">
                        <motion.div
                            className="img-frame"
                            style={{
                                rotateX,
                                rotateY,
                                z: 100,
                                perspective: 1000,
                                cursor: 'grab'
                            }}
                            onMouseMove={handleMouseJustify}
                            onMouseLeave={() => {
                                x.set(0);
                                y.set(0);
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            <img src="/img/sajid-inamdar.jpg" alt="Sajid Inamdar - Cybersecurity Student" loading="eager" style={{ pointerEvents: 'none' }} />
                        </motion.div>
                        {/* Decorative Elements */}
                        <div className="deco-circle c1"></div>
                        <div className="deco-circle c2"></div>
                    </div>
                </div>

                {/* SEO Power Text */}
                <section style={{ display: 'none' }}>
                    <h1>Sajid Inamdar | Cybersecurity Student & Ethical Hacker</h1>
                    <p>
                        Sajid Inamdar is a cybersecurity student and Python developer specializing in ethical
                        hacking, network security, FastAPI backend development, Linux and cloud computing.
                    </p>
                    <p>
                        This portfolio showcases cybersecurity projects, Python automation tools,
                        ethical hacking labs, and secure API development.
                    </p>
                </section>
            </div>

            <style>{`
                .home-section {
                    min-height: auto;
                    display: flex;
                    align-items: flex-start;
                    padding: calc(72px + var(--section-padding)) 0 20px 0;
                }
                
                .hero-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--spacing-3xl);
                    align-items: center;
                }
                
                .hero-text-content {
                    max-width: 600px;
                }
                
                .greeting {
                    display: inline-block;
                    padding: var(--spacing-xs) var(--spacing-sm);
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--neon-cyan);
                    font-weight: 600;
                    font-size: 0.85rem;
                    margin-bottom: var(--spacing-md);
                    border-radius: 50px;
                    letter-spacing: 2px;
                }
                
                .hero-name {
                    font-family: 'Playfair Display', serif;
                    font-size: 3.5rem;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #fff;
                    margin-bottom: var(--spacing-sm);
                }
                
                .hero-role {
                    font-size: 1.5rem;
                    font-weight: 500;
                    margin-bottom: var(--spacing-lg);
                    background: linear-gradient(90deg, #fff, var(--neon-cyan));
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1.5;
                }
                
                .hero-subtext {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    margin-bottom: var(--spacing-xl);
                    border-left: 3px solid var(--neon-cyan);
                    padding-left: var(--spacing-md);
                    line-height: 1.8;
                }
                
                .hero-cta {
                    display: flex;
                    gap: var(--spacing-md);
                    flex-wrap: wrap;
                }
                
                .btn {
                    padding: var(--spacing-sm) var(--spacing-lg);
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1rem;
                    display: inline-flex;
                    align-items: center;
                    gap: var(--spacing-xs);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .btn-primary {
                    background: linear-gradient(135deg, var(--neon-cyan), var(--accent));
                    color: #000;
                    border: none;
                    position: relative;
                    overflow: hidden;
                }

                .btn-primary::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.5s ease;
                }

                .btn-primary:hover::before {
                    left: 100%;
                }
                
                .btn-primary:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 12px 32px rgba(0, 243, 255, 0.4);
                }

                .btn-primary:active {
                    transform: translateY(-1px) scale(0.98);
                }
                
                .btn-outline {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #fff;
                    position: relative;
                    overflow: hidden;
                }

                .btn-outline::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s ease, height 0.6s ease;
                }

                .btn-outline:hover::before {
                    width: 300px;
                    height: 300px;
                }
                
                .btn-outline:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.4);
                    transform: translateY(-3px);
                    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
                }

                .btn-outline:active {
                    transform: translateY(-1px);
                }
                
                .hero-image-content {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .img-frame {
                    width: 100%;
                    max-width: 400px;
                    aspect-ratio: 1;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    z-index: 2;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                }

                .img-frame::before {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border-radius: 20px;
                    padding: 2px;
                    background: linear-gradient(135deg, var(--neon-cyan), var(--accent), var(--neon-cyan));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    z-index: -1;
                }

                .img-frame:hover::before {
                    opacity: 1;
                }
                
                .img-frame:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 16px 48px rgba(0, 243, 255, 0.3);
                    border-color: rgba(0, 243, 255, 0.3);
                }
                
                .img-frame img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .img-frame:hover img {
                    transform: scale(1.05);
                }
                
                .deco-circle {
                    position: absolute;
                    border-radius: 50%;
                    z-index: 1;
                }
                
                .c1 {
                    width: 420px;
                    height: 420px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                
                .c2 {
                    width: 400px;
                    height: 400px;
                    border: 1px dashed rgba(255, 255, 255, 0.1);
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                    animation: spin 20s linear infinite;
                }
                
                @keyframes spin {
                    100% { transform: translate(-50%, -50%) rotate(405deg); }
                }
                
                @media (max-width: 968px) {
                    .home-section {
                        padding: 80px 0 20px 0 !important;
                        min-height: auto;
                        display: block;
                        width: 100%;
                        overflow: hidden;
                    }

                    .home-section .container {
                        padding: 0 20px !important;
                    }

                    .hero-layout {
                        grid-template-columns: 1fr;
                        gap: 20px;
                        text-align: center;
                        align-items: center;
                        width: 100%;
                        margin: 0 auto;
                    }
                    
                    .hero-text-content {
                        max-width: 100%;
                        order: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: 0 auto;
                    }

                    .greeting {
                        margin-bottom: 4px;
                        padding: 2px 10px;
                        font-size: 0.7rem;
                        letter-spacing: 1px;
                        width: fit-content;
                    }

                    .hero-name {
                        font-size: 32px;
                        margin-bottom: 4px;
                    }

                    .hero-role {
                        font-size: 18px;
                        margin-bottom: 8px;
                    }

                    .hero-subtext {
                        margin: 0 auto 15px auto;
                        font-size: 16px;
                        line-height: 1.6;
                        padding: 0 12px;
                        border-left: 2px solid var(--neon-cyan);
                        text-align: center;
                        max-width: 280px;
                    }
                    
                    .hero-image-content {
                        order: 2;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0 auto;
                    }
                    
                    .hero-cta {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        gap: 10px;
                        align-items: center;
                        margin-bottom: 20px;
                    }

                    .btn {
                        width: 100%;
                        max-width: 280px;
                        height: 50px;
                        justify-content: center;
                        border-radius: 50px;
                        font-size: 16px;
                    }

                    .btn-primary {
                        box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
                    }

                    .btn-primary:hover {
                        box-shadow: 0 0 30px rgba(0, 243, 255, 0.6);
                    }
                    
                    .img-frame {
                        max-width: 280px;
                        margin: 0 auto;
                    }

                    .c1, .c2 {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}
