const db=require('mongodb');
const MongoClient=db.MongoClient;
const objid=db.ObjectId

let database;

async function getdatabase(){
    let client=await MongoClient.connect('mongodb://localhost:27017');
    database=client.db('user');
    if(!database){
        console.log('database not created');

    }
    return database
}
module.exports={getdatabase,objid}