import path from 'path'
import http from 'http'
import EventEmitter from 'events'

let baseName = path.basename('https://nodejs.org/api/path.html#windows-vs-posix')
console.log(baseName);

// const createBody = (req,res) => {
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write('<h1>Hello</h1>');
//     res.end();
// }

// const server = http.createServer(createBody);
// server.listen('8080')

const emitEvent = new EventEmitter();
emitEvent.on('run',()=>{
    console.log(`event emit`);
});
emitEvent.emit('run')