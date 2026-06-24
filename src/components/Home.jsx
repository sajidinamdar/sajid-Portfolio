import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData.jsx';

export default function Home() {
    return (
        <section id="home" className="home-modern">
            <div className="cyber-grid-overlay"></div>

            {/* Absolute positioned portrait for widescreen desktops */}
            <div className="hero-portrait-absolute">
                <img src="/img/Certificates/sajidimg.jpg" alt="Sajid Inamdar" className="portrait-img-absolute" />
            </div>

            <div className="container relative-z">
                <div className="hero-layout">
                    {/* LEFT COLUMN: HERO INFORMATION */}
                    <div className="hero-text-content">
                        <div className="hero-greeting">
                            Hi, I am
                        </div>

                        <h1 className="hero-name">
                            <span className="name-first">Sajid</span> <span className="name-last">Inamdar</span>
                        </h1>

                        <div className="hero-roles-text">
                            <span className="role-text-hacker">Ethical Hacker</span>
                            <span className="role-text-divider">/</span>
                            <span className="role-text-researcher">Cybersecurity Researcher</span>
                        </div>

                        <p className="hero-summary">
                            Aspiring Cybersecurity Associate specializing in Vulnerability Assessment and Penetration Testing (VAPT). Intercepting requests, identifying vulnerabilities, and generating remediation intelligence.
                        </p>

                        <div className="hero-cta">
                            <Link to="#projects" className="btn-modern btn-blue-glow" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <i className="fas fa-terminal"></i> VIEW LAB WORK
                            </Link>

                            <a 
                                href="/img/Sajid_Inamdar_Resume.pdf" 
                                download="Sajid_Inamdar_Resume.pdf" 
                                className="btn-modern btn-blue-outline"
                            >
                                <i className="fas fa-file-download"></i> DOWNLOAD CV
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SPACER ON DESKTOP, EMBEDDED PORTRAIT ON MOBILE/TABLET */}
                    <div className="hero-image-spacer-desktop">
                        <div className="hero-portrait-mobile-only">
                            <img src="/img/Certificates/sajidimg.jpg" alt="Sajid Inamdar" className="portrait-img-mobile" />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .home-modern {
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                    padding: var(--section-padding) 0;
                    padding-top: calc(var(--navbar-height) + 40px);
                    position: relative;
                    overflow: hidden;
                    box-sizing: border-box;
                    background-color: var(--bg-dark);
                }

                .cyber-grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(37, 99, 235, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37, 99, 235, 0.04) 1px, transparent 1px);
                    background-size: 40px 40px;
                    mask-image: radial-gradient(circle at center, black, transparent 85%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; width: 100%; }

                .hero-layout {
                    display: grid;
                    grid-template-columns: 1.25fr 0.75fr;
                    gap: 40px;
                    align-items: center;
                }

                .hero-greeting {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.15rem;
                    font-weight: 500;
                    color: #94a3b8; /* slate/grey */
                    letter-spacing: 2px;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }

                .hero-name {
                    font-size: clamp(3.8rem, 8.5vw, 5.5rem); /* Increased size as requested */
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 20px;
                }

                .name-first {
                    font-family: 'Dancing Script', cursive;
                    color: #ffffff;
                    text-shadow: 0 0 15px rgba(255, 255, 255, 0.25);
                }

                .name-last {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 800;
                    color: #38bdf8; /* Cyber Blue */
                    text-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
                }

                .hero-roles-text {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 25px;
                    flex-wrap: wrap;
                    font-family: 'Outfit', sans-serif; /* Unified font family */
                    font-weight: 600;
                    font-size: clamp(1.1rem, 2.8vw, 1.35rem);
                    letter-spacing: 0.5px;
                }

                .role-text-hacker {
                    color: #10b981; /* Neon green */
                    text-shadow: 0 0 8px rgba(16, 185, 129, 0.15);
                }

                .role-text-researcher {
                    color: #38bdf8; /* Cyber blue */
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.15);
                }

                .role-text-divider {
                    color: #475569; /* Slate gray */
                    font-weight: 400;
                }

                .hero-summary {
                    color: #94a3b8;
                    font-size: 1.05rem;
                    line-height: 1.7;
                    margin-bottom: 40px;
                    max-width: 600px;
                }

                .hero-cta {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .btn-modern {
                    padding: 14px 30px;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }

                .btn-blue-glow {
                    background: #2563eb;
                    border: 1px solid #2563eb;
                    color: #fff;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
                }

                .btn-blue-glow:hover {
                    background: #1d4ed8;
                    border-color: #1d4ed8;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
                }

                .btn-blue-outline {
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    color: #fff;
                }

                .btn-blue-outline:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: #38bdf8;
                    color: #38bdf8;
                    transform: translateY(-2px);
                }

                /* ABSOLUTE VIEWPORT-EDGE DESKTOP PORTRAIT STYLE (JACOB STYLE) */
                .hero-portrait-absolute {
                    position: absolute;
                    top: 90px; /* Shift down to sit below navbar */
                    right: 12%; /* Shifted further inwards for more space on the right edge */
                    width: 35%; /* Adjusted width for perfect balance */
                    height: calc(100% - 90px); /* Fill remaining height */
                    z-index: 1;
                    overflow: hidden;
                    pointer-events: none;
                    /* Radial mask to fade out all backdrop curtain and flower textures completely to transparent */
                    -webkit-mask-image: radial-gradient(ellipse at 50% 45%, black 20%, transparent 68%);
                    mask-image: radial-gradient(ellipse at 50% 45%, black 20%, transparent 68%);
                }

                .portrait-img-absolute {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    /* High contrast + Grayscale to crush the green background curtain into black */
                    filter: grayscale(100%) brightness(0.72) contrast(1.4);
                }

                .hero-image-spacer-desktop {
                    display: block;
                    z-index: 2;
                }

                .hero-portrait-mobile-only {
                    display: none;
                }

                @media (max-width: 1024px) {
                    .home-modern { padding-top: calc(var(--navbar-height) + 20px); }
                    .hero-layout { grid-template-columns: 1fr; text-align: center; gap: 30px; }
                    .hero-text-content { order: 2; }
                    .hero-image-spacer-desktop { order: 1; }
                    .greeting-badge { margin: 0 auto 20px auto; }
                    .hero-cta { justify-content: center; }
                    .hero-summary { margin-left: auto; margin-right: auto; max-width: 100%; }
                    
                    .hero-portrait-absolute {
                        display: none;
                    }
                    .hero-image-spacer-desktop {
                        display: flex;
                        justify-content: center;
                        margin-top: 0;
                    }
                    .hero-portrait-mobile-only {
                        display: block;
                        width: 260px;
                        height: 330px;
                        border-radius: 16px;
                        overflow: hidden;
                        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), 
                                            linear-gradient(to bottom, black 85%, transparent 100%);
                        mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), 
                                    linear-gradient(to bottom, black 85%, transparent 100%);
                    }
                    .portrait-img-mobile {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center top;
                        filter: brightness(0.85);
                    }
                }

                @media (max-width: 480px) {
                    .home-modern { padding-top: calc(var(--navbar-height) + 15px) !important; padding-bottom: 20px; min-height: auto; }
                    .hero-name { font-size: 2rem; margin-bottom: 12px; }
                    .hero-greeting { font-size: 0.9rem; letter-spacing: 1.5px; margin-bottom: 4px; }
                    .hero-summary { font-size: 0.9rem; margin-bottom: 25px; line-height: 1.6; }
                    .btn-modern { width: 100%; justify-content: center; padding: 12px 20px; font-size: 0.78rem; }
                    .hero-cta { gap: 12px; flex-direction: column; }
                    .hero-roles-text { flex-direction: column; gap: 4px; font-size: 0.95rem; }
                    .hero-image-spacer-desktop { margin-top: 0; }
                    .hero-portrait-mobile-only {
                        width: 200px;
                        height: 260px;
                        border-radius: 12px;
                    }
                }

                @media (max-width: 350px) {
                    .hero-name { font-size: 1.7rem; }
                    .hero-portrait-mobile-only { width: 170px; height: 220px; }
                    .hero-roles-text { font-size: 0.85rem; }
                }
            `}</style>
        </section>
    );
}
