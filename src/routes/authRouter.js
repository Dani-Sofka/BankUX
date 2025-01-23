const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

//Ruta para renderizar la página de login
router.get('/login', (req, res) => {
    res.render('login/login', { error: null });
});

// Ruta para procesar el login
router.post('/login', login);

// Ruta para renderizar el formulario de registro
router.get('/register', (req, res) => {
    res.render('register/register', { error: null });
});

// Ruta para procesar el registro
router.post('/register', register);

module.exports = router;