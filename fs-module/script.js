import fs from "fs";
import { join } from "path";
// fs.rename('index.js','script.js', err => {
//     if (err) throw err;
//     console.log('file renamed');
// })

// fs.mkdir("demo",(err)=>{
//     if (err) throw err;
//     console.log("folder created successfully");
// })

fs.writeFile('demo.txt',"hey",(err)=>{
    if (err) throw err;
    console.log("file created");
})