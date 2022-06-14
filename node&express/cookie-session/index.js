import express from 'express';
import cookieSession from 'cookie-session';

const app = express();
const port = 8080;
app.use(cookieSession({
    name: 'sesssion',
    keys: ['key1'],
  
    // Cookie Options
    maxAge: 5000 // 5 seconds
  }))

  app.get('/',(req,res)=>{
      req.session.views = (req.session.views || 0) + 1
      res.send(req.session.views + ' views')
  })
  app.get('/destroy',(req,res)=>{
    req.session = null;
    
    res.send('session destroyed')

  })
  app.listen(port)