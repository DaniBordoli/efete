const { Transaction, Agent } = require("../models/index");

const findAllTransactions=(req,res ) =>{
  Transaction.find()
  .then(transactions=> res.send (transactions))
  .catch(err => console.log(err))
}

const findAllUserTransactions = (req, res) => {
  // console.log("REQ User", req.params)
  Transaction.find({ user: req.params.id })
    .populate("user")
    .populate("agent")
    .populate("originAccount")
    .populate("destinationAccount")
    .then((lista) => {console.log('Lista', lista)
      return res.json(lista)});
};

// const findAllAgentTransactions = (req, res) => {
//   console.log('REQ AGENT', req.params)
//   Transaction.find({ agent: req.params.agent}) 
//    .populate("user")
//    .populate("agent")
//    .populate("originAccount")
//    .populate("destinationAccount")
//    .then((lista) => res.json(lista));
// }

const findOneUserTransacion = (req, res) => {

  Transaction.findById(req.params.id)
    .populate("user")
    .populate("agent")
    .then((transaction) => {console.log('TRANSACTION USER SOLO', transaction)
    res.json(transaction)});
};

module.exports = { findAllUserTransactions, findOneUserTransacion , findAllTransactions};
