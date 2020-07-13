const express = require("express");
const router = express.Router();
const { editProfileAgent,
    editDailyAmount,

} = require("../controllers/agents");

router.patch("/:id/editprofile", editProfileAgent);
router.patch("/:id/editdailyamount", editDailyAmount);


module.exports = router;