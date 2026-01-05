import { Helmet } from 'react-helmet-async';

const CertificationsPage = () => {
    // Placeholder data
    const certs = [
        {
            name: "CompTIA Security+ (In Progress)",
            issuer: "CompTIA",
            date: "2026",
            description: "Foundational cybersecurity certification covering core security principles."
        },
        {
            name: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            date: "2024",
            description: "Basics of network security and cyber threats."
        },
        {
            name: "Python for Everybody",
            issuer: "University of Michigan (Coursera)",
            date: "2024",
            description: "Comprehensive Python programming course."
        }
    ];

    return (
        <section className="page-section certs-page">
            <Helmet>
                <title>Certifications - Sajid Inamdar</title>
                <meta name="description" content="Certifications and achievements of Sajid Inamdar." />
            </Helmet>
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="timeline">
                    {certs.map((cert, index) => (
                        <div key={index} className="cert-item">
                            <div className="cert-content">
                                <h3>{cert.name}</h3>
                                <h4>{cert.issuer}</h4>
                                <span className="cert-date">{cert.date}</span>
                                <p>{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .certs-page { padding-top: 100px; padding-bottom: 50px; }
                .timeline { position: relative; max-width: 800px; margin: 0 auto; }
                .timeline::before {
                    content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 2px;
                    background: var(--neon-cyan);
                }
                .cert-item { margin-left: 2rem; margin-bottom: 2rem; position: relative; }
                .cert-item::before {
                    content: ''; position: absolute; left: -2.4rem; top: 0.5rem;
                    width: 1rem; height: 1rem; background: var(--bg-dark);
                    border: 2px solid var(--neon-cyan); border-radius: 50%;
                }
                .cert-content {
                    background: rgba(30, 41, 59, 0.4); padding: 1.5rem; border-radius: 8px;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .cert-content h3 { color: #fff; margin-bottom: 0.5rem; }
                .cert-content h4 { color: var(--neon-cyan); margin-bottom: 0.5rem; }
                .cert-date { display: inline-block; font-size: 0.85rem; color: #8892b0; margin-bottom: 1rem; }
            `}</style>
        </section>
    );
};

export default CertificationsPage;
