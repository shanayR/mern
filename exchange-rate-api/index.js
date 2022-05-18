import express, { text } from "express";
import fetch from 'node-fetch'
const app = express();
const port = 8080;

app.get('/',(req,res)=>{

    // console.log(api);
    const getApi = () => {
        return new Promise((resolve,reject)=>{
            const api = fetch('https://v6.exchangerate-api.com/v6/a789f791dd126d85c5f0981b/latest/USD')
            .then(res => res.json())
            // const {conversion_rates} = api
            // resolve(conversion_rates)
            const {conversion_rates} = api
            resolve(conversion_rates)
        })

    }
    getApi().then((object)=>{console.log(object);})
})
app.listen(port)