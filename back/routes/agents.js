const express = require("express");
const router = express.Router();
const {
  editProfileAgent,
  editDailyAmount,
  getAgent,
} = require("../controllers/agents");

router.patch("/editprofile", editProfileAgent);
router.patch("/editdailyamount", editDailyAmount);
router.get("/:id", getAgent);

module.exports = router;
