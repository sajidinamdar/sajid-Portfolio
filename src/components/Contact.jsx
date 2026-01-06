import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
            <div className="container">
                <h2 className="section-title">Let's Connect</h2>
                <div className="contact-layout">
                    {/* LEFT COLUMN - Contact Info */}
                    <div className="contact-info">
                        <h3 className="contact-subtitle">
                            Get In Touch
                        </h3>
                        <p className="contact-intro">
                            I'm always open to discussing new projects, security audits, or backend opportunities.
                        </p>

                        {/* Contact Details Card */}
                        <div className="info-card">
                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <h3>Email</h3>
                                    <a href="mailto:inamdarsajid01@gmail.com">inamdarsajid01@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-text">
                                    <h3>Location</h3>
                                    <p>Sangamner, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="social-links">
                            <a href="https://github.com/sajidinamdar" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub Profile">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/sajidinamdar-sec/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn Profile">
                                <i className="fab fa-linkedin-in"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://tryhackme.com/p/Sajidinamdar" target="_blank" rel="noreferrer" className="social-btn" aria-label="TryHackMe Profile">
                                <i className="fas fa-flag"></i>
                                <span>TryHackMe</span>
                            </a>
                            <a href="https://www.instagram.com/sajidinamdar" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram Profile">
                                <i className="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                            <a href="https://medium.com/@sajidinamdar" target="_blank" rel="noreferrer" className="social-btn" aria-label="Medium Blogs">
                                <i className="fab fa-medium"></i>
                                <span>Medium</span>
                            </a>
                            <a href="https://dev.to/sajidinamdar" target="_blank" rel="noreferrer" className="social-btn" aria-label="Dev.to Profile">
                                <i className="fab fa-dev"></i>
                                <span>Dev.to</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or idea..."
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <i className="fas fa-paper-plane"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: 90px 0;
                }

                .contact-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: start;
                }

                /* ========== LEFT COLUMN ========== */
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .contact-heading {
                    font-size: 2.75rem;
                    font-weight: 700;
                    color: #fff;
                    line-height: 1.2;
                    margin: 0;
                    letter-spacing: -0.5px;
                }

                .contact-intro {
                    font-size: 1.05rem;
                    line-height: 1.75;
                    color: var(--text-secondary);
                    margin: 0;
                }

                /* Info Card */
                .info-card {
                    background: rgba(30, 41, 59, 0.3);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .info-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                }

                .info-icon {
                    width: 48px;
                    height: 48px;
                    background: rgba(0, 243, 255, 0.1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--neon-cyan);
                    font-size: 1.3rem;
                    flex-shrink: 0;
                }

                .info-text h3 {
                    font-size: 0.9rem;
                    color: #fff;
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .info-text p,
                .info-text a {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin: 0;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .info-text a:hover {
                    color: var(--neon-cyan);
                }

                /* Social Links */
                .social-links {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                }

                .social-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 14px 20px;
                    background: rgba(30, 41, 59, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                }

                .social-btn i {
                    font-size: 1.1rem;
                    transition: transform 0.3s ease;
                }

                .social-btn:hover {
                    background: rgba(30, 41, 59, 0.5);
                    border-color: var(--neon-cyan);
                    color: var(--neon-cyan);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0, 243, 255, 0.15);
                }

                .social-btn:hover i {
                    transform: scale(1.1);
                }

                /* ========== RIGHT COLUMN - FORM ========== */
                .contact-form-wrapper {
                    background: rgba(30, 41, 59, 0.3);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 32px;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .form-group label {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 14px 18px;
                    background: rgba(15, 23, 42, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 10px;
                    color: #fff;
                    font-size: 1rem;
                    font-family: inherit;
                    transition: all 0.3s ease;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--neon-cyan);
                    box-shadow: 0 0 0 3px rgba(0, 243, 255, 0.1);
                    background: rgba(15, 23, 42, 0.8);
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 140px;
                }

                .submit-btn {
                    height: 52px;
                    background: linear-gradient(135deg, var(--neon-cyan), var(--accent));
                    color: #000;
                    border: none;
                    border-radius: 10px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 20px rgba(0, 243, 255, 0.3);
                }

                .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(0, 243, 255, 0.5);
                    filter: brightness(1.1);
                }

                .submit-btn:active {
                    transform: translateY(0);
                }

                /* ========== RESPONSIVE ========== */
                @media (max-width: 968px) {
                    .contact-section {
                        padding: var(--section-padding) 0;
                        width: 100%;
                        overflow: hidden;
                    }

                    .contact-layout {
                        grid-template-columns: 1fr;
                        gap: 24px;
                        width: 100%;
                        box-sizing: border-box;
                    }

                    .social-links {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 640px) {
                    .contact-section {
                        padding: var(--section-padding) 10px;
                    }

                    .info-card,
                    .contact-form-wrapper {
                        padding: 15px;
                        width: 100%;
                        box-sizing: border-box;
                    }

                    .form-group input,
                    .form-group textarea {
                        padding: 10px 12px;
                        width: 100%;
                        box-sizing: border-box;
                        font-size: 14px;
                    }

                    .submit-btn {
                        width: 100%;
                        box-sizing: border-box;
                    }
                }

                @media (max-width: 350px) {
                    .info-text a, .info-text p {
                        font-size: 0.85rem;
                        word-break: break-all;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
