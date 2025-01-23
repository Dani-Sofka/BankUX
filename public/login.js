document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const spinner = document.getElementById('spinner');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const errorMessage = document.querySelector('.error-message');
  
      // Limpia mensajes de error previos
      if (errorMessage) {
        errorMessage.remove();
      }

  
      // Validación de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar el formato de email
      if (!emailRegex.test(email)) {
        showError(loginForm, 'Por favor ingresa un correo válido.');
        hasError = true;
      }
  
      // Validación de contraseña
      if (password.length < 6) {
        showError(loginForm, 'La contraseña debe tener al menos 6 caracteres.');
        hasError = true;
      }
  
      // Detén el envío si hay errores
      if (hasError) {
        e.preventDefault();
      } else {
        // Muestra el spinner
        spinner.style.display = 'block';

        // Retrasar el envío del formulario 2000ms
        setTimeout(() => {
          loginForm.submit(); // Envía el formulario después de 2 segundos
      }, 1000);
    }
    });
  
    function showError(form, message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      form.insertBefore(errorDiv, form.firstChild);
    }
  });