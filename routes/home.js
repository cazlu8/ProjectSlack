module.exports = function (app){
    var homeController = app.controllers.home;
    app.get('/',homeController.index);
    app.post('/login',homeController.login);
    app.get('/logout',homeController.logout);
};