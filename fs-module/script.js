import fs from "fs";
// fs.rename('index.js','script.js', err => {
//     if (err) throw err;
//     console.log('file renamed');
// })

// fs.mkdir("demo",(err)=>{
//     if (err) throw err;
//     console.log("folder created successfully");
// })

// fs.writeFile('demo.txt',"hey",(err)=>{
//     if (err) throw err;
//     console.log("file created");
// })

fs.readdir("../",(err,files)=>{
    if (err) throw err;
    // for (let i = 0; i < 3; i++) {
    //     console.log(files[i]);;
        
    // }
    files.slice(-3).forEach(file => {
        console.log(file); 
    })
})