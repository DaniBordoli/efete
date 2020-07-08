const express = require("express");
const router = express.Router();
const transactionsRouter = require("./transactions");
const userRouter = require("./users");
const agentRouter = require("./agents");

router.use("/transactions", transactionsRouter);
router.use("/users", userRouter);
router.use("/agents", agentRouter);

module.exports = router;
