import express from "express"
import session from "express-session"
import passport from "passport"
import  FacebookStrategy from "passport-facebook"


const app = express()

const port = 8080
app.use(session({ secret: 'SECRET' }));
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: 1004931146867442,
    clientSecret: "1f2eb271956dbff6b691169e889b7240",
    callbackURL: "http://localhost:8080/auth/facebook/callback",
    // passReqToCallback : true,
    profileFields: ['id', 'emails', 'name'] 
  },
function(accessToken, refreshToken, profile, cb) {
    // console.log(profile)
    return 

  }
));
app.get('/',(req,res)=>{
  res.send('home')
})
app.get('/auth/facebook',
  passport.authenticate('facebook'));


app.get('/auth/facebook/callback',passport.authenticate('facebook', {scope:['email'] }),(req, res,body)=> {
    // Successful authentication, redirect home.
    res.redirect('/');
    // console.log(body.email);
  });
app.listen(port)
