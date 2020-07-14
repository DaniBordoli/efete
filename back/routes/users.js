const express = require("express");
const router = express.Router();
const passport = require("../config/passportLocal");
const { User } = require("../models/index");
const {
  userRegister,
  userLogin,
  userLogout,
  editProfileUser,
} = require("../controllers/users");

router.post("/register", userRegister);

router.get("/verify", function (req, res) {
  if (req.protocol + "://" + req.get("host") == "http://localhost:1337") {
    User.findById(req.query.id).then((user) => {
      if (user) {
        user.isVerified = true;
        user.save().then(() => {
          console.log("email is verified");

          res.redirect('http://localhost:19006/successRegister')
        });
      } else {
        console.log("email is not verified");
        res.send("<h1>Bad Request</h1>");
      }
    });
  } else {
    res.send("<h1>Request is from unknown source");
  }
});

router.post("/login", passport.authenticate("local"), userLogin);

router.post("/logout", userLogout);

router.patch("/:id/editprofile", editProfileUser);

module.exports = router;
