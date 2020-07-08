const express = require("express");
const router = express.Router();
const AccountsController = require("../controllers/accounts");

// ruta = /api/accounts

router.get("/", AccountsController.findAll);
router.post("/", AccountsController.createAccount);




module.exports = router;