import fs from 'fs';
import http from 'http';
import url from 'url'

let readFile = (req,res)=>{
    let myurl = url.parse(req.url,true)
    console.log(myurl.pathname);
    if (req.url === myurl.pathname){
        fs.readFile(myurl.pathname+'.html','utf8',(err,data)=>{
            if (err) throw err;
            res.end(data)
        })
    }
}

http.createServer(readFile).listen(8080)