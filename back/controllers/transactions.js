const { Transaction, Agent } = require("../models/index");

const findAllTransactions=(req,res ) =>{
  Transaction.find()
  .then(transactions=> res.send (transactions))
  .catch(err => console.log(err))
}

const findAllUserTransactions = (req, res) => {
  Transaction.find({ user: req.user.id })
    .populate("user")
    .populate("agent")
    .populate("originAccount")
    .populate("destinationAccount")
    .then((lista) => res.json(lista));
};

const findAllAgentTransactions = (req, res) => {
  console.log('REQ', req.params)
  let idAgent = req.params.agent
  Transaction.find({ agent: idAgent}) 
   .populate("user")
   .populate("agent")
   .populate("originAccount")
   .populate("destinationAccount")
   .then((lista) => res.json(lista));
}

const findOneUserTransacion = (req, res) => {
  Transaction.findById(req.params.id)
    .populate("user")
    .populate("agent")
    .then((transaction) => res.json(transaction));
};

module.exports = { findAllUserTransactions, findOneUserTransacion,findAllAgentTransactions , findAllTransactions};
