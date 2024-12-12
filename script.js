// script.js - Functionalități avansate pentru site-ul SabConstruct

// Funcție pentru animarea secțiunilor la scroll
function initScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Rulează o dată la început pentru secțiunile vizibile
}

// Funcție pentru validarea formularului de contact
function initFormValidation() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nume = document.getElementById('nume').value.trim();
        const email = document.getElementById('email').value.trim();
        const mesaj = document.getElementById('mesaj').value.trim();

        if (!nume || !email || !mesaj) {
            alert('Toate câmpurile sunt obligatorii!');
            return;
        }

        if (!validateEmail(email)) {
            alert('Adresa de email nu este validă!');
            return;
        }

        alert('Mesajul a fost trimis cu succes!');
        form.reset();
        // Aici poate fi adăugată logica pentru trimiterea mesajului către un server
    });
}

// Funcție auxiliară pentru validarea email-ului
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Funcționalitate pentru butonul de scroll în sus
function initScrollToTop() {
    const btn = document.querySelector('.btn-float');
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Slider pentru imagini din proiecte
function initImageSlider() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach((slider) => {
        const images = slider.querySelectorAll('img');
        let currentIndex = 0;

        const nextImage = () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        };

        setInterval(nextImage, 3000); // Trecere automată la următoarea imagine
    });
}

// Inițializare generală
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimation();
    initFormValidation();
    initScrollToTop();
    initImageSlider();
});
