const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const agentRouter = require("./agents");

router.use("/users", userRouter);
router.use("/agents", agentRouter);

module.exports = router;
