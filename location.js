
document.addEventListener('DOMContentLoaded', function () {


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

    
    const locationDetails = document.querySelectorAll('.location-detail');
    locationDetails.forEach(detail => {
        detail.addEventListener('click', function () {
        
            locationDetails.forEach(loc => loc.classList.remove('highlight'));
            
            this.classList.add('highlight');
        });
    });

});
