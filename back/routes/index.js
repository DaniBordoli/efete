const express = require("express");
const accountsRouter = require("./accounts");
const router = express.Router();
const transactionsRouter = require("./transactions");
const userRouter = require("./users");
const agentRouter = require("./agents");
const pdfRouter = require("./createPdf");

router.use("/accounts", accountsRouter);
router.use("/transactions", transactionsRouter);
router.use("/users", userRouter);
router.use("/agents", agentRouter);
router.use("/pdf", pdfRouter);

module.exports = router;
