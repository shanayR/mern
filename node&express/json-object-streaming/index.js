import http from 'http';

let streamObject = (req,res) => {
    let thisObject = {
        'ABC' : 'abc',
        'DEF' : 'def',
        'GHI' : 'ghi'
    }
    res.writeHead(200,{'content-type':'text/html'});
    res.write(`This is an object ${JSON.stringify(thisObject)}`)
    res.end()
    
}

http.createServer(streamObject).listen(8080);