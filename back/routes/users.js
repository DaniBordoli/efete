const express = require("express");
const IP = require("../config");
const router = express.Router();
const passport = require("passport");
const { User } = require("../models/index");
const {
  userRegister,
  userLogin,
  userLogout,
  editProfileUser,
  userVerify,
  getAllUsers,
  setTcn,
  deleteUser,
} = require("../controllers/users");
const { SendTransaction } = require("../controllers/nodemailer");

router.post("/register", userRegister);

router.get("/verify", function (req, res) {
  if (req.protocol + "://" + req.get("host") == `http://${IP}:1337`) {
    User.findById(req.query.id).then((user) => {
      if (user) {
        user.isVerified = true;
        user.save().then(() => {
          console.log("email is verified");

          res.redirect(`http://${IP}:19006`);
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

router.get("/sendVerificationEmail/:id", userVerify);

router.post("/login", passport.authenticate("local"), userLogin);

router.post("/logout", userLogout);

router.patch("/editprofile", editProfileUser);

router.get("/", getAllUsers);

router.patch("/validateIdentity", setTcn);

router.patch("/:id/delete", deleteUser);

module.exports = router;
