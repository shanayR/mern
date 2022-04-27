import express from 'express';
import path from 'path';
const app = express();
const port = 8000;
const __dirname = path.resolve();

app.get('/user/:id(\\d+)/book', function (req,res) {
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile('/form.html' , options, function (err){
        if (err) {
            next(err);
        } else {
            console.log('Sent');
        }
    })
    
})
app.listen(port)