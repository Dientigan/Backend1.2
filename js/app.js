// public/js/app.js (ruta relativa)

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    console.log('Conexión WebSocket establecida.');
    socket.send('¡Hola desde el cliente!');
};

socket.onmessage = (event) => {
    console.log('Mensaje recibido: ', event.data);
};
