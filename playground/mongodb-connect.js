const { MongoClient,ObjectID} = require ('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect server');
    }
    console.log('connected');
    const db = client.db('TodoApp')
    
    // db.collection('Todos').insertOne({
    //     Text:'Teminar Api tesis',
    //     complete : false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert TOD', err);
    //     }
    //     console.log (JSON.stringify(result.ops,undefined,2));
    // }); 

    // db.collection('Users').insertOne({
    //     name:'Jonathan Hernandez',
    //     age : false,
    //     location: 'Ciudad de Mexico'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log (JSON.stringify(result.ops,undefined,2));
    // }); 
    client.close();
});