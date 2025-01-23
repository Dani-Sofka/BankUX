const axios = require('axios');

const API_BASE_URL = process.env.API_BASE_URL;

const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            username,
            password
        });
        
        // Devuelve la respuesta de la API
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error en la autenticación');
    }
};

module.exports = { loginUser };