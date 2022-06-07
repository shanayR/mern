import express from "express";
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
  
router.get('/add', (req, res) => {
  res.render('add')
})
  
  
 export {router}