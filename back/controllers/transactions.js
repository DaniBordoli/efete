const { Transaction } = require("../models/index");

const findAllUserTransactions = (req, res) => {
  Transaction.find({ user: req.user.id })
    .populate("user")
    .populate("agent")
    .populate("originAccount")
    .populate("destinationAccount")
    .then((lista) => res.json(lista));
};

const findOneUserTransacion = (req, res) => {
  Transaction.findById(req.params.id)
    .populate("user")
    .populate("agent")
    .then((transaction) => res.json(transaction));
};

module.exports = { findAllUserTransactions, findOneUserTransacion };
