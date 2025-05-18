document.addEventListener('DOMContentLoaded', function() {
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            const hiddenLogo = header.querySelector('.hidden-logo');
            if (hiddenLogo) hiddenLogo.style.display = 'block';
        } else {
            header.classList.remove('scrolled');
            const hiddenLogo = header.querySelector('.hidden-logo');
            if (hiddenLogo) hiddenLogo.style.display = 'none';
        }
    });

    // GSAP Animations
    gsap.from('.animate-logo', { duration: 1, opacity: 0, y: -50, ease: 'power3.out' });
    gsap.from('.animate-heading', { duration: 1, opacity: 0, x: -50, ease: 'power3.out', delay: 0.5 });

    // Service Card Toggle
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.service-details');
            const arrow = this.querySelector('.arrow-icon');
            if (details.classList.contains('hidden')) {
                details.classList.remove('hidden');
                details.style.height = 'auto';
                details.style.opacity = '1';
                arrow.style.transform = 'rotate(180deg)';
            } else {
                details.classList.add('hidden');
                details.style.height = '0';
                details.style.opacity = '0';
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Mobile Menu Toggle with Overlay
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');

    if (menuToggle && mobileMenu && overlay) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.remove('-translate-x-full', 'translate-x-full');
            mobileMenu.classList.add(mobileMenu.classList.contains('right-0') ? '-translate-x-0' : 'translate-x-0');
            overlay.classList.remove('hidden');
        });
    }

    if (menuClose && mobileMenu && overlay) {
        menuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('translate-x-0', '-translate-x-0');
            mobileMenu.classList.add(mobileMenu.classList.contains('right-0') ? 'translate-x-full' : '-translate-x-full');
            overlay.classList.add('hidden');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('translate-x-0', '-translate-x-0');
            mobileMenu.classList.add(mobileMenu.classList.contains('right-0') ? 'translate-x-full' : '-translate-x-full');
            overlay.classList.add('hidden');
        });
    }

    // Form Submission for Footer Form
    const footerForm = document.getElementById('contact-form-footer');
    if (footerForm) {
        footerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(footerForm);
            fetch('https://formspree.io/f/xvgalyzg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Форма успешно отправлена!');
                    footerForm.reset();
                } else {
                    alert('Ошибка при отправке формы. Проверьте данные и попробуйте снова.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка. Попробуйте снова позже.');
            });
        });
    }

    // Form Submission for Consultation Form
    const consultationForm = document.getElementById('contact-form-consultation');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(consultationForm);
            fetch('https://formspree.io/f/xvgalyzg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Форма успешно отправлена!');
                    consultationForm.reset();
                } else {
                    alert('Ошибка при отправке формы. Проверьте данные и попробуйте снова.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка. Попробуйте снова позже.');
            });
        });
    }
});