'use strict';

window.load = send;

var socket = io('http://localhost:3000');
socket.on('send-client', function (msg) {
    document.getElementById('chat').innerHTML += msg;
});

function send() {
    document.getElementById('send').onclick = function () {
        var msg = document.getElementById('msg').value;
        socket.emit('send-server', msg);
        msg.value = '';
    };
}

//# sourceMappingURL=private-compiled.js.map