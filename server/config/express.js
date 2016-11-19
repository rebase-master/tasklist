var express     = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    cors        = require('cors')
;

module.exports = function(){

    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    //View engine
    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    app.use(express.static(path.join(__dirname, '../../client')));

    app.use(cors());
    app.use(bodyParser.json());

    require('../app/routes/tasks.server.route.js')(app);
    return app;
}
