const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

//Ruta para renderizar la página de login
router.get('/login', (req, res) => {
    res.render('login/login', { error: null });
});

// Ruta para procesar el login
router.post('/login', login);

module.exports = router;