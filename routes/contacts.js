module.exports = function (app) {
    var contactController = app.controllers.contacts,
        authenticator = require('./../middlewares/authenticator');
    app.get('/contacts', authenticator, contactController.index);

    app.route('/contact/:id')
        .get(authenticator, contactController.show)
        .put(authenticator, contactController.update)
        .delete(authenticator, contactController.remove);

    app.post('/contact', authenticator, contactController.create);
    app.get('/contact/:id/edit', authenticator, contactController.edit);

};
