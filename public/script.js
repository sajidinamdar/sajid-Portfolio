// --- SI Cyber-Shield Preloader Logic ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const percentCounter = document.getElementById('si-percent');
    const progressFill = document.querySelector('.si-progress-fill');

    if (!preloader || !percentCounter || !progressFill) return;

    let count = 0;
    const updateLoader = setInterval(() => {
        count += Math.floor(Math.random() * 10) + 1; // Random jump for realism
        if (count >= 100) {
            count = 100;
            clearInterval(updateLoader);

            // Allow a small delay at 100% for impact
            setTimeout(() => {
                preloader.classList.add('loaded');
                document.body.classList.remove('loading');
            }, 500);
        }

        percentCounter.textContent = count.toString().padStart(2, '0');
        progressFill.style.width = count + '%';
    }, 120);
});

document.addEventListener('DOMContentLoaded', () => {





    // --- Handle Direct URL Path Navigation (for /projects, /about etc.) ---
    const path = window.location.pathname.replace(/^\/|\/$/g, ''); // Remove leading/trailing slashes
    if (path) {
        const targetSection = document.getElementById(path);
        if (targetSection) {
            // Wait slightly for layout/preloader
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 800); // 800ms to ensure preloader is fading
        }
    }

    // --- Active Link Highlight on Scroll ---

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');

            // Change icon & Toggle Scroll
            const icon = menuToggle.querySelector('i');
            if (sidebar.classList.contains('mobile-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden'; // Disable scroll
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = ''; // Enable scroll
            }
        });

        // Close menu when a link is clicked
        const mobileNavLinks = document.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('mobile-open');
                document.body.style.overflow = ''; // Enable scroll
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Offset to trigger earlier
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Smooth Scroll for older browsers (Optional, CSS usually handles it) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Image Viewer Modal Logic ---
    const imageModal = document.getElementById('image-modal');
    const modalImg = imageModal.querySelector('img');
    const closeModal = document.querySelector('.close-modal');
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href');
            modalImg.src = imgSrc;
            imageModal.classList.add('open');
            document.body.style.overflow = 'hidden'; // Disable scroll
        });
    });

    // Close Modal Functions
    const closeModalFunc = () => {
        imageModal.classList.remove('open');
        document.body.style.overflow = ''; // Enable scroll
        setTimeout(() => {
            modalImg.src = ''; // Clear src after transition
        }, 300);
    };

    closeModal.addEventListener('click', closeModalFunc);

    // Close on background click
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            closeModalFunc();
        }
    });

    // --- Scroll Animations (Lazy Load Animations) ---
    const revealElements = document.querySelectorAll('section, .about-container, .project-card, .skill-tag');

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after reveal
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // These IDs will be provided by user in EmailJS dashboard
            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_TEMPLATE_ID';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.background = '#10b981'; // Green success color
                    this.reset();
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalBtnText;
                        submitBtn.style.background = '';
                    }, 3000);
                }, (err) => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Error! Try Again';
                    submitBtn.style.background = '#f43f5e'; // Red error color
                    console.error('EmailJS Error:', err);
                    setTimeout(() => {
                        submitBtn.textContent = originalBtnText;
                        submitBtn.style.background = '';
                    }, 3000);
                });
        });
    }

});

