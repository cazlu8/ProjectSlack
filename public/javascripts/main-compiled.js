'use strict';

var socket = io('http://localhost:3000');
socket.on('send-client', function (msg) {
    document.getElementById('chat').innerHTML += msg;
});

var send = document.getElementById('send');
send.addEventListener('click', function () {
    var msg = document.getElementById('msg').value;
    socket.emit('send-server', msg);
    msg.value = '';
}, true);

window.onload = send;

//# sourceMappingURL=main-compiled.js.map