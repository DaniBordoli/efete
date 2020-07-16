const express = require("express");
const router = express.Router();
const {
  editProfileAgent,
  editDailyAmount,
  changeDailyAmount,
} = require("../controllers/agents");

router.patch("/editprofile", editProfileAgent);
router.patch("/editdailyamount", editDailyAmount);
router.patch("/transaction", changeDailyAmount);

module.exports = router;
