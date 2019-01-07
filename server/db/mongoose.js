var mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://GingerBoredMan:E@shaan2002@ds151124.mlab.com:51124/todo' || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose}