var mongoose =  require('mongoose'),
    config   =  require('./config');

module.exports = function () {
    var db = mongoose.connect('mongodb://'+config.db.username+':'+config.db.password+'@ds155727.mlab.com:55727/'+config.db.database, ['tasks'])
    require('../app/models/tasks.server.model');
    return db;
}