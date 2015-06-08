module.exports = function(app){
    var authenticator = require('./../middlewares/authenticator')
        , chatController = app.controllers.chat;
     app.get('/chat',authenticator,chatController.index);
     app.get('/main',authenticator,chatController.mainRoom);
};