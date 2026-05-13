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

// ===== Efecto Parallax - Imagen fija recortada al área del hero =====
const heroEl = document.getElementById('hero');
const heroBgParallax = document.getElementById('heroBgParallax');

function updateParallax() {
    if (!heroEl || !heroBgParallax) return;
    if (window.innerWidth <= 768) {
        heroBgParallax.style.display = 'none';
        return;
    }
    heroBgParallax.style.display = 'block';

    const rect = heroEl.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const top = Math.max(0, rect.top);
    const bottom = Math.min(viewportH, rect.bottom);

    if (bottom > top) {
        const insetTop = top;
        const insetBottom = viewportH - bottom;
        heroBgParallax.style.clipPath = `inset(${insetTop}px 0 ${insetBottom}px 0)`;
    } else {
        heroBgParallax.style.clipPath = 'inset(100% 0 0 0)';
    }
}

if (heroEl && heroBgParallax) {
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });
    updateParallax();
}

console.log('CuidAnimals - Página cargada correctamente ✅');
