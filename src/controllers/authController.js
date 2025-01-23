const { loginUser, registerUser } = require('../models/authModel');

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).render('login/login', { error: 'El correo y la contraseña son obligatorios' });
    }

    try {
        const userData = await loginUser(email, password);

        const { token, name} = userData;

        res.cookie('token', token, { httpOnly: true });

        res.render('dashboard/dashboard', { name });

    } catch (error) {
        console.error("Error en login:", error.response?.data || error.message);
        res.status(401).render('login/login', { error: error.message });
    }
};

const register = async (req, res) => {
    console.log("Datos recibidos en el controlador:", req.body);
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        console.error("Faltan campos obligatorios.");
        return res.status(400).render('register/register', { error: 'Todos los campos son obligatorios' });
    }

    try {
        const result = await registerUser(firstname, lastname, email, password);
        console.log("Respuesta del modelo registerUser:", result);

        res.render('login/login', { error: null, success: 'Usuario registrado exitosamente. Por favor, inicia sesión.' });
    } catch (error) {
        console.error("Error en el registro:", error.message);
        res.status(400).render('register/register', { error: error.message });
    }
};

module.exports = { login, register };