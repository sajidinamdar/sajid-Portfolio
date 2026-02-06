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
        <section id="contact" className="contact-modern">
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="section-header">
                    <h2 className="section-title-gradient">Contact Me</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="contact-layout-grid">
                    {/* Perspective Card: Contact Info */}
                    <div className="perspective-card info-system luminous-aura">
                        <div className="card-glass-panel">

                            <h3 className="system-title">Contact Details</h3>
                            <p className="system-desc">Bridge the gap. I'm currently prioritizing security-focused projects and modern web ecosystems.</p>

                            <div className="node-links">
                                <a href="mailto:sajitenamdar@gmail.com" className="node-item">
                                    <div className="node-icon">
                                        <i className="fas fa-satellite-dish"></i>
                                    </div>
                                    <div className="node-data">
                                        <span className="label">EMAIL</span>
                                        <span className="value">sajitenamdar@gmail.com</span>
                                    </div>
                                    <div className="node-arrow">
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </a>

                                <a href="#" className="node-item">
                                    <div className="node-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="node-data">
                                        <span className="value">Sangamner, Maharashtra</span>
                                    </div>
                                </a>
                            </div>

                            <div className="neural-network">
                                <h4>Social Links</h4>
                                <div className="neural-links-grid">
                                    {[
                                        { icon: 'fab fa-github', label: 'GITHUB', link: 'https://github.com/sajidinamdar' },
                                        { icon: 'fab fa-linkedin-in', label: 'LINKEDIN', link: 'https://www.linkedin.com/in/sajidinamdar-sec/' },
                                        { icon: 'fas fa-flag', label: 'THM', link: 'https://tryhackme.com/p/Sajidinamdar' },
                                        { icon: 'fab fa-medium', label: 'MEDIUM', link: 'https://medium.com/@sajidinamdar' },
                                        { icon: 'fab fa-instagram', label: 'INSTA', link: 'https://www.instagram.com/sajidinamdar' }
                                    ].map((social, idx) => (
                                        <a key={idx} href={social.link} target="_blank" rel="noreferrer" className="neural-link-item">
                                            <i className={social.icon}></i>
                                            <span className="tooltip">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Form: Command Input */}
                    <div className="command-module luminous-aura">
                        <form ref={form} className="cyber-form" onSubmit={handleSubmit}>

                            <div className="form-content">
                                <div className="input-row">
                                    <div className="input-field-wrap">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder=" "
                                            required
                                        />
                                        <label>Your Name</label>
                                        <div className="input-focus-line"></div>
                                    </div>
                                    <div className="input-field-wrap">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder=" "
                                            required
                                        />
                                        <label>Email Address</label>
                                        <div className="input-focus-line"></div>
                                    </div>
                                </div>

                                <div className="input-field-wrap text-area-wrap">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder=" "
                                        rows="6"
                                        required
                                    ></textarea>
                                    <label>Your Message</label>
                                    <div className="input-focus-line"></div>
                                </div>

                                <button type="submit" className="transmission-btn" disabled={isSending}>
                                    <span className="btn-glitch-content">
                                        {isSending ? 'Sending...' : 'Send Message'}
                                    </span>
                                    <div className="btn-background"></div>
                                    <i className={isSending ? 'fas fa-sync fa-spin' : 'fas fa-bolt'}></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-modern {
                    padding: var(--section-padding) 0;
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                }

                .cyber-grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black, transparent 80%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; }


                .contact-layout-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 32px;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                /* GLASS CARD INFO BOX */
                .perspective-card {
                    perspective: 1000px;
                }

                .card-glass-panel {
                    background: var(--glass-bg);
                    backdrop-filter: blur(25px);
                    -webkit-backdrop-filter: blur(25px);
                    border: 1px solid var(--glass-border);
                    border-radius: 24px;
                    padding: clamp(20px, 5vw, 40px);
                    height: 100%;
                    box-shadow: var(--glass-glow);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .card-glass-panel::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 50%);
                    pointer-events: none;
                }


                .system-title {
                    font-size: 1.8rem;
                    color: #fff;
                    margin-bottom: 12px;
                }

                .system-desc {
                    color: #94a3b8;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 40px;
                }

                .node-links {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    margin-bottom: 40px;
                }

                .node-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 18px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .node-item:hover {
                    background: rgba(56, 189, 248, 0.08);
                    border-color: rgba(56, 189, 248, 0.3);
                    transform: translateX(5px);
                }

                .node-icon {
                    width: 45px;
                    height: 45px;
                    background: #0f172a;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #38bdf8;
                    font-size: 1.2rem;
                    box-shadow: inset 0 0 10px rgba(56, 189, 248, 0.1);
                }

                .node-data { flex: 1; display: flex; flex-direction: column; }
                .node-data .label { font-size: 0.65rem; color: #64748b; font-weight: 700; letter-spacing: 1px; }
                .node-data .value { font-size: 0.95rem; color: #e2e8f0; font-family: 'Courier New', monospace; }

                .node-arrow { color: rgba(255, 255, 255, 0.2); transition: 0.3s; }
                .node-item:hover .node-arrow { color: #38bdf8; transform: translateX(3px); }

                /* NEURAL SOCIALS */
                .neural-network h4 {
                    font-size: 0.8rem;
                    color: #e2e8f0;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .neural-links-grid {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .neural-link-item {
                    width: 42px;
                    height: 42px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                    text-decoration: none;
                    position: relative;
                    transition: all 0.4s ease;
                }

                .neural-link-item:hover {
                    background: #38bdf8;
                    color: var(--bg-dark);
                    border-color: #38bdf8;
                    transform: translateY(-5px);
                    box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
                }

                .tooltip {
                    position: absolute;
                    bottom: 120%;
                    left: 50%;
                    transform: translateX(-50%) translateY(10px);
                    background: #fff;
                    color: #000;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.65rem;
                    font-weight: 800;
                    opacity: 0;
                    pointer-events: none;
                    transition: 0.3s;
                    white-space: nowrap;
                }

                .neural-link-item:hover .tooltip {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }

                /* FORM MODULE */
                .command-module {
                    display: flex;
                    flex-direction: column;
                }

                .cyber-form {
                    background: rgba(2, 6, 23, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .terminal-header {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 15px 25px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .terminal-dots { display: flex; gap: 6px; min-height: 10px; }
                .terminal-title { font-family: 'Courier New', monospace; font-size: 0.75rem; color: #64748b; }

                .form-content { padding: 40px; }

                .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

                .input-field-wrap {
                    position: relative;
                    margin-bottom: 30px;
                }

                .input-field-wrap input,
                .input-field-wrap textarea {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 15px 20px;
                    color: #fff;
                    font-size: 1rem;
                    transition: 0.3s;
                }

                .input-field-wrap label {
                    position: absolute;
                    top: 15px;
                    left: 20px;
                    color: #64748b;
                    pointer-events: none;
                    transition: 0.3s;
                    font-size: 0.85rem;
                    letter-spacing: 1px;
                }

                .input-focus-line {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: #38bdf8;
                    transition: 0.4s;
                    transform: translateX(-50%);
                }

                .input-field-wrap input:focus,
                .input-field-wrap textarea:focus {
                    background: rgba(56, 189, 248, 0.05);
                    border-color: rgba(56, 189, 248, 0.3);
                    outline: none;
                }

                .input-field-wrap input:focus + label,
                .input-field-wrap textarea:focus + label,
                .input-field-wrap input:not(:placeholder-shown) + label,
                .input-field-wrap textarea:not(:placeholder-shown) + label {
                    top: -25px;
                    left: 5px;
                    font-size: 0.7rem;
                    color: #38bdf8;
                    font-weight: 700;
                }

                .input-field-wrap input:focus ~ .input-focus-line,
                .input-field-wrap textarea:focus ~ .input-focus-line {
                    width: 100%;
                }

                /* TRANSMISSION BUTTON */
                .transmission-btn {
                    width: 100%;
                    padding: 18px;
                    background: transparent;
                    border: none;
                    border-radius: 12px;
                    color: #fff;
                    font-weight: 800;
                    font-size: 1rem;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    letter-spacing: 2px;
                }

                .btn-background {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, #38bdf8, #818cf8);
                    opacity: 0.8;
                    transition: 0.4s;
                }

                .transmission-btn:hover .btn-background {
                    opacity: 1;
                    filter: brightness(1.1);
                }

                .btn-glitch-content { position: relative; z-index: 2; }
                .transmission-btn i { position: relative; z-index: 2; transition: 0.4s; }
                .transmission-btn:hover i { transform: scale(1.2) rotate(15deg); }

                @keyframes pulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }

                /* RESPONSIVENESS */
                @media (max-width: 1024px) {
                    .contact-layout-grid {
                        grid-template-columns: 1fr;
                        max-width: 700px;
                    }
                }

                @media (max-width: 768px) {
                    .contact-modern { padding: 60px 0; }
                    .form-content { padding: clamp(20px, 5vw, 30px); }
                    .node-item { padding: 15px; }
                    .node-icon { width: 40px; height: 40px; font-size: 1rem; }
                    .input-row { grid-template-columns: 1fr; gap: 0; }
                }

                @media (max-width: 480px) {
                    .contact-head { margin-bottom: 40px; }
                    .neural-links-grid { justify-content: center; }
                    .transmission-btn { padding: 16px; font-size: 0.9rem; }
                    .system-title { font-size: 1.5rem; }
                }

                @media (max-width: 350px) {
                    .card-glass-panel { padding: 15px; }
                    .node-item { padding: 12px; gap: 10px; }
                    .node-data .value { font-size: 0.8rem; }
                    .system-title { font-size: 1.3rem; }
                }
            `}</style>
        </section>
    );
};

export default Contact;
