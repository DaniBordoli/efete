const express = require("express");
const router = express.Router();
const { editProfileAgent, editDailyAmount, createAgent, getAllUsers, getAgent } = require("../controllers/agents");

router.patch("/editprofile", editProfileAgent);
router.patch("/editdailyamount", editDailyAmount);
router.post('/createagent', createAgent)
router.get('/', getAllUsers)
router.get("/:id", getAgent);

module.exports = router;
