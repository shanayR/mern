import {MongoClient, ObjectId } from 'mongodb';

const dbConnection = async function(){
    const client = new MongoClient(process.env.DATABASE_URI);
    try{
        await client.connect();
    }catch (err){
        console.log(err);
    }
    return client;
}

export {dbConnection,ObjectId}