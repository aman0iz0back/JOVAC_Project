

document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const navMenu = document.querySelector('.navbar');
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
    document.querySelector('nav').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[name="emailid"]');
            const emailValue = emailInput.value;

            if (validateEmail(emailValue)) {
                alert('Thank you for subscribing!');
                emailInput.value = ''; 
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
