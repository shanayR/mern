import express from 'express';
import path from 'path';
import ejs from 'ejs';
const app = express();
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.get('/:id', function (req,res) {
    console.log(req.params.id);

    let countries = [
        {
            'code' : 'PK',
            'name': 'Pakistan',
            'capital' : 'Islamabad'    
        },
        {
            'code' : 'as',
            'name': 'UAE',
            'capital' : 'Abu Dhabi'    
        }
    ]
    function renderPage() {
        // if (req.params.id == 1){
        //     console.log(countries[0]);
        //     res.render('home',{
        //         'countries' :countries[0],
        //     })
        // }
        let id = req.params.id
        if (id){
            console.log(id);
            // res.render('home',{
            //     'countries' :countries[id],
            // })
        }
    }
    renderPage();
    // res.render('home',{
    //     'countries' :countries,
    // })
    
});

app.listen(8080)