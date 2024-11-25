document.querySelector('.register-form form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.querySelector('input[name="myemail"]').value,
        phone: document.getElementById('phonenum').value,
        age: document.querySelector('input[name="myage"]').value,
        gender: document.querySelector('input[name="mygender"]:checked') ? 
                document.querySelector('input[name="mygender"]:checked').nextSibling.textContent.trim() : '',
    };

    // Send data to the server
    try {
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Registration successful!');
            // Optionally, reset the form or redirect
            document.querySelector('.register-form form').reset();
        } else {
            throw new Error('Registration failed');
        }
    } catch (error) {
        alert(error.message);
    }
});
