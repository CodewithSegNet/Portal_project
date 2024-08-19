document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signInForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const admissionNumber = document.getElementById('admission_number').value;
        const password = document.getElementById('password').value;

        fetch('/api/v2/students/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ admission_number: admissionNumber, password: password })
        })
        .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        const messageElement = document.getElementById('message');
        const messageContainer = messageElement.closest('.alert');
        
        if (messageContainer) {
            messageContainer.style.display = 'block'; // Ensure the container is visible
        }

        if (data.token) {
            // Login successful
            messageElement.textContent = 'Login successful!';
            messageContainer.classList.add('alert-success');
            window.location.href = '/home'; // Ensure this URL is correct
        } else {
            // Login failed
            messageElement.textContent = data.message || 'Login failed';
            messageContainer.classList.add('alert-danger');
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        const messageElement = document.getElementById('message');
        const messageContainer = messageElement.closest('.alert');
        
        if (messageContainer) {
            messageContainer.style.display = 'block'; // Ensure the container is visible
        }
        
        messageElement.textContent = 'An error occurred: ' + error.message;
        messageContainer.classList.add('alert-danger');
    });
});
});