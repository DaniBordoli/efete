const express = require("express");
const router = express.Router();
const { editProfileAgent, editDailyAmount } = require("../controllers/agents");

router.patch("/editprofile", editProfileAgent);
router.patch("/editdailyamount", editDailyAmount);

module.exports = router;
