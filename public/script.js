// Animaciones y funcionalidades interactivas

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para los links de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // El navegador maneja la navegación entre páginas
            // Este código es para smooth scroll dentro de la página si es necesario
        });
    });

    // Animación de aparición para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animateElements = document.querySelectorAll(
        '.servicio-card, .testimonial-card, .why-card, .value-card, .info-card'
    );

    animateElements.forEach(el => {
        observer.observe(el);
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
            const telefonoInput = document.getElementById('telefono').value;

            if (!isValidEmail(email)) {
                e.preventDefault();
                alert('Por favor ingresa un email válido');
            }
        });
    }
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Agregar animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Función para manejar clics en botones de servicios
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== Efecto Parallax en Hero =====
const heroBg = document.getElementById('heroBg');

function isMobile() {
    return window.innerWidth <= 768;
}

function handleParallax() {
    if (!heroBg || isMobile()) return;
    const hero = heroBg.parentElement;
    const heroTop = hero.getBoundingClientRect().top;
    // Mover la imagen en dirección opuesta al scroll para que quede "quieta"
    heroBg.style.transform = `translateY(${-heroTop * 0.5}px)`;
}

if (heroBg) {
    window.addEventListener('scroll', handleParallax, { passive: true });
    handleParallax(); // Llamar al cargar también
}

console.log('CuidAnimals - Página cargada correctamente ✅');
