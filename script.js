document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navList.classList.toggle('active');
        });
        
        // Close menu when a link is clicked (important for mobile UX)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    navList.classList.remove('active');
                }
            });
        });
    }

    // 2. Dynamic Footer Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Contact Form Placeholder Submission (Simulated)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!contactForm.checkValidity()) {
                formStatus.textContent = "Please fill out all required fields.";
                formStatus.style.color = '#ffa000'; // Amber warning color
                return;
            }

            formStatus.textContent = "Sending message...";
            formStatus.style.color = '#ffc107'; // Gold sending color

            // Simulate form submission success after 2 seconds
            setTimeout(() => {
                formStatus.textContent = "Message sent successfully! Thank you for reaching out.";
                formStatus.style.color = '#ffc107'; // Gold success color
                contactForm.reset();
                
                setTimeout(() => {
                    formStatus.textContent = "";
                }, 5000);
            }, 2000);
        });
    }

    // 4. Background music autoplay (best-effort)
    const bgAudio = document.getElementById('bg-audio');
    const audioToggleBtn = document.getElementById('audioToggle');

    if (bgAudio) {

        const tryPlayAudio = () => {
            bgAudio.play().catch(() => {
                // Autoplay blocked; wait for user interaction
            });
        };

        // Try immediately on load
        tryPlayAudio();

        // Ensure playback once user interacts somewhere on the page
        const unlockAudio = () => {
            tryPlayAudio();
            document.removeEventListener('click', unlockAudio);
        };
        if (!audioToggleBtn) {
            document.addEventListener('click', unlockAudio);
        }
    }

    if (bgAudio && audioToggleBtn) {
        const updateStateClass = () => {
            audioToggleBtn.classList.toggle('on', !bgAudio.paused);
        };

        audioToggleBtn.addEventListener('click', () => {
            if (bgAudio.paused) {
                bgAudio.play().catch(() => {});
            } else {
                bgAudio.pause();
            }
            updateStateClass();
        });

        // Initial state
        updateStateClass();
    }

    // 5. Certificate Modal View
    const certButtons = document.querySelectorAll('.certificate-toggle');
    const certModal = document.getElementById('certificateModal');
    const certModalImg = document.getElementById('certificateModalImage');
    const certModalClose = certModal?.querySelector('.certificate-modal-close');
    const certModalBackdrop = certModal?.querySelector('.certificate-modal-backdrop');

    const closeCertModal = () => {
        if (!certModal) return;
        certModal.classList.remove('visible');
        certModal.setAttribute('aria-hidden', 'true');
        if (certModalImg) {
            certModalImg.src = '';
            certModalImg.alt = 'Certificate';
        }
    };

    const openCertModal = (imgSrc, imgAlt) => {
        if (!certModal || !certModalImg) return;
        certModalImg.src = imgSrc;
        certModalImg.alt = imgAlt || 'Certificate';
        certModal.classList.add('visible');
        certModal.setAttribute('aria-hidden', 'false');
    };

    certButtons.forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        const wrapper = document.getElementById(targetId);
        const img = wrapper?.querySelector('img');
        if (!img) return;

        btn.addEventListener('click', () => {
            openCertModal(img.src, img.alt);
        });
    });

    if (certModalClose) {
        certModalClose.addEventListener('click', closeCertModal);
    }
    if (certModalBackdrop) {
        certModalBackdrop.addEventListener('click', closeCertModal);
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCertModal();
        }
    });

    // 6. Scroll reveal animations
    const revealTargets = document.querySelectorAll(
        'section, .project-card, .certificate-card, .detail-card, .skill-item, .contact-box'
    );

    revealTargets.forEach(el => {
        el.classList.add('reveal-on-scroll');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealTargets.forEach(el => observer.observe(el));
});