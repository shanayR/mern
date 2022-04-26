import fs from 'fs';
import http from 'http';
import url from 'url'

let readFile = (req,res)=>{
    let myurl = url.parse(req.url,true)
    myurl = myurl.pathname
    console.log(myurl);
    if (req.url === myurl){
        myurl = myurl.slice(1)
        fs.readFile(myurl+'.html','utf8',(err,data)=>{
            if (err) {
                console.log(err);
            };
            res.end(data)
        })
    }
    // if (req.url === '/index'){
    //     // let redirect = myurl+'.html'
    //     fs.readFile('index.html','utf8',(err,data)=>{
    //         if (err) {
    //             console.log(err);
    //         };
    //         res.end(data)
    //     })
    // }
}

http.createServer(readFile).listen(8082)