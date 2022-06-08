import { dbConnection,ObjectId } from "../database/connection.js"
const renderForm = (req,res)=>{
    dbConnection().then((client) => {
        const usersCollection = client.db('testdb').collection('users');
        res.render('add')
    })
}

const createUser = (req,res)=>{
    dbConnection().then((client)=>{
        const users = client.db("testdb").collection("users");
        users.insertOne(req.body,(err,result) => {
            if (err) throw err;
            if(result.acknowledged){
                console.log(result)
            }else{console.log("error");}
        })
        res.redirect('/add')

    })
}
const updateForm = (req,res)=> {
    dbConnection().then((client) => {
        const usersCollection = client.db('testdb').collection('users');
        res.render('update')
    })
}

const updateUser = (req,res) => {
    dbConnection().then((client)=>{
        const users = client.db("testdb").collection("users");
        usersCollection.updateOne(
            // { '_id': new ObjectId(req.params.id) },
            { 'name':  req.body.password},
            { $set: { 'password': req.body.password,} },
            (err, result) => {
                console.log(result.updatedCount + ' document updated successfully!');
                res.redirect('/update');
            });

    })
}

export {renderForm , createUser,updateUser,updateForm}