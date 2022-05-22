import express from "express";
import request from "request";
const app = express();
const port = 8080;

app.get('/:id(\\d+)',(req,res)=>{

    const getApi = ()=>{
        return new Promise((resolve,reject)=>{
            const api = request('https://v6.exchangerate-api.com/v6/a789f791dd126d85c5f0981b/latest/USD',{ json: true }, (err, res, body)=>{
                if (err) { return console.log(err); }
                // console.log(body);
                // res.send(body);
                const {conversion_rates} = body
                // const conversionRates = body;
                resolve(conversion_rates)
                // reject(console.log('write an integer'))
            })
        })
    }

    getApi().then((conversion_rates)=>{
            let usd = req.params.id;
            const pkr = conversion_rates.PKR;
            let usd_to_pkr = usd*pkr;
            let result = `${usd} are RS ${usd_to_pkr}`
            console.log(result);
            res.send(result)
            return
        })
        
        
    // trying async await 
    // async function asyncCall() {
        
    //     console.log('calling');
    //     const conversion = await getApi();
    //     let usd = req.params.id;
    //     const pkr = conversion.PKR;
    //     let usd_to_pkr = usd*pkr;
    //     let result = `$${usd} are RS ${usd_to_pkr}`
    //     console.log(result);
    //     res.send(result);
    // }

    // asyncCall();

    
})

app.listen(port)