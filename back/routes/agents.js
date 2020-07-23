const express = require("express");
const router = express.Router();
const {
  editProfileAgent,
  editDailyAmount,
  createAgent,
  getAllUsers,
  getAgent,
  changeDailyAmount,
  
} = require("../controllers/agents");

router.patch("/editprofile", editProfileAgent);
router.patch("/editdailyamount", editDailyAmount);
router.patch("/transaction", changeDailyAmount);
router.post("/createagent", createAgent);
router.get("/", getAllUsers);
router.get("/:id", getAgent);

module.exports = router;
