const express = require("express");
const router = express.Router();
const {
  editProfileAgent,
  editDailyAmount,
  createAgent,
  getAllUsers,
  getAgent,
  changeDailyAmount,
  findAllAgentsUser,
  deleteAgent
  
} = require("../controllers/agents");


router.patch("/editprofile", editProfileAgent);
router.patch("/editdailyamount", editDailyAmount);
router.patch("/transaction", changeDailyAmount);
router.post("/createagent", createAgent);
router.get ("/user/:id", findAllAgentsUser);
router.get("/:id", getAgent);
router.get("/", getAllUsers);
router.delete ("/:id/:userId",deleteAgent)


module.exports = router;
