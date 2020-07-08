const express = require("express");
const { findAllUserTransactions } = require("../controllers/transactions");
const router = express.Router();

router.get("/transactions", findAllUserTransactions);
