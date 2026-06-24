const Footer = () => {
    return (
        <footer className="cyber-footer">
            <div className="footer-status-bar">
                <div className="footer-links-row">
                    <a href="https://github.com/sajidinamdar" target="_blank" rel="noreferrer" className="f-social-icon" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sajidinamdar-sec/" target="_blank" rel="noreferrer" className="f-social-icon" title="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://tryhackme.com/p/Sajidinamdar" target="_blank" rel="noreferrer" className="f-social-icon" title="TryHackMe">
                        <i className="fas fa-flag"></i>
                    </a>
                    <a href="https://medium.com/@sajidinamdar" target="_blank" rel="noreferrer" className="f-social-icon" title="Medium">
                        <i className="fab fa-medium"></i>
                    </a>
                    <a href="https://www.youtube.com/@sajidinamdar" target="_blank" rel="noreferrer" className="f-social-icon" title="YouTube">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>

                <div className="footer-status-msg">
                    <span className="status-dot"></span>
                    <span className="status-text">STATUS: ACTIVE_NODE // LATENCY: MINIMAL</span>
                </div>

                <div className="footer-right-col">
                    <div className="copyright-bit">
                        [© 2026] Sajid Inamdar // All Rights Reserved.
                    </div>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top-cyber" title="cd ~">
                        <span className="btn-bracket">[</span>
                        <span className="btn-label">cd ~</span>
                        <span className="btn-arrow">↑</span>
                        <span className="btn-bracket">]</span>
                    </button>
                </div>
            </div>

            <style>{`
                .cyber-footer {
                    background: var(--bg-dark);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 20px 40px;
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
                    gap: 20px;
                }

                .footer-status-msg {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #94a3b8;
                    letter-spacing: 1px;
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background: #10b981;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
                    flex-shrink: 0;
                    animation: pulse-dot 1.5s infinite alternate;
                }

                @keyframes pulse-dot {
                    0% { opacity: 0.4; box-shadow: 0 0 6px rgba(16, 185, 129, 0.4); }
                    100% { opacity: 1; box-shadow: 0 0 14px rgba(16, 185, 129, 0.8); }
                }

                .footer-links-row {
                    display: flex;
                    gap: 12px;
                }

                .f-social-icon {
                    width: 38px;
                    height: 38px;
                    border: 1px solid rgba(56, 189, 248, 0.15);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #38bdf8;
                    font-size: 1.05rem;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: #090d16;
                }

                .f-social-icon:hover {
                    background: rgba(56, 189, 248, 0.1);
                    color: #38bdf8;
                    border-color: #38bdf8;
                    transform: translateY(-3px);
                    box-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
                }

                .f-social-icon:nth-child(even):hover {
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                    border-color: #10b981;
                    box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
                }

                .footer-right-col {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .copyright-bit {
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                /* BACK TO TOP TERMINAL BUTTON */
                .back-to-top-cyber {
                    background: transparent;
                    border: none;
                    font-family: 'Courier New', monospace;
                    font-size: 0.75rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    color: #38bdf8;
                    padding: 0;
                    transition: all 0.3s ease;
                }

                .back-to-top-cyber .btn-bracket {
                    color: rgba(56, 189, 248, 0.3);
                    transition: all 0.3s ease;
                }

                .back-to-top-cyber .btn-label {
                    color: #fff;
                    padding: 0 2px;
                    transition: all 0.3s ease;
                }

                .back-to-top-cyber .btn-arrow {
                    color: #38bdf8;
                    transition: transform 0.3s ease;
                }

                .back-to-top-cyber:hover .btn-bracket {
                    color: #38bdf8;
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
                }

                .back-to-top-cyber:hover .btn-label {
                    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
                }

                .back-to-top-cyber:hover .btn-arrow {
                    transform: translateY(-2px);
                    color: #fff;
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
                }

                @media (max-width: 968px) {
                    .cyber-footer { padding: 25px 20px; }
                    .footer-status-bar {
                        flex-direction: column;
                        gap: 20px;
                        text-align: center;
                    }
                    .footer-links-row {
                        justify-content: center;
                    }
                    .footer-right-col {
                        flex-direction: column;
                        gap: 15px;
                    }
                }

                @media (max-width: 480px) {
                    .cyber-footer { padding: 20px 16px; }
                    .f-social-icon { width: 34px; height: 34px; font-size: 0.95rem; }
                    .footer-status-msg { font-size: 0.6rem; }
                    .footer-status-msg .status-text { letter-spacing: 0.5px; }
                    .copyright-bit { font-size: 0.65rem; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
