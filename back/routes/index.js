const express = require("express");
const  transactionsRouter  = require("./transactions");
const router = express.Router();

router.use("/transactions", transactionsRouter);

module.exports = router


