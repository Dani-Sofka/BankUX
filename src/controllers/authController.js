const { loginUser } = require('../models/authModel');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userData = await loginUser(username, password);

        // Suponiendo que la API devuelve un token y el nombre del usuario
        const { token, name} = userData;

        // Almacena el token (puedes usar cookies o session)
        res.cookie('token', token, { httpOnly: true });

        // Redirige al dashboard con el nombre del usuario
        res.render('dashboard/dashboard', { name });

    } catch (error) {
        res.status(401).render('login/login', { error: error.message });
    }
};

module.exports = { login };