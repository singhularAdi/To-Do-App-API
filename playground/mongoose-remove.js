const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')

const {ObjectID} = require('mongodb')

// Todo.remove({}).then((result) => {
//     console.log(result);
// })


// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5c33804214168df6b44187da').then((todo) => {
    console.log(todo)
});