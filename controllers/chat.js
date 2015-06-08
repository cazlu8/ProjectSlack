module.exports = function (app) {
    var chatController = {};
    chatController.index = function (req, res) {
        res.render('chat/index');
    };

    chatController.mainRoom= function (req,res){
        res.render('chat/main');
    };

    return chatController;
};
