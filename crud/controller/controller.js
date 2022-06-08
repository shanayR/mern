import { dbConnection,ObjectId } from "../database/connection.js"

const homeView = (req,res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('testdb').collection('users');
        usersCollection.find({}).toArray((err, userData) => {
            res.render('read', { userData });
        });
    });
}

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
        res.redirect('/users')

    })
}
const updateForm =  (req,res)=> {
    dbConnection().then(async (client) => {
        const userData = await client.db('testdb').collection('users').findOne({
            _id: new ObjectId(req.params.id)
        });
        res.render('update',{ userData })
    })
}

const updateUser = (req,res) => {
    console.log(req.params.id);
    dbConnection().then( (client)=>{
        const users = client.db("testdb").collection("users");
        users.updateOne(
            { '_id': new ObjectId(req.params.id) },
            { $set: { 'name':req.body.name,'email':req.body.email,'password': req.body.password,} },
            (err, result) => {
                console.log(`${result} updated successfully!`);
                res.redirect('/users');
            });

    })
}

const deleteUser = (req,res)=>{
    dbConnection().then( (client)=>{
        const users = client.db("testdb").collection("users");
        users.deleteOne(
            { '_id': new ObjectId(req.params.id) },
            (err, result) => {
                console.log(`${result} deleted successfully!`);
                res.redirect('/users');
            });

    })
}
export {renderForm , createUser,updateUser,updateForm,homeView,deleteUser}