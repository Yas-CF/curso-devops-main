const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Node.js!');
});

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener datos de la API externa');
    }
});

app.get('/monitor', (req, res) => {
    const uptime = process.uptime(); // Tiempo de actividad de la aplicación en segundos
    const timestamp = new Date().toISOString(); // Marca de tiempo actual

    res.json({
        status: 'OK', // Estado de la aplicación
        uptime: uptime, // Tiempo de actividad de la aplicación
        timestamp: timestamp // Marca de tiempo
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

module.exports = app;
