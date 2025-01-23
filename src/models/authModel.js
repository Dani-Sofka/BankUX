const axios = require('axios');

const API_BASE_URL = process.env.API_BASE_URL;
console.log("API_BASE_URL:", API_BASE_URL);

const loginUser = async (email, password) => {
    console.log("Enviando solicitud a la API con:", { email, password });
    try {
        const response = await axios.post(`${API_BASE_URL}/authenticate`, {
            email,
            password
        });
        console.log("Respuesta de la API:", response.data);
        // Devuelve la respuesta de la API
        return response.data;
    } catch (error) {
        console.error("Error en la API de autenticación:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Error en la autenticación');
    }
};

module.exports = { loginUser };