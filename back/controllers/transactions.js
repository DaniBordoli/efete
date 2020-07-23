const { Transaction, Agent } = require("../models/index");
const { SendTransaction } = require("../controllers/nodemailer");

const findAllTransactions = (req, res) => {
  Transaction.find()
    .then((transactions) => res.send(transactions))
    .catch((err) => console.log(err));
};

const findAllUserTransactions = (req, res) => {
  Transaction.find({ user: req.params.id })
    .populate("user")
    .populate("agent")
    .populate({
      path: "originAccount",
      populate: {
        path: "nameEntity",
      },
    })
    .populate("destinationAccount")
    .then((lista) => {
      return res.json(lista);
    });
};

const findAllAgentTransactions = (req, res) => {
  Transaction.find({ agent: req.params.id })
    .populate("user")
    .populate("agent")
    .populate({
      path: "originAccount",
      populate: {
        path: "nameEntity",
      },
    })
    .populate("destinationAccount")
    .then((lista) => {res.json(lista);
    });
};

const findOneUserTransacion = (req, res) => {
  Transaction.findById(req.params.id)
    .populate("user")
    .populate("agent")
    .populate({
      path: "originAccount",
      populate: {
        path: "nameEntity",
      },
    })
    .then((transaction) => {
      res.json(transaction);
    });
};

const createTransaction = (req, res) => {
  Transaction.create(req.body).then((transaction) => {
    return Transaction.findById(transaction._id)
      .populate("user")
      .populate("agent")
      .populate({
        path: "originAccount",
        populate: {
          path: "nameEntity",
        },
      })
      .populate("destinationAccount")
      .then((transaction) => {
        SendTransaction(transaction);
        res.status(201).send(transaction);
      });
  });
};

module.exports = {
  findAllUserTransactions,
  findOneUserTransacion,
  findAllTransactions,
  findAllAgentTransactions,
  createTransaction,
};
