const express = require("express");
const router = express.Router();

const {
  findAllUserTransactions,
  findOneUserTransacion,
  // findAllAgentTransactions,
  findAllTransactions
} = require("../controllers/transactions");

router.get('/', findAllTransactions)
router.get("/:id", findAllUserTransactions);
// router.get("/", findAllAgentTransactions)
router.get("/user/:id", findOneUserTransacion);


module.exports = router;
