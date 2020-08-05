const express = require("express");
const router = express.Router();
const AccountsController = require("../controllers/accounts");

router.get("/user/:id", AccountsController.findById);
router.get("/main/:userId", AccountsController.findMainAccount);
router.get("/:id", AccountsController.findAll);
router.patch("/:id/:userId/delete", AccountsController.deleteById);
router.patch("/main/:id", AccountsController.deleteMainAccount);

router.patch("/:id/:userId", AccountsController.setMainAccount);
router.post("/", AccountsController.createAccount);

module.exports = router;
