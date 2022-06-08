import express from "express";
import { renderForm,createUser,updateUser,updateForm,homeView,deleteUser } from "../controller/controller.js";

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
// middleware that is specific to this router

router.get('/',homeView)
router.get('/add', renderForm)
router.post('/add', createUser)
router.get('/update/:id',updateForm)
router.post('/update/:id',updateUser)
router.get('/delete/:id',deleteUser)
  
 export {router}