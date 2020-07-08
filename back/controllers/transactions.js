const { Transaction } = require("../models/index");

const findAllUserTransactions = (req, res) => {
  Transaction.find({}).then((lista) => res.json(lista));
};

module.exports = { findAllUserTransactions };
