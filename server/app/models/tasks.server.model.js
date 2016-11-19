var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: String,
    isDone: Boolean
});

mongoose.model('Task', TaskSchema);