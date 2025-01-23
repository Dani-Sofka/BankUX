const { loginUser } = require('../models/authModel');

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).render('login/login', { error: 'El correo y la contraseña son obligatorios' });
    }

    try {
        const userData = await loginUser(email, password);


        // Suponiendo que la API devuelve un token y el nombre del usuario
        const { token, name} = userData;

        // Almacena el token (puedes usar cookies o session)
        res.cookie('token', token, { httpOnly: true });

        // Redirige al dashboard con el nombre del usuario
        res.render('dashboard/dashboard', { name });

    } catch (error) {
        console.error("Error en login:", error.response?.data || error.message);
        res.status(401).render('login/login', { error: error.message });
    }
};

const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        return res.status(400).render('register/register', { error: 'Todos los campos son obligatorios' });
    }

    try {
        // Llama a la función del modelo para registrar al usuario
        const result = await registerUser(firstname, lastname, email, password);

        // Redirige al login con un mensaje de éxito
        res.render('login/login', { error: null, success: 'Usuario registrado exitosamente. Por favor, inicia sesión.' });
    } catch (error) {
        res.status(400).render('register/register', { error: error.message });
    }
};

module.exports = { login, register };