var keystone = require('keystone');
exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'issues';
    locals.data = {
        tickets: []
    };
    view.on('init', function (next) {
        var q = keystone.list('Issues').model.find();
        q.exec(function (err, results) {
            locals.data.issues = results;
            next(err);
        })
    })
    view.render('issues/issuelist');
};