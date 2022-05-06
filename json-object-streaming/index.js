import fs from 'fs';
import http from 'http';

// let  stream = (req,res) => {
//   let writeStream = fs.createWriteStream('./output');
//   req.pipe(writeStream);
//   req.on('end',()=>{
//     res.writeHead(200,{"content-type":"text/html"});
//     res.end('<form method="POST">NAME:<input name="demo" /><input type="submit"></form>')
//   })
//   writeStream.on('error', function (err) {
//     console.log(err);
//   });
// }

let streamObject = (req,res) => {
    let thisObject = {
        'ABC' : 'abc',
        'DEF' : 'def',
        'GHI' : 'ghi'
    }
    req.on('end',()=>{
        res.writeHead(200,{'content-type':'text/html'});
        res.end(JSON.stringify(thisObject))
    })
}

http.createServer(streamObject).listen(8080);