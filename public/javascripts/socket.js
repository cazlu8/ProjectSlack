var socket = io('http://localhost:3000');
socket.on('send-client',function(msg){
    document.getElementById('chat').innerHTML+=msg;
});

var send = function (){
    var msg = document.getElementById('msg').value;
    socket.emit('send-server',msg);
};
