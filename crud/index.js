import dotenv from 'dotenv/config';
import express from "express";
import { MongoClient, ServerApiVersion } from 'mongodb';
import { postForm, renderForm } from "./controller/controller.js";
// import {router} from "./routes/routes.js";
const app = express();
const client = new MongoClient(process.env.DATABASE_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 });

app.set('view engine', 'ejs');
app.get('/',renderForm)
app.use(express.urlencoded({extended:false}));
app.post('/postdata',postForm)
        
        // perform actions on the collection object
        // client.close();
    
// app.use('/add', router);

app.listen(8080)