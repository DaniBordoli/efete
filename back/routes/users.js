const express = require("express");
const router = express.Router();
const passport = require("passport");
const {userRegister,userLogin,userLogout}  = require("../controllers/users");



router.post('/register',userRegister)

router.post('/login', passport.authenticate("local"),userLogin);
  
router.post('/logout', userLogout);


module.exports = router;