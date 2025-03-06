document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');
    const spinner = document.getElementById('spinner');
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    registerForm.addEventListener('submit', (e) => {
        let hasError = false;
        const firstname = firstnameInput.value.trim();
        const lastname = lastnameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const errorMessage = document.querySelector('.error-message');

        if (errorMessage) {
            errorMessage.remove();
        }

        if (!firstname) {
            showError(registerForm, 'El campo de nombre no puede estar vacío.');
            hasError = true;
        }

        if (!lastname) {
            showError(registerForm, 'El campo de apellido no puede estar vacío.');
            hasError = true;
        }

        if (!email) {
            showError(registerForm, 'El campo de correo no puede estar vacío.');
            hasError = true;
        }

        if (!password) {
            showError(registerForm, 'El campo de contraseña no puede estar vacío.');
            hasError = true;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            showError(registerForm, 'Por favor, ingresa un correo válido.');
            hasError = true;
        }

        if (password && password.length < 6) {
            showError(registerForm, 'La contraseña debe tener al menos 6 caracteres.');
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
             registerForm.submit();
         }, 2000);
    });

    function showError(form, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        form.insertBefore(errorDiv, form.firstChild);
    }
});