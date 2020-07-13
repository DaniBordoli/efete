const express = require("express");
const router = express.Router();
const {findAllAgentTransactions} =  require ("../controllers/transactions")

router.get("/:agent", findAllAgentTransactions)

module.exports = router

