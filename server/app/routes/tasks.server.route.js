module.exports = function(app) {
    var tasks = require('../controllers/task.server.controller');

    app.get('/', function (req, res, next) {
       res.render('index.html');
    });

    app.route('/api/tasks')
        .get(tasks.list);

    app.route('/api/task/:id')
        .get(tasks.taskByID)
        .delete(tasks.destroy)
        .put(tasks.update);

    app.route('/api/task')
        .post(tasks.save);

}
