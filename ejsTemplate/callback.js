import express from 'express'
const app = express();
const port = 8080;

let callback = (a) => {
    console.log("running call back function");
}

let xyz = (x,call) => {
    console.log(x);
    // callback();
}

xyz("blah",callback())