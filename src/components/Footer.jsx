import { Link } from 'react-router-dom';

import { portfolioData } from '../data/portfolioData.jsx';

const Footer = () => {
    const { personal } = portfolioData;
    return (
        <footer className="cyber-footer">
            <div className="footer-status-bar">
                <div className="footer-links-row">
                    <Link to="/about" className="f-link">Profile</Link>
                    <a href="https://tryhackme.com/p/Sajidinamdar" target="_blank" rel="noreferrer" className="f-link">TryHackMe</a>
                    <a href="https://github.com/sajidinamdar" target="_blank" rel="noreferrer" className="f-link">GitHub</a>
                    <a href="https://www.linkedin.com/in/sajidinamdar-sec/" target="_blank" rel="noreferrer" className="f-link">LinkedIn</a>
                    <a href="https://www.youtube.com/@sajidinamdar" target="_blank" rel="noreferrer" className="f-link">YouTube</a>
                </div>
                <div className="copyright-bit">
                    © 2025 Sajid Inamdar
                </div>
            </div>

            <style>{`
                .cyber-footer {
                    background: var(--bg-dark);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 15px 40px;
                    width: 100%;
                }

                .footer-status-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1400px;
                    margin: 0 auto;
                    font-family: 'Courier New', monospace;
                    font-size: 0.75rem;
                    color: #64748b;
                }

                .status-bit {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .status-label {
                    font-weight: 700;
                    letter-spacing: 1px;
                }

                .status-value {
                    color: #10b981;
                    font-weight: 800;
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background: #10b981;
                    border-radius: 50%;
                    box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);
                    flex-shrink: 0;
                }

                .footer-links-row {
                    display: flex;
                    gap: 20px;
                }

                .f-link {
                    color: #94a3b8;
                    text-decoration: none;
                    transition: 0.3s;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .f-link:hover {
                    color: #38bdf8;
                    text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
                }

                .copyright-bit {
                    font-weight: 600;
                    opacity: 0.6;
                }

                @media (max-width: 768px) {
                    .cyber-footer { padding: 20px 15px; }
                    .footer-status-bar {
                        flex-direction: column;
                        gap: 15px;
                        text-align: center;
                    }
                    .footer-links-row {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 12px 20px;
                    }
                    .status-bit { justify-content: center; }
                    .copyright-bit { order: 3; font-size: 0.7rem; }
                }

                @media (max-width: 480px) {
                    .footer-links-row {
                        gap: 8px 15px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
