const express = require("express");
const router = express.Router();
const BanksController = require("../controllers/banks");

router.get("/", BanksController.findAll);

module.exports = router;

