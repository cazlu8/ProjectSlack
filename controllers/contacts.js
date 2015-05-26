module.exports = function (app) {
    var contactController = {};
    contactController.index = function (req, res) {
        var user = req.session.user
            , contacts = user.contacts
            , params = {
                user: user
                , contacts: contacts
            };
        res.render('contacts/index', params);
    };

    contactController.create = function (req, res) {
        var user = req.session.user,
            contact = req.body.contact;
        user.contacts.push(contact);
        res.redirect('/contacts');
    };

    contactController.show = function (req, res) {
        var contactId = req.params.id,
            contact = req.session.user.contacts[contactId]
            , params = {contact: contact, id: contactId};
        res.render('contacts/show', params);
    };

    contactController.edit = function (req, res) {
        var contactId = req.params.id
            , user = req.session.user
            , contact = user.contacts[contactId]
            , params = {user: user, contact: contact, id: contactId};
        res.render('contacts/edit', params);
    };

    contactController.update = function (req, res) {
        var user = req.session.user
            , contact = req.body.contact;
        user.contacts[req.params.id] = contact;
        res.redirect('/contacts');
    };

    contactController.remove = function (req, res) {
        var contactId = req.params.id
            , user = req.session.user;
        user.contacts.splice(contactId, 1);
        res.redirect('/contacts');
    };
    return contactController;
};
