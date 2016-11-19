process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./server/config/express'),
    mongoose = require('./server/config/mongoose'),
    db = mongoose(),
    app = express();

app.listen(process.env.PORT, function () {
    console.log("Server listening on port "+process.env.PORT);
});
