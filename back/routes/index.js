const express = require("express");
const accountsRouter = require("./accounts")
const router = express.Router();
const transactionsRouter = require("./transactions");
const userRouter = require("./users");
const agentRouter = require("./agents");


router.use("/accounts",accountsRouter);
router.use("/transactions", transactionsRouter);
router.use("/users", userRouter);
router.use("/agents", agentRouter);

module.exports = router;
