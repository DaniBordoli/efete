const { Transaction, Agent } = require("../models/index");


const findAllUserTransactions = (req, res) => {
  Transaction.find({}).then((lista) => res.json(lista));
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



module.exports = { findAllUserTransactions, findAllAgentTransactions };
