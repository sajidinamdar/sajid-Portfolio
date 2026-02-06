import { useState, useEffect } from 'react';
import { FaEye, FaTimes, FaRedo } from 'react-icons/fa';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [rotation, setRotation] = useState(0);

    const certs = [
        { name: "Cyber Security 101", image: "/img/Certificates/ethical/cyber security 101.png", issuer: "TryHackMe", description: "Introduction to Cyber Security core concepts." },
        { name: "Pre-Security", image: "/img/Certificates/ethical/pre sec.png", issuer: "TryHackMe", description: "Foundational knowledge for cybersecurity paths." },
        { name: "Kali Linux", image: "/img/Certificates/ethical/kali.png", issuer: "TryHackMe", description: "Mastering the Kali Linux operating system." },
        { name: "Cyber Security", image: "/img/Certificates/ethical/cyber.png", issuer: "Certificate of Completion", description: "Comprehensive Cyber Security training." },
        { name: "Participation", image: "/img/Certificates/ethical/partisipation.png", issuer: "Event Participation", description: "Active participation in cybersecurity event." },
        { name: "Python Programming", image: "/img/Certificates/programing/py.jpg", issuer: "Course Completion", description: "Advanced Python programming skills." },
        { name: "SQL Database", image: "/img/Certificates/programing/sql.jpg", issuer: "Course Completion", description: "Database management using SQL." },
        { name: "JavaScript", image: "/img/Certificates/programing/js.png", issuer: "Course Completion", description: "Modern JavaScript development." },
        { name: "CSS Styling", image: "/img/Certificates/programing/css.png", issuer: "Course Completion", description: "Responsive web design with CSS." },
        { name: "Computer Networking", image: "/img/Certificates/programing/computer networking.png", issuer: "Course Completion", description: "Fundamentals of Computer Networking." },
        { name: "Cloud Computing", image: "/img/Certificates/programing/cloud.png", issuer: "Course Completion", description: "Introduction to Cloud technologies." },
        { name: "Generative AI", image: "/img/Certificates/programing/gen ai.png", issuer: "Workshop", description: "Exploring Generative AI technologies." },
        { name: "Video AI", image: "/img/Certificates/programing/video ai.png", issuer: "Workshop", description: "AI in Video processing." },
        { name: "Encoding & Decoding", image: "/img/Certificates/programing/en-decoding.png", issuer: "Workshop", description: "Data encoding and decoding techniques." },
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
            <div className="container relative-z">
                <div className="section-header">
                    <h2 className="section-title-gradient">My Certifications</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="certs-grid">
                    {visibleCerts.map((cert, i) => (
                        <article key={i} className="cert-module luminous-aura" onClick={() => openModal(cert.image)}>

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


                .certs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    margin-bottom: 50px;
                }

                /* CERT MODULE CARD */
                .cert-module {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                    box-shadow: var(--glass-glow);
                }

                .cert-module:hover {
                    border-color: var(--glass-border-hover);
                    transform: translateY(-8px) scale(1.02);
                    background: rgba(30, 41, 59, 0.7);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
                    .glitch-text { font-size: 2.5rem; }
                    .certs-grid { grid-template-columns: 1fr; gap: 20px; }
                    .sub-header { margin-bottom: 40px; }
                    .module-img-area { height: 180px; }
                    .viewer-body { padding: 15px; }
                    .viewer-container { border-radius: 16px; }
                    .viewer-header { padding: 15px 20px; }
                }

                @media (max-width: 480px) {
                    .glitch-text { font-size: 2.2rem; }
                    .module-body { padding: 20px; }
                    .cert-title { font-size: 1.15rem; }
                    .discovery-center { width: 100%; }
                    .cyber-btn { width: 100%; }
                }
            `}</style>
        </section >
    );
};

export default Certifications;
