const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const authRoutes = require('./src/routes/authRouter');
const path = require('path');
const cookieParser = require('cookie-parser');


console.log("API_BASE_URL desde index.js:", process.env.API_BASE_URL);
const app = express();

// Middleware para analizar JSON en las solicitudes
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Registro de las rutas de autenticación
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3001;
const APP_NAME = process.env.APP_NAME;

app.listen(PORT, () => {
    console.log(`${APP_NAME} http://localhost:${PORT}/ `);
});