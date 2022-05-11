const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("<h1>Hi there, welcome to your app</h1>");
});

const textParser = express.text();

app.post("/some-route", textParser, (req, res) => {
  res.send(req.body)
});

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
