import express from "express";
import { renderForm,createUser,updateUser,updateForm } from "../controller/controller.js";

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
// middleware that is specific to this router

  
router.get('/add', renderForm)
router.post('/add', createUser)
router.get('/update',updateForm)
router.post('/update',updateUser)
  
  
 export {router}