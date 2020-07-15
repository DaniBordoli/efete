const express = require("express");
const router = express.Router();
const AccountsController = require("../controllers/accounts");

// ruta = /api/accounts

// router.get("/", AccountsController.findAll);
// router.post("/", AccountsController.createAccount);
// router.delete("/:id", AccountsController.deleteById)
// router.get("/:id", AccountsController.findById)


router.get("/user/:id", AccountsController.findById);
router.get("/:id", AccountsController.findAll);
router.post("/", AccountsController.createAccount);
router.delete("/:id", AccountsController.deleteById);

module.exports = router;