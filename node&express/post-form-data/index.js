import express from 'express';
import path from 'path';
import bodyparser from 'body-parser'
const app = express();
const port = 8000;
const __dirname = path.resolve();
const urlEncodeParse = bodyparser.urlencoded({extended:false});
const userEmail = "abc@gmail.com"
const userPassword = "abc123"
app.get('/login', function (req,res) {
    res.sendFile(`${__dirname}/login.html` ,  (err,data)=>{
        if (err) {
            next(err);
        } else {
            console.log('Sent');
        }
        res.send(data);
    });
    
});
app.post('/postform',urlEncodeParse,(req,res)=>{
    if(req){
        console.log(req.body);
        if (req.body.email == userEmail && req.body.password == userPassword) {
            res.send(`Welcome ${req.body.name}`);
        }
        else {
            res.send('invalid email or password')
        }
    }
});
app.listen(port);