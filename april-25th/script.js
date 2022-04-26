import fs from 'fs'
import http from 'http'

  let writeServer = (req,res) => {
    // let readThis = fs.createReadStream('form.html',(err, data) => {
    //   if (err) {
    //     console.error(err);
    //   }
      
    //   return data;
    // })
    let readThis = fs.createReadStream('form.html','utf8')
    let writeStream = fs.createWriteStream('./output');
    
  
    // This pipes the POST data to the file
    req.pipe(writeStream);
    
    // After all the data is saved, respond with a simple html form so they can post more data
    // req.on('end', function () {
    //   res.writeHead(200,{"content-type":"text/html"});
    //   res.end('<form method="POST"><input name="tesst" type="text"/><input type="submit"></form>');
    // });
  
    // This is here incase any errors occur
    writeStream.on('error', function (err) {
      console.log(err);
    });
    res.end()
  } 

  http.createServer(writeServer).listen(8080)