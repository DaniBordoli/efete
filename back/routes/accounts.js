const express = require("express");
const router = express.Router();
const AccountsController = require("../controllers/accounts");

router.get("/user/:id", AccountsController.findById);
router.get("/:id", AccountsController.findAll);
router.post("/", AccountsController.createAccount);
router.delete("/:id/:userId", AccountsController.deleteById);

module.exports = router;
