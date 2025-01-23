const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/login', (req, res) => {
    res.render('login/login');
});


const PORT = process.env.PORT || 3001;
const APP_NAME = process.env.APP_NAME;
app.listen(PORT, () => {
    console.log(`${APP_NAME} http://localhost:${PORT}/ `);
});