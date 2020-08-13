const express = require("express");
const router = express.Router();
const {
  createSharedAgent,
  findAllUserSharedAgents,
  deleteSharedAgent,
  editAccess,
  removeAccess,
  findAllAgentSharedUsers,
} = require("../controllers/sharedAgents");

router.post("/", createSharedAgent);
router.get("/access/:id", findAllAgentSharedUsers);
router.get("/:username", findAllUserSharedAgents);
router.delete("/removeAccess/:username/:agent", removeAccess);
router.delete("/:id/:username", deleteSharedAgent);
router.patch("/", editAccess);

module.exports = router;
