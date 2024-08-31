
document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        let isValid = true;

        
        const phoneInput = document.getElementById('phonenum');
        const phoneNumber = phoneInput.value;
        if (phoneNumber.length < 10 || isNaN(phoneNumber)) {
            alert("Phone number must be at least 10 digits and should not include characters.");
            isValid = false;
        }

    
        const destinations = document.querySelectorAll('input[name="td"]:checked');
        if (destinations.length === 0) {
            alert("Please select at least one travel destination.");
            isValid = false;
        }

        const packages = document.querySelectorAll('input[name="locations"]:checked');
        if (packages.length === 0) {
            alert("Please select a package.");
            isValid = false;
        }

        
        if (!isValid) {
            e.preventDefault();
        }
    });

});
