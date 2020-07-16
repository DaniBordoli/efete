const express = require("express");
const router = express.Router();
const {
  editProfileAgent,
  editDailyAmount,
  changeDailyAmount,
  getAgent,
} = require("../controllers/agents");

router.patch("/editprofile", editProfileAgent);
router.patch("/editdailyamount", editDailyAmount);
router.patch("/transaction", changeDailyAmount);
router.get("/:id", getAgent);

module.exports = router;
