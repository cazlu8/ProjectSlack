'use strict';

window.onload = send;

var socket = io('http://localhost:3000');
socket.on('send-client', function (msg) {
    document.getElementById('chat').innerHTML += msg;
});

function send() {
    document.getElementById('send').onclick = function () {
        var msg = document.getElementById('msg').value;
        socket.emit('send-server', msg);
        document.getElementById('msg').value = '';
    };
}

//# sourceMappingURL=socket-compiled.js.map