import dotenv from 'dotenv/config';
import express from "express";
import { router } from './routes/routes.js';
import path from 'path';

const __dirname = path.resolve();
const port = process.env.API_PORT;
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use('/static', express.static(path.join(__dirname, 'public')))
    
app.use('/users',router);

app.listen(port)