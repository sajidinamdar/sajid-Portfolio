document.addEventListener('DOMContentLoaded', () => {


    // --- Audio Player Logic ---
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('play-btn');
    const mobilePlayBtn = document.getElementById('mobile-play-btn'); // Mobile button
    const playIcon = playBtn.querySelector('i');

    // Safety check if mobile button exists's icon
    const mobilePlayIcon = mobilePlayBtn ? mobilePlayBtn.querySelector('i') : null;

    const audioContainer = document.querySelector('.audio-player-container');
    const audioText = document.querySelector('.audio-text');

    let isPlaying = false;

    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');

            if (mobilePlayIcon) {
                mobilePlayIcon.classList.remove('fa-pause');
                mobilePlayIcon.classList.add('fa-play');
            }

            audioContainer.classList.add('paused');
            audioText.textContent = "Sound Off";
        } else {
            audio.play().then(() => {
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');

                if (mobilePlayIcon) {
                    mobilePlayIcon.classList.remove('fa-play');
                    mobilePlayIcon.classList.add('fa-pause');
                }

                audioContainer.classList.remove('paused');
                audioText.textContent = "Sound On";
            }).catch(e => {
                console.log("Audio play failed (browser policy):", e);
            });
        }
        isPlaying = !isPlaying;
    }

    playBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering document click
        toggleAudio();
    });

    if (mobilePlayBtn) {
        mobilePlayBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleAudio();
        });
    }

    // Auto-play attempt
    const attemptPlay = () => {
        audio.play().then(() => {
            isPlaying = true;
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');

            if (mobilePlayIcon) {
                mobilePlayIcon.classList.remove('fa-play');
                mobilePlayIcon.classList.add('fa-pause');
            }

            audioContainer.classList.remove('paused');
            audioText.textContent = "Sound On";
            // Remove listener once played
            document.removeEventListener('click', attemptPlay);
            document.removeEventListener('touchstart', attemptPlay);
        }).catch(error => {
            console.log("Autoplay prevented by browser, waiting for interaction.");
        });
    };

    // Try immediately
    attemptPlay();

    // Try on first interaction if blocked
    document.addEventListener('click', attemptPlay, { once: true });
    document.addEventListener('touchstart', attemptPlay, { once: true });


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

});
