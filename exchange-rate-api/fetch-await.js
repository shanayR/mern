import express from "express";
import fetch from 'node-fetch'
const app = express();
const port = 8080;

app.get('/:id(\\d+)',(req,res)=>{

    const getApi = () => {
        return new Promise((resolve,reject)=>{
            const api = fetch('https://v6.exchangerate-api.com/v6/a789f791dd126d85c5f0981b/latest/USD').then(res => res.json()).then(json => {
                const pkr = json.conversion_rates.PKR;
                let usd = req.params.id;
                let usd_to_pkr = pkr*usd;
                let output = `$${usd} are RS ${usd_to_pkr}`;
                return output;
            })
            resolve(api)
        })
    }


    async function asyncCall(){
        console.log('calling');
        const conversion = await getApi()
        console.log(conversion);
        res.send(conversion);
    }
    
    asyncCall()
    
})
app.listen(port)