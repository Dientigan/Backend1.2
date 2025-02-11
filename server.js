const express = require('express');
const { engine } = require('express-handlebars');
const WebSocket = require('ws');
app.use(express.static('public'));

// Configuración del servidor Express
const app = express();
const port = 8080;

// Configurar Handlebars como motor de plantillas (preguntar en el after)
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Ruta de ejemplo para renderizar una vista de Handlebars (recuerda)
app.get('/', (req, res) => {
    res.render('home', { title: 'Mi Proyecto con WebSocket y Handlebars' });
});

// Express
const server = app.listen(port, () => {
    console.log(`Servidor Express corriendo en http://localhost:${port}`);
});

//WebSocket
const wss = new WebSocket.Server({ server });

// Manejar conexiones WebSocket
wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado');

    // Enviar mensaje al cliente
    ws.send('¡Hola desde el servidor WebSocket!');

    // Manejar mensajes recibidos del cliente
    ws.on('message', (message) => {
        console.log('Mensaje recibido: ', message);
    });
});

