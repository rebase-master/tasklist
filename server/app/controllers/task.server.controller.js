var Task = require('mongoose').model('Task'),
    mongojs =   require('mongojs');

//Get all tasks
exports.list = function (req, res, next) {
    Task.find({}, function (err, tasks) {
        if(err){
            return next(err);
        }
        res.json(tasks);
    })
}

//Get Single Task
exports.taskByID = function (req, res, next) {
    Task.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err, task) {
        if(err){
            return next(err);
        }
        res.json(task);
    })
}

//Save Task

exports.save = function (req, res, next) {
    var task = new Task({
        title: req.body.title,
        isDone: req.body.isDone
    });
    console.log(task);
    if(!task.title || task.isDone === undefined){
        res.status(400);
        res.json({
            "error": "Bad Data"
        })
    }else{
        //var task = new Task(task);
        task.save(function (err, task) {
            if(err){
                res.send(err);
            }
            res.json(task);
        })
    }
}

//Delete single Task
exports.destroy = function (req, res, next) {
    Task.remove({_id: mongojs.ObjectId(req.params.id)}, function (err, task) {
        if(err){
            res.send(err);
        }
        res.json(task);
    });
}

//Find Task by _id and Update
exports.update = function (req, res, next) {
    Task.findById({_id: mongojs.ObjectId(req.params.id)}, function (err, task) {
        if(task){
            if (err){
                res.send(err);
            }

            task.title = req.body.title;
            task.isDone = req.body.isDone;

            task.save(function (err, task) {
                if (err){
                    res.send(err);
                }
                res.send(task);
            });
        }else{
            res.send(err);
        }
    });
}

