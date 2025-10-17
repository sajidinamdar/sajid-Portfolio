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
});