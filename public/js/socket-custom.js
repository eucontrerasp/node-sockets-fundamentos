var socket = io();

// Escuchar información (on)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información (emit)
socket.emit('enviarMensaje', {
    usuario: 'Eugenio',
    mensaje: 'Wena cabros'
}, function(resp) {
    console.log('Respuesta server', resp);
});

// Escuchar información (on)
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);
});