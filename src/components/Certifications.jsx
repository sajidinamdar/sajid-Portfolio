import { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';

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

    const openModal = (image) => {
        setSelectedCert(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="certifications" className="section certs-section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="cert-grid">
                    {certs.map((cert, i) => (
                        <div key={i} className="cert-card">
                            <div className="cert-content">
                                <h4>{cert.name}</h4>
                                <span className="issuer">{cert.issuer}</span>
                                <p>{cert.description}</p>
                                <button className="view-btn" onClick={() => openModal(cert.image)}>
                                    <FaEye /> View Certificate
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCert && (
                <div className="cert-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <img src={selectedCert} alt={`${certs.find(c => c.image === selectedCert)?.name || 'Certificate'} - ${certs.find(c => c.image === selectedCert)?.issuer || 'Professional Certification'} by Sajid Inamdar`} />
                    </div>
                </div>
            )}

            <style>{`
                .cert-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: var(--grid-gap);
                }

                .cert-card {
                    background: rgba(30, 41, 59, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .cert-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 16px 32px -8px rgba(0, 243, 255, 0.15);
                    border-color: var(--neon-cyan);
                }

                .certs-section {
                    padding: var(--section-padding) 0;
                }
                .cert-content {
                    padding: var(--card-padding);
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-sm);
                }

                .cert-content h4 {
                    color: #fff;
                    font-size: 1.2rem;
                    font-weight: 600;
                    line-height: 1.4;
                }

                .issuer {
                    color: var(--neon-cyan);
                    font-size: 0.9rem;
                    font-weight: 500;
                    display: block;
                }

                .cert-content p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.7;
                    flex-grow: 1;
                }

                .view-btn {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #fff;
                    padding: var(--spacing-sm);
                    border-radius: 8px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--spacing-xs);
                    transition: 0.3s;
                    font-weight: 500;
                    margin-top: auto;
                }

                .view-btn:hover {
                    background: var(--neon-cyan);
                    color: #000;
                    border-color: var(--neon-cyan);
                    transform: translateY(-2px);
                }

                .cert-modal {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.92);
                    z-index: 2000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: var(--card-padding);
                    backdrop-filter: blur(8px);
                    animation: fadeIn 0.3s ease;
                }

                .modal-content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90vh;
                    box-shadow: 0 0 60px rgba(0, 243, 255, 0.25);
                    border-radius: 12px;
                    overflow: hidden;
                }

                .modal-content img {
                    max-width: 100%;
                    max-height: 90vh;
                    display: block;
                    object-fit: contain;
                }

                .close-btn {
                    position: absolute;
                    top: var(--spacing-sm);
                    right: var(--spacing-sm);
                    background: rgba(0, 0, 0, 0.7);
                    color: #fff;
                    border: none;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    font-size: 1.3rem;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.3s;
                    z-index: 10;
                }

                .close-btn:hover {
                    background: var(--neon-cyan);
                    color: #000;
                    transform: rotate(90deg);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @media (max-width: 768px) {
                    .cert-grid {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }

                    .cert-content {
                        padding: 15px;
                        gap: 10px;
                    }

                    .cert-content h4 {
                        font-size: 1.1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Certifications;
