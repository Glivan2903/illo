document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.padding = '0.4rem 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '0.75rem 0';
        }
    });

    // 2. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // If target is # or logo, scroll to top
            if (targetId === '#' || this.id === 'logoToTop') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Simple Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitBtn.innerText = 'Enviar Mensagem';
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});
