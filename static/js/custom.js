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
            messageContainer.style.display = 'block'; 
        }

        if (data.token) {
            // Login successful
            messageElement.textContent = 'Login successful!';
            messageContainer.classList.add('alert-success');
            window.location.href = '/students/dashboard'; 
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
            messageContainer.style.display = 'block'; 
        }
        
        messageElement.textContent = 'An error occurred: ' + error.message;
        messageContainer.classList.add('alert-danger');
    });
});
});






document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signInForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('/api/v2/admins/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        const messageElement = document.getElementById('message');
        const messageContainer = messageElement.closest('.alert');
        
        if (messageContainer) {
            messageContainer.style.display = 'block'; 
        }

        if (data.token) {
            // Login successful
            messageElement.textContent = 'Login successful!';
            messageContainer.classList.add('alert-success');
            window.location.href = '/admins/dashboard'; 
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
            messageContainer.style.display = 'block'; 
        }
        
        messageElement.textContent = 'An error occurred: ' + error.message;
        messageContainer.classList.add('alert-danger');
    });
});
});