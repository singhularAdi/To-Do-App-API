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



    // db.collection('Todos').find({
    //     _id: new ObjectID('5c262118c5c8968595fb9ec5')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({name:'Aditya'}).count().then((count) => {
        console.log(`Todos coint ${count}`)
    }, (err) =>{
        console.log('Unable to fetch todos', err)
    })
   
    // client.close();
});