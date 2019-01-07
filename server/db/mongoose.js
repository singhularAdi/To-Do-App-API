var mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<testuser1>:<testuser1>@ds151124.mlab.com:51124/todo' || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose}