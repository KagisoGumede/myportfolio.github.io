document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded, initializing portfolio... 🎉");

    // Initialize EmailJS
    if (window.emailjs) {
        emailjs.init("if9_6Iro_hJ8oAdXj"); // Your Public Key
        console.log("EmailJS initialized ✅");
    } else {
        console.error("EmailJS not loaded!");
    }

    // Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
        });
    }

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
                if (hamburger) {
                    const spans = hamburger.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }

    // Active Navigation on Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Carousel Functionality
    // Carousel Functionality
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselTrack = document.querySelector('.carousel-track');
const carouselCards = document.querySelectorAll('.carousel-card');

let currentIndex = 0;

function getCardWidth() {
    const card = carouselCards[0];
    const gap = parseInt(getComputedStyle(carouselTrack).gap) || 0;
    return card.offsetWidth + gap;
}

function updateCarousel() {
    const offset = -(currentIndex * getCardWidth());
    carouselTrack.style.transform = `translateX(${offset}px)`;
}

function getMaxIndex() {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
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

    // Touch/Swipe for mobile carousel
    if (carouselTrack) {
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

    // Contact Form with EmailJS
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = contactForm ? contactForm.querySelector('.submit-btn') : null;

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!window.emailjs) {
            console.error("EmailJS not loaded!");
            formMessage.textContent = "Email service not loaded. Try again later.";
            formMessage.className = "form-message error";
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        emailjs.send(
            "service_iwi8x85",      // Your EmailJS Service ID
            "template_29lo2rm",     // Your working EmailJS Template ID
            {
                title: "Mr/Ms",     // optional, if used in your template
                from_name: name,
                from_email: email,
                message: message,
                name: name,
                email: email,
                time: new Date().toLocaleString()
            }
        ).then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            formMessage.textContent = "Message sent successfully!";
            formMessage.className = "form-message success";
            contactForm.reset();
        }).catch((error) => {
            console.error("FAILED...", error);
            formMessage.textContent = "Failed to send message.";
            formMessage.className = "form-message error";
        }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";
            formMessage.style.display = "block";
            setTimeout(() => { formMessage.style.display = "none"; }, 5000);
        });
    });
    }

    // Scroll Reveal (optimized for mobile)
    const isMobile = window.innerWidth <= 768;
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { 
        threshold: isMobile ? 0.01 : 0.1,  // Much lower threshold for mobile
        rootMargin: isMobile ? "0px" : "0px 0px -20px 0px"  // No margin on mobile
    });

    document.querySelectorAll("section, .project-card, .carousel-card, .skill-item").forEach(el => {
        // On mobile, make sections visible immediately after a short delay
        if (isMobile) {
            el.style.opacity = "0";
            el.style.transform = "translateY(10px)";  // Less movement on mobile
            el.style.transition = "opacity 0.4s ease, transform 0.4s ease";  // Faster on mobile
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
        observer.observe(el);
    });


    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Parallax Hero (disabled on mobile for better performance)
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

    // Hero typing effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // Project card hover
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px) scale(1.02)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });

    // Skills animation
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('#skills');
    const skillsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => bar.style.width = width, 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (skillsSection) skillsObserver.observe(skillsSection);

    // Page fade-in
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    console.log("Portfolio website loaded successfully! 🎉");
});
