const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')

const {ObjectID} = require('mongodb')

var id = '5c2f3113cfdcbd05c842ae50';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid')
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    if(!todo) { 
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));