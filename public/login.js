document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const spinner = document.getElementById('spinner');
  
    loginForm.addEventListener('submit', (e) => {
      let hasError = false;
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const errorMessage = document.querySelector('.error-message');
  
      if (errorMessage) {
        errorMessage.remove();
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar el formato de email
      if (!emailRegex.test(email)) {
        showError(loginForm, 'Por favor ingresa un correo válido.');
        hasError = true;
      }
  
      if (password.length < 6) {
        showError(loginForm, 'La contraseña debe tener al menos 6 caracteres.');
        hasError = true;
      }
  
      if (hasError) {
        e.preventDefault();
        return;
      } 

        spinner.style.display = 'block';
        e.preventDefault();

        setTimeout(() => {
          spinner.style.display = 'none';
          loginForm.submit();
      }, 2000);
    
    });
  
    function showError(form, message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      form.insertBefore(errorDiv, form.firstChild);
    }
  });