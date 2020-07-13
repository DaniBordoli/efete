require("./config/db");
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = require("./routes/index");
const cors = require("cors");
const passport = require("./config/passportLocal");

<<<<<<< HEAD
// require("./config/facebookConfig");
=======
/* require("./config/facebookConfig"); */
>>>>>>> 84f5ca3dd06e0100fdf1d6bb29f2d38d63b4a16e

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

<<<<<<< HEAD
=======



>>>>>>> 84f5ca3dd06e0100fdf1d6bb29f2d38d63b4a16e
app.use("/api", router);

//ERROR MIDDLEWARE
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

app.listen(1337, console.log("Escuchando el puerto 1337"));

module.exports = app;
