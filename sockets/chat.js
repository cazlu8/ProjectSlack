module.exports = function (io){
    var sockets = io.sockets;
    sockets.on('connection',function (client){
        var session = client.handshake.session,
            user = session.user;
        client.on('send-server',function (msg){
            msg = '<b>'+user.name+':</b> '+msg+'<br>';
            client.emit('send-client',msg);
            client.broadcast.emit('send-client',msg);
        });
    });
};