import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData.jsx';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const validateField = (name, value) => {
        let error = '';
        if (name === 'name') {
            if (!value.trim()) {
                error = 'Name is required';
            } else if (value.trim().length < 2) {
                error = 'Name must be at least 2 characters';
            }
        }
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) {
                error = 'Email is required';
            } else if (!emailRegex.test(value)) {
                error = 'Enter a valid email address';
            }
        }
        if (name === 'message') {
            if (!value.trim()) {
                error = 'Message is required';
            } else if (value.trim().length < 10) {
                error = 'Message must be at least 10 characters';
            }
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({
                ...prev,
                [name]: error
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const isFormValid = 
        formData.name.trim().length >= 2 && 
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && 
        formData.message.trim().length >= 10 &&
        !errors.name && !errors.email && !errors.message;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;
        setIsSending(true);

        const SERVICE_ID = 'service_placeholder';
        const TEMPLATE_ID = 'template_placeholder';
        const PUBLIC_KEY = 'public_key_placeholder';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setTouched({ name: false, email: false, message: false });
                setErrors({ name: '', email: '', message: '' });
                setIsSending(false);
            }, (error) => {
                console.log('FAILED...', error.text);
                alert('Failed to send message. Please try again later.');
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="contact-modern">
            <div className="cyber-grid-overlay"></div>
            <div className="container relative-z">
                <div className="contact-corner-header">
                    <h2 className="corner-title">./connect_node.sh</h2>
                    <div className="corner-bar"></div>
                </div>

                <div className="contact-layout-grid">
                    {/* Perspective Card: Contact Info */}
                    <div className="perspective-card info-system luminous-aura">
                        <div className="card-glass-panel">

                            <h3 className="system-title">Contact Details</h3>
                            <p className="system-desc">Bridge the gap. I'm currently prioritizing security-focused projects and modern web ecosystems.</p>

                            <div className="node-links">
                                <a href={`mailto:${portfolioData.personal.email}`} className="node-item">
                                    <div className="node-icon">
                                        <i className="fas fa-satellite-dish"></i>
                                    </div>
                                    <div className="node-data">
                                        <span className="label">EMAIL</span>
                                        <span className="value">{portfolioData.personal.email}</span>
                                    </div>
                                    <div className="node-arrow">
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </a>

                                {portfolioData.personal.phone && (
                                    <a href={`tel:${portfolioData.personal.phone}`} className="node-item">
                                        <div className="node-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="node-data">
                                            <span className="label">PHONE</span>
                                            <span className="value">{portfolioData.personal.phone}</span>
                                        </div>
                                        <div className="node-arrow">
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                    </a>
                                )}

                                <div className="node-item">
                                    <div className="node-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="node-data">
                                        <span className="label">LOCATION</span>
                                        <span className="value">{portfolioData.personal.location}</span>
                                    </div>
                                </div>

                                <a href="/pgp-key.txt" target="_blank" rel="noreferrer" className="node-item">
                                    <div className="node-icon">
                                        <i className="fas fa-key"></i>
                                    </div>
                                    <div className="node-data">
                                        <span className="label">PGP PUBLIC KEY</span>
                                        <span className="value">Download/View Key</span>
                                    </div>
                                    <div className="node-arrow">
                                        <i className="fas fa-external-link-alt"></i>
                                    </div>
                                </a>
                            </div>

                            <div className="neural-network">
                                <h4>Social Links</h4>
                                <div className="neural-links-grid">
                                    {[
                                        { icon: 'fab fa-github', label: 'GITHUB', link: portfolioData.personal.github },
                                        { icon: 'fab fa-linkedin-in', label: 'LINKEDIN', link: portfolioData.personal.linkedin },
                                        { icon: 'fas fa-flag', label: 'THM', link: portfolioData.personal.tryhackme },
                                        { icon: 'fab fa-medium', label: 'MEDIUM', link: portfolioData.personal.medium },
                                        { icon: 'fab fa-instagram', label: 'INSTA', link: portfolioData.personal.instagram }
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
                                    <div className={`input-field-wrap ${touched.name && errors.name ? 'has-error' : touched.name && !errors.name ? 'is-valid' : ''}`}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder=" "
                                            required
                                        />
                                        <label>Your Name</label>
                                        <div className="input-focus-line"></div>
                                        {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
                                    </div>
                                    <div className={`input-field-wrap ${touched.email && errors.email ? 'has-error' : touched.email && !errors.email ? 'is-valid' : ''}`}>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder=" "
                                            required
                                        />
                                        <label>Email Address</label>
                                        <div className="input-focus-line"></div>
                                        {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className={`input-field-wrap text-area-wrap ${touched.message && errors.message ? 'has-error' : touched.message && !errors.message ? 'is-valid' : ''}`}>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=" "
                                        rows="6"
                                        required
                                    ></textarea>
                                    <label>Your Message</label>
                                    <div className="input-focus-line"></div>
                                    {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
                                </div>

                                <button 
                                    type="submit" 
                                    className="transmission-btn" 
                                    disabled={isSending || !isFormValid}
                                >
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
                    background-color: var(--bg-dark);
                }

                .cyber-grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(37, 99, 235, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37, 99, 235, 0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black, transparent 80%);
                    pointer-events: none;
                }

                .relative-z { position: relative; z-index: 10; }

                /* CORNER HEADER STYLES */
                .contact-corner-header {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 40px;
                    text-align: left;
                }

                .contact-corner-header .corner-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: clamp(1.6rem, 5vw, 2.6rem);
                    font-weight: 800;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    background: linear-gradient(90deg, #fff 40%, var(--accent-2) 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    position: relative;
                    margin-bottom: 8px;
                }

                .contact-corner-header .corner-bar {
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--accent-2), transparent);
                    box-shadow: 0 0 15px var(--accent-2);
                }

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
                    background: var(--bg-card);
                    border: 1px solid rgba(37, 99, 235, 0.15);
                    border-radius: 12px;
                    padding: 40px;
                    height: 100%;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .system-title {
                    font-size: 1.8rem;
                    color: #fff;
                    margin-bottom: 12px;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 700;
                }

                .system-desc {
                    color: #94a3b8;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 40px;
                    font-family: 'Outfit', sans-serif;
                }

                .node-links {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    margin-bottom: 30px;
                }

                .node-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 18px;
                    background: rgba(15, 23, 42, 0.4);
                    border: 1px solid rgba(37, 99, 235, 0.1);
                    border-radius: 8px;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .node-item:hover {
                    background: rgba(15, 23, 42, 0.8);
                    border-color: rgba(56, 189, 248, 0.35);
                    transform: translateX(5px);
                    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.08);
                }

                .node-icon {
                    width: 45px;
                    height: 45px;
                    background: #090d16;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #38bdf8;
                    font-size: 1.2rem;
                    border: 1px solid rgba(56, 189, 248, 0.15);
                    transition: all 0.3s ease;
                }

                .node-item:hover .node-icon {
                    color: #10b981; /* turns green on row hover */
                    border-color: rgba(16, 185, 129, 0.5);
                    box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
                }

                .node-data { flex: 1; display: flex; flex-direction: column; }
                .node-data .label { font-size: 0.65rem; color: #64748b; font-weight: 700; letter-spacing: 1px; }
                .node-data .value { font-size: 0.95rem; color: #e2e8f0; font-family: 'Courier New', monospace; }

                .node-arrow { color: rgba(255, 255, 255, 0.1); transition: 0.3s; }
                .node-item:hover .node-arrow { color: #10b981; transform: translateX(3px); }

                /* NEURAL SOCIALS */
                .neural-network h4 {
                    font-family: 'Courier New', monospace;
                    font-size: 0.75rem;
                    color: #cbd5e1;
                    margin-bottom: 15px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-weight: 700;
                }

                .neural-links-grid {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .neural-link-item {
                    width: 42px;
                    height: 42px;
                    background: #090d16;
                    border: 1px solid rgba(56, 189, 248, 0.15);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #38bdf8;
                    text-decoration: none;
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .neural-link-item:hover {
                    background: rgba(56, 189, 248, 0.1);
                    color: #fff;
                    border-color: #38bdf8;
                    transform: translateY(-4px);
                    box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
                }

                .neural-link-item:nth-child(even):hover {
                    background: rgba(16, 185, 129, 0.1);
                    border-color: #10b981;
                    color: #fff;
                    box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
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
                    font-family: 'Courier New', monospace;
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
                    background: rgba(15, 23, 42, 0.3);
                    border: 1px solid rgba(37, 99, 235, 0.15);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }

                .form-content { padding: 40px; }

                .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

                .input-field-wrap {
                    position: relative;
                    margin-bottom: 30px;
                }

                .input-field-wrap.has-error input,
                .input-field-wrap.has-error textarea {
                    border-color: #ef4444 !important;
                    background: rgba(239, 68, 68, 0.02) !important;
                }

                .input-field-wrap.is-valid input,
                .input-field-wrap.is-valid textarea {
                    border-color: #10b981 !important;
                    background: rgba(16, 185, 129, 0.02) !important;
                }

                .error-message {
                    color: #ef4444;
                    font-size: 0.7rem;
                    position: absolute;
                    bottom: -20px;
                    left: 5px;
                    font-family: 'Courier New', monospace;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }

                .transmission-btn:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }

                .transmission-btn:disabled .btn-background {
                    background: #334155 !important;
                }

                /* MONOSPACE INPUTS */
                .input-field-wrap input,
                .input-field-wrap textarea {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 15px 20px;
                    color: #fff;
                    font-size: 1rem;
                    transition: 0.3s;
                    font-family: 'Courier New', monospace;
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
                    font-family: 'Courier New', monospace;
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

                /* FOCUS CYBER GLOW LINES */
                .input-field-wrap input:focus,
                .input-field-wrap textarea:focus {
                    background: rgba(56, 189, 248, 0.03);
                    border-color: #38bdf8 !important;
                    box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
                    outline: none;
                }

                /* ALTERNATE INPUT FOCUS TO GREEN */
                .input-field-wrap:nth-child(even) input:focus {
                    background: rgba(16, 185, 129, 0.03);
                    border-color: #10b981 !important;
                    box-shadow: 0 0 12px rgba(16, 185, 129, 0.25);
                }

                .input-field-wrap.text-area-wrap textarea:focus {
                    background: rgba(16, 185, 129, 0.03);
                    border-color: #10b981 !important;
                    box-shadow: 0 0 12px rgba(16, 185, 129, 0.25);
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

                .input-field-wrap:nth-child(even) input:focus + label,
                .input-field-wrap:nth-child(even) input:not(:placeholder-shown) + label {
                    color: #10b981;
                }

                .input-field-wrap.text-area-wrap textarea:focus + label,
                .input-field-wrap.text-area-wrap textarea:not(:placeholder-shown) + label {
                    color: #10b981;
                }

                .input-field-wrap input:focus ~ .input-focus-line,
                .input-field-wrap textarea:focus ~ .input-focus-line {
                    width: 100%;
                }

                .input-field-wrap:nth-child(even) input:focus ~ .input-focus-line {
                    background: #10b981;
                }

                .input-field-wrap.text-area-wrap textarea:focus ~ .input-focus-line {
                    background: #10b981;
                }

                /* TRANSMISSION BUTTON GRADIENT AND GLOW */
                .transmission-btn {
                    width: 100%;
                    padding: 18px;
                    background: transparent;
                    border: none;
                    border-radius: 8px;
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
                    transition: all 0.3s ease;
                    font-family: 'Courier New', monospace;
                }

                .btn-background {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, #2563eb, #38bdf8);
                    opacity: 1;
                    transition: 0.4s;
                }

                .transmission-btn:hover {
                    box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
                    transform: translateY(-2px);
                }

                .transmission-btn:hover .btn-background {
                    filter: brightness(1.15);
                }

                .btn-glitch-content { position: relative; z-index: 2; }
                .transmission-btn i { position: relative; z-index: 2; transition: 0.4s; }
                
                .transmission-btn:hover i {
                    animation: bolt-shake 0.5s ease-in-out infinite alternate;
                }

                /* SHAKING BOLT KEYFRAMES */
                @keyframes bolt-shake {
                    0% { transform: scale(1.2) translate(0, 0) rotate(0deg); }
                    50% { transform: scale(1.3) translate(-1px, -1px) rotate(-10deg); }
                    100% { transform: scale(1.2) translate(1px, 1px) rotate(10deg); }
                }

                @media (max-width: 1024px) {
                    .contact-layout-grid {
                        grid-template-columns: 1fr;
                        max-width: 700px;
                    }
                }

                @media (max-width: 768px) {
                    .contact-modern { padding: 40px 0; }
                    .card-glass-panel { padding: 25px; }
                    .form-content { padding: 25px; }
                    .node-item { padding: 15px; gap: 12px; }
                    .node-icon { width: 38px; height: 38px; font-size: 1rem; }
                    .input-row { grid-template-columns: 1fr; gap: 0; }
                    .system-title { font-size: 1.4rem; }
                    .system-desc { font-size: 0.88rem; margin-bottom: 25px; }
                    .node-data .value { font-size: 0.85rem; word-break: break-all; }
                }

                @media (max-width: 480px) {
                    .contact-modern { padding: 30px 0; }
                    .card-glass-panel { padding: 18px; }
                    .form-content { padding: 18px; }
                    .node-item { padding: 12px; gap: 10px; }
                    .node-icon { width: 34px; height: 34px; font-size: 0.9rem; }
                    .node-data .label { font-size: 0.6rem; }
                    .node-data .value { font-size: 0.78rem; }
                    .neural-links-grid { justify-content: center; flex-wrap: wrap; }
                    .neural-link-item { width: 36px; height: 36px; }
                    .corner-title { font-size: 1.3rem; }
                    .system-title { font-size: 1.2rem; }
                    .system-desc { font-size: 0.82rem; margin-bottom: 20px; }
                    .transmission-btn { padding: 14px; font-size: 0.85rem; letter-spacing: 1px; }
                    .input-field-wrap input,
                    .input-field-wrap textarea { padding: 12px 15px; font-size: 0.9rem; }
                    .input-field-wrap label { font-size: 0.78rem; left: 15px; top: 12px; }
                    .input-field-wrap input:focus + label,
                    .input-field-wrap textarea:focus + label,
                    .input-field-wrap input:not(:placeholder-shown) + label,
                    .input-field-wrap textarea:not(:placeholder-shown) + label { top: -22px; left: 3px; font-size: 0.62rem; }
                    .node-links { gap: 10px; margin-bottom: 20px; }
                }

            `}</style>
        </section>
    );
};

export default Contact;
