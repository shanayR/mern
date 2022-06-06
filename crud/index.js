import express from "express";
import { MongoClient, ServerApiVersion } from 'mongodb';
// import {router} from "./routes/routes.js";
const app = express();
const uri = "mongodb+srv://shanay:shanay786@cluster0.bljbdnt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 });

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('add')
})
app.use(express.urlencoded({extended:false}));
app.post('/postdata',(req,res)=>{
    client.connect( (err) => {
        if (err) throw err;
        const users = client.db("testdb").collection("users");
        users.insertOne(req.body,(err,result) => {
            if (err) throw err;
            if(result.acknowledged){
                console.log(result)
            }else{console.log("error");}
        })
        res.redirect('/')
        // perform actions on the collection object
        // client.close();
    });
})
// app.use('/add', router);

app.listen(8080)