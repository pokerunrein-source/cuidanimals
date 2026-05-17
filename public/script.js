// Animaciones y funcionalidades interactivas

document.addEventListener('DOMContentLoaded', () => {
    // Observador para animar elementos al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos para animar al scroll
    const animateElements = document.querySelectorAll(
        '.servicio-card, .testimonial-card, .why-card, .value-card, .info-card, .about-wrapper, .contact-info-grid'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Animar títulos de secciones
    const sectionTitles = document.querySelectorAll('h2');
    sectionTitles.forEach(title => {
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInDown 0.6s ease-out';
                    observer2.unobserve(entry.target);
                }
            });
        }, observerOptions);
        observer2.observe(title);
    });

    // Efecto hover en botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animación en el navbar al scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });

    // Validación de formularios
    const citasForm = document.getElementById('citasForm');
    const contactForm = document.getElementById('contactForm');

    if (citasForm) {
        citasForm.addEventListener('submit', (e) => {
            const fecha = new Date(document.getElementById('fecha').value);
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);

            if (fecha < hoy) {
                e.preventDefault();
                alert('Por favor selecciona una fecha futura');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;

            if (!isValidEmail(email)) {
                e.preventDefault();
                alert('Por favor ingresa un email válido');
            }
        });
    }

    // Animar elementos del formulario
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
    });
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log('CuidAnimals - Página cargada con animaciones ✨');
