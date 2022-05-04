import fs from 'fs';
import http from 'http';
import path from 'path';
const __dirname = path.resolve();

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

// http.createServer(stream).listen(8080)

let stream2 = (req,res) => {
  let writeStream = fs.createWriteStream('./output2');
  // let readThis = fs.readFile(__dirname+'form.html',(err,data)=>{
  fs.readFile(__dirname+'/form.html',(err,data)=>{
    if (err){
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200,{"content-type":"text/html"});
    res.end(data)
  });
  req.pipe(writeStream);
}
http.createServer(stream2).listen(8080)