
const renderForm = (req,res)=>{
    res.render('add')
}

const postForm = (req,res)=>{
    client.connect( (err) => {
        if (err) throw err;
        const users = client.db("testdb").collection("users");
        users.insertOne(req.body,(err,result) => {
            if (err) throw err;
            if(result.acknowledged){
                console.log(result)
            }else{console.log("error");}
        })
        res.redirect('/')
    })
}

export {renderForm , postForm}