import  express  from "express";
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    let user = {
        name : "Alex",
        salary : 5000,
        bio : "xyz"
    }
    const getSalary = ()=> {
        
        return new Promise((resolve,reject)=>{
            resolve(user.salary)
        })
    }
    const getName = ()=> {
        return new Promise((resolve,reject)=>{
            resolve(user.name)
        })
    }
    const getMessage = (name)=> {
        return new Promise((resolve,reject)=>{
            resolve(`${name},salary sent`)
        })
    }
    getSalary().then((salary)=>{
        console.log(salary)
        return getName()
    }).then((name)=>{
        console.log(name)
        return getMessage(name)
    }).then((message)=>{
        console.log(message)
    })
})
app.listen(port,()=>{console.log(`server listening on ${port}`)})