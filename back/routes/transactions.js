const express = require("express");
const router = express.Router();

const {
  findAllUserTransactions,
  findOneUserTransacion,
  findAllAgentTransactions,
  findAllTransactions
} = require("../controllers/transactions");

router.get('/', findAllTransactions)
router.get("/:agent", findAllAgentTransactions)
router.get("/user/:id", findOneUserTransacion);
router.get("/user", findAllUserTransactions);

module.exports = router;
