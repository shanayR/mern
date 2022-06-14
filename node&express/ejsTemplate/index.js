import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.get('/:id',  (req,res) => {

    let countries = [
        {
            id : 1,
            code : 'pk',
            name : 'Pakistan',
            capital : 'Islamabad'   
        },
        {
            id : 2,
            code : 'ae',
            name : 'UAE',
            capital : 'Abu Dhabi'    
        }
    ]
    
    const paramId = req.params.id;
    // match with id
    // let country = countries.find(({id}) => id == req.params.id);

    //match with country code 
    let country = countries.find(({code}) => code == req.params.id);
    console.log(country);
    res.render('home',{
                'country' : country,

            })

    // if (paramId){
    //     console.log(paramId);
    //     res.render('home',{
    //         'countries' :countries[paramId-1],
    //     })
    // }
    // res.render('home',{
    //     'countries' :countries,
    // })
    
});

app.listen(8080)