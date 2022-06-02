import express from "express";
import {router} from "./routes/routes.js";

const app = express();
app.use('/add', router);

app.listen(8080)