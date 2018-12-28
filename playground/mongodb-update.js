//  const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)


MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser : true}, (err,client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5c262943c5c8968595fba05f')
    // },{
    //     $set: {
    //         completed: true
    //     }        
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5c2611bce21b4b072e17a15e')
    },{
        $set: {
            name: "Eashaan"
        },
        $inc: {
            age:1
        }        
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // client.lose();
});