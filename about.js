
document.addEventListener('DOMContentLoaded', function () {


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

    
    const connectBtn = document.querySelector('.connectbtn');
    if (connectBtn) {
        connectBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open('https://www.facebook.com', '_blank'); 
        });
    }

});
