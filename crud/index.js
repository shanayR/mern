import express from "express";
import {router} from "./routes/routes.js";
import path from 'path';

// const routerr = router;
const port = 8080;
const app = express();
const __dirname = path.resolve();
app.use('/static', express.static(path.join(__dirname,'public')));
app.use('/add', router);

app.listen(port)