module.exports = function (app) {
    var chatController = {};
    chatController.index = function (req, res) {
        res.render('chat/index');
    };
    return chatController;
};
