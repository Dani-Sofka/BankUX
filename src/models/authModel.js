const axios = require('axios');

const API_BASE_URL = process.env.API_BASE_URL;

const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/authenticate`, {
            email,
            password
        });
        
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error en la autenticación');
    }
};

const registerUser = async (firstname, lastname, email, password) => {
    console.log("Enviando solicitud a la API con:", { firstname, lastname, email, password });
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
            firstname,
            lastname,
            email,
            password,
        });
        console.log("Respuesta de la API:", response.data);
        
        return response.data;
    } catch (error) {
        console.error("Error en la API de registro:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error al registrar el usuario');
    }
};

module.exports = { loginUser, registerUser };