import dotenv from 'dotenv/config';
import express from "express";
// import { MongoClient, ServerApiVersion } from 'mongodb';
import { router } from './routes/routes.js';
// import { createUser, renderForm } from "./controller/controller.js";
// import {router} from "./routes/routes.js";
const port = process.env.API_PORT;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
        
        // perform actions on the collection object
        // client.close();
    
app.use(router);

app.listen(port)