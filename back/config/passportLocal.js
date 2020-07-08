const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/index");

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username })
      .then((user) => {
        if (!user) {
          return done(null, false, {
            message: "usuario incorrecto",
          });
        }
        if (!user.validatePassword(password)) {
          return done(null, false, {
            message: "contraseña incorrecta",
          });
        }
        return done(null, user);
      })
      .catch(done);
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  User.findById(user.id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

module.exports = passport;
