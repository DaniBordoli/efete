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
  userValidation,
  editUserTransactions,
} = require("../controllers/users");
const { SendTransaction } = require("../controllers/nodemailer");

router.post("/register", userRegister);

router.get("/verify", function (req, res) {
  User.findOne({ _id: req.query.id, verifCode: req.query.code }).then(
    (user) => {
      if (user) {
        user.isVerified = true;
        user.save().then((user) => {
          console.log("email is verified");
          res.send(user);
        });
      } else {
        console.log("email is not verified");
        res.sendStatus(401);
      }
    }
  );
});

router.get("/sendVerificationEmail/:id", userVerify);

router.post("/login", passport.authenticate("local"), userLogin);

router.post("/logout", userLogout);

router.patch("/editprofile", editProfileUser);

router.get("/", getAllUsers);

router.patch("/validateIdentity", setTcn);

router.patch("/userValidation", userValidation);

router.patch("/:id/delete", deleteUser);
router.patch("/transactionsmade", editUserTransactions);

module.exports = router;
