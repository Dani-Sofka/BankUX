const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');


router.get('/login', (req, res) => {
    res.render('login/login', { error: null });
});


router.post('/login', login);


router.get('/register', (req, res) => {
    res.render('register/register', { error: null });
});

router.post('/register', register);

module.exports = router;