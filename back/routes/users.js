const express = require("express");
const router = express.Router();
const { editProfileUser
   
} = require("../controllers/users");

router.patch("/:id/editprofile", editProfileUser);


module.exports = router;