import fs from 'fs'
import http from 'http'
http.createServer(function(req, res) {
    // This opens up the writeable stream to `output`
    let writeStream = fs.createWriteStream('./output');
    let readThis = fs.readFile('form.html')
  
    // This pipes the POST data to the file
    req.pipe(writeStream);
  
    // After all the data is saved, respond with a simple html form so they can post more data
    req.on('end', function () {
      res.writeHead(200,{"content-type":"text/html"});
      res.end('readThis');
    });
  
    // This is here incase any errors occur
    writeStream.on('error', function (err) {
      console.log(err);
    });
  }).listen(8080);