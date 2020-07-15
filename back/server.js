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

/* require("./config/facebookConfig"); */

app.use(
  cors({
    methods: ["GET", "POST"],
    credentials: true,
    origin: true,
  })
);

app.use(cookieParser());
app.use(
  session({
    secret: "efete",
    // resave: true,
    // saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "/public")));
app.use(morgan("dev"));

//Body Parser
app.use(express.json());
app.use(express.urlencoded());

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

//ERROR MIDDLEWARE
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

app.listen(1337, console.log("Escuchando el puerto 1337"));

module.exports = app;
