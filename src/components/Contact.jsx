import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Replace these with your actual EmailJS IDs
        const SERVICE_ID = 'service_placeholder';
        const TEMPLATE_ID = 'template_placeholder';
        const PUBLIC_KEY = 'public_key_placeholder';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setIsSending(false);
            }, (error) => {
                console.log('FAILED...', error.text);
                alert('Failed to send message. Please try again later.');
                setIsSending(false);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-bg-glow"></div>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle">Have a project in mind? Let's build something extraordinary.</p>
                </div>

                <div className="contact-wrapper">
                    {/* Contact Info Card */}
                    <div className="contact-card info-card">
                        <div className="card-content">
                            <h3>Contact Information</h3>
                            <p className="card-desc">I'm open for freelance projects, security audits, and backend development roles.</p>

                            <div className="contact-details">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sajidinamdar@gmail.com" target="_blank" rel="noreferrer" className="contact-item">
                                    <div className="icon-box">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="item-info">
                                        <span>Email Me</span>
                                        <span className="value">sajidinamdar@gmail.com</span>
                                    </div>
                                </a>

                                <a href="https://www.google.com/maps/search/?api=1&query=Sangamner,+Maharashtra" target="_blank" rel="noreferrer" className="contact-item">
                                    <div className="icon-box">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="item-info">
                                        <span>Location</span>
                                        <span className="value">Sangamner, Maharashtra</span>
                                    </div>
                                </a>
                            </div>

                            <div className="social-connect">
                                <h4>Follow Me</h4>
                                <div className="social-icons">
                                    <a href="https://github.com/sajidinamdar" target="_blank" rel="noreferrer" aria-label="GitHub">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sajidinamdar-sec/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://tryhackme.com/p/Sajidinamdar" target="_blank" rel="noreferrer" aria-label="TryHackMe">
                                        <i className="fas fa-flag"></i>
                                    </a>
                                    <a href="https://medium.com/@sajidinamdar" target="_blank" rel="noreferrer" aria-label="Medium">
                                        <i className="fab fa-medium"></i>
                                    </a>
                                    <a href="https://www.instagram.com/sajidinamdar" target="_blank" rel="noreferrer" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-header">
                            <h3>Send a Message</h3>
                        </div>

                        <div className="form-grid">
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                />
                                <label>Your Name</label>
                            </div>

                            <div className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                />
                                <label>Your Email</label>
                            </div>
                        </div>

                        <div className="input-group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder=" "
                                rows="5"
                                required
                            ></textarea>
                            <label>Your Message</label>
                        </div>

                        <button type="submit" className="submit-btn" disabled={isSending}>
                            <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                            <i className={isSending ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'}></i>
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: 80px 0;
                    position: relative;
                    overflow: hidden;
                }

                .contact-bg-glow {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 0;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 50px;
                    position: relative;
                    z-index: 1;
                }

                .section-subtitle {
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                    margin-top: 10px;
                }

                .contact-wrapper {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 30px;
                    position: relative;
                    z-index: 1;
                    max-width: 1000px; /* Reduced max-width for better proportion */
                    margin: 0 auto;
                }

                /* Info Card */
                .contact-card {
                    background: rgba(30, 41, 59, 0.6); /* Slightly more opaque for 'normal' look */
                    border: 1px solid rgba(255, 255, 255, 0.08); /* Softer border */
                    border-radius: 16px;
                    overflow: hidden;
                    height: 100%;
                    backdrop-filter: blur(12px);
                    position: relative;
                }

                .contact-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(90deg, #38bdf8, transparent); /* Sky blue gradient */
                }

                .card-content {
                    padding: 32px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card-content h3 {
                    color: #fff;
                    font-size: 1.4rem;
                    margin-bottom: 10px;
                    font-weight: 600;
                }

                .card-desc {
                    color: #94a3b8; /* Slate-400 */
                    line-height: 1.6;
                    margin-bottom: 30px;
                    font-size: 0.95rem;
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-bottom: 30px;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    text-decoration: none;
                    group: 1;
                }

                .icon-box {
                    width: 44px;
                    height: 44px;
                    background: rgba(56, 189, 248, 0.1); /* Sky blue tint */
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #38bdf8; /* Sky blue */
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                }

                .contact-item:hover .icon-box {
                    background: #38bdf8;
                    color: #0f172a; /* Dark slate text */
                    transform: rotate(-5deg);
                }

                .item-info {
                    display: flex;
                    flex-direction: column;
                }

                .item-info span:first-child {
                    color: #94a3b8;
                    font-size: 0.8rem;
                    margin-bottom: 2px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .item-info .value {
                    color: #e2e8f0; /* Slate-200 */
                    font-weight: 500;
                    font-size: 1rem;
                    transition: color 0.3s ease;
                }

                .contact-item:hover .value {
                    color: #38bdf8;
                }

                .social-connect h4 {
                    color: #e2e8f0;
                    font-size: 1rem;
                    margin-bottom: 16px;
                    font-weight: 600;
                }

                .social-icons {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .social-icons a {
                    width: 38px;
                    height: 38px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08); /* Softer border */
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .social-icons a:hover {
                    background: #38bdf8;
                    color: #0f172a;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 189, 248, 0.2);
                    border-color: #38bdf8;
                }

                /* Form */
                .contact-form {
                    background: rgba(30, 41, 59, 0.6); /* Matching card background */
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 32px;
                    backdrop-filter: blur(12px);
                }

                .form-header h3 {
                    color: #fff;
                    font-size: 1.4rem;
                    margin-bottom: 24px;
                    font-weight: 600;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .input-group {
                    position: relative;
                    margin-bottom: 24px;
                }

                .input-group input,
                .input-group textarea {
                    width: 100%;
                    padding: 12px 16px; /* Added horizontal padding back for better feel */
                    background: rgba(15, 23, 42, 0.3); /* Slight background for inputs */
                    border: 1px solid rgba(255, 255, 255, 0.08); /* Full border */
                    border-radius: 8px; /* Rounded corners */
                    color: #fff;
                    font-size: 0.95rem;
                    font-family: inherit;
                    transition: all 0.3s ease;
                }

                .input-group textarea {
                    resize: vertical;
                    min-height: 120px;
                }

                /* Floating label style adjusted for bordered inputs */
                .input-group label {
                    position: absolute;
                    top: 13px;
                    left: 16px;
                    color: #94a3b8;
                    font-size: 0.95rem;
                    pointer-events: none;
                    transition: all 0.3s ease;
                    background: transparent;
                }

                .input-group input:focus,
                .input-group textarea:focus {
                    border-color: #38bdf8;
                    background: rgba(15, 23, 42, 0.5);
                    box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.2);
                }

                .input-group input:focus + label,
                .input-group textarea:focus + label,
                .input-group input:not(:placeholder-shown) + label,
                .input-group textarea:not(:placeholder-shown) + label {
                    top: -22px;
                    left: 0;
                    font-size: 0.85rem;
                    color: #38bdf8;
                    font-weight: 500;
                }

                .submit-btn {
                    width: auto; /* Buttons width adjusted */
                    min-width: 160px;
                    align-self: flex-start;
                    padding: 14px 28px;
                    background: #38bdf8; /* Solid Modern Blue */
                    border: none;
                    border-radius: 8px;
                    color: #0f172a;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    margin-top: 10px;
                }

                .submit-btn:hover {
                    background: #0ea5e9; /* Darker blue on hover */
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
                }

                .submit-btn span {
                    letter-spacing: 0.5px;
                }

                @media (max-width: 968px) {
                    .contact-wrapper {
                        grid-template-columns: 1fr;
                        max-width: 600px;
                    }

                    .contact-form {
                        padding: 24px;
                    }
                }

                @media (max-width: 600px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
