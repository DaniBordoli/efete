require("./config/db");
const express = require("express");
const app = express();
const LocalStrategy = require('passport-local').Strategy;
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("./config/passportLocal");
const router = require("./routes/index");
const {User}= require('./models/index')
const cors = require("cors");


/* require("./config/facebookConfig"); */

app.use(cors());

app.use(
  session({
    secret: "efete",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "/public")));
app.use(morgan("dev"));

//Body Parser
app.use(express.json());
app.use(express.urlencoded());

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


passport.use(
  new LocalStrategy({usernameField:'username' ,passwordField:"password"},
  function (username, password, done) {
    User.findOne({username:username})
    .then(user => {
      if(!user){
        return done(null,false,{message:'incorrect username'})
      }
      if (!user.validatePassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    })
    .catch(done)
  })
)


passport.serializeUser(function(user, done) {
  console.log("ENTRE A SEREALIZE:" , user)
  done(null, user.id);
});

  
passport.deserializeUser(function(id, done) {
  console.log("ENTRE A DESEREALIZE:" , id)
    User.findById(id).
    then(user=>done(user))
    .catch(err=>done(err))
})


app.use("/api", router);

//ERROR MIDDLEWARE
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

app.listen(1337, console.log("Escuchando el puerto 1337"));

module.exports = app;
