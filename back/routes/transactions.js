const express = require("express");
const router = express.Router();

const {
  findAllUserTransactions,
  findOneUserTransacion,
  // findAllAgentTransactions,
  findAllTransactions,
  createTransaction,
} = require("../controllers/transactions");

router.get("/", findAllTransactions);
router.get("/:id", findAllUserTransactions);
// router.get("/", findAllAgentTransactions)
router.get("/user/:id", findOneUserTransacion);
router.post("/", createTransaction);

module.exports = router;
