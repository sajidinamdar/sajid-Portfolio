import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {

    return (
        <section id="home" className="home-modern">
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="hero-layout">
                    <div className="hero-text-content">
                        <div className="greeting-badge">
                            HELLO, I'M
                        </div>

                        <h1 className="hero-name-serif">
                            Sajid Inamdar
                        </h1>

                        <div className="hero-role-typewriter">
                            AI Developer | Cybersecurity Student<span className="cursor">|</span>
                        </div>

                        <div className="hero-cta">
                            <Link to="#projects" className="btn-modern btn-yellow-glow" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <i className="fas fa-layer-group"></i> VIEW PROJECTS
                            </Link>

                            <a href="https://www.linkedin.com/in/sajidinamdar-sec/" target="_blank" className="btn-modern btn-yellow-outline" rel="noreferrer">
                                <i className="fab fa-linkedin-in"></i> CONNECT ME
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-content">
                        <div className="scan-module luminous-aura">

                            <motion.div
                                className="img-container"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <img src="/img/sajid-inamdar.jpg" alt="Sajid Inamdar" loading="eager" />
                                <div className="scan-bar"></div>
                                <div className="overlay-grid"></div>
                            </motion.div>

                            <div className="scan-footer">
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                .home-modern {
                    min-height: auto;
                    display: flex;
                    align-items: center;
                    padding: var(--section-padding) 0;
                    padding-top: calc(var(--navbar-height) + 24px);
                    position: relative;
                    overflow: hidden;
                    box-sizing: border-box;
                }

                .cyber-grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black, transparent 85%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; width: 100%; }

                .hero-layout {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 60px;
                    align-items: center;
                }

                .greeting-badge {
                    display: inline-block;
                    padding: 8px 24px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #38bdf8;
                    font-weight: 800;
                    font-size: 0.85rem;
                    border-radius: 50px;
                    letter-spacing: 2px;
                    margin-bottom: clamp(15px, 4vh, 40px);
                }

                .hero-name-serif {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.5rem, 10vw, 5rem);
                    font-weight: 700;
                    color: #fff;
                    line-height: 1.1;
                    margin-bottom: 30px;
                }

                .hero-role-typewriter {
                    font-size: 1.8rem;
                    font-weight: 600;
                    color: #38bdf8;
                    margin-bottom: 50px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .cursor {
                    color: #38bdf8;
                    animation: blink 1s step-end infinite;
                    font-weight: 400;
                }

                @keyframes blink {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                }

                .hero-cta {
                    display: flex;
                    gap: 25px;
                    flex-wrap: wrap;
                }

                .btn-modern {
                    padding: 18px 40px;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    transition: 0.3s;
                    cursor: pointer;
                }

                .btn-yellow-glow {
                    background: transparent;
                    border: 1.5px solid #FFD700;
                    color: #FFD700;
                    box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
                }

                .btn-yellow-glow:hover {
                    background: rgba(255, 215, 0, 0.1);
                    transform: translateY(-5px);
                    box-shadow: 0 0 50px rgba(56, 189, 248, 0.5);
                }

                .btn-yellow-outline {
                    background: transparent;
                    border: 1.5px solid #FFD700;
                    color: #FFD700;
                }

                .btn-yellow-outline:hover {
                    background: rgba(255, 215, 0, 0.1);
                    transform: translateY(-5px);
                }

                .scan-module {
                    background: var(--bg-card);
                    backdrop-filter: blur(20px);
                    border: 1px solid var(--glass-border);
                    border-radius: 30px;
                    padding: 20px;
                    width: 100%;
                    max-width: 420px;
                    box-shadow: var(--glass-glow);
                }


                .img-container {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 1;
                    border-radius: 20px;
                    overflow: hidden;
                    background: var(--bg-dark);
                    border: 1px solid var(--glass-border);
                }

                .img-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.8;
                }

                .scan-bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(to right, transparent, #38bdf8, transparent);
                    box-shadow: 0 0 15px #38bdf8;
                    animation: scan 4s linear infinite;
                    z-index: 5;
                }

                @keyframes scan {
                    0% { top: 0; }
                    50% { top: 100%; }
                    100% { top: 0; }
                }

                .overlay-grid {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px);
                    background-size: 20px 20px;
                    opacity: 0.3;
                    pointer-events: none;
                }

                .scan-footer {
                    margin-top: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 10px;
                }

                .auth-status { font-family: 'Courier New', monospace; font-size: 0.65rem; color: #10b981; font-weight: 800; }
                .corner-tag { background: rgba(255, 255, 255, 0.05); color: #fff; font-size: 0.6rem; padding: 4px 10px; border-radius: 4px; border: 1px solid rgba(255, 255, 255, 0.1); }

                @media (max-width: 1024px) {
                    .home-modern { padding-top: calc(var(--navbar-height) + 24px); }
                    .hero-layout { grid-template-columns: 1fr; text-align: center; gap: 40px; }
                    .greeting-badge { margin-bottom: 20px; }
                    .hero-name-serif { font-size: clamp(3rem, 10vw, 5rem); }
                    .hero-role-typewriter { justify-content: center; font-size: 1.3rem; margin-bottom: 30px; }
                    .hero-cta { justify-content: center; }
                    .hero-image-content { display: flex; justify-content: center; }
                }

                @media (max-width: 480px) {
                    .home-modern { padding-top: calc(var(--navbar-height) + 24px) !important; padding-bottom: 20px; }
                    .hero-name-serif { font-size: 2rem; line-height: 1.1; margin-bottom: 20px; }
                    .btn-modern { width: 100%; justify-content: center; padding: 16px 20px; font-size: 0.8rem; }
                    .hero-role-typewriter { font-size: 1.1rem; line-height: 1.4; flex-direction: column; height: auto; margin-bottom: 30px; }
                    .hero-cta { gap: 15px; }
                    .scan-module { padding: 15px; border-radius: 20px; }
                }
            `}</style>
        </section>
    );
}
