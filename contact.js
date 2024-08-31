
document.addEventListener('DOMContentLoaded', function () {

    
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

        
            const name = this.querySelector('input[name="myname"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const subject = this.querySelector('input[name="subject"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();

            if (name && email && subject && message && validateEmail(email)) {
                alert('Thank you for reaching out! We will get back to you within 2 business days.');
                this.reset();
            } else {
                alert('Please fill out all fields correctly.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }


    document.querySelectorAll('a[href^="./index.html"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
