import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname,'assets')));
// app.use(express.text())
app.use(express.urlencoded({extended:false}));

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/postform',  (req, res) =>{
    console.log(req.body.name)
    res.send(`hello ${req.body.name}`  )
    res.end();
 })
app.listen(port)