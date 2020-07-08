const express = require("express");
const router = express.Router();
const passport = require('../config/passportLocal');
const {userRegister,userLogin,userLogout,editProfileUser}  = require("../controllers/users");



router.post('/register',userRegister)

router.post('/login', passport.authenticate("local"),userLogin);
  
router.post('/logout', userLogout);

router.patch("/:id/editprofile", editProfileUser);


module.exports = router;