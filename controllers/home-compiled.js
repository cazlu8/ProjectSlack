'use strict';

module.exports = function (app) {
    var homeController = {};
    homeController.index = function (req, res) {
        res.render('home/index');
    };

    homeController.login = function (req, res) {
        var email = req.body.user.email,
            name = req.body.user.name;

        if (name && email) {
            var user = req.body.user;
            user.contacts = [];
            req.session.user = user;
            res.redirect('/contacts');
        } else {
            res.redirect('/');
        }
    };

    homeController.logout = function (req, res) {
        req.session.destroy();
        res.redirect('/');
    };

    return homeController;
};

//# sourceMappingURL=home-compiled.js.map