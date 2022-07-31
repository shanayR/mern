import express from "express";
import fetch from 'node-fetch'
const app = express();
const port = 8080;

app.get('/:id(\\d+)',(req,res)=>{
    fetch('https://v6.exchangerate-api.com/v6/a789f791dd126d85c5f0981b/latest/USD')
    .then(res => res.json())
    .then(json => {
        const pkr = json.conversion_rates.PKR;
        let usd = req.params.id;
        let usd_to_pkr = pkr*usd;
        console.log(`$${usd} are RS ${usd_to_pkr}`);
        res.send(`$${usd} are RS ${usd_to_pkr}`)

    })
})
app.listen(port)