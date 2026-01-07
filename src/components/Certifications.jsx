import { useState } from 'react';
import { FaEye, FaTimes, FaRedo } from 'react-icons/fa';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

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

    const [showAll, setShowAll] = useState(false);
    const [rotation, setRotation] = useState(0);

    const visibleCerts = showAll ? certs : certs.slice(0, 3);

    const openModal = (image) => {
        setSelectedCert(image);
        setRotation(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'auto';
    };

    const rotateImage = (e) => {
        e.stopPropagation();
        setRotation(prev => prev + 90);
    };

    return (
        <section id="certifications" className="section certs-section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="cert-grid">
                    {visibleCerts.map((cert, i) => (
                        <div key={i} className="cert-card" onClick={() => openModal(cert.image)}>
                            <div className="cert-img-wrapper">
                                <img src={cert.image} alt={cert.name} loading="lazy" />
                                <div className="cert-overlay">
                                    <FaEye className="view-icon" />
                                </div>
                            </div>
                            <div className="cert-content">
                                <div className="cert-badge">{cert.issuer}</div>
                                <h4>{cert.name}</h4>
                                <p>{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-all-container">
                    <button className="btn btn-primary" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'View All Certifications'}
                    </button>
                </div>
            </div>

            {selectedCert && (
                <div className="cert-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-controls">
                            <button className="control-btn" onClick={rotateImage} title="Rotate Image">
                                <FaRedo />
                            </button>
                            <button className="control-btn" onClick={closeModal} title="Close">
                                <FaTimes />
                            </button>
                        </div>
                        <img
                            src={selectedCert}
                            alt="Certificate Preview"
                            style={{ transform: `rotate(${rotation}deg)` }}
                        />
                    </div>
                </div>
            )}

            <style>{`
                :root {
                    --gold-accent: #FFD700;
                    --gold-glow: rgba(255, 215, 0, 0.2);
                }

                .cert-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 24px;
                }

                .cert-card {
                    background: rgba(0, 0, 0, 0.85); /* Darker/Black background */
                    border: 1px solid rgba(255, 215, 0, 0.1);
                    border-radius: 16px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.4s ease;
                    group: 1;
                    position: relative;
                    backdrop-filter: blur(10px);
                }

                .cert-card:hover {
                    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.15);
                    transform: translateY(-5px);
                    border-color: rgba(255, 215, 0, 0.4);
                    background: #000;
                }

                .cert-img-wrapper {
                    width: 100%;
                    height: 200px;
                    position: relative;
                    overflow: hidden;
                    background: #0f0f0f;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .cert-img-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: fill; /* Ensures full certificate is visible */
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0.9;
                }

                .cert-card:hover .cert-img-wrapper img {
                    transform: scale(1.1);
                    opacity: 1;
                }

                .cert-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .cert-card:hover .cert-overlay {
                    opacity: 1;
                }

                .view-icon {
                    font-size: 1.8rem;
                    color: var(--gold-accent);
                    transform: scale(0.5);
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    filter: drop-shadow(0 0 10px var(--gold-accent));
                }

                .cert-card:hover .view-icon {
                    transform: scale(1);
                }

                .cert-content {
                    padding: 24px;
                    position: relative;
                }

                .cert-badge {
                    display: inline-block;
                    font-size: 0.7rem;
                    padding: 6px 12px;
                    background: linear-gradient(90deg, rgba(255, 215, 0, 0.1), transparent);
                    color: var(--gold-accent);
                    border-left: 2px solid var(--gold-accent);
                    margin-bottom: 12px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .cert-content h4 {
                    font-size: 1.2rem;
                    color: #fff;
                    margin-bottom: 10px;
                    font-weight: 600;
                    line-height: 1.4;
                    font-family: 'Outfit', sans-serif;
                }

                .cert-content p {
                    font-size: 0.95rem;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.6;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .view-all-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 50px;
                }

                .btn {
                    padding: 14px 36px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 1px solid var(--gold-accent);
                    background: transparent;
                    color: var(--gold-accent);
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .btn:hover {
                    background: var(--gold-accent);
                    color: #000;
                    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
                    transform: translateY(-3px);
                }

                .cert-modal {
                    position: fixed;
                    inset: 0;
                    z-index: 1000;
                    background: rgba(0, 0, 0, 0.95);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    animation: fadeIn 0.3s ease;
                    backdrop-filter: blur(10px);
                }

                .modal-content {
                    position: relative;
                    max-width: 900px;
                    width: 100%;
                    background: transparent;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .modal-content img {
                    width: auto;
                    height: auto;
                    max-width: 100%;
                    max-height: 85vh;
                    object-fit: contain;
                    border-radius: 8px;
                    box-shadow: 0 0 50px rgba(255, 215, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: transform 0.3s ease;
                }

                .modal-controls {
                    position: absolute;
                    top: -60px;
                    right: 0;
                    display: flex;
                    gap: 15px;
                    z-index: 10;
                }

                .control-btn {
                    background: rgba(0, 0, 0, 0.5);
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    font-size: 1.2rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    backdrop-filter: blur(5px);
                }

                .control-btn:hover {
                    color: var(--gold-accent);
                    border-color: var(--gold-accent);
                    background: rgba(255, 215, 0, 0.1);
                    transform: scale(1.1);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .cert-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .modal-controls {
                        top: -50px;
                        right: 10px;
                    }
                }
            `}</style>
        </section >
    );
};

export default Certifications;
