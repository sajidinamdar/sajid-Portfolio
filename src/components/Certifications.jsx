import { useState, useEffect } from 'react';
import { FaEye, FaTimes, FaRedo } from 'react-icons/fa';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [rotation, setRotation] = useState(0);

    const certs = [
        { name: "Ethical Hacking Bootcamp", image: "/img/Certificates/ethical/wscube.png", issuer: "WsCube Tech", description: "Comprehensive bootcamp covering penetration testing, network reconnaissance, and VAPT basics." },
        { name: "Cyber Security 101", image: "/img/Certificates/ethical/cyber security 101.png", issuer: "TryHackMe", description: "Introduction to Cyber Security core concepts." },
        { name: "Pre-Security", image: "/img/Certificates/ethical/pre sec.png", issuer: "TryHackMe", description: "Foundational knowledge for cybersecurity paths." },
        { name: "Kali Linux", image: "/img/Certificates/ethical/kali.png", issuer: "TryHackMe", description: "Mastering the Kali Linux operating system." },
        { name: "Cyber Security", image: "/img/Certificates/ethical/cyber.png", issuer: "Certificate of Completion", description: "Comprehensive Cyber Security training." },
        { name: "Participation", image: "/img/Certificates/ethical/partisipation.png", issuer: "Event Participation", description: "Active participation in cybersecurity event." },
    ];

    const visibleCerts = showAll ? certs : certs.slice(0, 3);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedCert]);

    const openModal = (image) => {
        setSelectedCert(image);
        setRotation(0);
    };

    const closeModal = () => {
        setSelectedCert(null);
    };

    const rotateImage = (e) => {
        e.stopPropagation();
        setRotation(prev => prev + 90);
    };

    return (
        <section id="certifications" className="certs-modern">
            <div className="cyber-grid-overlay"></div>
            
            {/* Binary Watermark Backgrounds */}
            <div className="binary-watermark watermark-1">01100011 01111001 01100010 01100101 01110010</div>
            <div className="binary-watermark watermark-2">01110011 01100101 01100011 01110101 01110010</div>
            <div className="binary-watermark watermark-3">01010110 01000001 01010000 01010100</div>

            <div className="container relative-z">
                <div className="certifications-corner-header">
                    <h2 className="corner-title">CERTIFICATION PATHWAYS</h2>
                    <div className="corner-bar"></div>
                </div>

                <div className="timeline-journey">
                    {visibleCerts.map((cert, i) => (
                        <div className={`timeline-step ${i % 2 === 0 ? 'left-step' : 'right-step'}`} key={i}>
                            <div className="timeline-connector"></div>
                            <div className="timeline-dot"></div>
                            <article className="cert-module luminous-aura" onClick={() => openModal(cert.image)}>
                                <div className="module-img-area">
                                    <img src={cert.image} alt={cert.name} loading="lazy" />
                                    <div className="module-overlay">
                                        <FaEye className="view-icon" />
                                        <span>PREVIEW_DOCUMENT</span>
                                    </div>
                                </div>

                                <div className="module-body">
                                    <div className="issuer-tag">{cert.issuer}</div>
                                    <h4 className="cert-title">{cert.name}</h4>
                                    <p className="cert-desc">{cert.description}</p>
                                </div>

                                <div className="module-footer">
                                    <button className="view-cert-btn">
                                        View Certificate <i className="fas fa-chevron-right"></i>
                                    </button>
                                    <div className="scan-line"></div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="discovery-center">
                    <button className="cyber-btn" onClick={() => setShowAll(!showAll)}>
                        <span className="btn-content">
                            {showAll ? 'Show Less' : 'View All Certifications'}
                        </span>
                        <div className="btn-fill"></div>
                    </button>
                </div>
            </div>

            {selectedCert && (
                <div className="secure-modal" onClick={closeModal}>
                    <div className="viewer-container" onClick={e => e.stopPropagation()}>
                        <div className="viewer-header">
                            <div className="viewer-info">
                                <i className="fas fa-file-contract"></i>
                                <span>DOCUMENT_VIEWER.v1</span>
                            </div>
                            <div className="viewer-actions">
                                <button className="action-button" onClick={rotateImage} title="Rotate">
                                    <FaRedo />
                                </button>
                                <button className="action-button close" onClick={closeModal} title="Close">
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                        <div className="viewer-body">
                            <img
                                src={selectedCert}
                                alt="Certificate Preview"
                                style={{ transform: `rotate(${rotation}deg)` }}
                            />
                        </div>
                        <div className="viewer-footer">
                            <div className="security-tag">AUTHENTICATED DOCUMENT</div>
                            <button className="close-action-btn" onClick={closeModal}>CLOSE</button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .certs-modern {
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

                /* CORNER HEADER STYLES */
                .certifications-corner-header {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 60px;
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

                /* BINARY WATERMARKS */
                .binary-watermark {
                    position: absolute;
                    font-family: 'Courier New', monospace;
                    font-size: clamp(2rem, 10vw, 6.5rem);
                    font-weight: 900;
                    color: rgba(56, 189, 248, 0.015); /* Faint digital watermark */
                    user-select: none;
                    pointer-events: none;
                    white-space: nowrap;
                    z-index: 0;
                }

                .watermark-1 {
                    top: 15%;
                    left: -5%;
                    transform: rotate(-15deg);
                }

                .watermark-2 {
                    top: 55%;
                    right: -5%;
                    transform: rotate(10deg);
                }

                .watermark-3 {
                    bottom: 10%;
                    left: 10%;
                    transform: rotate(-5deg);
                }

                /* ZIG-ZAG TIMELINE JOURNEY */
                .timeline-journey {
                    position: relative;
                    max-width: 1100px;
                    margin: 0 auto 50px auto;
                    padding: 30px 0;
                    display: flex;
                    flex-direction: column;
                }

                .timeline-journey::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    width: 2px;
                    border-left: 2px dotted rgba(56, 189, 248, 0.35);
                    transform: translateX(-50%);
                    z-index: 1;
                }

                .timeline-step {
                    display: flex;
                    width: 100%;
                    position: relative;
                    margin-bottom: 60px;
                    z-index: 2;
                }

                .timeline-step.left-step {
                    justify-content: flex-start;
                }

                .timeline-step.right-step {
                    justify-content: flex-end;
                }

                .timeline-step:last-child {
                    margin-bottom: 0;
                }

                .timeline-dot {
                    position: absolute;
                    top: 50px;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background-color: var(--bg-dark);
                    border: 3px solid var(--accent-2);
                    box-shadow: 0 0 10px var(--accent-2);
                    z-index: 5;
                }

                .timeline-connector {
                    position: absolute;
                    top: 50px;
                    height: 2px;
                    z-index: 1;
                }

                .left-step .timeline-connector {
                    left: 45%;
                    right: 50%;
                    background: linear-gradient(90deg, rgba(56, 189, 248, 0.45), transparent);
                }

                .right-step .timeline-connector {
                    right: 45%;
                    left: 50%;
                    background: linear-gradient(270deg, rgba(56, 189, 248, 0.45), transparent);
                }

                /* CERT MODULE CARD WITH NEON GLOW */
                .cert-module {
                    width: 45%;
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(56, 189, 248, 0.25);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(56, 189, 248, 0.08); /* Neon edge glow */
                }

                .cert-module:hover {
                    border-color: rgba(56, 189, 248, 0.65);
                    transform: translateY(-8px) scale(1.02);
                    background: rgba(30, 41, 59, 0.7);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.3); /* Stronger glow */
                }

                .module-img-area {
                    height: 200px;
                    position: relative;
                    overflow: hidden;
                    background: var(--bg-dark);
                }

                .module-img-area img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.7;
                    transition: 0.53s;
                }

                .cert-module:hover .module-img-area img {
                    opacity: 0.3;
                    transform: scale(1.05);
                }

                .module-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    opacity: 0;
                    transition: 0.3s;
                    color: #fff;
                    font-family: 'Courier New', monospace;
                    font-size: 0.7rem;
                    letter-spacing: 2px;
                }

                .cert-module:hover .module-overlay { opacity: 1; }
                .view-icon { font-size: 1.5rem; color: #38bdf8; }

                .module-body { padding: 25px; flex-grow: 1; }
                .issuer-tag {
                    font-size: 0.65rem;
                    color: #38bdf8;
                    margin-bottom: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .cert-title { font-size: 1.25rem; color: #fff; margin-bottom: 10px; }
                .cert-desc { color: #94a3b8; font-size: 0.9rem; line-height: 1.6; }

                .module-footer {
                    padding: 15px 25px;
                    background: rgba(0, 0, 0, 0.2);
                    position: relative;
                }

                .view-cert-btn {
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-size: 0.8rem;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .view-cert-btn:hover { color: #38bdf8; }

                .scan-line {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #38bdf8;
                    transition: 0.4s ease;
                }

                .cert-module:hover .scan-line {
                    width: 100%;
                    box-shadow: 0 0 10px #38bdf8;
                }

                .discovery-center { display: flex; justify-content: center; }

                .cyber-btn {
                    padding: 14px 35px;
                    background: transparent;
                    border: 1px solid rgba(56, 189, 248, 0.3);
                    color: #38bdf8;
                    border-radius: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: 0.3s;
                    position: relative;
                    overflow: hidden;
                }

                .btn-fill { position: absolute; inset: 0; background: #38bdf8; opacity: 0; transition: 0.3s; z-index: 1; }
                .btn-content { position: relative; z-index: 2; }

                .cyber-btn:hover { color: var(--bg-dark); transform: translateY(-3px); }
                .cyber-btn:hover .btn-fill { opacity: 1; }

                /* SECURE MODAL DESIGN */
                .secure-modal {
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

                .viewer-container {
                    background: #0f172a;
                    width: 100%;
                    max-width: 1000px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
                    display: flex;
                    flex-direction: column;
                }

                .viewer-header {
                    padding: 20px 30px;
                    background: rgba(255, 255, 255, 0.03);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .viewer-info { display: flex; align-items: center; gap: 15px; color: #38bdf8; font-family: 'Courier New', monospace; font-size: 0.8rem; font-weight: 700; }
                .viewer-actions { display: flex; gap: 10px; }

                .action-button {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    cursor: pointer;
                    transition: 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .action-button:hover { background: #38bdf8; color: var(--bg-dark); }
                .action-button.close:hover { background: #ef4444; }

                .viewer-body {
                    padding: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: var(--bg-dark);
                    overflow: auto;
                    max-height: 70vh;
                }

                .viewer-body img { 
                    max-width: 100%; 
                    height: auto; 
                    border-radius: 8px; 
                    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
                    transition: transform 0.3s ease;
                }

                .viewer-footer {
                    padding: 20px 30px;
                    background: rgba(255, 255, 255, 0.02);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .security-tag { font-family: 'Courier New', monospace; font-size: 0.75rem; color: #10b981; font-weight: 700; }
                .close-action-btn { background: #ef4444; color: #fff; border: none; padding: 10px 25px; border-radius: 8px; font-weight: 700; cursor: pointer; transition: 0.3s; }
                .close-action-btn:hover { background: #dc2626; transform: scale(1.05); }

                @media (max-width: 768px) {
                    .certs-modern { padding: 60px 0; }
                    .timeline-journey::before {
                        left: 20px;
                        transform: none;
                    }
                    .timeline-step {
                        justify-content: flex-start !important;
                        padding-left: 50px !important;
                        padding-right: 0 !important;
                        margin-bottom: 40px;
                    }
                    .timeline-step:last-child {
                        margin-bottom: 0;
                    }
                    .cert-module {
                        width: 100% !important;
                    }
                    .timeline-dot {
                        left: 20px !important;
                        transform: translate(-50%, -50%);
                    }
                    .timeline-connector {
                        left: 20px !important;
                        right: auto !important;
                        width: 30px !important;
                        background: rgba(56, 189, 248, 0.4) !important;
                    }
                    .module-img-area { height: 180px; }
                    .viewer-body { padding: 15px; }
                    .viewer-container { border-radius: 16px; }
                    .viewer-header { padding: 15px 20px; }
                }

                @media (max-width: 480px) {
                    .certs-modern { padding: 40px 0; }
                    .timeline-step {
                        padding-left: 40px !important;
                        margin-bottom: 30px;
                    }
                    .timeline-journey::before { left: 15px; }
                    .timeline-dot { left: 15px !important; width: 14px !important; height: 14px !important; }
                    .timeline-connector { left: 15px !important; width: 25px !important; }
                    .module-body { padding: 16px; }
                    .module-img-area { height: 150px; }
                    .cert-title { font-size: 1.05rem; word-break: break-word; }
                    .cert-desc { font-size: 0.82rem; }
                    .issuer-tag { font-size: 0.6rem; }
                    .view-cert-btn { font-size: 0.75rem; padding: 8px 14px; }
                    .discovery-center { width: 100%; }
                    .cyber-btn { width: 100%; }
                    .viewer-container { width: 95%; }
                    .viewer-header { padding: 12px 15px; flex-wrap: wrap; gap: 8px; }
                    .viewer-body { padding: 10px; }
                }
            `}</style>
        </section >
    );
};

export default Certifications;
