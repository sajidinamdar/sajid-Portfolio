import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-minimal">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        <Link to="/about" className="footer-link">About Me</Link> |
                        <a href="https://tryhackme.com/p/Sajidinamdar" target="_blank" rel="noreferrer" className="footer-link"> Verified TryHackMe Learner</a> |
                        <a href="https://github.com/sajidinamdar" target="_blank" rel="noreferrer" className="footer-link"> GitHub Developer</a> |
                        <a href="https://www.linkedin.com/in/sajidinamdar-sec/" target="_blank" rel="noreferrer" className="footer-link"> LinkedIn Professional</a> |
                        <a href="https://medium.com/@sajidinamdar" target="_blank" rel="noreferrer" className="footer-link"> Medium Blogs</a> |
                        <a href="https://www.youtube.com/@sajidinamdar" target="_blank" rel="noreferrer" className="footer-link"> YouTube Channel</a> |
                        <a href="https://www.instagram.com/sajidinamdar_" target="_blank" rel="noreferrer" className="footer-link"> Instagram Feed</a>
                        <span className="copyright-text"> © 2025 Sajid Inamdar. All Rights Reserved.</span>
                    </p>
                </div>
            </div>

            <style>{`
                .footer-minimal {
                    background: rgba(10, 15, 25, 0.98);
                    border-top: 1px solid rgba(255, 255, 255, 0.03);
                    padding: 16px 0;
                    margin-top: 40px;
                    text-align: center;
                    width: 100%;
                    overflow: hidden;
                }

                .footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                }

                .footer-text {
                    margin: 0;
                    padding: 0;
                    font-size: 0.75rem;
                    color: var(--text-secondary);
                    opacity: 0.9;
                    letter-spacing: 0.3px;
                    line-height: 1.8;
                }

                .footer-link {
                    color: var(--neon-cyan);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-weight: 500;
                    white-space: nowrap;
                }

                .footer-link:hover {
                    color: #fff;
                    text-decoration: underline;
                    text-shadow: 0 0 10px var(--neon-cyan);
                }

                .copyright-text {
                    font-weight: 500;
                    color: var(--text-secondary);
                    opacity: 0.7;
                    margin-left: 8px;
                }

                @media (max-width: 968px) {
                    .footer-minimal {
                        padding: 12px 0;
                        margin-top: 30px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
