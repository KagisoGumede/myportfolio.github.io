document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM fully loaded, initializing portfolio... 🎉");
 
    // ===============================

    // Initialize EmailJS

    // ===============================

    if (window.emailjs) {

        emailjs.init("if9_6Iro_hJ8oAdXj");

        console.log("EmailJS initialized ✅");

    } else {

        console.error("EmailJS not loaded!");

    }
 
    // ===============================

    // Navigation Toggle

    // ===============================

    const hamburger = document.querySelector('.hamburger');

    const navMenu = document.querySelector('.nav-menu');

    const navLinks = document.querySelectorAll('.nav-link');
 
    if (hamburger && navMenu) {

        hamburger.addEventListener('click', () => {

            navMenu.classList.toggle('active');

            const spans = hamburger.querySelectorAll('span');

            if (spans.length === 3) {

                spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';

                spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';

                spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';

            }

        });

    }
 
    if (navLinks.length > 0) {

        navLinks.forEach(link => {

            link.addEventListener('click', () => {

                if (navMenu) navMenu.classList.remove('active');

                if (hamburger) {

                    const spans = hamburger.querySelectorAll('span');

                    if (spans.length === 3) {

                        spans[0].style.transform = 'none';

                        spans[1].style.opacity = '1';

                        spans[2].style.transform = 'none';

                    }

                }

            });

        });

    }
 
    // ===============================

    // Active Navigation on Scroll

    // ===============================

    window.addEventListener('scroll', () => {

        let current = '';

        document.querySelectorAll('section').forEach(section => {

            const sectionTop = section.offsetTop;

            if (window.pageYOffset >= (sectionTop - 150)) {

                current = section.getAttribute('id');

            }

        });
 
        navLinks.forEach(link => {

            link.classList.remove('active');

            if (link.getAttribute('href')?.slice(1) === current) {

                link.classList.add('active');

            }

        });

    });
 
    // ===============================

    // Tab Functionality

    // ===============================

    const tabBtns = document.querySelectorAll('.tab-btn');

    const tabContents = document.querySelectorAll('.tab-content');
 
    if (tabBtns.length > 0 && tabContents.length > 0) {

        tabBtns.forEach(btn => {

            btn.addEventListener('click', () => {

                const targetTab = btn.getAttribute('data-tab');

                tabBtns.forEach(b => b.classList.remove('active'));

                tabContents.forEach(content => content.classList.remove('active'));

                btn.classList.add('active');
 
                const targetElement = document.getElementById(targetTab);

                if (targetElement) targetElement.classList.add('active');

            });

        });

    }
 
    // ===============================

    // Carousel (SAFE)

    // ===============================

    const prevBtn = document.getElementById('prevBtn');

    const nextBtn = document.getElementById('nextBtn');

    const carouselTrack = document.querySelector('.carousel-track');

    const carouselCards = document.querySelectorAll('.carousel-card');

    const carouselContainer = document.querySelector('.carousel-container');
 
    let currentIndex = 0;
 
    if (prevBtn && nextBtn && carouselTrack && carouselCards.length > 0 && carouselContainer) {
 
        function getCardWidth() {

            const gap = parseInt(getComputedStyle(carouselTrack).gap) || 0;

            return carouselCards[0].offsetWidth + gap;

        }
 
        function updateCarousel() {

            const offset = -(currentIndex * getCardWidth());

            carouselTrack.style.transform = `translateX(${offset}px)`;

        }
 
        function getMaxIndex() {

            const containerWidth = carouselContainer.offsetWidth;

            const totalWidth = carouselTrack.scrollWidth;

            return Math.ceil((totalWidth - containerWidth) / getCardWidth());

        }
 
        nextBtn.addEventListener('click', () => {

            const maxIndex = getMaxIndex();

            if (currentIndex < maxIndex) {

                currentIndex++;

                updateCarousel();

            }

        });
 
        prevBtn.addEventListener('click', () => {

            if (currentIndex > 0) {

                currentIndex--;

                updateCarousel();

            }

        });
 
        // Swipe Support

        let touchStartX = 0;

        let touchEndX = 0;
 
        carouselTrack.addEventListener('touchstart', (e) => {

            touchStartX = e.changedTouches[0].screenX;

        });
 
        carouselTrack.addEventListener('touchend', (e) => {

            touchEndX = e.changedTouches[0].screenX;
 
            if (touchEndX < touchStartX - 50 && currentIndex < carouselCards.length - 1) {

                currentIndex++;

                updateCarousel();

            }
 
            if (touchEndX > touchStartX + 50 && currentIndex > 0) {

                currentIndex--;

                updateCarousel();

            }

        });

    }
 
    // ===============================

    // Contact Form (YOUR WORKING EMAILJS CODE)

    // ===============================

    const contactForm = document.getElementById('contactForm');

    const formMessage = document.getElementById('formMessage');
 
    if (contactForm) {
 
        const submitBtn = contactForm.querySelector('.submit-btn');
 
        contactForm.addEventListener('submit', function (e) {

            e.preventDefault();
 
            if (!window.emailjs) {

                console.error("EmailJS not loaded!");

                return;

            }
 
            if (submitBtn) {

                submitBtn.disabled = true;

                submitBtn.textContent = "Sending...";

            }
 
            const formData = new FormData(contactForm);
 
            emailjs.send(

                "service_iwi8x85",

                "template_29lo2rm",

                {

                    from_name: formData.get("name"),

                    from_email: formData.get("email"),

                    message: formData.get("message"),

                    time: new Date().toLocaleString()

                }

            ).then(() => {
 
                if (formMessage) {

                    formMessage.textContent = "Message sent successfully!";

                    formMessage.className = "form-message success";

                    formMessage.style.display = "block";

                }
 
                contactForm.reset();
 
            }).catch((error) => {
 
                console.error("EmailJS Error:", error);
 
                if (formMessage) {

                    formMessage.textContent = "Failed to send message.";

                    formMessage.className = "form-message error";

                    formMessage.style.display = "block";

                }
 
            }).finally(() => {
 
                if (submitBtn) {

                    submitBtn.disabled = false;

                    submitBtn.textContent = "Submit";

                }
 
                if (formMessage) {

                    setTimeout(() => {

                        formMessage.style.display = "none";

                    }, 5000);

                }
 
            });

        });

    }
 
    // ===============================

    // Scroll Reveal (OPTIMIZED FOR MOBILE)

    // ===============================

    const isMobile = window.innerWidth <= 768;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, { 

        threshold: isMobile ? 0.01 : 0.1,

        rootMargin: isMobile ? "0px" : "0px 0px -20px 0px"

    });
 
    document.querySelectorAll("section, .project-card, .carousel-card, .skill-item")

        .forEach(el => {

            el.style.opacity = "0";

            el.style.transform = isMobile ? "translateY(10px)" : "translateY(20px)";

            el.style.transition = isMobile ? "opacity 0.4s ease, transform 0.4s ease" : "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(el);

        });
 
    // ===============================

    // Smooth Scroll

    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function(e) {

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            }

        });

    });
 
    // ===============================

    // Parallax Hero (DISABLED ON MOBILE)

    // ===============================

    const hero = document.querySelector('.hero-content');

    const heroImage = document.querySelector('.hero-image');
 
    // Only enable parallax on desktop

    if (window.innerWidth > 768) {

        window.addEventListener('scroll', () => {

            const scrolled = window.pageYOffset;

            if (hero && heroImage && scrolled < window.innerHeight) {

                hero.style.transform = `translateY(${scrolled * 0.5}px)`;

                heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;

            }

        });

    }
 
    console.log("Portfolio website loaded successfully! 🎉");

});
 
