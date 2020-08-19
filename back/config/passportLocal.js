const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/index");

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    async (username, password, done) => {
      try {
        const user = await User.findOne({
          username: username,
          isEliminated: false,
        });
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        const passwordValidation = await user.validatePassword(password);
        if (!passwordValidation) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("ENTRA AL DESERIALIZE");
  User.findById(user._id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

module.exports = passport;
