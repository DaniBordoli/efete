const express = require("express");
const accountsRouter = require("./accounts")
const router = express.Router();



router.use("/accounts",accountsRouter);


module.exports = router;
