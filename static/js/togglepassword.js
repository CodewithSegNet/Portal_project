
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');
  
    togglePassword.addEventListener('click', () => {
      // Toggle the type attribute
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
  
      // Update button text or icon based on visibility
      togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });
  });
  