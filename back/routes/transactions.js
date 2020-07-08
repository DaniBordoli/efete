const express = require("express");
const router = express.Router();
const {
  findAllUserTransactions,
  findOneUserTransacion,
} = require("../controllers/transactions");

router.get("/user/:id", findOneUserTransacion);
router.get("/user", findAllUserTransactions);

module.exports = router;
